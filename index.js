let qrimg=document.getElementById("qrimg");
let imgbox=document.getElementById("imgbox");
let qrtext=document.getElementById("qrtext");
let btn=document.getElementById("btn");

btn.addEventListener("click",function(){
if (qrtext.value === ""){
    alert("Please Enter url or Text!");
}

else{
    qrimg.src ="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
    imgbox.classList.add("show");
}

})
