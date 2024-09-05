function printsearch(){
    console.log(document.querySelector(".searchbar").value);
    document.querySelector(".searchbar").value="";
}
function check_enter(){
    if(event.key=="Enter"){
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