
(function(){
  var overlay = document.getElementById('loginOverlay');
  var modal = document.getElementById('loginModal');
  var first = document.getElementById('user');
  var last = document.getElementById('cancelBtn');
  var loginBtn = document.getElementById('loginBtn');
  var cancelBtn = document.getElementById('cancelBtn');

  setTimeout(function(){ first && first.focus(); }, 50);

  overlay && overlay.addEventListener('click', function(e){
    if (e.target === overlay) {
      e.stopPropagation();
    }
  });

  modal && modal.addEventListener('keydown', function(e){
    if (e.key === 'Tab'){
      var focusable = modal.querySelectorAll('input,button');
      var firstEl = focusable[0];
      var lastEl = focusable[focusable.length-1];
      if (e.shiftKey){
        if (document.activeElement === firstEl){
          lastEl.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastEl){
          firstEl.focus();
          e.preventDefault();
        }
      }
    }
    if (e.key === 'Escape'){
      e.preventDefault();
    }
  });

  loginBtn && loginBtn.addEventListener('click', function(){
    alert('Fejkad inloggning — formuläret fungerar inte.');
  });

  cancelBtn && cancelBtn.addEventListener('click', function(){
    overlay && overlay.classList.add('hidden');
  });
})();
