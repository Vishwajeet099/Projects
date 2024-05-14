const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show','pshow');
        }else{
            entry.target.classList.remove('show','pshow');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const phiddenElements = document.querySelectorAll('.phidden');
phiddenElements.forEach((el) => observer.observe(el));