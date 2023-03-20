var Add= function add(a, b) {

    if (isNaN(a) || isNaN(b)) {

      return ('Invalid arguments');
    }
    return a + b;
  }


  var sub= function add(a, b) {
    if (isNaN(a) || isNaN(b)) {
      return ('Invalid arguments');
    }
    return a - b;
  }

  var mult= function add(a, b) {
    if (isNaN(a) || isNaN(b)) {
      return ('Invalid argument');
    }
    return a * b;
  }

module.exports={ 
    
        Add:Add ,
        sub: sub,
        mult: mult 

      };


// var getAge =function(name, birthDate) {
//     const currentDate = new Date();
//     const yearDiff = currentDate.getFullYear() - birthDate.getFullYear();

//     if (yearDiff < 0) {
//       throw new Error('Invalid birth year');
//     }

//     return `Hello ${name}, your age now is: ${yearDiff}`;
//   }

//    module.exports={ 
    
//     getAge:getAge ,
       
//       };
