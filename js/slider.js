let lenta=document.querySelector(".slide-wrapper ul");

let i=0;
function rightSlider(){
i++; 
if(lenta.querySelectorAll("li").length==i){
    i=0
};
lenta.style.left=-(i*1100) +"px";

}
function leftSlider(){
    i--; 
    if(i==-1){
       i=lenta.querySelectorAll("li").length-1
    };
    lenta.style.left=-(i*1100) +"px";
    }
    