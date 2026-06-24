export{};
let student: [string,number,string][] = [["mark",50,"D"],["Jenny",87,"D"],["Jim",75,"b"]];
console.log(student);

student.push(["Lucky",58,"D"]);
for (const [std, mark, grade] of student){
    console.log("Student %d Mark %d Grade %s",std,mark,grade);
}