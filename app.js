let arr =[3,4,5,6,7,8,9];
console.log(arr);
console.log("Hello World");



// two sum problems 
function test(nums ,target){
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
           if(nums[i]+nums[j]===target){
            return [i,j];
           }
            
        }
        
    }
    return [];
  


}

let nums=[2,7,11,15];
let target=9;
console.log(test(nums,target));


// map methods 
function twosumMap(nums,target){
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];  
        if(map.has(complement)){
            return [map.get(complement),i];
        }   
        map.set(nums[i],i);
    }
    return [];
}

console.log(twosumMap(nums,target));