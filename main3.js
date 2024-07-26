var personName = "haMMad ali";
console.log("lowercase:", personName.toLowerCase());
console.log("uppercase:", personName.toUpperCase());
console.log("tittlecase:", personName.split(" ").map(function (item) { return item.charAt(0).toUpperCase()
    + item.slice(1).toLowerCase(); }).join(" "));
