$(document).ready( function(){
  var list1 = $('.list1'),
      list2 = $('.list2'),
      list3 = $('.list3'),
      liHeight = $('li').outerHeight(),
      btnSpin = $('#slot-trigger'),
      head = $('#head'),
      stick = $('#stick'),
      hole = $('#hole');
  
  function spin() {
    var r1 = R(3,8),
        r2 = R(1,6),
        r3 = R(1,6);
    
    TweenMax.to(list1, 1.3, {y: 0-(liHeight*r1), ease: Elastic.easeInOut.config(6, 0)});
    TweenMax.to(list2, 1.3, {y: 0-(liHeight*r2), ease: Elastic.easeInOut.config(6, 0), delay: .1});
    TweenMax.to(list3, 1.3, {y: 0-(liHeight*r3), ease: Elastic.easeInOut.config(6, 0), delay: .2});
    console.log(r1, r2, r3, liHeight);
  }
  
  function slotTriggerMove() {
    TweenMax.set([head, stick, hole], {y:0, scale: 1});
    TweenMax.to(head, .4, {y: 70, repeat: 1, yoyo: true, ease:Sine.easeIn});
    TweenMax.to(stick, .4, {y: 14, scaleY: .3,transformOrigin:"50% 100%", repeat: 1, yoyo: true, ease:Sine.easeIn});
    TweenMax.to(hole, .4, {y: 10, scaleY: 2, repeat: 1, yoyo: true, ease:Sine.easeIn});
  }
  
//Generate random spin times
  function R(min,max) {
	  return Math.floor(Math.random() * (max - min) + min);
  };
  
// Button
  btnSpin.click(function(){
      slotTriggerMove();
      spin();
    }
  );

});