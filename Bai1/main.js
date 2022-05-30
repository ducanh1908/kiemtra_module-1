function giaipt(a,b) {
    if(a == 0) {
       if(b== 0){
           console.log('Vô số nghiệm')
       }
       else {
           console.log('Vô nghiệm');
       }
    }
    else {
        if(b== 0) {
            console.log('Vô nghiệm');
        }
        else{
            return -b/a;
        }
    }
}
console.log(giaipt(5,8))