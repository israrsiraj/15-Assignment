
let guestlist : string[] = ["Junaid", "Idress", "Ashhad"];

let canNotAttend : string = "Ashhad"

console.log(`${canNotAttend} can not make it, for dinner`);

let newGuest : string = "Ali";

guestlist[guestlist.indexOf(canNotAttend)]=newGuest;

console.log(guestlist);

guestlist.map((item)=> console.log(`Hello, ${item} you are invited to dinner`));