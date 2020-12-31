function smart_scroll(){
    
    /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("smart-scroll").style.top = "0";
      } else {
        document.getElementById("smart-scroll").style.top = "-100px";
      }
      prevScrollpos = currentScrollPos;
    }
}
function footer_error(ele){
  function diserror(msg){
    var boxe=document.getElementById("close footer error");
    var dialog=document.getElementById("inside error");
    boxe.style.display="inline";
    dialog.innerHTML=msg;
  }
  if(ele=="facebook fake")
    diserror("I didn't yet Created a Facebook Account 😳");
  else if(ele=="instagram fake")
    diserror("I deleted it before 1.5 Year 😅");
  else if(ele=="twitter fake")
    diserror("I didn't know How to use Twitter 😶");
  else if(ele=="youtube fake")
    diserror("I didn't own any Youtube Channel 😑");
  else if(ele=="linkedin fake")
    diserror("I didn't know what is Linkedin 🤐");

}

function Rand_num(min,max){
  function Rand(){
    var rand = Math.floor((Math.random() * 1000) + 0);
    if(rand==32)
        rand=30;
    return rand;
  }
    var Rand=Rand();
    if(Rand<min){
      Rand=Rand_num(min,max);
    }
    if(Rand>max) {
      Rand=Rand_num(min,max);
    }
    return Rand;
}

function Rand_str(max){
  var i;
  var cha="";
  for(i=0;i<=max;i++){
    cha+=String.fromCharCode(Rand_num(1,126));
  }
  return cha;
}
function noti(){
  var Tes = document.getElementById("Test");
  Tes.innerHTML=Rand_str(Rand_num(14,15));
  //setTimeout(Random_String);
}

smart_scroll();
