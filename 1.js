function whichIsBigger(num1, num2) {
  if (num1 > num2) {
    alert(num1 " is bigger than " num2);
  } else { alert(num2 " is bigger than " num1);
  }
}

function helloWorld(language) {
  if (language == "es") {
    alert("Hola Mundo");
  } else if (language == "de") {
      alert("Prost");
  } else {
      alert("Hello World");
  }
}

function assignGrade(score) {
  if (score >= 90) {
    alert("Your grade is A.")
  } else if (score >= 80) {
    alert("Your grade is B")
  } else if (score >= 70) {
    alert("Your grade is C")
  } else if (score >= 60) {
    alert("Your grade is D")
  } else {
    alert("Congratulations. You are a failure.")
  }
}

function pluralize(noun, number) {
  if (number === 1) {
    alert("One " + noun);
  } else if (noun === "sheep") {
    alert(number + " " + noun);
  } else if (noun === "goose") {
    alert(number + "geese");
  } else if (noun === "child") {
    alert(number + "children");
  } else if (noun === "person") {
    alert(number + "people");
  } else if (noun === "species") {
    alert(number + "species");
  } else {
    alert(number + " " + noun + "s");
  }
}
var nounVar = prompt("What noun are you pluralizing?")
var numberVar = prompt("How many of that noun are there?")
pluralize(nounVar, numberVar);


var num = 0;
while (num <= 15) {
  if (num % 2 === 0) {
    console.log(num + " is even.");
  } else {
    console.log(num + " is odd.");
  }
  num = num + 1;
}

function fizzBuzz() {

  var int = 1;
  while (int < 100) {
    if (int % 3 === 0 && int % 5 === 0) {
      console.log("FizzBuzz");
    } else if (int % 3 === 0) {
      console.log("Fizz");
    } else if (int % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(int);
    }
    int = int + 1;
  }
}

function hiLo(x) {
  var name = prompt("What is your name?");
  var num = parseInt(Math.random() * 100);
  var guess = prompt("I am thinking of a number between 0 and 100. Guess what it is:");
  var counter = 0;
  console.log(num);
  while (counter < 6 && num != guess) {
      if (guess > num) {
        guess = prompt("Too High! Guess again:");
        counter = counter + 1;
      } else if (guess < num) {
        guess = prompt("Too Low! Guess again:");
        counter = counter + 1;
      }
      if (counter === 6) {
      alert("Too many guesses! You lose!");
    }
      if (guess == num && counter != 6) {
      alert("You Win, " + name + "!");
    }
  }
}
