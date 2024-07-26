//magicians: Make a array of magician's name. pass the arraay to a function called show_magicians(), 
//which prints the of each magician in the array. 
var magician = ['harry potter', 'Hermione Granger', 'Ron weasley', 'Albus Dumbledore'];
function show_magicians(magicians) {
    magicians.forEach(function (Element) {
        console.log(Element);
    });
}
show_magicians(magician);
