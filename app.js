const hamburgesa = document.getElementById('hamburgesa');
const menu = document.getElementById('menu');
const close = document.getElementById('close');



hamburgesa.addEventListener('click', function(ev){
    menu.classList.remove('close');
    menu.classList.add('open');
    
})


close.addEventListener('click', function(ev){
    menu.classList.remove('open');
    menu.classList.add('close');
})



 