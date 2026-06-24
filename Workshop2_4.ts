export{};
let score: number[]=[75,85,95,64,35];
let student: [number,string]= [1,"Jone Doe"];
let total: number=0;
let avg: number=0;
console.log("Student ID: %d Name: %s",student[0],student[1]);
for(let i: number=0;i<5;i++){
    console.log("test %d score: %d",i,score[i]);
    total += score[i];
}
console.log("Total Score : %d" ,total);
avg=total/5;
console.log("Average Score: %d",avg);
