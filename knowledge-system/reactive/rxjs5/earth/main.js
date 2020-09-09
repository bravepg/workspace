const QUAKE_URL = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojsonp';
const identity = x => x;

// const loadJSONP = (url) => {
  // const script = document.createElement('script');
  // script.type = 'text/javascript';
  // script.src = url;

//   const head = document.getElementsByTagName('head')[0];
//   head.appendChild(script);
// }
const loadJSONP = (settings) => {
  const { url, callbackName } = settings;

  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;

  window[callbackName] = data => {
    window[callbackName].data = data;
  }

  return Rx.Observable.create((observer) => {
    const handler = (e) => {
      const status = e.type === 'error' ? 400 : 200;
      const response = window[callbackName].data;

      if (status === 200) {
        observer.next({
          status,
          responseType: 'jsonp',
          response,
          originalEvent: e,
        });

        observer.complete();
      } else {
        observer.error({
          type: 'error',
          status,
          originalEvent: e,
        });
      }
    };
    script.onload = script.onreadystatechanged = script.error = handler;
  
    const head = document.getElementsByTagName('head')[0];
    head.insertBefore(script, head.firstChild);
  });
}

const map = L.map('mapid').setView([33.858631, -118.279602], 7);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);

// const quake$ = Rx.Observable.create(observer => {
//   console.log('observer.next', observer.next);
//   window.eqfeed_callback = response => {
//     response.features.forEach((item) => {
//       observer.next(item);
//     });
//   };
//   loadScript(QUAKE_URL);
// });
// quake$.subscribe(quake => {
//   const coords = quake.geometry.coordinates;
//   const size = quake.properties.mag * 10000;
//   L.circle([coords[1], coords[0]], size).addTo(map);
// });

// const quake$ = Rx.Observable.create(observer => {
//   window.eqfeed_callback = (response) => {
//     observer.next(response);
//     observer.complete();
//   };
//   loadScript(QUAKE_URL);
// }).flatMap((dataset) => {
//   return Rx.Observable.from(dataset.features);
// });

const codeLayers = {};
const quakeLayer = L.layerGroup([]).addTo(map);
const table = document.getElementById('quakes_info');

function getRowFromEvent(event) {
  return Rx.Observable.fromEvent(table, event)
    .filter(({ target }) => {
      return target.tagName === 'TD' && target.parentNode.id.length;
    })
    .pluck('target', 'parentNode')
    .distinctUntilChanged();
}

getRowFromEvent('mouseover').pairwise().subscribe(rows => {
  console.log('rows', rows);
  const prevCircle = quakeLayer.getLayer(codeLayers[rows[0].id]);
  const currCircle = quakeLayer.getLayer(codeLayers[rows[1].id]);

  prevCircle.setStyle({ color: '#0000ff' });
  currCircle.setStyle({ color: '#ff0000' });
});

getRowFromEvent('click').subscribe((row) => {
  const circle = quakeLayer.getLayer(codeLayers[row.id]);
  map.panTo(circle.getLatLng());
});

function initialize() {
  const quake$ = Rx.Observable.interval(5000)
    .flatMap(() => {
      return loadJSONP({
        url: QUAKE_URL,
        callbackName: 'eqfeed_callback'
      }).retry(3);
    })
    .flatMap((result) => {
      return Rx.Observable.from(result.response.features);
    })
    .distinct(quake => quake.properties.code)
    .share();


  quake$.subscribe(quake => {
    const coords = quake.geometry.coordinates;
    const size = quake.properties.mag * 10000;
    const circle = L.circle([coords[1], coords[0]], size).addTo(map);
    quakeLayer.addLayer(circle);
    codeLayers[quake.id] = quakeLayer.getLayerId(circle);
  });

  quake$.pluck('properties')
    .map(makeRow)
    .subscribe(fragment => {
      table.appendChild(fragment);
    });
}

function makeRow(props) {
  const row = document.createElement('tr');
  row.id = props.net + props.code;

  const time = new Date(props.time).toString();
  [props.place, props.mag, time].forEach(text => {
    const cell = document.createElement('td');
    cell.textContent = text;
    row.appendChild(cell);
  });
  return row;
}

Rx.Observable.fromEvent(document, 'DOMContentLoaded').subscribe(initialize);
