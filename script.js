function aoutoType(className) {
    var typed = new Typed(className, {
        strings: ['Burgers', 'Pizza', 'Chips', 'Fried Chichen'],
        typeSpeed: 150,
        backSpeed: 150,
        loop: true
    });
}
aoutoType('.aouto-type');