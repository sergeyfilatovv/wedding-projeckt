// Находим нужный элемент в html документе
const button1 = document.querySelector('#button-1');
const content1 = document.querySelector('#content-1');
const button2 = document.querySelector('#button-2');
const content2 = document.querySelector('#content-2');
const button3 = document.querySelector('.header-top__mobile-nav');
const button4 = document.querySelector('.header-top__nav-icons');
const mobileNav = document.querySelector('.mobile-nav');
const overlay = document.querySelector('.overlay');
const mobileNavbutton = document.querySelectorAll('.mobile-nav__link');





// Делаем прослушку по клику и удаляем нужный селектор
button1.addEventListener("click", function(){
    content1.classList.toggle('guests__block-1--hiden')
})

button2.addEventListener("click", function(){
    content2.classList.toggle('guests__block-2--hiden')
})

button3.addEventListener("click", function(){
    button3.classList.toggle('header-top__mobile-nav--active')
    button4.classList.toggle('header-top__nav-icons--active')
    mobileNav.classList.toggle('mobile-nav--active')
    overlay.classList.toggle('overlay--active')
    })

overlay.addEventListener("click", function(){
    overlay.classList.remove('overlay--active')
    button3.classList.remove('header-top__mobile-nav--active')
    button4.classList.remove('header-top__nav-icons--active')
    mobileNav.classList.remove('mobile-nav--active')

    }) 
 




    
// Обходим все ссылки методом ForEach, делаем прослушку по клику и удаляем нужные селекторы
    mobileNavbutton.forEach(function (item) {
    item.addEventListener("click", function(){
        button3.classList.remove('header-top__mobile-nav--active')
        button4.classList.remove('header-top__nav-icons--active')
        mobileNav.classList.remove('mobile-nav--active')
        overlay.classList.remove('overlay--active')
    })
});


// Плавное включение и выключение модалки
MicroModal.init({
	awaitOpenAnimation: true,
	awaitCloseAnimation: true,
});


    
