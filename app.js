'use strict';

var correctAns = 0;

alert('Answer the following questions and see how much you know about me! Please respond with yes/no or y/n.');

function q1() {
  var question1 = prompt('Is my name Michael?').toLowerCase();
  console.log('var question1', question1);
  if(question1 === 'yes' || question1 === 'y') {
    alert('You\'re right! Michael is indeed my name!');
    return correctAns++;
  }else{
    alert('Sorry, Michael is in fact my name.');
  }
}

function q2() {
  var question2 = prompt('Is my age 36?').toLowerCase();
  console.log('var question2', question2);
  if(question2 === 'yes' || question2 === 'y') {
    alert('Yup! Hard to tell isn\'t it?');
    return correctAns++;
  }else{
    alert('Nope! I actually am 36, believe it or not!');
  }
}

function q3() {
  var question3 = prompt('Was I born in Washington state?').toLowerCase();
  console.log('var question3', question3);
  if(question3 === 'no' || question3 === 'n') {
    alert('Correct! I was born in Southern California.');
    return correctAns++;
  }else{
    alert('Nope. Southern California born and raised!');
  }
}

function q4(){
  var question4 = prompt('Do I love camping?').toLowerCase();
  console.log('var question4', question4);
  if(question4 === 'yes' || question4 === 'y') {
    alert('Damn right I do!');
    return correctAns++;
  }else{
    alert('I do so. Camping is awesome!');
  }
}

function q5() {
  var question5 = prompt('Is my preferred weapon in a zombie outbreak a shotgun?').toLowerCase();
  console.log('var question5', question5);
  if(question5 === 'no' || question5 === 'n') {
    alert('You\'re right, it\'s not. Give me something high caliber and long range to destroy them from afar, like a Barret .50 cal!');
    return correctAns++;
  }else{
    alert('No, it\'s powerful but you should\'t even be letting them get that close to you! I\'d rather have a Barret .50 cal to blast them long range from my zombie-proof mountain fortress!');
  }
}

function q6 () {
  var guess;
  var triesQ6 = 4;
  var ranNum = Math.ceil(Math.random() * 10);
  console.log('ranNum', ranNum);
  while(guess !== ranNum && triesQ6 > 0) {
    console.log('triesQ6', triesQ6);
    guess = parseInt(prompt('Now guess what number I\'m thinking of between 1 and 10 in 4 tries!'));
    console.log('guess', guess);
    if(guess === ranNum) {
      alert('You got it right!');
      return correctAns++;
    }else if (guess < ranNum) {
      triesQ6--;
      alert('Too low! You have ' + triesQ6 + ' tries left.');
    }else if (guess > ranNum) {
      triesQ6--;
      alert('Too high! You have ' + triesQ6 + ' tries left.');
    }
  }
}

function q7() {
  var correctState = false;
  var guessState;
  var triesQ7 = 6;
  var states = ['oregon', 'hawaii', 'arizona', 'utah', 'nevada', 'colorado', 'new mexico', 'texas', 'oklahoma', 'florida'];
  while(!correctState && triesQ7 > 0) {
    console.log('triesQ7', triesQ7);
    guessState = prompt('Can you guess one of the states I\'ve travelled to besides California and Washington in 6 tries?').toLowerCase();
    console.log('guessState', guessState);
    for(var i = 0; i < states.length; i++) {
      if(guessState === states[i]){
        alert('You got one! I\'ve been to Oregon, Hawaii, Arizona, Utah, Navada, Colorado, New Mexico, Texas, Oklahoma, and Florida. And I still want to see more!');
        correctState = true;
        return correctAns++;
      }else if(guessState !== states[i] && (i === states.length - 1)) {
        triesQ7--;
        alert('Sorry, wrong state. You have ' + triesQ7 + ' tries left!');
      }
    }
  }
}

q1();
q2();
q3();
q4();
q5();
q6();
q7();

if(correctAns >= 6){
  alert('You got ' + correctAns + ' correct! You really do know me well!');
}else if (correctAns >= 3){
  alert('You got ' + correctAns + ' correct! You seem to know a few things about me.');
}else if (correctAns >= 0){
  alert('You got ' + correctAns + ' correct. You don\'t know me very well, but you can read more on my bio page!');
}