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

function Rand_Str(max){
  
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
  
  var i;
  var cha="";
  for(i=0;i<=max;i++){
    cha+=String.fromCharCode(Rand_num(1,126));
  }
  return cha;

}


function noti(){
  console.log(Rand_str(10));
  //setTimeout(Random_String);
}
function Navbar_Colors(){
  var nav_bar=document.getElementById("smart-scroll");  //Fetching Navbar
  var home=document.getElementById("home");
  var moviesda=document.getElementById("moviesda");
  var support=document.getElementById("support");
  var aboutus=document.getElementById("aboutus");

  home.addEventListener("mouseover",function(){nav_bar.className="navbar smart-scroll navbar-expand-lg navbar-dark bg-success fixed-top"});
  moviesda.addEventListener("mouseover",function(){nav_bar.className="navbar smart-scroll navbar-expand-lg navbar-dark bg-warning fixed-top"});
  support.addEventListener("mouseover",function(){nav_bar.className="navbar smart-scroll navbar-expand-lg navbar-dark bg-primary fixed-top"});
  aboutus.addEventListener("mouseover",function(){nav_bar.className="navbar smart-scroll navbar-expand-lg navbar-dark bg-danger fixed-top"});
  
  home.addEventListener("mouseout",nav_default);
  moviesda.addEventListener("mouseout",nav_default);
  support.addEventListener("mouseout",nav_default);
  aboutus.addEventListener("mouseout",nav_default);

  function nav_default(){nav_bar.className="navbar smart-scroll navbar-expand-lg navbar-dark bg-dark fixed-top"}
}

function Hashed(ide,color,limit=20,speed=30){

    var counter=0;
    var old=document.getElementById(ide).innerHTML;
    var len=old.length;
    var temp_len=len;
    var Rand="";
    if(color=='None'){ color=document.getElementById(ide).style.color; }
    temp_color=document.getElementById(ide).style.color;

    document.getElementById(ide).style.color=color;

    var looper1 = setInterval(function(){
      
      document.getElementById(ide).innerHTML=Rand_Str(temp_len);
      entered=false;
      if(counter>limit){ 
        clearInterval(looper1);
        document.getElementById(ide).innerHTML=old;
        var looper2 = setInterval(function(){
          for(var i=0;i<(temp_len-len);i++){
            Rand=Rand+old.charAt(i);
          }
          Rand=Rand+Rand_Str(len);
          document.getElementById(ide).innerHTML=Rand;
      
          if(len<0){ 
            clearInterval(looper2);
            document.getElementById(ide).innerHTML=old;
            entered=true;
            document.getElementById(ide).style.color=temp_color;
          }
    
          len--;
          Rand='';
          
        },speed+20);

      }
      counter++;
      
    },speed);

}
function navname(){
  entered=true;
  var element=document.getElementById('navname');
  element.addEventListener("mouseenter",function(){ 
                                                if(entered==true){
                                                  Hashed("navname",'rgb(43, 255, 0)');
                                                  entered=false;
                                                }

  });

}
function logo(){
  logos=document.getElementById('logo');
  photo=["logo/b_m.jpg","logo/g_m.jpg","logo/r_m.jpg","logo/y_m.jpg"];
  ct=0;
  console.log(ct);
  console.log(logos);
  logo_loop = setInterval(function(){
    if(ct>3){
       ct=0;
    }
    logos.src=photo[ct];
    ct=ct+1;
  },2500);

}

navname();
Hashed('navname','rgb(43, 255, 0)');
Navbar_Colors();
smart_scroll();
logo();
