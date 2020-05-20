const selectorElemnt = function(element){
    return document.querySelector(element)
};

let  menuToggler = selectorElemnt('.menu-toggle');
let body= selectorElemnt('body');


menuToggler.addEventListener('click', function(){
    body.classList.toggle('open')
});

//chang backgroundcolor on scroll
const header = document.querySelector('header')
const sectionOneOptions={
    rootMargin: "-500px 0px 0px 0px"
};
const sectionOne = document.querySelector('.hero')
const sectionOneObserver = new  IntersectionObserver(function(entries,sectionOneObserver){
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            header.classList.add("navScolled")
        }else{
            header.classList.remove("navScolled")
        }
    });
},sectionOneOptions);
sectionOneObserver.observe(sectionOne)