var guestlist = ["ahmed", "ali", "khurram"];
// for (var i = 0; i < guestlist.length; i++) {
//     console.log("Dear Mr\n", guestlist[i], "\nIt is our pleasur to invite you to dinner\nthank you");
// }
// var guestlist = ["ahmad ali", "shahbaz", "sami"];
//for (let i = 0; i < guestlist.length; i++){
//  console.log("Dear Mr\n",guestlist[i],"\n it is our pleasur to invite you to dinner\n thank you");
//}
// var absentguest = "ahmad ali";
// var newguest = "shahbaz";
// guestlist[0] = newguest;
// for (var i = 0; i < guestlist.length; i++) {
//     console.log("Dear Mr\n", guestlist[i], "\n it is our pleasur to invite you to dinner\n thank you");
// }
// console.log(absentguest, "is not comming to the dinner");
// var guestlist = ["ahmad ali", "shahbaz", "sami"];
var absentguest = "ahmad ali";
var newguest = "shahbaz";
guestlist[0] = newguest;
//console.log("good news ,we found a bigger dinner table so we invite 3 more guest");
guestlist.unshift("naveed ahmed");
guestlist.splice(2, 0, "feroz");
guestlist.push("ahmed ali");
// for (var i = 0; i < guestlist.length; i++) {
//     console.log("Dear Mr\n", guestlist[i], "\n it is our pleasur to invite you to dinner\n thank you");
// }
// var guestlist = ["ahmad ali", "shahbaz", "sami"];
// var absentguest = "ahmad ali";
// var newguest = "shahbaz";
// guestlist[0] = newguest;
//console.log("good news ,we found a bigger dinner table so we invite 3 more guest");
guestlist.unshift("naveed ahmed");
guestlist.splice(2, 0, "feroz");
guestlist.push("ahmed ali");
// for (let i = 0; i < guestlist.length; i++){
//     console.log("Dear Mr\n",guestlist[i],"\n it is our pleasur to invite you to dinner\n thank you");
// // }
// console.log("sorry we can't arrange a bigger dinner table so only two guest are invited");
 while (guestlist.length > 2) {
   var removeguest = guestlist.pop();
//     console.log(removeguest, "\n sorry you are not invite to dinner");
 }
// for (var i = 0; i < guestlist.length; i++) {
//     console.log("Dear Mr\n", guestlist[i], "\n  you are still invited to dinner\n thank you");
// }
guestlist.splice(0, 2);
console.log(guestlist);

//Exercise 19
//print a message indicating the number of people you are inviting to dinner.
console.log(`total number of guest are:${ guestlist.length}`);

