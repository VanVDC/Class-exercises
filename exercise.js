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

  // array hi to people question 1

  function people(names){
    var hi=[];
    var i;
    var len=names.length;

    for (i = 0; i< len; i++){
      hi+='hi '+ names[i]+', ';
    }

    return hi;


  }

  console.log(people(['Lachlan','Kim', 'Moira']));
////


// var student =['Lachlan','Kim', 'Moira'];

// student.forEach(function(names){
//   console.log('hi! '+ names);
// });


  /// question 2 initials

  function initials(names){
    var init=[];
    var i;
    var len=names.length;

    for (i = 0; i< len; i++){
      init+=names[i].charAt(0)+"."
    }

    return init;


  }

  console.log(initials(['Adam','Michael','Szaruga']));

  // //

  // var name=['Adam','Michael','Szaruga'];
  // var string='';

  // name.forEach(function(init){
  //   string+=(init[0]+'.');

  // })

  // console.log(string);



  //Last array of 1 question 3

  function lastArr(arr){
    var lastNum=-1;
    var len=arr.length;
    var i;

    for (i = 0; i< len; i++){
      if(arr[i]==1){
        lastNum=i;
      }
    }
    return lastNum;
  }

  console.log(lastArr([0,1,0,1,1,1,1,0,0]));

  //

  // var nums=[0,1,0,1,1,1,1,0,0];
  // var index=0;

  // nums.forEach(function(number, i){
  //   if (number==1){
  //     index=i;

  //   }
  // })

  // console.log(index);


//


   // // largest positive numbers question 4

    function positiveNum(nums){
      var myNum=0;
      var len=nums.length;
  
      var i;
  
      for (i = 0; i< len; i++){
        if(nums[i]>myNum){
          myNum=nums[i];
        }
      }
      return myNum;
    }
  
    console.log(positiveNum([1,5,25,3,99,20]));



//object question 1

function commonBirth(arr){
  var i;
  var len=arr.length;
  var obj={};


  for (i = 0; i<len; i++){
    var currentItem = arr[i];

    if(!obj[currentItem]){
      obj[currentItem]=0;

    }

    obj[currentItem]++;
  }

  var keys=Object.entries(obj)
  var num=0;
  for(i =0;i < keys.length; i++){
    if(keys[i][1]>num){
      num=keys[i][1];
      obj=keys[i];
    }

  }

  return obj;

}

console.log(commonBirth([1991, 1984,1984,1984, 1984, 1989, 1989, 1989]));


// exmaples
const fruits = {
  apple: 100, orange: 17, pears: 54,
} 

const keys = Object.entries(fruits)


var len=keys.length;
var i;
var num=0;
var obj={};

for (i = 0; i<len;i++){
  if(keys[i][1]>num){
    num=keys[i][1];
    obj=keys[i]

  }
}

console.log(obj);

// question 2

function countString(string){
  var len=string.length;
  var i;
  var obj={};

  for(i =0; i<len; i++){
    var currentItem=string.charAt(i);
    if(!obj[currentItem]){
      obj[currentItem]=0;
    }

    obj[currentItem]++;
  }

  return obj;
}

console.log(countString('This is a random string'));

// object question 3
function bestTime(arr){
  var len=arr.length;
  var i;
  var obj= {};
  var string=[];

  for(i = 0; i<len; i++){
    obj =arr[i];
    var keys=Object.entries(obj)

    for(var j = 0; j< keys.length; j++ ){
      string+=(keys[j][1])+' '
    }
  }

  for(var v=0; v< string.length; v++){

    if(v%2==0){
      console.log(string[v]+' is '+ string[v+1]);

    }



  }


}

bestTime([{country:"usa", time: 253},{country:"Poland", time: 233},
{country:"russia", time: 533},{country:"china", time: 433}]);


//exercise 2 no for and while loops

// question 1

var numbers=[1,2,4,-2,-4,-6,3,4];
var positiveNums=[];

numbers.forEach(function(num){
  if(num>=0){
    positiveNums+=num + ', ';
  }
})

console.log(positiveNums);

//question 2

var nums=[2,3, 4, 6, 1, 8, 10, 7];
var evenNumbers=[];

nums.forEach(function(num){
  if(num%2==0){
    evenNumbers+=num+', ';

  }
});

console.log(evenNumbers);

// question 3

var numNotSquare=[2,3, 4, 6, 1, 8, 10, 7];

var newArr=numNotSquare.map(function(num){
  return num**2;
});

console.log(newArr);

//question 3

var cities= [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];
var cityWithCoolerTemps=[];

cities.forEach(function(city){
  
  if(city.temperature<70.0){
    cityWithCoolerTemps[city.name] = city.temperature;
  }

})

console.log(cityWithCoolerTemps);


//question 4

var cityNames=[];

cities.forEach(function(city){
if(!cityNames[city]){
  cityNames+=city.name+', ';
}
})

console.log(cityNames);

//question 5

var peoples = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];

peoples.forEach(function(name){
  console.log( 'Good job, '+name+'! ');

})

//question 5
console.log(peoples.sort());

///question 6
var namesLessThanThree=[];
var namesLessThanFour=[];
var namesLessThanFive=[];
var namesLessThanSix=[];
var namesLessThanSeven=[];
var otherNames=[]

peoples.forEach(function(name){
  if(name.length<=3){
    namesLessThanThree+=name+ ', ';
  }else if(name.length<=4){
    namesLessThanFour+=name+ ', ';
  }else if(name.length<=5){
    namesLessThanFive+=name+ ', ';
  }else if(name.length<=6){
    namesLessThanSix+=name+ ', ';
  }else if(name.length<=7){
    namesLessThanSeven+=name+ ', ';
  }else{
    otherNames+=name+ ', ';
  }


})

console.log(namesLessThanThree + namesLessThanFour+
   namesLessThanFive+namesLessThanSix+ namesLessThanSeven+ otherNames);

   //question 7


