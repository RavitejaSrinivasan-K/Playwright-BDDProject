//We can store one or more values - any values
//Array will start from Index - 0,1,2,3,...
//Length will start from 1,2,3,4,....


var arr = [10, "raviteja", false, [202, true, "playwright"]]

console.log(arr)
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])

console.log(arr.length)   //porperty
console.log(arr.length - 1)  //Index count

console.log(arr[3])
console.log(arr[3][0])   //2D Array
console.log(arr[3][1])
console.log(arr[3][2])




//1 PUSH
var ar = [10, 20, 30, 40]

ar.push(500, true, "playwright")
console.log(ar)

//2 POP
ar.pop()
console.log(ar)


//3 SHIFT 
var arr = [100, 200, 300, 400]

arr.shift()
console.log(arr)

//4 UNSHIFT
arr.unshift(1, 2, 3)
console.log(arr)



//5 CONCAT
var arr1 = [1, 2, 3]
var arr2 = [4, 5, 6]
var arr3 = [7, 8, 9]

var s = arr1.concat(arr2, arr3)
console.log(s)


//Diff ;
arr1.push(arr2, arr3)
console.log(arr1)



//6 JOIN
var ar = [10, 20, 30, 40]

var s = ar.join(' <-> ')
console.log(s)



//7 REVERSE
var arr = [10, false, "javascript", 202, true]

arr.reverse()
console.log(arr)


//8 SLICE - Staring index between (Ending index +1)

var arr = [100, 200, 300, 400, 500, 600, 700]

var s = arr.slice(2, 5)
console.log(s)


//9 TO STRING
var arr = [10, 20, "javascript", "playwright", true, false]

var s = arr.toString()
console.log(s)


//10 MAP - Transformatter

var m = [4, 9, 16, 25, 36, "javascript"]

var s = m.map(function (v, i, a){
    return v + 2
})

console.log(s)



//11 FILTER

var f = [1,2,3,4,5,6,7,8,9]

var s = f.filter(function(v){
    return v > 2
})
console.log(s)


//Odd & Even
var s = f.filter(function(v){
    return v % 2 != 0
})
console.log(s)



//12 VALUES
var v = [101, "javascript" , false, 202]

var s = v.values()
for (const e of s) {
    console.log(e)
}


//13 FOR EACH
v.forEach(function(a, b){
    console.log(a , b)
})



//14 REDUCE
var r = [10, 20, 30, 40]

var s = r.reduce(function(prev , cur){
    return prev + cur
}, 5)

console.log(s)

//prev + cur
//5 + 10 = 15
//15 + 20 = 35
//35 + 30 = 65
//65 + 40 = 105



//15 SPLICE - Starting index, Delete countNumber, ...Values
var sp = [100, 200, 300, 400, 500, 600, 700]

//remove
sp.splice(2, 3)
console.log(sp)

//replace
sp.splice(2, 1, 1, 10, 2, 20)
console.log(sp)

//add
sp.splice(2, 0, "javascript", true ,"playwright")
console.log(sp)



//16 SORT

var sot = [11, 9, 81, 23, 18, 7, 2, 9, 16, 11]

//ASC
var asc = sot.sort(function(a, b){
    return a - b
})
console.log(asc)

//a - b
//11 - 9 = 2 (swap)
//11 - 81 = -70 (no swap)
//11 - 23 = -12 (no swap)
//11 - 18 = -7 (no swap)
//11 - 7 = 4 (swap)
//11 - 2 = 9 (swap)
//11 - 9 = 2 (swap)
//11 - 16 = -5 (no swap)
//11 - 11 = 0 (no swap)


var dsc = sot.sort(function(a, b){
    return b - a
})
console.log(dsc)



