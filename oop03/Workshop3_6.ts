type  Category= "Electronics" | "Clothing" | "Food";
interface Product{
    readonly id: number;
    name: string;
    category: Category;
    price: number;
}
let product: Product[] = [
    {id:1, name:"Labtop",category:"Electronics",price:20000},
    {id:2, name:"T-shirt",category:"Clothing",price:299},
    {id:3, name:"Apple", category:"Food",price:20}
]
function filterCat(category: Category):Product[]{
    let catList=[];
    for(let i=0;i<product.length;i++){
        if(product[i].category===category)
            catList.push(product[i]);
    }
    return catList;
}
filterCat("Clothing");
console.log(filterCat("Clothing"));
