const btnToggle = document.getElementById('btn-toggle-menu');
const toggleMenu = document.querySelectorAll('.toggle-menu')


btnToggle.addEventListener('click', (e) => {
    e.stopPropagation();//evita que clique no botão e acione o evento global.

    toggleMenu.forEach(el =>{
        const isVisible = el.style.display ==='block';
        el.style.display =isVisible ? 'none' : 'block'  //if else ternario
    });

});
//ocultar menu ao carregar
window.addEventListener('DOMContentLoaded', ()=>{
    toggleMenu.forEach(el => el.style.display = 'none');
});


//ocutar menu ao clicar fora
document.addEventListener('click',(e)=>{
    if(!e.target.closest('.toggle-menu')&& e.target !== btnToggle){
        toggleMenu.forEach(el =>{
            el.style.display = 'none';
        })
    }
})



