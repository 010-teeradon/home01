let score: number = 80;

if (score >= 80) {
    console.log("score: %d | Grade = A",score);
}else if(score >= 70){
    console.log("score: %d | Grade = B",score);
}else if(score >= 60){
    console.log("score: %d | Grade = C",score);
}else if(score >= 50){
    console.log("score: %d | Grade = D",score);
}else if(score >= 40){
    console.log("score: %d | Grade = E",score);
}else
    console.log("score: %d | Grade = F",score);
console.log("Error Case: Error: The score must be between 0 and 100.");