function wave(str) {
    newArray = [];
    for(let i = 0; i < str.length; i++) {
        newStr = '';
        Array.from(str).map((x, j) => {
            if(str.charAt(i) !== ' ') {
                if(j === i) {
                    // newArray.push(str[j].toUpperCase());
                    // console.log(str.charAt(j).toUpperCase());
                    newStr += str.charAt(j).toUpperCase();
                }
                else {
                    // newArray.push(str[j]);
                    // console.log(str.charAt(j));
                    newStr += str.charAt(j);
                }
            }
        });
        if(newStr !== '') {
            newArray.push(newStr);
        }   
    }
    return newArray;
}

console.log(wave('hello'));
console.log(wave(' gap '));