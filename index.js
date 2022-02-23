const saturdayFun = (input = "roller-skate") => {
  return `This Saturday, I want to ${input}!`;
};

const mondayWork = function (input = "go to the office") {
  return `This Monday, I will ${input}.`;
};

const wrapAdjective = function (style = "*") {
  //   console.log("wrap fxn ran");
  return function (adjective = "special") {
    console.log(`You are ${style}${adjective}${style}!`);
    return `You are ${style}${adjective}${style}!`;
  };
};
// wrapAdjective();

//I.I.F.E.----> Immediately-Invoked Function Expression
// (function (baseNumber) {
//  console.log(baseNumber); //it is 2
//   return baseNumber + 3;
// })(2);

function outer(greeting, msg = "It's a fine day to learn") {
  const innerFunction = function (name, lang = "Python") {
    return `${greeting}, ${name}! ${msg} ${lang}`; // 4
  };
  return innerFunction("student", "JavaScript"); // 5
}
// outer("Hello"); //=> "Hello, student! It's a fine day to learn JavaScript"

const arr = (function (thingToAdd) {
  const base = 3;
  return [
    //---^- this bracket means the return is an array
    function () {
      //-----------------------------PART A
      return base + thingToAdd; //---PART A
      //-----------------------------PART A
    },
    function () {
      //-----------------------------PART B
      return base; //----------------PART B
      //-----------------------------PART B
    },
  ];
})(2); //<---this 2 is the thingToAdd

console.log(arr[0](), "Array Part A");
console.log(arr[1](), "Array Part B");

//////////////////////////////////
// const fn = function () {
//   console.log("Banana");
// };
// fn();
