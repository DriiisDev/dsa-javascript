// function fac (n){
//     if ( n === 0){
//         return 1;
//     }else{
//         console.log(n);
//         return fac(n - 1) * n
//     }
    
// }

// console.log(fac(8));
var n = 8
let result = 0

for (let i = 1 ; i < 8; i++){
    result += i * n
}
console.log(result);