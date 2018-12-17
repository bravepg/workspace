const TEXT_ELEMENT = "TEXT ELEMENT";
const Didact = importFromBelow();
const randomLikes = () => Math.ceil(Math.random() * 100);

const stories = [
    { name: "Didact introduction", url: "http://bit.ly/2pX7HNn", likes: randomLikes() },
    // { name: "Rendering DOM elements ", url: "http://bit.ly/2qCOejH", likes: randomLikes() },
    // { name: "Element creation and JSX", url: "http://bit.ly/2qGbw8S", likes: randomLikes() },
    // { name: "Instances and reconciliation", url: "http://bit.ly/2q4A746", likes: randomLikes() },
    // { name: "Components and state", url: "http://bit.ly/2rE16nh", likes: randomLikes() }
];
const appElement = () => {
    return {
        type: "div",
        props: {
            children: [
                {
                    type: "ul",
                    props: {
                        children: stories.map(storyElement)
                    }
                }
            ]
        }
    }
};
function storyElement(story) {
    const buttonElement = {
        type: "button",
        props: {
            onClick: () => {handleClick(story)},
            children: [
                { type: "TEXT ELEMENT", props: { nodeValue: story.likes } },
                { type: "TEXT ELEMENT", props: { nodeValue: "❤️" } }
            ]
        }
    };
    const linkElement = {
        type: "a",
        props: {
            href: story.url,
            children: [{ type: "TEXT ELEMENT", props: { nodeValue: story.name } }]
        }
    };
  
    return {
        type: "li",
        props: {
            children: [buttonElement, linkElement]
        }
    };
}

function handleClick(story) {
    console.log('story', story);
    story.likes += 1;
    console.log('appElement()', appElement())
    Didact.render(appElement(), document.getElementById("app"));
}
console.log('appElement()', appElement()) 
Didact.render(appElement(), document.getElementById("app"));

function importFromBelow() {
    let rootInstance = null;
    function render(element, container) {
        // 旧的实例, 用于和新实例进行对比
        const prevInstance = rootInstance;
        const nextInstance = reconcile(container, prevInstance, element);
        // 把根实例设置为新的实例
        rootInstance = nextInstance;
    }

    function reconcile(parentDom, instance, element) {
        if (instance == null) {
            const newInstance = instantiate(element);
            parentDom.appendChild(newInstance.dom);
            return newInstance;
        } else if (element == null) {
            parentDom.removeChild(instance.dom);
            return null;
        } else if (instance.element.type === element.type) {
            // 如果两者的 type 相同, 则更新属性
            updateDomProperties(instance.dom, instance.element.props, element.props);
            // 比较子节点
            instance.childInstances = reconcileChildren(instance, element);
            instance.element = element;
            return instance;
        } else {
            const newInstance = instantiate(element);
            parentDom.replaceChild(newInstance.dom, instance.dom);
            return newInstance;
        }
    }

    /**
     * 比较子节点, 只能比较相同位置的, 如果是位置发生改变, 也无法进行 DOM 节点的重用
     * @param {*} instance 
     * @param {*} element 
     */
    function reconcileChildren(instance, element) {
        const dom = instance.dom;
        const childInstances = instance.childInstances;
        const nextChildElements = element.props.children || [];
        const newChildInstances = [];
        const count = Math.max(childInstances.length, nextChildElements.length);
        for (let i = 0; i < count; i++) {
            const childInstance = childInstances[i];
            const childElement = nextChildElements[i];
            const newChildInstance = reconcile(dom, childInstance, childElement);
            newChildInstances.push(newChildInstance);
        }
        return newChildInstances.filter(instance => instance != null);
    }

    function instantiate(element) {
        const { type, props } = element;
        // Create DOM element
        const isTextElement = type === "TEXT ELEMENT";
        const dom = isTextElement
            ? document.createTextNode("")
            : document.createElement(type);
        // Add event listeners
        // const isListener = name => name.startsWith("on");
        // Object.keys(props).filter(isListener).forEach(name => {
        //     const eventType = name.toLowerCase().substring(2);
        //     dom.addEventListener(eventType, props[name]);
        // });

        // // Set properties
        // const isAttribute = name => !isListener(name) && name != "children";
        // Object.keys(props).filter(isAttribute).forEach(name => {
        //     dom[name] = props[name];
        // });

        updateDomProperties(dom, [], props);

        // Instantiate and append children
        const childElements = props.children || [];
        const childInstances = childElements.map(instantiate);
        const childDoms = childInstances.map(childInstance => childInstance.dom);
        childDoms.forEach(childDom => dom.appendChild(childDom));

        const instance = { dom, element, childInstances };
        return instance;
    }

    function updateDomProperties(dom, preProps, nextProps) {
        const isEvent = name => name.startsWith("on");
        const isAttribute = name => !isEvent(name) && name !== "children";

        // Remove event listeners
        Object.keys(preProps).filter(isEvent).forEach(name => {
            const eventType = name.toLowerCase().substring(2);
            dom.removeEventListener(eventType, preProps[name]);
        });

        // Remove attributes
        Object.keys(preProps).filter(isAttribute).forEach(name => {
            dom[name] = null;
        });

        // Add event listeners
        Object.keys(nextProps).filter(isEvent).forEach(name => {
            const eventType = name.toLowerCase().substring(2);
            dom.addEventListener(eventType, nextProps[name]);
        });

        // Set attributes
        Object.keys(nextProps).filter(isAttribute).forEach(name => {
            dom[name] = nextProps[name];
        });
    }
    return {
        render
    }
}

function createElement(type, config, ...args) {
    const props = Object.assign({}, config);
    const hasChildren = args.length > 0;
    const rawChildren = hasChildren ? [].concat(...args) : [];
    props.children = rawChildren
        .filter(c => c != null && c!== false)
        .map(c => c instanceof Object ? c : createTextElement(c))
    // reduce 代替 filter 和 map
    // props.children = rawChildren.reduce((children, c) => {
    //     if (c != null && c!== false) {
    //         children.push(c instanceof Object ? c : createTextElement(c));
    //     }
    //     return children
    // }, []);
    return { type, props };
}

function createTextElement(value) {
    return createElement(TEXT_ELEMENT, { nodeValue: value });
}