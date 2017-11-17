(function () {

  var txt = '> node revealNav.js\n\n';
  var letters = 0;
  var speed = 40; 
  var activeFunction = revealNav;

  typeWriter();

  function setBackground() {
    document.querySelector('header').classList.add('blue-background')

    txt = '> node displayName.js\n\n';
    letters = 0;
    activeFunction = displayName;
    typeWriter();
  }
  
  
  function displayTitle() {
    var title = document.querySelector('.title-heading');

    title.classList.remove('hide');

    title.classList.add('fadeRight');

    txt = '> Welcome :)';
    letters = 0;
    speed = 100;
    activeFunction = null;
    typeWriter();
  }

  function displayName() {
    var name = document.querySelector('.name-heading');

    name.classList.remove('hide');

    name.classList.add('fadeLeft');

    txt = '> node showTitle.js\n\n';
    letters = 0;
    activeFunction = displayTitle;
    typeWriter();
  }

  function revealNav() {
    var nav= document.querySelector('nav');
    
    nav.classList.remove('hide');
    nav.classList.add('fadeIn');
    
    txt = '> node setBackground.js\n\n';
    letters = 0;
    activeFunction = setBackground;
    typeWriter();
  }

  function typeWriter() {
    if (letters < txt.length) {
      document.querySelector(".typing-line").innerHTML += txt.charAt(letters);
      letters++;
      setTimeout(typeWriter, speed);
    } else {
      activeFunction ? activeFunction() : '';
    }
  }

})();
