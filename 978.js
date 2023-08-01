function asd(n) {
    // return n > 0 ? [...Array(n+1)].map((_, index) => index--).reduce((acc, el) => acc + el) : 0;


    // if(n > 0) {
    //     let a = n;
    //     for(n; n > 1; n--) {
    //     a += n - 1;
    // }
    // return a;
    // }
    // return 0;


    // let a = 0;
    // while(n > 0) {
    //     a += n;
    //     n--;
    // }
    // return a;


    return n > 0 ? n * (n + 1) / 2 : 0;

    
};



function qwe() {
    console.log(asd(-9)); 
}

qwe();
