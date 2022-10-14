const mobile_nav = document.querySelector('.mobile-nav i')
const header = document.querySelector('header')
const main = document.querySelector('main')
const footer = document.querySelector('footer')
const aside = document.querySelector('aside')

mobile_nav.addEventListener('click', () => {
    aside.style.display = 'block';
    header.style.display = 'none';
    main.style.display = 'none'
    footer.style.display = 'none'
})

const aside_cancel = document.querySelector('aside i')
aside_cancel.addEventListener('click', () =>  {
    aside.style.display = 'none';
    header.style.display = 'block';
    main.style.display = 'block'
    footer.style.display = 'block'
});