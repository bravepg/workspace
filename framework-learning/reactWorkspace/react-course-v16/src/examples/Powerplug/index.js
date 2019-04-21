import React from 'react';
import Toggle from './Toggle';
import immutagen from "immutagen";
const gen = immutagen(function*() {
  yield 1;
  yield 2;
  return 3;
})(); // { value: 1, next: [function] }

console.log(gen); // { value: 2, next: [function] }
console.log(gen.next()); // { value: 2, next: [function] }

console.log(gen.next().next()); // { value: 3, next: undefined }

class Powerplug extends React.Component {
  render() {
    return (
      <Toggle initial={true}>
      {({on, toggle}) => <button onClick={toggle}>the status is {on + 1}</button>}
      </Toggle>
    )
  }
}

export default Powerplug;