/*
* @Author: gaopeng
* @Date:   2017-06-28 13:44:03
* @Last Modified by:   gaopeng
* @Last Modified time: 2017-06-28 14:27:42
*/

'use strict';
function setName(person, strName) {
    return Object.assign({}, person, {name: strName});
}

function setGreeting(person, newGreeting) {
    return Object.assign({}, person, {greeting: newGreeting});
}

function getName(person) {
    return getPrefixedName('Name', person.name);
}

function getPrefixedName(prefix, name) {
    return `${prefix}: ${name}`
}

function getGreetingCallback(person) {
    const {greeting, name} = person;
    return (subject) => `${greeting} ${subject}, I'm ${name}`;
}

const person = {greeting: 'Hey there!', name: 'Jane Doe'};
const person2 = setName(person, 'Sarah Doe');
const person3 = setGreeting(person2, 'Hello');
console.log(getName(person3));
console.log(getGreetingCallback(person3)('Jeff'));
