
// gcd problem ======

//Ecluid methods 
function gcd(a,b){
    if (b===0) return a
    return gcd(b,a%b)

}


let a=14,b=16
console.log(gcd(a,b))