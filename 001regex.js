/* ==========================================================================
REGEX
There are 2 methods of contructing a regex.

1) Regex constructor (pattern)
  var str = 'Is this This';
  var regex = new RegExp('is');
  console.log('pattern matched', regex.test(str)); //true

2) Regular expression literal
  var str = 'Is this This';
  var regex = /is/;
  console.log(regex.test(str))

  console.log(regex.exec(str))
  ["is", index: 5, input: "Is this This"]


GLOBAL FLAG
var str = 'Is this This';
var regex = new RegExp('is', "g");
var regex = /is/g

Demonstrates that regexes are state aware:

console.log(regex.exec(str))
  ["is", index: 5, input: "Is this This"]
console.log(regex.exec(str))
  001regex.js:32 ["is", index: 10, input: "Is this This"]
console.log(regex.exec(str))
  001regex.js:33 null
console.log(regex.exec(str))
  ["is", index: 5, input: "Is this This"] //it restarted







GLOBAL FLAG with ignore case
var str = 'Is this This';
var regex = new RegExp('is', "gi");
var regex = /is/gi;

console.log(regex.exec(str))
  ["Is", index: 0, input: "Is this This"]
console.log(regex.exec(str))
  ["Is", index: 5, input: "Is this This"]
console.log(regex.exec(str))
  ["Is", index: 10, input: "Is this This"]
console.log(regex.exec(str))
  null
========================================================================== */
var str = 'Is this This';
var regex = /is/gi;


console.log(regex.exec(str))
console.log(regex.exec(str))
console.log(regex.exec(str))
console.log(regex.exec(str))




//go back to 3:45 where I left off
