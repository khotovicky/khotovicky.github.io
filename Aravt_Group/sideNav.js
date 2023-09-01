function initSideNavService(overlayElement) {
    const sideNav = document.querySelector('.nav-list')
    const navBurger = document.querySelector('.nav-burger')
    const sideNavItems = document.querySelectorAll('.nav-list-item')

    function openSideNav() {
        sideNav.classList.add('active')
        overlayElement.classList.add('active')
        overlayElement.addEventListener('click', closeSideNav)
    }
    
    function closeSideNav () {
        sideNav.classList.remove('active')
        overlayElement.classList.remove('active')
        overlayElement.removeEventListener('click', closeSideNav)
    }

    navBurger.addEventListener('click', openSideNav)
    sideNavItems.forEach(navItem => navItem.addEventListener('click', closeSideNav))

    return {
        openSideNav,
        closeSideNav
    }
}
