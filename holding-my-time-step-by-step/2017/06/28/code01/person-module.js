/*
* @Author: gaopeng
* @Date:   2017-06-28 14:47:45
* @Last Modified by:   gaopeng
* @Last Modified time: 2017-06-28 14:56:46
*/

'use strict';
function getPerson(initialName) {
    let name = initialName;
    const person = {
        setName(strName) {
            name = strName;
        },
        greeting: 'Hey there!',
        getName() {
            return getPrefixedName('Name');
        },
        getGreetingCallback() {
            const {greeting} = person;
            return (subject) => `${greeting} ${subject}, I'm ${name}`;
        }
    };
    function getPrefixedName(prefix) {
        return `${prefix}: ${name}`;
    }
    return person;
}

const person = getPerson('Jane Doe');
person.setName('Sarah Doe');
person.greeting = 'Hello';
console.log(person.getName());
console.log(person.getGreetingCallback()('Jeff'));