//.Tests for equality and inequality with strings
console.log("Enquality test:", "Hammad Ali" === "Hammad Ali");
console.log("Inequality test:", "Hammad Ali" !== "Imran Ali");
//• Tests using the lower case function
console.log("LowerCase test:", "Hammad Ali".toLowerCase() === "hammad ali");
//• Numerical tests involving equality and inequality, greater than and
// less than, greater than or equal to, and less than or equal to
console.log("Enquality test:", 1000 === 1000); //Enquality
console.log("Inequality test:", 10 !== 9); // inequality
console.log("greater than test", 10000 > 100); //Greater than
console.log("greater than test", 10 < 100); //less than
console.log("greater than and equals to test ", 10 >= 10);
console.log("less than and equals to test ", 5 <= 10);
//• Tests using "and" and "or" operators
console.log("And oprator test", true && true);
console.log("Or oprator test", true || false);
//• Test whether an item is in a array
var bus = [1, 2, 3];
console.log("test number", bus.includes(1));
//• Test whether an item is not in a array
var bus2 = [1, 2, 3];
console.log("test number", !bus2.includes(6));
