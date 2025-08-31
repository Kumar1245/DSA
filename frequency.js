// frequency of array elements

function frequency(arr) {
    let feq={}
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in feq) {
            feq[arr[i]] += 1;
        } else {
            feq[arr[i]] = 1;
        }

}
    return feq; 
}
    // return Object.entries(feq).sort((a,b)=>b[1]-a[1]);  // for sorting in descending order
    // return Object.entries(feq).sort((a,b)=>a[1]-b[1]);  // for sorting in ascending order
    // return Object.keys(feq).sort((a,b)=>feq[b]-feq[a]); // for sorting keys based on frequency in descending order
    // return Object.keys(feq).sort((a,b)=>feq[a]-feq[b]); // for sorting keys based on frequency in ascending order
    // return Object.values(feq).sort((a,b)=>b-a); // for sorting values in descending order
    // return Object.values(feq).sort((a,b)=>a-b); // for sorting values in ascending order
console.log(frequency([1, 2, 2, 3, 4, 4, 5, 5, 5]));

console.log(frequency(['apple', 'banana', 'apple', 'orange', 'banana', 'apple']));
console.log(frequency(['a', 'b', 'a', 'c', 'b', 'a', 'd']));

// Using Reduce methods 
function frequencyReduce(arr) {
    return arr.reduce((feq, item) => {
        feq[item] = (feq[item] || 0) + 1;
        return feq;
    }, {});
}

console.log(frequencyReduce([1, 2, 2, 3, 4, 4, 5, 5, 5]))


// using for each loop methods
function frequncyForEach(arr){
    let freq={}
    arr.forEach(num=>{
        freq[num]=(freq[num]||0)+1
    })
    return freq
}
console.log(frequncyForEach[2,4,5,6,7,9,2,5,3,6,3,7,9])