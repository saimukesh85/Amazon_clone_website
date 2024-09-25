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
let decarativeproduct=[1,2,3,4,5,6,7]
let secondhtml="";
decarativeproduct.forEach((item)=>{
    secondhtml +=`<div><button class="second-row-product-img"><img src="photos/d${item}.jpg"></button></div>`
}
)
document.querySelector('.second-row-of-items').innerHTML=secondhtml;
/* --------------code for second page--------------------*/
const pro_details=[
    img1={id:img1,
    img:photos/d1.jpg,
    name: tree,
    price: 102
    }

]