//magicians: Make a array of magician's name. pass the arraay to a function called show_magicians(), 
//which prints the of each magician in the array. 

let magician : string[]=['harry potter', 'Hermione Granger','Ron weasley','Albus Dumbledore'];
function show_magicians(magicians:string[]){
    magicians.forEach(Element =>{
        console.log(Element);
        
    });

    
}

show_magicians(magician);