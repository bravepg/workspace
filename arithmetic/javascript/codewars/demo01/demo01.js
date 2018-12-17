function accum(str) {
    let temp = '';
    for (let i = 0; i < str.length; i++) {
        let code = str.charAt(i).toLowerCase();
        let upperCode = code.toUpperCase();
        for (let j = 0; j < i; j++) {
            upperCode += code;
        }
        temp += `${upperCode}-`;
    }
    return temp.slice(0, -1);
}