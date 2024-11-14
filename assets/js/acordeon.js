const acordeonTriggers = document.querySelectorAll('.acordeon .trigger')

acordeonTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        const content = trigger.parentElement

        const isOpen = content.classList.contains('open')

        if (isOpen) {
            content.classList.remove('open')
        }else{
            content.classList.add('open')
        }
    })
})