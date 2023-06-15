function asd(string) {
    return [...string].reduce((acc, el) => {
        return acc + el.charCodeAt()
    }, 0)
    /*
    return string.split('').reduce((acc, el) => {
        return acc += el.charCodeAt()
    }, 0) */
}

function qwe() {
    console.log(asd('aa')); 
}

qwe();
