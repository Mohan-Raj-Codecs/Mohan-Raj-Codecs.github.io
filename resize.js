function resizer(){
    if(screen.width<400){
    document.body.style="background-image:url(cons(320).jpg);";
    }else if(screen.width<520 && screen.width>400){
    document.body.style="background-image:url(cons(480).jpg);";
    }else
    document.body.style="background-image:url(cons.jpg);";
    
}