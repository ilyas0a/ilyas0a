let star=document.getElementById('star');
let moon=document.getElementById('moon');
let yalil=document.getElementById('yalil');
let ahooo=document.getElementById('ahooo');
let chik=document.getElementById('chik');
let sama3=document.getElementById('sama3');
let ilyas=document.querySelector('.ilyas');
window.onscroll=function(){
    let value =scrollY;
    star.style.right=value+'px';
    moon.style.top=value*3+'px';
    yalil.style.top=value*1+'px';
    ahooo.style.top=value+'px';
    sama3.style.top=value+'px';

    sama3.style.left=value*3+'px';
    ilyas.style.fontSize=value+'px';
    if(scrollY>=80){
        ilyas.style.fontSize=80+'px';
        ilyas.style.position='fixed';
        if(scrollY>=352.22222900390625
            ){
            ilyas.style.disply='none'

        }else{
            ilyas.style.disply='block'
        }
      
        

    }



}