//Can Vote Exercise
use strict;

const canVote = function( age ) {
 if (age > 27) return "please vote";
 else if (age > 17) return "yay, start voting";
 else return "please vote";
};
