const pro_details=[
    img8={id:"img8",
    img:"photos/d8.jpg",
    name:"Apple iPhone 13 (128GB) - Starlight",
    price: 41999
    },
    img9={
        id:"img9",
    img:"photos/d9.jpg",
    name:"iQOO Z9x 5G (Tornado Green, 6GB RAM, 128GB Storage) | Snapdragon 6 Gen 1 with 560k+ AnTuTu Score | 6000mAh Battery with 7.99mm Slim Design | 44W FlashCharge",
    price: 41999
    },
    img10={
        id:"img10",
    img:"photos/d10.jpg",
    name:"iQOO Z9x 5G (Tornado Green, 6GB RAM, 128GB Storage) | Snapdragon 6 Gen 1 with 560k+ AnTuTu Score | 6000mAh Battery with 7.99mm Slim Design | 44W FlashCharge",
    price: 41999
    },
    img11={
        id:"img11",
    img:"photos/d11.jpg",
    name:"iQOO Z9x 5G (Tornado Green, 6GB RAM, 128GB Storage) | Snapdragon 6 Gen 1 with 560k+ AnTuTu Score | 6000mAh Battery with 7.99mm Slim Design | 44W FlashCharge",
    price: 41999
    },
    img12={
        id:"img12",
    img:"photos/d12.jpg",
    name:"iQOO Z9x 5G (Tornado Green, 6GB RAM, 128GB Storage) | Snapdragon 6 Gen 1 with 560k+ AnTuTu Score | 6000mAh Battery with 7.99mm Slim Design | 44W FlashCharge",
    price: 41999
    },
    img13={
        id:"img13",
    img:"photos/d13.jpg",
    name:"iQOO Z9x 5G (Tornado Green, 6GB RAM, 128GB Storage) | Snapdragon 6 Gen 1 with 560k+ AnTuTu Score | 6000mAh Battery with 7.99mm Slim Design | 44W FlashCharge",
    price: 41999
    },
    img14={
        id:"img14",
    img:"photos/d14.jpg",
    name:"iQOO Z9x 5G (Tornado Green, 6GB RAM, 128GB Storage) | Snapdragon 6 Gen 1 with 560k+ AnTuTu Score | 6000mAh Battery with 7.99mm Slim Design | 44W FlashCharge",
    price: 41999
    }
    

]
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
let randompro=[8,9,10,11,12,13,14];
let firsthtml="";
randompro.forEach((item)=>{
    firsthtml+=`<div><img class="im" data-product="img${item}.id"src="photos/d${item}.jpg"><button class="add-to-cart-button" onclick="addtocart();">Add to Cart</button></div>`
})
document.querySelector(".products").innerHTML=firsthtml;
let decarativeproduct=[1,2,3,4,5,6,7]
let secondhtml="";
decarativeproduct.forEach((item)=>{
    secondhtml +=`<div><button class="second-row-product-img"><img src="photos/d${item}.jpg"></button><button class="add-to-cart-button" onclick="addtocart();">Add to Cart</button></div>`
}
)
document.querySelector('.second-row-of-items').innerHTML=secondhtml;
document.querySelector(".cart-count-num").innerHTML=0;
let cart_count=1;
function addtocart(){
    document.querySelector(".cart-count-num").innerHTML=cart_count;
    cart_count++;
};
/* --------------code for second page--------------------*/

function opencart(){
    window.open("file:///C:/Users/sai%20mukesh/OneDrive/Desktop/programs/projects/amazon-clone/amazon-cart.html");
}

    


