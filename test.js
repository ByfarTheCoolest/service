// let n = 'hello';

// function outPrint() {
//     console.log(n)
// }


// function out2() {
//     console.log('222')
// }

// export default { outPrint, out2 }




let dat = (new Date().getTime()).toString();

let str = '12345dfgh67890qwe3rtyuio0pa367sdfgh48jklzx47lo4cvbnm';
let randomNum = function(min,max){
    return Math.floor(Math.random()*(max-min)+min)
}

let returnText = '';
for(let i=0;i<4;i++)
{
    let txt = str[randomNum(0,str.length)];
    returnText+=txt;
}

console.log(returnText)

