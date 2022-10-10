const mobile_nav = document.querySelector('.mobile-nav i')
console.log(mobile_nav)

const aside = document.querySelector('aside')
console.log(aside)
mobile_nav.addEventListener('click', () => aside.style.display = 'block')

const aside_cancel = document.querySelector('aside i')
aside_cancel.addEventListener('click', () =>  aside.style.display = 'none');
console.log(aside_cancel)