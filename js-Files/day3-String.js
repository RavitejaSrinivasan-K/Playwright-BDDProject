//STRING METHODS 

var str = "Javascript Programming"

console.log(str)

console.log(str.length)

console.log(str[0])



//1 SLICE - Starting index between (ending index +1)

var str = "Javascript Programming"

var s = str.slice(0, 10)
console.log(s)


var s = str.slice(11, 22)
console.log(s)

var s = str.slice(-22, -11)
console.log(s)



//2 SUBSTRING
var s = str.substring(11, 22)
console.log(s)

var s = str.substring(-22, -11)
console.log(s)



//3 REPLACE
var str = "Java Selenium  JavaScript Playwright"

var s = str.replace("Java" , "Type")
console.log(s)


//4 REPLACE ALL
var s = str.replaceAll("Java" , '#')
console.log(s)



//5 UPPERCASE
var str = "JavaScript"

console.log(str.toUpperCase())


//6 LOWERCASE
var str = "PLAYWRIGHT"

console.log(str.toLowerCase())



//7 CONCAT
var str1 = "Javascript"
var str2 = "Programming"
var str3 = "langauge"

console.log(str2.concat(str3, str1))



//8 TRIM
var str = '   Javascript  with  Playwright   '

console.log(str.trim())
console.log(str.trimEnd())
console.log(str.trimStart())



//10 INDEX OF 
var str = "JavaScript Program"

console.log(str.indexOf('z'))

//11 LAST INDEX OF
console.log(str.lastIndexOf('a'))

//12 CHAR AT
console.log(str.charAt(100))



//13 REPEAT
var str  = "javascript "

console.log(str.repeat(5))



//14 SEARCH
var str = "Javascript with Playwright"

console.log(str.search('w'))


//15 SPLIT
var str = "Raviteja@gmail.com"

console.log(str.split('a'))



//BOOLEAN RETURN TYPED METHODS
var str = "JavaScript with Playwright"

//includes
console.log(str.includes("z"))


//starts with
console.log(str.startsWith('J'))

//ends with
console.log(str.endsWith('h'))



/**
 * TASK 1 : Array
 * 
 * Input :
 *     ["arun" , "Balu" , "chandru" , "babu" , "Arjun" , "Chandhini"]
 * 
 * output :
 *     ["Arjun" , "Balu" , "Chandhini", "arun", "babu", "chandru"]
 */

 

/**
 * TASK 2 : String
 * 
 *  Input :
 *      "JavaScript with Playwright"
 * 
 *  Output :
 *      "thgirwyalP htiw tpircSavaJ"
 */


