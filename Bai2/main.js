let index = 0;
let arr = [5, 8, 4, 9, 4, 3];
let flag = false;
let input = prompt('Nhập số bất kỳ');
function checkArr(a, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (a == arr[i]) {
            flag = true;
            index = i;
            break;
        }
    }
    if(flag== true) {
        alert('Có trong mảng');
    }
    else {
        alert('không có trong mảng');
    }
}
checkArr(input, arr);

