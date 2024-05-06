// Filtros
$(document).ready(function(){
    $('.selection-item').click(function(){
        const value = $(this).attr('data-filter');
        if (value == 'todo') {
            $ ('.content-box').show('1000');
        }
        else {
            $ ('.content-box').not('.' + value).hide('1000');
            $ ('.content-box').filter('.' + value).show('1000');
        }
    });
    // Modificar etiqueta con clase 'active-'
    $('.selection-item').click(function(){
        $(this).addClass("active-filter").siblings().removeClass("active-filter");
    });
});

// Cambiar findo al scrollear en el encabezado
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});
