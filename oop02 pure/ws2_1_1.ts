let salary: number=15000;
let price:number = salary*12;
let rate:number= 0;

if(price<100000){
    rate=0
    console.log("salary = %d",rate);
}else if(price<200000){
    rate=price*0.05;
    console.log("ชำระภาษี : %d",rate);
}else if(price<500000){
    rate=price*0.07;
    console.log("ชำระภาษี : %d",rate);
}else if(price<1000000){
    rate=price*0.10;
    console.log("ชำระภาษี : %d",rate);
}else
    rate=price*0.15;
    console.log("ชำระภาษี : %d",rate);