
//OBJECT ORIENTED PROGRAMMING 

/**
 * In Javascript , Object is collection of {key : value} pair.
 *  Where each key is associated with values.
 * (Which could be a String, Number, Boolean, Array, function, even another Object).
 */

let obj = {
     name : "Tej" , 
     age : 24 ,
     course : true , 
     abc : function (){
          console.log("Helo World!")
     } , 
     xyz : { company : "TechM" , empId : 786 , job : false}
}


//DOT NOTATION
console.log(obj.name)

//BRACKET NOTATION
console.log(obj['age'])


//CHAINING ACCESS
console.log(obj.xyz.empId)


//ADD
obj.arr = [10, "playwright" , true]
console.log(obj)


//REPLACE
obj.name = "David"
console.log(obj)


//DELETE
delete obj.abc
console.log(obj)





/**
 * In JS, OOP has 4 main pillars:
 * Object Oriented Programming System/Structure

 1.Encapsulation
      - Wrapping data + methods together inside a class.

 2.Inheritance
      - One class inherits properties & methods from another class.
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



//1 ENCAPS
class LoginPage {

     constructor(){
          this.user = "Salman"    //Global
     }

     browserLaunch(){    //methodName
          console.log("Browser launched properly")
     }

     login(pass){     //local
          console.log("User enters username & password" , this.user , pass)
     }

     verifyDashboard(){
          console.log("User should see dashboard page", this.user )
     }
}

//Object
let p1 = new LoginPage()

p1.browserLaunch()
p1.login("Tester@123")
p1.verifyDashboard()





//2 INHERIT
class Product extends LoginPage{

     constructor(productName){
          super()
          this.productName = productName
     }

     selectProduct(){
          console.log("You selected product is" , this.productName)
     }
}

let p2 = new Product("Mobiles")
p2.selectProduct()

let p3 = new Product("Laptops")
p3.selectProduct()
p3.login("1234")



//3 POLYMARPHISM - OVERRIDING

class PersonA {

    payment(){
     console.log("Your course fees is : 12000" )
    }
}

let a1 = new PersonA()
a1.payment()


class PersonB extends PersonA {

   payment(){
      console.log("Your course fees is : 15000" )
    }
}

let a2 = new PersonB()
a2.payment()
a2.payment()

a1.payment()




//STATIC

class FinalStatic{

     static countEmail = 0   //static variable

     constructor(){
          FinalStatic.countEmail++
          this.userIdCount = 0
     }

     static display(){
          console.log("Total Email id counts :" , FinalStatic.countEmail)
     }

     virtual(){
          console.log("Total UserID count" , ++this.userIdCount)
     }

}

FinalStatic.display()

FinalStatic.display()

let b1 = new FinalStatic()   //Email ID = Person
FinalStatic.display()  
FinalStatic.display()
FinalStatic.display()

b1.virtual()    //UserID
b1.virtual()


var b2 = new FinalStatic()   
FinalStatic.display()

b2.virtual()

var b2 = new FinalStatic()  
b2.virtual()
