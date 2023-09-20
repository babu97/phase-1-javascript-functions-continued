// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }


function mondayWork(activity = 'go to the office' ){
    return `This Monday, I will ${activity}.`

}

function wrapAdjective(outerSymbol) {
    return function(adjective = "special") {
        return `You are ${outerSymbol}${adjective}${outerSymbol}!`;
    };
  }
  const test1 = wrapAdjective("*")("a hard worker");
console.log(test1); // Output: "You are *a hard worker*!"
