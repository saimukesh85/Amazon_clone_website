
let cart_product=JSON.parse(localStorage.getItem("sharedlist"));
document.querySelector('body').addEventListener('click',()=>{
    console.log(cart_product)
    document.querySelector('.js-product-list').innerHTML=cart_product;
})