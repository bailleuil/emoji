//import { get } from "https";
//************************************************** */emjie*LOVE//
window.onload=function() {
  document.body.style.zoom="50%"
  //var tools = document.getElementsByClass("tools");
  
var love =document.querySelector("#love");
  var tl = new TimelineMax({paused:true});

love.onclick = function() {
  //SI aucune nimation est en cours
  if (!tl.isActive() && !tl2.isActive() && !tl3.isActive() && !tl3.isActive() && !tl4.isActive()){
    //on lance l'animation
    tl.restart();
  }
  //sinon (une animation est en cours)
  else {
    // on affiche le message
    $(".message").fadeIn().delay(1000).fadeOut();

  }
}
tl.to(".emoji-love", 1, {css:{x:420}});//il avance

 // TweenMax.to(".bouche", 12, {css:{x:2655}});
tl.to(".tool", 3,{rotation:382},1);
tl.to(".toolx", 3,{rotation:-360},1);

tl.to(".emoji-love", 1, {css:{x:858}});//il avance


tl.to(".tool", 3,{rotation:22},5);
tl.to(".emoji-love", 3,{rotation:360},5);
tl.to(".emoji-love .yeux", 3,{opacity:1},5);
tl.to(".toolx", 3,{rotation:-0},5);

tl.to(".emoji-love", 1, {css:{x:1296}});//il avance


tl.to(".tool", 3,{rotation:382},9);
tl.to(".emoji-love", 3,{rotation:720},9);
tl.to(".emoji-love .bouche", 3,{opacity:1},9);
tl.to(".toolx", 3,{rotation:-360},9 );

tl.to(".emoji-love", 1, {css:{x:1296}});//il avance

tl.to(".emoji-love", 2, {css:{x:1734}});//il avance



tl.to(".tool", 0.5,{rotation:22},15);
tl.to(".emoji-love", 0.5,{rotation:1080},15);
tl.to(".toolx", 0.5,{rotation:-0},15);
tl.to(".emoji-love",2,{filter:"hue-rotate(381deg)"},15);


tl.to(".emoji-love .yeux", 1, {css:{y:1000}},16);//il tombe
tl.to(".emoji-love .bouche", 1, {css:{y:1000}},17);//il tombe
tl.to(".emoji-love .basEmoji", 1, {css:{y:1000}},18);//il tombe
tl.to(".emoji-love .yeux", 0.5,{opacity:0},17);
tl.to(".emoji-love .bouche", 0.5,{opacity:0},18);
tl.to(".emoji-love .basEmoji", 0.5,{opacity:0},18.5);

//************************************************** */emjie*LOVE//



//************************************************** */emjie*SAD//


  //var tools = document.getElementsByClass("tools");
  
var sad =document.querySelector("#sad");
  var tl2 = new TimelineMax({paused:true});

sad.onclick = function() {
  if(!tl.isActive() && !tl2.isActive() && !tl3.isActive() && !tl3.isActive() && !tl4.isActive()){
    tl2.restart();
  
  }
  //sinon (une animation est en cours)
  else {
    // on affiche le message
    $(".message").fadeIn().delay(1000).fadeOut();

  }
}
  
tl2.to(".emojiSad", 1, {css:{x:420}});//il avance


tl2.to(".tool", 3,{rotation:382},1);
tl2.to(".toolx", 3,{rotation:-360},1);

tl2.to(".emojiSad", 1, {css:{x:858}});//il avance


tl2.to(".tool", 3,{rotation:22},5);
tl2.to(".emojiSad", 3,{rotation:360},5);
tl2.to(".emojiSad .yeux", 3,{opacity:1},5);
tl2.to(".toolx", 3,{rotation:-0},5);

tl2.to(".emojiSad", 1, {css:{x:1296}});//il avance


tl2.to(".tool", 3,{rotation:382},9);
tl2.to(".emojiSad", 3,{rotation:720},9);
tl2.to(".emojiSad .bouche", 3,{opacity:1},9);
tl2.to(".toolx", 3,{rotation:-360},9 );

tl2.to(".emojiSad", 2, {css:{x:1296}});//il avance

tl2.to(".emojiSad", 2, {css:{x:1734}});//il avance



tl2.to(".tool", 0.5,{rotation:22},15);
tl2.to(".emojiSad", 0.5,{rotation:1080},15);
tl2.to(".toolx", 0.5,{rotation:-0},15);
tl2.to(".emojiSad",2,{filter:"hue-rotate(381deg)"},15);


tl2.to(".emojiSad .yeux", 1, {css:{y:1000}},16);//il tombe
tl2.to(".emojiSad .bouche", 1, {css:{y:1000}},17);//il tombe
tl2.to(".emojiSad .basEmoji", 1, {css:{y:1000}},18);//il tombe
tl2.to(".emojiSad .yeux", 0.5,{opacity:0},17);
tl2.to(".emojiSad .bouche", 0.5,{opacity:0},18);
tl2.to(".emojiSad .basEmoji", 0.5,{opacity:0},18.5);

  

//************************************************** */emjie*SAD//


//************************************************** */emjie*HAPPY//

var happy =document.querySelector("#happy");
  var tl3 = new TimelineMax({paused:true});

happy.onclick = function() {
  if(!tl.isActive() && !tl2.isActive() && !tl3.isActive() && !tl3.isActive() && !tl4.isActive()){
    tl3.restart();
  
  }
  //sinon (une animation est en cours)
  else {
    // on affiche le message
    $(".message").fadeIn().delay(1000).fadeOut();

  }
}
tl3.to(".emojiHappy", 1, {css:{x:420}});//il avance


tl3.to(".tool", 3,{rotation:382},1);
tl3.to(".toolx", 3,{rotation:-360},1);

tl3.to(".emojiHappy", 1, {css:{x:858}});//il avance


tl3.to(".tool", 3,{rotation:22},5);
tl3.to(".emoji", 3,{rotation:360},5);
tl3.to(".emojiHappy .yeux", 3,{opacity:1},5);
tl3.to(".toolx", 3,{rotation:-0},5);

tl3.to(".emojiHappy", 1, {css:{x:1296}});//il avance


tl3.to(".tool", 3,{rotation:382},9);
tl3.to(".emojiHappy", 3,{rotation:720},9);
tl3.to(".emojiHappy .bouche", 3,{opacity:1},9);
tl3.to(".toolx", 3,{rotation:-360},9 );

tl3.to(".emojiHappy", 1, {css:{x:1296}});//il avance

tl3.to(".emojiHappy", 2, {css:{x:1734}});//il avance



tl3.to(".tool", 0.5,{rotation:22},15);
tl3.to(".emojiHappy", 0.5,{rotation:1080},15);
tl3.to(".toolx", 0.5,{rotation:-0},15);



tl3.to(".emojiHappy",2,{filter:"hue-rotate(381deg)"},15);//il devient vert


tl3.to(".emojiHappy .yeux", 1, {css:{y:1000}},16);//il tombe
tl3.to(".emojiHappy .bouche", 1, {css:{y:1000}},16);//il tombe
tl3.to(".emojiHappy .basEmoji", 1, {css:{y:1000}},16);//il tombe
tl3.to(".emojiHappy .yeux", 0.5,{opacity:0},17);//yeux disparaissent
tl3.to(".emojiHappy .bouche", 0.5,{opacity:0},17);//la bouche disparait
tl3.to(".emojiHappy .basEmoji", 0.5,{opacity:0},17);//le rond jaune disparait


//************************************************** */emjie*HAPPY//

//************************************************** */emjie*tongue//
var rtongue=document.querySelector("#happy");
  var tl4 = new TimelineMax({paused:true});

  tongue.onclick = function() {
    if(!tl.isActive() && !tl2.isActive() && !tl3.isActive() && !tl3.isActive() && !tl4.isActive()){
      tl4.restart();
    
    }
    //sinon (une animation est en cours)
  else {
    // on affiche le message
    $(".message").fadeIn().delay(1000).fadeOut();

  }
  }
tl4.to(".emojiTongue", 1, {css:{x:420}});//il avance


tl4.to(".tool", 3,{rotation:382},1);
tl4.to(".toolx", 3,{rotation:-360},1);

tl4.to(".emojiTongue", 1, {css:{x:858}});//il avance


tl4.to(".tool", 3,{rotation:22},5);
tl4.to(".emojiTongue", 3,{rotation:360},5);
tl4.to(".emojiTongue .yeux", 3,{opacity:1},5);
tl4.to(".toolx", 3,{rotation:-0},5);

tl4.to(".emojiTongue", 1, {css:{x:1296}});//il avance


tl4.to(".tool", 3,{rotation:382},9);
tl4.to(".emojiTongue", 3,{rotation:720},9);
tl4.to(".emojiTongue .bouche", 3,{opacity:1},9);
tl4.to(".toolx", 3,{rotation:-360},9 );

tl4.to(".emojiTongue", 1, {css:{x:1296}});//il avance

tl4.to(".emojiTongue", 2, {css:{x:1734}});//il avance



tl4.to(".tool", 0.5,{rotation:22},15);
tl4.to(".emojiTongue", 0.5,{rotation:1080},15);
tl4.to(".toolx", 0.5,{rotation:-0},15);
tl4.to(".emojiTongue",2,{filter:"hue-rotate(381deg)"},15);


tl4.to(".emojiTongue .basEmoji", 1,{opacity:0},16);//rond disparait
tl4.to(".emojiTongue .yeux", 1, {css:{y:1000}},18);//il tombe
tl4.to(".emojiTongue .bouche", 1, {css:{y:1000}},19);//il tombe
tl4.to(".emojiTongue .basEmoji", 1, {css:{y:1000}},18);//il tombe`


tl4.to(".emojiTongue .yeux", 1,{opacity:0},20);
tl4.to(".emojiTongue .bouche", 1,{opacity:0},20);


}
/*window.onload=function() {
  //var tools = document.getElementsByClass("tools");
  
var love =document.querySelector("#love");
  var tl = new TimelineMax.yoyo({paused:true}.repeat(3).timeScale(2).play(5));
  //myTimeline.yoyo(true).repeat(3).timeScale(2).play(0.5);



}
*/

/* var basEmoji = document.querySelector(".basEmoji");
TweenMax.set(logo, {rotation:20});

console.log(logo._gsTransform);
console.log("the rotation is " + basEmoji._gsTransform.rotation);

/* Global styles come from external css https://codepen.io/GreenSock/pen/JGaKdQ*/

//timeline animates green and orange

/*var tl = new TimelineLite()
tl.to(".orange", 1, {x:700})
  .to(".green", 2, {x:700, ease:Bounce.easeOut})

//separate tween with a delay which makes it play after the timline
TweenLite.to(".grey", 1, {x:700, rotation:360, delay:3})

//instantiate GSDevTools with default settings
GSDevTools.create();

// GSDevTools will control all animations on the Global Timeline
 




  $(function() {
    $('#play').click( function() {
      $('img').animate({left: '+=50'}, 2000);
    });  
    $('#play').click( function() {
      $('img').animate({left: '-=50'}, 2000);
    });  
    $('#play').click( function() {
      $('img').animate({top: '+=50'}, 2000);
    });  
    $('#etatFile').click(function() {
      var n = $('img').queue();
      $('#infos').text('Nombre d\'animations dans la file d\'attente : ' + n.length);
    });  
  });

  let topPos =O;
  let dir =1;

  function hautBas(){
  if (topPos == 300){ dir= -1 }
  else if (topPos ==-50 ){ dir= 1 }
  topPos += 2 * dir;
  titre.style.top ='${topPos}px'
  requestAnimationFram(hautBas);


var play = document.querySelector("#play");
var pause = document.querySelector("#pause");
var resume = document.querySelector("#resume");
var reverse = document.querySelector("#reverse");
var restart = document.querySelector("#restart");

var tl = new TimelineMax({paused:true});

tl.to(".green", 1, {x:200})
  .to(".orange", 1, {x:200, scale:0.2}, "+=1")
  .to(".grey", 1, {x:200, scale:2, y:20}, "greyAndPink") 
  .to(".tool-1", 1, {x:200, rotation:360}, "too-1"); 

play.onclick = function() {
  tl.play();
}

pause.onclick = function() {
  tl.pause();
}

resume.onclick = function() {
  tl.resume();
}

reverse.onclick = function() {
  tl.reverse();
}

restart.onclick = function() {
  tl.restart();
}

tweenMax.to(".emojie",2,{left:600});

TweenMax.to([".tool_1", tool_2, tool_3], 1, {opacity:0.5, rotation:45});
*/

