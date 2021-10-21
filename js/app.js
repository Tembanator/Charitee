window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');

    const scrolled = window.scrollY

    console.log(scrolled)

    if (scrolled > 250) {
        navbar.classList.add('fixed-top')
        navbar.style.backgroundColor = '#263B5C'
        navbar.style.top = '0px'
    }
    else {
        navbar.classList.remove('fixed-top')
        navbar.style.backgroundColor = 'transparent'

    }
})

