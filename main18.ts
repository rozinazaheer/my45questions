//.store the location in a array.make sure the array is not in alphabatical order.

let places :string[]=["Islamabad","Peshawar","Multan","Karachi","Lahore"]

//.print your rray its original order.

console.log("original order:",places);

//.print your array is alphabetical order without modifying the actual list.

console.log("Alphabatical order:",[...places].sort());

//. show that your array is still in its original order by printing it.

console.log("original order:",places);

//. print your array in reverse alphabatical order without changing the order of the original list

console.log("Reverse Alphabatical order:",[...places].sort().reverse());

//.show that your array is still in its original order by printing it again.

console.log("original order:",places);

//.revers the order of your list. print the array to show that its order has changed.

console.log("Reverse order",places.reverse());

//.Reverse the order of your list again. print the list to show it's back to its original order .

console.log("original order",places.reverse());

//. sort your array so it's stored alphabatical order. print the array to show that its order.
console.log("Alphabatical order",places.sort());

//.sort to change your array so it's stored in reverse alphabatical order. print the list to show.

console.log("Reverse Alphabatical order:",places.sort().reverse());


