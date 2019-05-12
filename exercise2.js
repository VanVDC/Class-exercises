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


