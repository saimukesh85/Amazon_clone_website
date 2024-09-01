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
    if(count===0){
        document.querySelector(".signinbutton").innerHTML="Hello,sai mukesh";
        count++;
    }
    else{
        document.querySelector(".signinbutton").innerHTML="Already signed ijjllajsdjdg j  fjioj  fjioidj  n";
        count=0;
    }
}