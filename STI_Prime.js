var atticus = new Person('atticus', '2405', '47000', 3);
var jem = new Person('Jem', '62347', '63500', 4);
var boo = new Person('Boo', '11435', '54000', 3);
var scout = new Person('Scout', '6243', '74750', 5);

//object constructor

function Person(name, employeeNumber, annualSalary, reviewRating) {
  this.name = name;
  this.employeeNumber = employeeNumber;
  this.annualSalary = annualSalary;
  this.reviewRating = reviewRating;
}

var sti = function (employee) {
  var rating = employee.reviewRating;
  var bonusPercentage = 0;

  /* how was your review???Only 2 stars? NO BONUS!!!*/

  if (employee.reviewRating <= 2) {
    bonusPercentage = 0;

  } else if (employee.reviewRating == 3) {
    bonusPercentage = .04;
  } else if (employee.reviewRating == 4) {
    bonusPercentage = .06;
  } else {
    bonusPercentage = .1;
  };

  //We can tell how OLD you are by your short, little, 4 digit employee number.

  if (employee.employeeNumber.length == 4) {
    bonusPercentage += .05;
  };

  //Hm. You already make a lot of the money. Minus 1%

  if (annualSalary > 65000) {

    bonusPercentage -= .01;
  };

  //We are very sure you would feel GUILTY taking a bonus any bigger than 13%.
  if (bonusPercentage > .13) {
    bonusPercentage = .13;
  };

  return bonusPercentage;

};

//sweet new function goes here:

var newArr = function (person) {
  var arr2 = [ ];
  arr2.push(name);
  arr2.push(sti(person).toFixed(person.annualSalary));
  arr2.push(Math.round(person.annualSalary * (1+sti (person)))

  var bonusTotal = Math.round (person.annualSalary * sti(person));

  arr2.push(bonusTotal);

//Let's see if this works.
  console.log(arr2);
  return arr2;
}

//I have no idea. I do not want to check.

var finalArray = [ ];
for (var i = 0; i < employees.length; i++) {
   var final = newArr (employees [i] );
   finalArray.push (final);
};
