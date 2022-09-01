const buttons = document.querySelectorAll('button');

buttons.forEach((button)=>{
    button.addEventListener('click', ()=>{
        const btn = button.parentElement.classList;
        if (btn.contains('active')) {
            btn.remove('active');
        } else {
            btn.add('active');
        }
        
    })
})