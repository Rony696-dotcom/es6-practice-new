const person = {name: "Rony", age: 23, job:"web Devloper", address:"THG", gfName:"Error", phone:"01798994060"};



// console.log(person.gfName);
// console.log(person.gfName);
// console.log(person.gfName);
// console.log(person.gfName);
// console.log(person.phone);


// const gfName = person.gfName;
// const phone = person.phone;

// console.log(gfName, phone);



const { phone, gfName, address,job } = person;
//console.log(phone,job,gfName);



//Destructure in Array

const friends = ['Nym', 'Asu', 'China', 'Jabra', 'Chorna'];
const [chotoFriend, tarpor, ...bakira] = friends;
//console.log(chotoFriend, tarpor);
console.log(bakira);