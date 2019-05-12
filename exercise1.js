function hello(name) {
    // put your code here

    if (name.length>0){
    console.log( "Hello, " + name);
    } else{
      console.log('Hello World!')
    }
  }
  hello("");


function madlib(name, subject){
  console.log(name +"'s favorite subject in shcool is "+subject)

}

madlib('van','CS');

//
console.log('tip 1')

function tipAmount(bill,service){
  if (service =='good'){
    return bill * .2;


  }else if(service =='fair'){
    return bill * .15;

  }else{
    return bill * .1;

  }

}

console.log(tipAmount(100,'bad'));

//
function totalAmount(bill, service){

if (service =='good'){
    return bill * .2 + bill;


  }else if(service =='fair'){
    return bill * .15 + bill;

  }else{
    return bill * .1 + bill;

  }
}
console.log(totalAmount(100, 'fair'));

//
function splitAmount(bill, service,num){

  if (service =='good'){
      return (bill * .2 + bill)/num;
  
  
    }else if(service =='fair'){
      return (bill * .15 + bill)/num;
  
    }else{
      return (bill * .1 + bill)/num;
  
    }
  }
  console.log(splitAmount(100, 'fair',2));

//
  function printNumbers(start, end){
    var hold='';
    for (var i=start; i<=end; i++){
      hold+=i;

    }

    
    while (start <= end){
      hold+='\n'+start;
      start++;
    }

    return hold;



  }

  console.log(printNumbers(1,10));

//
  function printSquare(num1){
    var square='';
    for(var i = 0; i<num1; i++){
      for (var j=0;j<num1;j++){
        square+='*';

      }
      square+='\n';
    }
    return square;

  }

  console.log(printSquare(5));

//
  function printBox(num1,num2){

    var box='';
    for (var row=0;row<num2;row++){

      for (var col=0;col<num1;col++){
        
        if(col>0&&col<num1-1&&row>0&&row<num2-1){
          box+=' ';

        }else{
          box+='*';}
        

      }
      box+='\n';

    }
    return box;
  }

  console.log(printBox(6,4));

  //

  function printBanner(string){
    var len=string.length +1;
    var banner='';
    for(var row=0; row<3; row++){
      for(var col=0; col<=len; col++){

        if(row>0 && row<2 && col>0 && col<len){
          var col2=col-1;

            banner+=string.slice(col2,col);

          

          }else {
            banner+='*';


        }

      }
      banner+='\n';

    }

    return banner;

  }

  console.log(printBanner('Welcome to DigitalCrafts'))

  //
  function factors(num){

    var numArr=[];

    for(var i = 1; i <= num; i++){
      if (num%i == 0){
        numArr.push(i);


      }


      

    }
    return numArr;

  }


  console.log(factors(120));


  ///
  function cipher(string){
    var i, j;
    var len = string.length;
   
    var newString='';
   
      
        for (i = 0; i < len;i++){

          switch(string.charAt(i).toLowerCase()){
            case 'a':
            newString+=('b');
            break;
            case 'b':
            newString+=('c');
            break;
            case 'c':
            newString+=('d');
            break;
            case 'd':
            newString+=('e');
            break;
            case 'e':
            newString+=('f');
            break;
            case 'f':
            newString+=('g');
            break;
            case 'g':
            newString+=('h');
            break;
            case 'h':
            newString+=('i');
            break;
            case 'i':
            newString+=('j');
            break;
            case 'j':
            newString+=('k');
            break;
            case 'k':
            newString+=('l');
            break;
            case 'l':
            newString+=('m');
            break;
            case 'm':
            newString+=('n');
            break;
            case 'n':
            newString+=('o');
            break;
            case 'o':
            newString+=('p');
            break;
            case 'p':
            newString+=('q');
            break;
            case 'q':
            newString+=('r');
            break;
            case 'r':
            newString+=('s');
            break;
            case 's':
            newString+=('t');
            break;
            case 't':
            newString+=('u');
            break;
            case 'u':
            newString+=('v');
            break;
            case 'v':
            newString+=('w');
            break;
            case 'w':
            newString+=('x');
            break;
            case 'x':
            newString+=('y');
            break;
            case 'y':
            newString+=('z');
            break;
            case 'z':
            newString+=('a');
            break;

            default:
            newString+=(' ');
            break;
          }

      }

    
    return newString.charAt(0).toUpperCase() + newString.slice(1);
  }

  console.log(cipher('Genius without education is like silver in the mine'));

///
  function decipher(string){
    var i, j;
    var len = string.length;
   
    var newString='';
   
      
        for (i = 0; i < len;i++){

          switch(string.charAt(i).toLowerCase()){
            case 'b':
            newString+=('a');
            break;
            case 'c':
            newString+=('b');
            break;
            case 'd':
            newString+=('c');
            break;
            case 'e':
            newString+=('d');
            break;
            case 'f':
            newString+=('e');
            break;
            case 'g':
            newString+=('f');
            break;
            case 'h':
            newString+=('g');
            break;
            case 'i':
            newString+=('h');
            break;
            case 'j':
            newString+=('i');
            break;
            case 'k':
            newString+=('j');
            break;
            case 'l':
            newString+=('k');
            break;
            case 'm':
            newString+=('l');
            break;
            case 'n':
            newString+=('m');
            break;
            case 'o':
            newString+=('n');
            break;
            case 'p':
            newString+=('o');
            break;
            case 'q':
            newString+=('p');
            break;
            case 'r':
            newString+=('q');
            break;
            case 's':
            newString+=('r');
            break;
            case 't':
            newString+=('s');
            break;
            case 'u':
            newString+=('t');
            break;
            case 'v':
            newString+=('u');
            break;
            case 'w':
            newString+=('v');
            break;
            case 'x':
            newString+=('w');
            break;
            case 'y':
            newString+=('x');
            break;
            case 'z':
            newString+=('y');
            break;
            case 'a':
            newString+=('z');
            break;

            default:
            newString+=(' ');
            break;
          }

      }

    
    return newString.charAt(0).toUpperCase() + newString.slice(1);

  }

  console.log(decipher(cipher('Genius without education is like silver in the mine')))


  ///

  function leetSpeak(string){
    var i;
    var len = string.length;
    var leet='';
    for(i = 0; i < len; i++){
      switch(string.charAt(i).toUpperCase())
      {
        case 'A':
        leet+='4';
        break;
        case 'E':
        leet+='3';
        break;
        case 'G':
        leet+='6';
        break;
        case 'L':
        leet+='1';
        break;
        case 'O':
        leet+='0';
        break;
        case 'S':
        leet+='5';
        break;
        case 'T':
        leet+='7';
        break;

        default:

        leet+='';



      }

    }
    return leet;

  }

  console.log(leetSpeak('Leet'));

  ///

  function longLongVowls(string){

    var i;
    var len=string.length;
    var newString ='';

    for(i=0; i<len; i++){

      if (string.substring(i,i+2)=='oo'||
      string.substring(i,i+2)=='aa'||
      string.substring(i,i+2)=='ee'||
      string.substring(i,i+2)=='ii'||
      string.substring(i,i+2)=='uu' ){

        newString+=string.charAt(i).repeat(4);
        

      }else{
        newString+=string.charAt(i);
      }

    }

    return newString;
    

  }

  console.log(longLongVowls('Good'));

  ///

  function positiveNumbers(num){
    var i;

    var len=num.length;
    var numHold=[];

    for (i = 0; i<len; i++){

      if(num[i]>=0){
        numHold.push(num[i])
      }

    }
    return numHold;

  }


  console.log(positiveNumbers([1, -3, 5, -3, 0]));

  ///

  // function matrixAdd(arr){
  //   var i, j;
  //   var len=arr.length;

  //   for(i = 0; i<len; i++){
  //     for (j=0; j<arr[i].length; j++){

  //     }

  //   }
  // }