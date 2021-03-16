//case: a business is open from 9h to 16h, they have a robot to greet the client at the entrance door, write a program so the robot can greet with "good morning" or "good afternoon" depending on the time

// How to do it

// 1. Declare a variable
// 2. Write if statement
// 3. Test
// 4. Write in ternary
// 5. Write a condition for off hours

let hour = 9

if(hour >= 9 && hour < 12){
  console.log("good morning")
} else if (hour >= 12 && hour < 17) {
  console.log("good afternoon")
} else {
  console.log("store is closed")
}

//ternary operator

const greet = hour >= 9 && hour < 12 
                ? console.log("good morning") 
                : hour >= 12 && hour < 17
                ? console.log("good afternoon")
                : console.log("store is closed")

// Write a program that console.logs “kid”, “teenager” or “adult” taking in consideration the age.
                
  // if age is less than 13 - console.log(“kid”)
  // if age is between 13 and 19 - console.log(“teenager”)
  // if age is more than 19 - console.log(“adult”)
                