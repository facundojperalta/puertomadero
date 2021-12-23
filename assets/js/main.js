(function(){
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav__link--show');
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });

    


})();


(function(){
    const titleVisit = [...document.querySelectorAll('.visit__title')];
    console.log(titleVisit)

    titleVisit.forEach(visit =>{
        visit.addEventListener('click', ()=>{
            let height = 0;
            let answer = visit.nextElementSibling;
            let addPadding = visit.parentElement.parentElement;

            addPadding.classList.toggle('visit__padding--add');
            visit.children[0].classList.toggle('visit__arrow--rotate');

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;
        });
    });
})();


(function(){
    
    const sliders = [...document.querySelectorAll('.events__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentEvents = document.querySelector('.events__body--show').dataset.id;
        value = Number(currentEvents);
        value+= add;


        sliders[Number(currentEvents)-1].classList.remove('events__body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

        sliders[value-1].classList.add('events__body--show');

    }

})();
