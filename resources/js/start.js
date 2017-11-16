(function () {

  var txt = '> node displayName.js\n\n'; /* The text */
  var letters = 0;
  var speed = 40; /* The speed/duration of the effect in milliseconds */
  var activeFunction = displayName;

  document.querySelectorAll('h1').forEach(h1 => {
    h1.classList.add('hide');
  });
  document.querySelector('nav').classList.add('hide');

  typeWriter();


  function displayTitle() {
    var title = document.querySelector('.title-heading');

    title.classList.remove('hide');

    title.classList.add('fadeRight');

    txt = '> node revealNav.js';
    letters = 0;
    activeFunction = revealNav;
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
  }


  function typeWriter() {
    if (letters < txt.length) {
      document.querySelector(".typing-line").innerHTML += txt.charAt(letters);
      letters++;
      setTimeout(typeWriter, speed);
    } else {
      activeFunction();
    }
  }

})();
