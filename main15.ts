let guestlist:string[]=["ahmad ali" , "shahbaz", "sami"];
//for (let i = 0; i < guestlist.length; i++){
  //  console.log("Dear Mr\n",guestlist[i],"\n it is our pleasur to invite you to dinner\n thank you");
    
//}
let absentguest ="ahmad ali";
let newguest="shahbaz";
guestlist[0]=newguest;

for (let i = 0; i < guestlist.length; i++){
    console.log("Dear Mr\n",guestlist[i],"\n it is our pleasur to invite you to dinner\n thank you");
    
}
console.log(absentguest,"is not comming to the dinner");
