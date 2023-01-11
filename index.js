const handleClick = () => {
    const menu = document.querySelector('.closed-menu')
    const closedMenu = document.querySelector('.opened-menu')
    const openedMenu = document.querySelector('.menu-mobile')
    const shadow = document.querySelector('.shadow')

    menu.addEventListener('click', () => {
        showMenu()
        closeMenu()
    })

    const showMenu = () => {
        menu.style.display = 'none'
        openedMenu.style.display = 'block'
        shadow.style.display = 'block'
    }

    const closeMenu = () => {
    
        closedMenu.addEventListener('click', () => {
            menu.style.display = 'block'
            openedMenu.style.display = 'none'
            shadow.style.display = 'none'
        })
   
    } 
}
handleClick()