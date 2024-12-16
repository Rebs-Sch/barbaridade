//menu

const menu = document.getElementById('burguer')
const item = document.getElementById('menu')

menu.addEventListener('click', ()=>{
    if (item.style.display == 'none'){
        item.style.display = 'block'
    }else{
        item.style.display = 'none'
    }
})
