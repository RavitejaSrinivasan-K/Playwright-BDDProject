
//OBJECT ORIENTED PROGRAMMING 

/**
 * In Javascript , Object is collection of {key : value} pair.
 *  Where each key is associated with values.
 * (Which could be a String, Number, Boolean, Array, function, even another Object).
 */

let obj = {
    name : "tej" ,
    age : 24 ,
    course : false ,
    abc : function (){
        console.log("Hello World")
    } , 
    xyz : { company : "TechM" , empId : 786 , job : true}
}

console.log(obj)


//DOT NOTATION
console.log(obj.name)

//BRACKET NOTATION
console.log(obj['age'])

//CHAINING 
console.log(obj.xyz.empId)


//ADD
obj.arr = [101, "javascript" , true]
console.log(obj)

//UPDATE
obj.name = "Dhilip"
console.log(obj)

//DELETE
delete obj.course
console.log(obj)



/**
 * In JS, OOP has 4 main pillars:
 * Object Oriented Programming System/Structure

 1.Encapsulation
      - Wrapping data + methods together inside a class.

 2.Inheritance
      - One class inherits from properties & methods to another.
 * Extends is a keyword. Use to access Parent into Child.
 * Super is a keyword. Use to access from parent objects into child class.

 3.Polymorphism
      - Same method name, different behavior.
      1. Method OverLoading - not possible 
      2. Method OverRiding 

 4.Abstraction
      - Hide internal implementation / code logic.    


1.  Class is a Blue print / Template for properties and Methods.
 * ClassName - PascalCase
 * methodName, propertyName - camelCase
 
2.  Constructor
      - A constructor is a special function used to create and initialize objects.

 * This is a Keyword. Use to represent current class objects.
 * Static is a keyword. Use to store unique values.
 * Static variable, Methods. We can access using only class name, 
    without creating an Object.
 * 
 * 
*/




//1 ENCAPSULATION  - Parent, Base, Super

class Encaps {   //PascalCase

    constructor(){
        this.name = "Vignesh"    //globalProperty
    }

    login(name){    //localParam
        console.log("Hi" , name , "Welcome to Course!")
    }

    logout(){   //methods - camelCase
        console.log("Thank you for visit" , this.name)
    }

}

let p1 = new Encaps()     //Object

p1.login("Dinesh")
p1.login("Harish")
p1.logout()
p1.logout()

let p2 = new Encaps()  
p2.login("Guna")



//INHERITENCE - Child, Derived, Sub

class Inherit extends Encaps{   

    constructor(course){
        super()
        this.course = course   
    }

   setCourse(){
    console.log("Tell me your course :" , this.course)
   }

}

let p3 = new Inherit("Playwright")
p3.setCourse()

let p4 = new Inherit("GenAi")
p4.setCourse()
p4.login("Praveen")



//POLYMARPHISM

class Poly extends Inherit{

   setCourse(fee){
        console.log("Your course fee is :" , fee)
    }

}

let p5 = new Poly()
p5.setCourse(1200)




//STATIC
class State {

    static count = 0

    constructor(){
        this.name = "Guest"
        State.count++ 
    }

   static getBalance(){
    console.log("Hi", this.name ,"Your balance is :", State.count )
    }
}

let p6 = new State()

State.getBalance()
State.getBalance()

let p7 = new State()
State.getBalance()


