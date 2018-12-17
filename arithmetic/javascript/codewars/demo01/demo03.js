function accum(str) {
    return Array.from(str.toLowerCase()).reduce((value, code, index) => {
        let temp = '';
        Array.from(new Array(index)).map(() => 
            temp += code;
        );
        return value += `${code.toUpperCase()}${temp}-`;
    }, '').slice(0, -1);
}

function accum(str) {
    return Array.from(str.toLowerCase()).reduce((accu, code, index) => {
        accu.push(code.toUpperCase().padEnd(index + 1, code));
        return accu;
    }, []).join('-');
}