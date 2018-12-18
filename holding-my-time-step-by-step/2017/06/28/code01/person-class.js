class Person {
    constructor(name) {
        this._name = name;
        this.greeting = 'Hey there';
    }

    setName(strName) {
        this._name = strName;
    }

    getName() {
        return this._getPrefixedName('Name');
    }

    getGreetingCallback() {
        const { greeting, _name } = this;
        return (subject) => `${greeting} ${subject}, I'm ${_name}`;
    }

    _getPrefixedName(prefix) {
        return `${prefix}: ${this._name}`;
    }
}

const person = new Person('Jane Doe');
person.setName('Sarah Doe');
person.greeting = 'Hello';
console.log(person.getName());   // Name: Sarah Doe
console.log(person.getGreetingCallback()('Jeff'));   // Hello Jeff, I'm Sarah Doe

const getGreeting = person.getGreetingCallback;
console.log(getGreeting());    // TypeError: Cannot match against 'undefined' or 'null'.