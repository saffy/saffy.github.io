function navigate(selector) {
    var links = document.querySelectorAll('li');
    links.forEach(link => {
        link.classList.remove('current');
    });

    var link = document.querySelector('#'+selector);
    if(selector === '#'){
        link = document.querySelector('#link-home');
    }
    link.classList.add('current');
  }