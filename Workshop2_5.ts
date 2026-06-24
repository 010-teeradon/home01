export{};
let product:[string,number,number][]=[["Laptop",999.99,10],["SmartPhone",599.99,25],["Tablet",299.99,15],["Monitor",199.99,20],["Keyboaed",49.99,30]]


for (const [Produntname, price, Quantity] of product){
    console.log("Produntname %s price %d Quantity %s",Produntname,price,Quantity);
}