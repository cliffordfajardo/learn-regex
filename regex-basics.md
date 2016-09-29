Regexes are just letters!

### Regexes are just letters!


Easiest way to test if a regex matches in js:
```js
/abc/.test('abc')//true
/ab/.test('acb')//false
```


```js
/*

Word: 'abcd'
Regex: /abcd/ 
Does the exact regex sequence of characters occur in the string above? Yes

Word: 'apple'
 Regex: /ap/ 

Word: 'Bc'
Regex: /c
Does the exact regex sequence of characters occur in the string above? Yes

Word: 'apex'
regex: /ey
Does the exact regex sequence of character occur in the string above? NO

*/
```


### The special '.' dot metacharacter AKA wildcard character

The dot is known as a wild card in regex & it matches any particular character, whether it be a number, letter, dot, or question mark.

```js
/*
Words: 
Regex to match all three strings above: /.../

Words: 'abc.', '123x', '@@1x' 
Regex: /...\./
Regex to match the first three characters & a dot. We use the backslash to escape the dot.
Only abc. is matched. Why did the others fail? The regex matches the first 3 values but not the last which should be a dot.
*/
```


### Matching Specific Characters using brackets `[]`

```js


You can use the expression [cmf]an to match only 'can', 'man' and 'fan'.

You can also use the inverse expression [^drp]an to match any three letter word ending with 'an' that does not start with 'd', 'r' or 'p'.
```




### Excluding Specific Characters with the hat `^` metacharacter

```js
/*
[^abc] will match any single character except for the letters a, b, or c.

/[^b]og/  will match hog, hoga, dog, dogg etc, but not bog
/[hd]og/  will match hog, dog, but not bog

*/
```




### Character ranges
```js
/*

/[0-2]hi/ ......  will match anything that starts with 0hi, 1hi, 2hi
/[^a-y]ebra/ ...... will match anything that starts with zebra


Multiple character ranges can also be used in the same set of brackets.
*/

```

### The digit metacharacter  `\d`

```js
/*
/\d/ ...with match anything that contains a digit .... '0abc' or 'abc0'
*/

```

### The Alphanumeric metacharacter `\w`

```js
/*

/\w/ will match anything that starts from a-z, A-Z or 0-9

/\w/ will match 0hello, Hhello, aHello, but not @hello since it doesn't begin with an 

char1 char2 char3
[A-C][n-p][a-c] ....... matches Ana, Bob, Cpc, but not aax, bby, ccz in our list

*/
```



### Catching Repetitions

```js
/*

/\d\d\d/  anything that starts with 3 digits
/\d{3}/   anything that starts with 3 digits
/a{2}/    anything that start with two a's


/[wxy]{5}/  (five characters, each of which can be a w, x, or y)
/.{2,6}/    (between two and six of any character).


A pattern for matching the first two & not third
	wazzzzzup
  wazzzup
  wazup
  
waz{3,5}up
*/
```


### Kleen Star `*` and Kleen Plus  `+`

```js

[abc]+    //  (one or more of any a, b, or c character) 

/\d*/    //   to match any number of digits ..even if there is no number

/\d+/      // to match anything with at least 1 number.



// aaaabcc	
// aabbbbc
// aacc
// skip: a

/aa+b*c+/    // at least 2 a, at 0 or more B's

a{2,4}b*c+ // another solution
```




### Resources
- https://www.hscripts.com/tutorials/regular-expression/metacharacter-list.php