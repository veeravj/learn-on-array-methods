const scores = [{marks: 32,name: "Yvette Merritt",},
{marks: 57,name: "Lillian Ellis",},
{marks: 22,name: "Mccall Carter",},
{marks: 21,name: "Pate Collier",},
{marks: 91,name: "Debra Beard",},
{marks: 75,name: "Nettie Hancock",},
{marks: 20,name: "Hatfield Hodge",}
];

//1)average of scores using only one array methods
let sum=0 ,topper,maxScore= -Infinity;
scores.forEach((student)=>{
   sum= student.marks+sum;
   if(student.marks>maxScore){
    maxScore=student.marks;
    topper=student.name;
   }
   
})
console.log("Average marks of the students is:", Number((sum/scores.length).toFixed(2))); //toFixed always returns a string
console.log(`Topper of the class: ${topper}`);


//2)Topper

let maximumScore = -infinity;
