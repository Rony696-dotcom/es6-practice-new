// const ages = [10, 12, 13, 15, 18, 17];
// const ages2 = [25, 24, 23, 27,]
// const allAges = ages.concat(ages2);
// console.log(allAges);



// const ages = [10, 12, 13, 15, 18, 17];
// const ages2 = [25, 24, 23, 27,];
// const ages3 = [30, 55, 40, 50];
// const allAges2 = ages.concat(ages2).concat(ages3);
// console.log(allAges2);






// const ages = [10, 12, 13, 15, 18, 17];
// const ages2 = [25, 24, 23, 27,];
// const ages3 = [30, 55, 40, 50];
// const allAges3 = ages.concat(ages2).concat([2]).concat(ages3);
// console.log(allAges3);




const ages = [10, 12, 13, 15, 18, 17];
const ages2 = [25, 24, 23, 27,];
const ages3 = [30, 55, 40, 50];
const allAges4 = [...ages, ...ages2, 2, ...ages3]; //Spread Operato using three dot
//console.log(allAges4);



//Find the Maximum value
const business = 650;
const salary = 450;
const job = 350;
const maximum = Math.max(business, salary, job);
//console.log(maximum); 


//Find the Maximum value from the Array using three dot
const takaPoysa = [750,650, 450, 350];
const maximum2 = Math.max(...takaPoysa);
console.log(maximum2);



