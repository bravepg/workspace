// The difference between components, their instances, and elements confuses many
// React beginners

// An element is a plain object describing a component instance or DOM node and its desired properties.
// An element is not an actual instance. it just tells what you want to see on screen.

const DomElement = {
  type: 'button',
  props: {
    className: 'button',
    children: {
      type: 'b',
      props: {
        children: 'OK!',
      }
    }
  }
};

// An element describing a component is also a element, just like an element describing Dom node
const ComponentElement = {
  type: Button,
  props: {
    color: 'bule',
    children: 'ok!'
  }
};

// Components Encapsulte Element Trees
// They take the props as their input, and return the elements as their output
const Danger = ({ children }) => ({
  type: Button,
  props: {
    color: 'red',
    children,
  }
});

// === React create, update, and destory instances(only class component). We describe them with elements we return from the components ===
