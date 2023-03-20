var math = require('./Day1');

 console.log(math.Add(1, 3)); 
 console.log(math.sub(5, 2)); 
 console.log(math.mult(2, 4)); 

 try {
  console.log(math.Add('A', 3));

} 
catch (error) {
   console.error(error); 
}

// var customModule = require('./Day1');

// // try {
// //   var ageString = customModule.getAge('Marina', new Date(2000, 9, 2));
// //   console.log(ageString);

// // } catch (error) {

// //   console.error(error.message);
// // }