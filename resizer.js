function resizer(){
    var UnderConst = document.getElementById("UnderConstruction");
    var Since = document.getElementById("Since");
    var Mohan = document.getElementById("Mohan");
    var NeedHand = document.getElementById("Needhand");
    var JoinHand = document.getElementById("JoinHand");
    //var Empty = document.getElementById("Empty");
    if(screen.width<400){  //Android Look
    document.body.style="background-image:url(cons(320).jpg);";
    UnderConst.style.fontSize="36px";
    Since.style.fontSize="7.8px";
    Mohan.style.fontSize="7.8px";
    NeedHand.style.fontSize="12.8px";
    JoinHand.style.fontSize="20px";
    }else if(screen.width<520 && screen.width>400){ //Tablet Mode
    document.body.style="background-image:url(cons(480).jpg);";
    UnderConst.style.fontSize="54px";
    Since.style.fontSize="11.7px";
    Mohan.style.fontSize="11.7px";
    NeedHand.style.fontSize="19.2px";
    JoinHand.style.fontSize="30px";
    }else{  //PC Mode
    document.body.style="background-image:url(cons.jpg);";
    }
}

resizer();