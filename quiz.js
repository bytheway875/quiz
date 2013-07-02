// // document.write('<p>If you can see this, your quiz script is set up!</p>');
// // console.log("Hello, welcome to Quizzical");

// var name = prompt("What's your name?"),
//     email = prompt("What's your email?"),
//     budget_in_dollars = prompt("What's your yearly budget?"),
//     timeline_in_months = prompt("How long should your lease last?");

// monthly_budget = 0;

// budget_in_dollars = Number(budget_in_dollars);
// timeline_in_months = Number(budget_in_dollars);

// monthly_budget = budget_in_dollars/timeline_in_months;

// incomes =[];
// job_descriptions = [];
// salaries = [];
// while(income = prompt('Enter an income source (job, etc) and salary, separated by a comma')){
  
//   job = {};
  
//   element = income.split(',');
//   job.name = element[0];
//   job.income = Number(element[1]);

//   console.log(element[0]);
//   console.log(element[1]);
//   incomes.push(job);
// }

// total_income = 0;
// for (i = 0; i < incomes.length; i++){
//   total_income = incomes[i].income + total_income;
// }


// var name = prompt("What's your name?");
//     age = prompt("How old are you?");
//     attending = confirm("Are you coming to the partay?");

// if (attending == true && age < 21){
//   alert("You want to come to the party, but your age makes you a liability so I'd prefer that you stay home.");
// }
// else if (attending == true){
//   alert("See you there!");
// }
// else {
//   alert("Fine, I didn't want you there anyway.");
// }

// people = [];

// while(person  = prompt('Enter your name and email, separated by a comma')){
  
//   person_object = {};
    
//   element = person.split(',');
//   person_object.name = element[0];
//   person_object.email = element[1];

//   people.push(person_object);
// }

// for (i = 0; i < people.length; i++){
//   document.write('<a href="mailto:' + people[i].email +'">' +  people[i].name +'</a>');
// }

function calculator(operator, first, second){
  return operator(first, second);
}

calculator(function(a,b){ return a * b;}, 5, 8);

function calculator1(operator){
  var answer = arguments[1];
  for(i = 2; i < arguments.length; i++) {
    answer = operator(answer, arguments[i]);
  }
  return answer;
}

calculator1(function(a,b) { 
  return a * b;
} ,1,2,3,4,22,3,4,5,6);



