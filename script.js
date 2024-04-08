function binary(){
    var num = document.getElementById("number").value;
    var sum = 0;
    var i = 0;
    
    while(num){
        sum = sum + Math.pow(2,i)*(num%10);
        i++
        num = parseInt(num/10);
    }
    
    document.getElementById("resultOne").innerHTML = sum;
}


function decimal(){
   
    var decimal = document.getElementById("binary").value;
    var tempDecimal,rem,binary = 0,place=1;
    tempDecimal = decimal
    
    while(tempDecimal>0){
        rem = tempDecimal % 2;
        binary = binary + (rem * place);
        tempDecimal = parseInt(tempDecimal / 2);
        place = place * 10;
    }
    
    document.getElementById("resultTwo").innerHTML = binary;
}

