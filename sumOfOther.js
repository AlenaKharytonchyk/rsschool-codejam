function sumofOther(arr) {
    const arrNew = [];
    let elementNew;
    for (let i = 0; i < arr.length; i++) {
        elementNew = arr.reduce(function (a, b,index) {
            if (index===i) {
                return a;
            }
            return a + b;
        }, 0);

        arrNew.push(elementNew);
    }
    return arrNew;
}