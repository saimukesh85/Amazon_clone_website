const pro_details1=[
    {id:"img8",
    img:"photos/d8.jpg",
    name:"Apple iPhone 13 (128GB) - Starlight",
    price: 41999
    },
    {
        id:"img9",
    img:"photos/d9.jpg",
    name:"iQOO Z9x 5G (Tornado Green, 6GB RAM, 128GB Storage) | Snapdragon 6 Gen 1 with 560k+ AnTuTu Score | 6000mAh Battery with 7.99mm Slim Design | 44W FlashCharge",
    price: 41999
    },
    {
        id:"img10",
    img:"photos/d10.jpg",
    name:"iQOO Z9x 5G (Tornado Green, 6GB RAM, 128GB Storage) | Snapdragon 6 Gen 1 with 560k+ AnTuTu Score | 6000mAh Battery with 7.99mm Slim Design | 44W FlashCharge",
    price: 41999
    },
    {
        id:"img11",
    img:"photos/d11.jpg",
    name:"iQOO Z9x 5G (Tornado Green, 6GB RAM, 128GB Storage) | Snapdragon 6 Gen 1 with 560k+ AnTuTu Score | 6000mAh Battery with 7.99mm Slim Design | 44W FlashCharge",
    price: 41999
    },
    {
        id:"img12",
    img:"photos/d12.jpg",
    name:"iQOO Z9x 5G (Tornado Green, 6GB RAM, 128GB Storage) | Snapdragon 6 Gen 1 with 560k+ AnTuTu Score | 6000mAh Battery with 7.99mm Slim Design | 44W FlashCharge",
    price: 41999
    },
    {
        id:"img13",
    img:"photos/d13.jpg",
    name:"iQOO Z9x 5G (Tornado Green, 6GB RAM, 128GB Storage) | Snapdragon 6 Gen 1 with 560k+ AnTuTu Score | 6000mAh Battery with 7.99mm Slim Design | 44W FlashCharge",
    price: 41999
    },
    {
        id:"img14",
    img:"photos/d14.jpg",
    name:"iQOO Z9x 5G (Tornado Green, 6GB RAM, 128GB Storage) | Snapdragon 6 Gen 1 with 560k+ AnTuTu Score | 6000mAh Battery with 7.99mm Slim Design | 44W FlashCharge",
    price: 41999
    }
    

]
const pro_details2={
    img1:{id:"img1",
    img:"photos/d1.jpg",
    name:"Apple iPhone 13 (128GB) - Starlight",
    price: 41999
    },
    img2:{
        id:"img2",
    img:"photos/d2.jpg",
    name:"iQOO Z9x 5G (Tornado Green, 6GB RAM, 128GB Storage) | Snapdragon 6 Gen 1 with 560k+ AnTuTu Score | 6000mAh Battery with 7.99mm Slim Design | 44W FlashCharge",
    price: 41999
    },
    img3:{
        id:"img3",
    img:"photos/d3.jpg",
    name:"iQOO Z9x 5G (Tornado Green, 6GB RAM, 128GB Storage) | Snapdragon 6 Gen 1 with 560k+ AnTuTu Score | 6000mAh Battery with 7.99mm Slim Design | 44W FlashCharge",
    price: 41999
    },
    img4:{
        id:"img4",
    img:"photos/d4.jpg",
    name:"iQOO Z9x 5G (Tornado Green, 6GB RAM, 128GB Storage) | Snapdragon 6 Gen 1 with 560k+ AnTuTu Score | 6000mAh Battery with 7.99mm Slim Design | 44W FlashCharge",
    price: 41999
    },
    img5:{
        id:"img5",
    img:"photos/d5.jpg",
    name:"iQOO Z9x 5G (Tornado Green, 6GB RAM, 128GB Storage) | Snapdragon 6 Gen 1 with 560k+ AnTuTu Score | 6000mAh Battery with 7.99mm Slim Design | 44W FlashCharge",
    price: 41999
    },
    img6:{
        id:"img6",
    img:"photos/d6.jpg",
    name:"iQOO Z9x 5G (Tornado Green, 6GB RAM, 128GB Storage) | Snapdragon 6 Gen 1 with 560k+ AnTuTu Score | 6000mAh Battery with 7.99mm Slim Design | 44W FlashCharge",
    price: 41999
    },
    img7:{
        id:"img7",
    img:"photos/d7.jpg",
    name:"iQOO Z9x 5G (Tornado Green, 6GB RAM, 128GB Storage) | Snapdragon 6 Gen 1 with 560k+ AnTuTu Score | 6000mAh Battery with 7.99mm Slim Design | 44W FlashCharge",
    price: 41999
    }
    

}
function printsearch(){
    console.log(document.querySelector(".searchbar").value);
    document.querySelector(".searchbar").value="";
}
function check_enter(){
    if(event.key==="Enter"){
        printsearch();
    }
}
count=0;
function signed(){
    if(count%2===0){
        const html='<button class="js-button">Sign in</button>';
        document.querySelector(".js-signin")
        .innerHTML=html;
        count++;
    }
    else{
        document.querySelector(".js-signin").innerHTML="";
        count++;
    }
}

let firsthtml="";
Object.values(pro_details1).forEach((item)=>{
    firsthtml+=`<div><img class="im" src="${item.img}"><button class="add-to-cart-button" data-product-id="${item.id}" >Add to Cart</button></div>`
})
document.querySelector(".products").innerHTML=firsthtml;

let secondhtml="";
Object.values(pro_details2).forEach((item)=>{
    secondhtml +=`<div><button class="second-row-product-img"><img src="${item.img}"></button><button class="add-to-cart-button" data-product-id="${item.id}">Add to Cart</button></div>`
}
)
document.querySelector('.second-row-of-items').innerHTML=secondhtml;
document.querySelector(".cart-count-num").innerHTML=0;
let cart_count=1;

const addcartbuttons=document.querySelectorAll('.add-to-cart-button');
addcartbuttons.forEach(button=>{
    button.addEventListener('click',()=>{
        document.querySelector('.cart-count-num').innerHTML=cart_count;
        cart_count++;
    })
})
let cart_items="";
addcartbuttons.forEach(item=>{
    item.addEventListener('click',()=>{
        const det=item.dataset.productId;
        Object.values(pro_details1).forEach(prod=>{
            if(prod.id===det){
                cart_items +=`<div class="maincart">
        <div class="img1">
       
            <img class="cart-img" src="${prod.img}">
        </div>
        <div class="pro-det">
            <div class="pro-name">${prod.name}

        </div>
        <div class="stock-button">In stock</div>
        <div class="elig-button">Eligible for FREE Shipping</div>
        <div class="price-text">
            <div style="font-weight: bolder; font-size: 20px;">Price:</div>
            <div style="font-size: 17px;margin-left: 7px; font-weight: bold;color: #b12704; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">&#8377;${prod.price}</div>
        </div>
        <div class="quen-button-div"><button class="qty-button">Qty: 1</button></div>
    </div>
    </div>`
            }
        })
        
    })
})
localStorage.setItem("sharedlist",JSON.stringify(cart_items));
/*const addcart=document.querySelectorAll('.add-to-cart-button');
addcart.forEach(button=>{
    button.addEventListener('click',()=>{
        let link=button.dataset.productId;
        Object.values(pro_details1).forEach(pro=>{
            if(pro.id === link){
                cart_items.push(pro)
            }
        })
        
    })
    
})*/

document.querySelector('.cart-div').addEventListener('click',()=>{
    console.log(cart_items)
})


/* --------------code for second page--------------------*/
