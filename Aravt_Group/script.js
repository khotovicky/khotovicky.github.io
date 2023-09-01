const overlay = document.querySelector('.overlay')

const { openSideNav, closeSideNav } = initSideNavService(overlay)
const { showNotification, hideNotification } = initNotificationsService(overlay)
initOrderFormService(showNotification)
