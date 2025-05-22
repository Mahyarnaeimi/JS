var num = [15 , 80 , 987 , 4 , 78 , 100 , 122 , 1000 ]
var max = num[0];

for(var i=0; i < num.length; i++){
    if(num[i] > max){
        max = num[i];
    }
}
console.log("The maximum number is " + max);


