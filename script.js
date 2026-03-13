function toggleMenu(){

let nav=document.getElementById("nav");

if(nav.style.display==="flex"){
nav.style.display="none";
}else{
nav.style.display="flex";
}

}

window.onscroll=function(){

let btn=document.getElementById("topBtn");

if(document.body.scrollTop>200 || document.documentElement.scrollTop>200){
btn.style.display="block";
}else{
btn.style.display="none";
}

}

function topFunction(){

document.body.scrollTop=0;
document.documentElement.scrollTop=0;

}

const faders=document.querySelectorAll(".fade");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

faders.forEach(el=>observer.observe(el));