function asd(parenStr) {
    let count = 0;

    for(const element of parenStr) {
        if(element === '(') {
            count++;
        } else {
            count--;
        }

        if(count === -1) {
            return false;
        }
    }

    return count === 0;


    let result = 0;
    let arr = parenStr.split('');

    for(const el of arr) {
        if(el === '(') {
            result ++;
        } else {
            result--;
        }

        if(result === -1) {
            return false;
        }
    }

    return result != 0 ? false : true;
}

function qwe() {
    console.log(asd('()(()))')); 
}

qwe();
