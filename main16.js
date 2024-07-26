var guestlist = ["ahmad ali", "shahbaz", "sami"];
var absentguest = "ahmad ali";
var newguest = "shahbaz";
guestlist[0] = newguest;
console.log("good news ,we found a bigger dinner table so we invite 3 more guest");
guestlist.unshift("naveed ahmed");
guestlist.splice(2, 0, "feroz");
guestlist.push("ahmed ali");
for (var i = 0; i < guestlist.length; i++) {
    console.log("Dear Mr\n", guestlist[i], "\n it is our pleasur to invite you to dinner\n thank you");
}
