(function(){
  var btn=document.querySelector('.hamburger');
  var drawer=document.getElementById('mob-drawer');
  if(!btn||!drawer){return;}
  var mq=window.matchMedia('(max-width:768px)');
  function setOpen(open){
    btn.setAttribute('aria-expanded',open?'true':'false');
    btn.setAttribute('aria-label',open?'Close menu':'Open menu');
    drawer.classList.toggle('open',open);
  }
  btn.addEventListener('click',function(){
    setOpen(btn.getAttribute('aria-expanded')!=='true');
  });
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape'){setOpen(false);btn.focus();}
  });
  function onChange(e){if(!e.matches){setOpen(false);}}
  if(mq.addEventListener){mq.addEventListener('change',onChange);}else if(mq.addListener){mq.addListener(onChange);}
})();
