const toggle = document.getElementById('toggleDark');

const header = document.getElementById('header');


toggle.addEventListener('click',function(){
    this.classList.toggle("bi-brightness-high-fill");
    if(this.classList.toggle("bi-moon")){
    header.style.background ="black"
    header.style.color ="white"
    header.style.transition='1s'
    }
    else{
    header.style.background ="white";
    header.style.color ="black"
    header.style.transition='1s'
    }
})