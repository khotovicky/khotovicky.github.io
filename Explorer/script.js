
function continueText(elem) {
    elem.nextSibling.style.display = 'inline'
    elem.outerHTML = ''   
}

let elemList = document.querySelectorAll('.about__articles_link')
elemList.forEach((item) => {
    item.onclick = function() {
        continueText(item)
        }
})
