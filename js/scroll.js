document.addEventListener('DOMContentLoaded', function() {
    iniciarApp()
});

function iniciarApp() {
    scrollNav();
}
function scrollNav(){
    const enlaceSobreMi = document.querySelector('.sobreMi');
    const enlaceSkills = document.querySelector('.skills');
    const enlaceFormacion = document.querySelector('.formacion');
    const enlaceProyectos = document.querySelector('.proyectos');
    const enlaceEmail = document.querySelector('.contacto');

    enlaceSobreMi.addEventListener('click', (e)=>{
        e.preventDefault();
        const valorId_1 = e.target.attributes.href.value;
        const form_1 = document.querySelector(valorId_1);
        form_1.scrollIntoView({behavior: "smooth"});
    })
    enlaceSkills.addEventListener('click', (e)=>{
        e.preventDefault();
        const valorId_2 = e.target.attributes.href.value;
        const form_2 = document.querySelector(valorId_2);
        form_2.scrollIntoView({behavior: "smooth"});
    })
    enlaceFormacion.addEventListener('click', (e)=>{
        e.preventDefault();
        const valorId_3 = e.target.attributes.href.value;
        const form_3 = document.querySelector(valorId_3);
        form_3.scrollIntoView({behavior: "smooth"});
    })
    enlaceProyectos.addEventListener('click', (e)=>{
        e.preventDefault();
        const valorId_4 = e.target.attributes.href.value;
        const form_4 = document.querySelector(valorId_4);
        form_4.scrollIntoView({behavior: "smooth"});
    })
    enlaceEmail.addEventListener('click', (e)=>{
        e.preventDefault();
        const valorId_5 = e.target.attributes.href.value;
        const form_5 = document.querySelector(valorId_5);
        form_5.scrollIntoView({behavior: "smooth"});
    })
}