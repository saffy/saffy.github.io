function navigate(selector) {
    var links = document.querySelectorAll('li');
    links.forEach(link => {
        link.classList.remove('current');
    });

    var link = document.querySelector('#'+selector);

    link.classList.add('current');
  }