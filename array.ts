let student: string[] = ["Mark","Alice","Jone","Jenny"];
let mark: number[]= [84,57,74,95];
for(let i: number=0;i<4;i++){
    console.log(student[i],"ได้คะแนน",mark[i]);

}
student.push("Lucky");
student.forEach((s,x)=>{
    console.log(x, s);
})