function accum(str) {
    return str.toLowerCase().replace(/(\w)/g, (m, value, index) => {
        let temp = "";
        Array.from(new Array(index)).map(() => {
            temp += value;
        });
        return `${value.toUpperCase()}${temp}-`;
    }).slice(0, -1);
}