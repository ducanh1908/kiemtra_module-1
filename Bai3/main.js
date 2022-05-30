let input = prompt('Nhập 1 chuỗi bất kỳ');

function checkArr(input){
    let arr = ['a','o', 'e', 'u', 'i'];
    let count = 0;
    for(let i =0; i < arr.length; i++) {
        for(let j = 0; j < input.length; j++) {
            if(arr[i]==input[j]){
                count++;
            }
        }
    }
    if(count !=0){
        return `gia tri nguyen am ${count}`;
    }
    return false;
}
console.log(checkArr(input));