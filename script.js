function setActive(section) {
    var offered = document.querySelector('.offered');
    var wanted = document.querySelector('.wanted');

    if (section === 'offered') {
        offered.classList.add('active');
        wanted.classList.remove('active');
    } else if (section === 'wanted') {
        wanted.classList.add('active');
        offered.classList.remove('active');
    }
}


