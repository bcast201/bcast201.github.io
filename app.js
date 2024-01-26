document.addEventListener("DOMContentLoaded", function(){
    
    //add and remove drop shadow to nav
    const nav = document.querySelector('nav');

    document.addEventListener('scroll', e => {
        if ((window.scrollY > 0) && (!nav.classList.contains('shadow'))){
            nav.classList.add('shadow');
        } else if ((window.scrollY == 0) && (nav.classList.contains('shadow'))){
            nav.classList.remove('shadow');
        }
    })

    //add and remove purple effect to nav dropshadow
    const offset = window.pageYOffset + document.querySelector('#projects').getBoundingClientRect().top;

    document.addEventListener('scroll', e => {
        if (window.scrollY >= offset && !nav.classList.contains('purple')){
            nav.classList.add('purple')
        } else if ((window.scrollY < offset) && (nav.classList.contains('purple'))){
            nav.classList.remove('purple')
        }
    })

    //smooth page navigation
    const navItems =  document.querySelectorAll('nav a[href=""]');
    const sections =  document.querySelectorAll('section > div');

    navItems.forEach(item => {
        item.addEventListener('click', e =>{
            e.preventDefault()
            sections.forEach( section => {
                if (item.dataset.target == section.dataset.target){
                    section.scrollIntoView({behavior: "smooth" });
                }
            })

        })
    })

    //mobile menu toggle

    const menuToggle = document.querySelector('.menu-toggle');
    const mobileList = document.querySelector('.mobile-list');
    const mobileItem = document.querySelectorAll('.mobile-list a')

    menuToggle.addEventListener('click', () => {
        if (!menuToggle.classList.contains('open')){
            menuToggle.classList.add('open')
            mobileList.classList.add('open')
        } else {
            menuToggle.classList.remove('open')
            mobileList.classList.remove('open')
        }
    })

    mobileItem.forEach(item => {
        item.addEventListener('click', () => {
            menuToggle.classList.remove('open')
            mobileList.classList.remove('open')
        })
    })


    //scroll reveal
    ScrollReveal().reveal('.intro h1', {origin: 'left', delay: 200, distance: '20px', duration: 2000});
    ScrollReveal().reveal('.intro span',{ delay: 800, duration: 2000});
    ScrollReveal().reveal('.intro p',{ delay: 1500, duration: 1000});
    ScrollReveal().reveal('#projects h2', {reset:false});
    ScrollReveal().reveal('#projects p', {reset:false});
    ScrollReveal().reveal('#story',{origin: 'bottom', delay: 200, distance: '20px', duration: 1000, reset:false });

    //auto adds delay to project cards 
    const projects = document.querySelectorAll('.project-container')
    let delay = 0
    projects.forEach((project => {
        if (delay > 400){
            delay = 0
        }
        ScrollReveal().reveal(project, { delay: delay, origin: 'left', distance: '100px', duration: 2000, reset:false });
        delay += 200
    }))

});