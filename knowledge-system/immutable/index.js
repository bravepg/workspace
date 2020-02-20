const { Map } = require('immutable');

let a = Map({
  select: 'users',
  filter: Map({ name: 'Cam' }),
});

let b = a.set('select', 'people');

console.log(a === b);
console.log(a.get('filter') === b.get('filter'));

let c = a.set('filter', { name: 'Anne' });

const d = a.get('filter').set('name', 'Michael');

console.log(a.get('filter'), b.get('filter'), c.get('filter'), d);
