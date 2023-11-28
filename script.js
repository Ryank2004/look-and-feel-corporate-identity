function setActive(section) {
    var aangeboden = document.querySelector('.aangeboden');
    var gezocht = document.querySelector('.gezocht');

    if (section === 'aangeboden') {
        aangeboden.classList.add('active');
        gezocht.classList.remove('active');
    } else if (section === 'gezocht') {
        gezocht.classList.add('active');
        aangeboden.classList.remove('active');
    }
}


