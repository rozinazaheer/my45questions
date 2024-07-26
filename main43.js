//unchanged magicians:start with your work from exercise 40. call the funtion 
//make_great()with a copy of the array of magicians' names.becouse  
//the original array will be unchanged.return the new array and store 
//it in a seperate array.call show_magicians()with each array to show  that you have
// one array of the original names and one array with  the creat added to each magician'name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magician = ['Hurry potter ', 'Hermione ', 'Ron Weasley', 'Albus Dumbledore'];
function copyArray(arr) {
    return __spreadArray([], arr, true);
}
function make_great(magicianArray) {
    for (var i = 0; i < magicianArray.length; i++) {
        magicianArray[i] = 'the great' + magicianArray[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(function (Element) {
        console.log(Element);
    });
}
var copyMagicianArray = copyArray(magician);
make_great(copyMagicianArray);
console.log('\n\nthis is my orignal array:');
show_magicians(magician);
console.log('\n\nthis is my modfied copy of the array:');
show_magicians(copyMagicianArray);
