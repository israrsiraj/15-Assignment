
var guestlist = ["Junaid", "Idress", "Ashhad"];

var canNotAttend = "Ashhad";

console.log("".concat(canNotAttend, " can not make it, for dinner"));

var newGuest = "Ali";

guestlist[guestlist.indexOf(canNotAttend)] = newGuest;

console.log(guestlist);

guestlist.map(function (item) { return console.log("Hello, ".concat(item, " you are invited to dinner")); });
