/**
 * 步骤一：通过 script 引入 lodash
 * 这样做的坏处
 * 1. 不太好管理依赖(不可控), 如果顺序发生变化, 程序会无法运行
 * 2. 如果依赖没有在代码中被使用, 浏览器会进行不必要的下载
 * 3. 并且程序并不很明显地展示出依赖外部
 */
// function component() {
//     let element = document.createElement('div');

//     // Lodash, currently included via a script, is required for this line to work
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     return element;
// }

// document.body.appendChild(component());


import _ from 'lodash';
import './style.css';
import Avatar from './avatar.jpg';

function component() {
    let element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    var myIcon = new Image();
    myIcon.src = Avatar;
    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());