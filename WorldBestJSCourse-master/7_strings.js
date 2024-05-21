//* =========================================
//* String in JavaScript
//* =========================================

//? Strings in JavaScript are a fundamental data type that represents a sequence of characters.
// Note:

//? Strings created with single or double quotes works the same.
// There is no difference between the two.

//* String Properties:

//? length: Property that returns the length of the string (number of characters).

// const str = "Hello,    World!";

// console.log(str.length);

// including space n all

//* =========================================
//* Escape Character
//* =========================================

//? Escape Character: In JavaScript, the backslash \ is used as an escape character. It allows you to include special characters in a string.

// Code	   Result	    Description
// \'	    '	        Single quote
// \"	    "	        Double quote
// \\	    \	        Backslash

// let text = "My name is " HEELLO world" & I am a Full Stack Developer. ";

// let text =
//   "My name is '  Technical ' & \\ I am a \"Full Stack \" Developer. ";


// let text = 'My name is " Yuvraj Thakur " \\& \n I am a \'Full Stack Developer\'. ';

// console.log(text);





//* =========================================
//* String Search Methods
//* =========================================

//! 2: String Search Methods

//? a:  indexOf(): The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:

// syntax
// indexOf(searchString)
// indexOf(searchString, position)


// let text = "YUvi thakur";

// 🥨console.log(text.indexOf("thakur"));

// //!The indexOf() method is case sensitive.

// console.log(text.indexOf("Thakur"));


//! conversion of string to array

// let strArr = Array.from(text);

// console.log(strArr.length);

// console.log(typeof text)

// let strMap = strArr.map((curElem, index,arr) => `${curElem} - ${index}`);

// console.log(strMap);






//!b: lastIndexOf() : The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
// syntax
// lastIndexOf(searchString)
// lastIndexOf(searchString, position)



// let text = "Hello JavaScript, welcome to our world best JavaScript journey";

// let index = text.indexOf("JavaScript",42);

// let index = text.lastIndexOf("JavaScript");

// let index = text.lastIndexOf("JavaScript");//searching backward javascript


// console.log(index);


// !important:= jab bhi hum indexof aur lastindexof mei position dalta h to............

//! in case of indexof it starts searching in forward direction and if we apply position in lastindexof it starts in backward direction of provided position




//! c:  search(): The search() method searches a string for a string (or a regular expression) and returns the position of the match.

//* this method is also case sensitive. and we can also write regular expression in search method

//* Returns the index number where the first match is found. Returns -1 if no match is found.

// let text = "Hello JavaScript, welcome to our world best JavaScript course";

// let result = text.search(/JavAscript/i);

//i will tackle case sensitivity can make incasesensitive

// console.log(result);

//*👉 Important Tips:-

// The search() method cannot take a second start position argument means we cannot give specifically position
// The indexOf() method cannot take powerful search values (regular expressions).
//* They accept the same arguments (parameters), and return the same value



//! d: match() : Returns an array of the matched values or null if no match is found.

// let text = "Hello JavaScript, welcome to our world best JavaScript course";

// let result = text.match("JavaScript");//Null kyuki yebhi case sensitive hei

// let result = text.match("Javascript");

// Ye array return karta hei .
// Casse sensitivity flag also work in match
//g flag  searches globally for a particular string and gives output of how many times that string  has occured 


//todo here the js converts the normal text into regular expression text.match(/JavaScript/); without the g flag

// ?Behind the scene ese execute hua hoga 

// let result = text.match(/JavaScript/);

// console.log(result);




//! e: matchAll() : Returns an iterator of all matches, providing detailed information about each match. Returns an empty iterator if no match is found.

// let text = "Hello JavaScript, welcome to our world best JavaScript course";

// // let matchResult = text.matchAll("javascript");

// let matchResult = text.matchAll("JavaScript");


//todo  here the js converts the normal text into regular expression text.match(/JavaScript/g); also adds the g flag at the end


// console.log(...matchResult);
// console.log(...matchResult);

//it will give give full information of each occurence of that part of the string

//for (let item of matchResult) {
//   console.log(item[0]);
//   // javascript javascript
// }

// for (let index of matchResult) {
//   console.log(index.index);
//   // 6 44
// }


// for (let { index } of matchResult) {
//   console.log(index);
//   // 6 44
// }

//! f:includes(): Returns true if the string contains the specified value, and false otherwise.
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let includeResult = text.includes(/java/i);
// let includeResult = text.includes("J");
// console.log(includeResult);

// Note: includes() is case sensitive. includes() is an ES6 feature.

//! g: startsWith(): The startsWith() method returns true if a string begins with a specified value.Otherwise it returns false:
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.startsWith("Helcome");
// let result = text.startsWith("Hello");
// console.log(result);

//*! h: start position for the search can be specified
// let result = text.startsWith("welcome", 18);
// let result = text.startsWith("welcome", 17);
// console.log(result);

//!  i: endsWith(): The endsWith() method returns true if a string ends with a specified value. Otherwise it returns false:

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// // let result = text.endsWith("welcome");
// let result = text.endsWith("se");
// console.log(result);




//* =========================================
//* Extracting String Parts:
//* =========================================



//! Extracting String Parts:
//todo -------------------------------//


//? String.prototype.substr() it is deprecated  ❌

//? a: slice() extracts a part of a string and returns the extracted part in a new string.
// syntax
// slice(start, end);

//!Todo  JavaScript counts positions from zero.

//? First position is 0. Second position is 1.

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.slice(-17);
// let result = text.slice(7,19);
// console.log(result);





//todo subString() substring()

//? a: substring: Extracts a portion of the string based on starting and ending indices.
//* camelCase is used to separate words, substring is not to be intended as Sub String but as Substring
// syntax
// substring(indexStart) // index starts with 0
// substring(indexStart, indexEnd)

//* substring() is similar to slice().The difference is that start and end values less than 0 are treated as 0 in substring().

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.substring(-6,7);
// console.log(result);

//! Homework
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.substring(0);
// let result = text.substring(0,9);
// let result = text.slice(0,9);
// let result = text.substring(-5);
// console.log(result);

//! similarities

//todo  In both the slice() and substring() methods, the end parameter indicates the ending index up to which the extraction occurs, but the character at the end index is excluded from the extracted substring.




//* =========================================
//* Interview Question
//* =========================================

//! What is the output for the following code?

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.slice(1);

// let result = text.slice("H", "");  //Nothoing will be output

// let result = text.replace("H", "");  

// Replace H with "" emptty place

// let result = text.substring(1);

//? Optional
// let text1="yuvraj yuvraj yuvraj yuvraj yuvraj"
// let result = text1.replace("yuvraj", "Tinku");
// let result = text1.replaceAll("yuvraj", "Tinku");
// console.log(result);





// todo =========================================
// todo Extracting String Characters
// todo =========================================

//! Extracting String Characters

// There are 3 methods for extracting string characters:

//? The charAt(position) Method
//? The charCodeAt(position) Method
//? The at(position) Method

//? charAT() : The charAt() method returns the character at a specified index (position) in a string

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.charAt(6);
// let result = text.charAt(-6);
// console.log(result);

//? charCodeAt() : The charCodeAt() method returns the code of the character at a specified index in a string. The method returns a UTF-16 code (an integer between 0 and 65535).

// let text = "Hello javaScript, welcome to our world best JavaScript course";
// let result = text.charCodeAt(6);
// console.log(result);



//todo ES2022 introduced the string method at():

//? The at() method returns the character at a specified index (position) in a string. The at() method returns the same as carAt().
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.at(-6);
// console.log(result);

// !it allows use of negative indexes but charAt not

//todo Note
// The at() method is a new addition to JavaScript.
// It allows the use of negative indexes while charAt() do not.
// Now you can use myString.at(-2) instead of charAt(myString.length-2).



//* =========================================
//* Replacing String Content:
//* =========================================
//! Replacing String Content:
//? replace() : The replace method is used to replace a specified value with another value.
// const str = "Hello, World!";
// const newStr = str.replace("World", "JavaScript");
// console.log(newStr); // Outputs: Hello, JavaScript!

//? Case-Insensitive Replacement: To perform a case-insensitive replacement, you can use the i flag in the regular expression.

// let originalString = "Hello, World! How are you, World?";
// let replacedString = originalString.replace(/world/gi, "vinod");
// console.log(replacedString);

//* =========================================
//* Other Useful Methods:
//* =========================================

//! Other Useful Methods:
//? toUpperCase and toLowerCase: Converts the string to uppercase or lowercase.
// const str = "JavaScript";
// console.log(str.toUpperCase()); // Outputs: JAVASCRIPT
// console.log(str.toLowerCase()); // Outputs: javascript

//? trim: Removes whitespace from both ends of the string.
// const str = "   Hello, World!   ";
// console.log(str.length);

// let trimStr = str.trim();
// console.log(trimStr);
// console.log(trimStr.length);

//? split: Splits the string into an array of substrings based on a specified delimiter.

// const str = "Hello,my,name,is,yuvraj,thakur";
// let strArr = str.split(",");//Array mei convert kardia bhaiya idhar to 

// let strArr=str.split(",").reverse();
// technique to reverse the array

// let strArr=str.split(",").reverse().join();

// array is converted to reversed string separated by comma join is used

// console.log( strArr);

//* =========================================
//* //! Interview Questions
//* =========================================

//! 1: Write a JavaScript function that prints the letters 'a' through 'z' in the console. You should use a loop to iterate through the letters and print each one on a new line.

// console.log("z".charCodeAt(0));

// for(let char=97;char<=122;char++)
// {
//     console.log(String.fromCharCode(char),char);
// }

// String.fromCharCode(char) is a method to generate char from character of code; simpple

//! 2: Write a function to count the number of vowels in a string?

// const checkNumberOfVowels=(str)=>
// {    
//     let count=0;

//     // todo we cannot assignn constant variable more than one times

//     const vowel="aeiou";

//     for(let char of str)
//     {
//         if(vowel.includes(char))
//         {
//             count=count+1;
//         }
//     }

//     return count;
// }

// console.log(checkNumberOfVowels("aeiouaeiouaaadewaeeiou"))

// ? this is the right way.........


//! 3: Write a function to check if all the vowels presents in a string or not?

// const checkAllVowelPresentOrNot= (str)=>
// {
//     const vowels="aeiou";

//     for(let char of vowels)
//     {
        
//     if(!str.includes(char))
//     {
//         return false;
//     }

//     }

//     return true
// }

// console.log(checkAllVowelPresentOrNot('kndcjksndckjsnuyhy8qwp;WJP   aasdjalqa;l'))


//! 4: Write a JavaScript function to check if the given sting is Pangram or not?

// pangram matlav kisi bhi string mei saare alphabets present hei ki nhi hei a to z

const pangramChecker=(str) =>
{
    // let inputArr = str.toLowerCase().split(""); 
    // // it will make every char of str as a single array element separated on the basis of no space
    // // console.log(inputArr);
    // // console.log(inputArr)

    // const values= inputArr.filter(
    //     (ele)=>{return ele.charCodeAt() >= "a".charCodeAt() && ele.charCodeAt() <="z".charCodeAt();}
    // );

    // console.log(values)
    // destructuring is done in pur array form of set

//    return [...new Set(values)].length ===26;

    //   return new Set(values).size ===26;
}


// console.log(pangramChecker("abcdefghijklmnopqrstuvwxyzjsndcjbsdh"))
