const extend = document.querySelectorAll('.extend');
const extendMenu = document.querySelectorAll('.extend-menu');
const downArrow = document.querySelectorAll('.arrow-down');
const navMenu = document.querySelector('.nav-menu');
const navList = document.querySelector('.nav-list');
const buttonsGroup = document.querySelector('.buttons');
const overlay = document.querySelector('.overlay');
const menuIcon = document.getElementById('icon-menu');
const closeIcon = document.getElementById('close-menu');

extend.forEach((ele, index) => {
    ele.addEventListener('click', (e) => {
        const currentSrc = downArrow[index].src;

        // Extract the image file name from the src (e.g., "icon-arrow-down.svg")
        const fileName = currentSrc.split('/').pop();
        // extendMenu[index].style.display = 'block';
        if (window.innerWidth > 800) {
            extendMenu[index].classList.toggle('absolute');
        } else {

            extendMenu[index].classList.toggle('extend-options');
            // extendMenu[index].style.maxHeight = 'fit-content';
            // extendMenu[index].style.maxHeight = 'fit-content';
        }

        if (fileName === 'icon-arrow-down.svg') {
            downArrow[index].src = 'images/icon-arrow-up.svg';
        } else if (fileName === 'icon-arrow-up.svg') {
            downArrow[index].src = 'images/icon-arrow-down.svg';
        }
    });
});


menuIcon.addEventListener('click', () => {
    navMenu.classList.add('side-bar');
    // navList.classList.add('side-bar');
    // buttonsGroup.classList.add('side-bar');
    // navMenu.style.position = 'absolute';
    navList.style.flexDirection = 'column';
    navList.style.alignItems = 'baseline';
    buttonsGroup.style.flexDirection = 'column';
    overlay.classList.add('flex');
    document.body.classList.add('no-scroll')
    // navList.style.position = 'absolute';
    // navList.style.right = '0px';
    // buttonsGroup.style.display = 'flex';
    // buttonsGroup.style.position = 'absolute';
    // buttonsGroup.style.right = '0px';
})

closeIcon.addEventListener('click', () => {
    navMenu.classList.remove('side-bar');
    overlay.classList.remove('flex');
    document.body.classList.remove('no-scroll')
})

function overlayDiv() {
    if (window.innerWidth > 900) {
        overlay.classList.add('hide')
        overlay.classList.remove('flex')
        navMenu.classList.remove('side-bar');
        document.body.classList.remove('no-scroll');
        navList.style.flexDirection = 'row';
        navList.style.alignItems = 'center';
        buttonsGroup.style.flexDirection = 'row';
    }


    if (window.innerWidth == 912 && window.innerHeight == 1368 || window.innerWidth == 1024 && window.innerHeight == 1366 || window.innerWidth == 1024 && window.innerHeight == 600) {
        heroImage.src = 'images/image-hero-mobile.png';
    }

}

overlayDiv();

window.addEventListener('resize', overlayDiv);

function updateImage(params) {
    const heroImage = document.getElementById('hero-image');
    // const image = document.getElementById('web-image');

    smallSrc = "images/image-hero-mobile.png"
    bigSrc = "images/image-hero-desktop.png"

    if (window.innerWidth >= 1060) {
        heroImage.src = bigSrc;
    } else {
        heroImage.src = smallSrc;
    }
}

updateImage();

window.addEventListener('resize', updateImage);