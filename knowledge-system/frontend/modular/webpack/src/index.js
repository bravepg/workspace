import _ from 'lodash';
// import './dark.less';

const flag = localStorage.getItem('flag');

async function getComponent() {
  if (flag) {
    await import('./dark.less');
  } else {
    await import('./light.less');
  }
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  return element;
}

getComponent().then((element) => {
  document.body.appendChild(element);
});
