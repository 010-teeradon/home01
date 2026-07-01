export {};
function calculatePrice(price: number,discountPercent:number){
    let afterdics= price-(price*discountPercent/100);
    if(afterdics>0){
        return afterdics;
    }else
        return 0;
}
let price1: number = 200;
let price2: number = 500;
console.log(`สินค้าราคา ${price1} บาท ราคาสุทธิหลังหลักราคาส่วนลด ${calculatePrice(price1,120)} บาท`);
console.log(`สินค้าราคา ${price1} บาท ราคาสุทธิหลังหลักราคาส่วนลด ${calculatePrice(price2,10)} บาท`);