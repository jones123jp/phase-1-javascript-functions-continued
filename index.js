// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}


console.log(saturdayFun());  // This Saturday, I want to roller-skate!
console.log(saturdayFun("hike"));  // This Saturday, I want to hike!


const mondayWork = function(task = "go to the office") {
    return `This Monday, I will ${task}.`;
};

console.log(mondayWork()); // This Monday,i will go to the office!
console.log(mondayWork("fishing")); // This Monday i will go fishing!



function wrapAdjective(highlight) {
    return function(adjective) {
        return `You are ${highlight}${adjective}${highlight}!`;
    };
}

// Example usage
const wrapWithStar = wrapAdjective('*');
console.log(wrapWithStar('amazing')); // Output: You are *amazing*!
