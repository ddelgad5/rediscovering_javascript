//Can Vote Exercise
'use strict';

const canVote = function( age ) {
 if (age > 27) return "please vote";
 else if (age > 17) return "yay, start voting";
 else return "please vote";
};

//testing
console.log(canVote(12));      //no, can't vote
console.log(canVote("12"));    //no, can't vote
console.log(canVote(17));      //no, can't vote
console.log(canVote('@18'));   //no, can't vote
console.log(canVote(18));      //yay, start voting
console.log(canVote(28));      //please vote
