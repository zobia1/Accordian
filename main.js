
const plus=document.getElementById('plus');
const bit=document.getElementsByClassName('bit');


    
 for(let i=0;i<bit.length; i++){
    bit[i].addEventListener("click",function(){
        this.classList.toggle("active");
        var panel=this.nextElementSibling;
        if(panel.style.display==="block"){
            panel.style.display="none";
        }else{
            panel.style.display="block";
            }
        }
    )};
    


