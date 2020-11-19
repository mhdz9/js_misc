// const user = {email: 'jdoe@gmail.com'};

// try {
//     // Produce a ReferenceError
//     // myFunction();
//     // Produce a TypeError
//     // null.myFunction();
//     // Will produce a SyntaxError
//     // console.log(eval('2+2'));
//     // eval('Hello World');
//     // Will produce a URIError
//     // decodeURIComponent('%');
//     if(!user.name) {
//         // throw 'User has no name';
//         throw new SyntaxError('User has no name.');
//     }
// }
// catch(err) {
//     // console.log(err);
//     // console.log(err.message);
//     // console.log(err.name);
//     // console.log(err instanceof ReferenceError);
//     // console.log(err instanceof TypeError);
//     console.log(`User error: ${err.message}`);
// }
// finally {
//     console.log('Finally runs regardless of result.');
// }

// console.log('Program continues..');

/*
    Regular Expressions
    Flags:
    i - case insensitive
    g - global search (entire paragraph, all instances of pattern, not just the first one it finds)
*/

// let re;
// re = /hello/i;

// console.log(re);
// console.log(re.source); // Disregard /

// exec() - Return result in an array or null
// const result = re.exec('hello world');

// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// test() - Returns true or false
// const result = re.test('Hello');

// console.log(result);

// match() - Returns result array or null
// const str = 'Hello There';
// const result = str.match(re);
// console.log(result);

// search() - Returns index of the first match. If not found returns -1
// const str = 'Hello There';
// const result = str.search(re);
// console.log(result);

// replace() - Return a new string with some or all matches of a pattern
// const str = 'Hello There';
// const newString = str.replace(re, 'Hi');
// console.log(newString);

let re;
// Literal characters
// re = /hello/;
// re = /hello/i;

// Metacharacter symbols
// re = /^h/i; // Must start with
// re = /d$/i; // Must end with
// re = /^hello$/i; // Must begin and end with
// re = /^h.llo$/i; // Matches any ONE character -> Hello, hallo, hullo. Wildcard. (Only 1 character)
// re = /h*llo/i; // Matches any character 0 or more times. Complete wildcard
// re = /gre?a?y/i; // Optional character
// re = /gre?a?y\?/i; // Escape characters

// Brackets [] - Character sets
// re = /gr[ae]y/i; // Must be an A or E
// re = /[GF]ray/; // Must be a G or F
// re = /[^GF]ray/i; // Match anything except a G or F
// re = /[A-Z]ray/; // Match any uppercase letter
// re = /[a-z]ray/; // Match any lowercase letter
// re = /[A-Za-z]ray/; // Match any letter
// re = /[0-9]ray/; // Match any digit
// re = /[0-9][0-9]ray/; // Match any digit. 10ray would match.

// Braces {} - Quantifiers
// re = /Hel{2}o/i; // Must occur exactly {n} amount of times
// re = /Hel{2,4}o/i; // Must occur exactly within {n} range amount of times
// re = /Hel{2,}o/i; // Must occur at least {n} times

// Parentheses () - Grouping
// re = /^([0-9]x){3}$/i; // 3x3x3x will match. 3x3x3x3x will not match

// Shorthand Character Classes
// re = /\w/; // Word character - alphanumeric or _ (underscore)
// re = /\w+/; // One or more word characters
// re = /\W+/; // Non-word characters !3x3x3x will match, 3x3x3x will not match
// re = /\d/; // Match any digit
// re = /\d+/; // Match any digit 0 or more times
// re = /\D+/; // Match any Non-digit
// re = /\s/; // Match whitespace char
// re = /\S/; // Match Non-whitespace char
// re = /Hell\b/i; // Word boundary

// Assertions
// re = /x(?=y)/; // Match x only if followed by y
re = /x(?!y)/; // Match x only if NOT followed by y

// String to match
const str = 'xuy';
// Log reslts
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
    if(re.test(str)) {
        console.log(`${str} matches ${re.source}`);
    }
    else {
        console.log(`${str} does NOT match ${re.source}`);
    }
}

reTest(re, str);