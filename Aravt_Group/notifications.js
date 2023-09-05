function initNotificationsService(overlayElement) {
    const notification = document.querySelector('.notification')
    const notificationText = document.querySelector('.notification-text')
    const notificationButton = document.querySelector('.notification-button')

    function showNotification(text) {
        notification.style.display = 'flex'
        overlayElement.classList.add('active')
        notificationText.innerText = text
        notificationButton.focus()
    }
    
    function hideNotification() {
        notification.style.display = 'none'
        overlayElement.classList.remove('active')
        notificationText.innerText = ''
    }

    notificationButton.onclick = hideNotification

    return {
        showNotification,
        hideNotification
    }
}
