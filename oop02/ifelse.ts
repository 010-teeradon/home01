export{};

let status: string = "s";
let age : number=15;
console.log("Satatus: %s ,Age: %d",status,age);

if (status==="s"&&age<20){
    console.log("สถานะ: โสด และยังไม่บรรลุนิติภาวะ");
}else if(status==="s" && age>=20){
    console.log("สถานะโสด และบรรลุนิติภาวะ")
}
else if(status==="m"){
    console.log("สถานะ สมรส");
}else
    console.log("สถานะ: อื่นๆ")