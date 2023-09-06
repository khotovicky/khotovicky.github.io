function initOrderFormService(showNotification) {
    const orderForm = document.querySelector('#order-form')
    const fields = Array.from(orderForm.querySelectorAll('.field'))

    function clearUnfilledMarks() {
        for (let field of fields) {
            field.classList.remove('request')
            field.parentElement.classList.remove('request')
        }
    }
    
    function markFieldsAsUnfilled (fields) {
        clearUnfilledMarks()
        for (let field of fields) {
            field.classList.add('request')
            field.parentElement.classList.add('request')
        }
    }
    
    function clearForm (fields) {
        for (let field of fields) {
            field.value = ''
        }
    }
    
    function getEmptyRequiredFields(fields) {
        return fields.filter(field => field.value === '' && field.hasAttribute('required'))
    }
    
    orderForm.onsubmit = function(event) {
        event.preventDefault()

        const emptyRequiredFields = getEmptyRequiredFields(fields)
        markFieldsAsUnfilled(emptyRequiredFields)
        if (emptyRequiredFields.length === 0) {
            const formData = new FormData(orderForm)
            clearForm(fields)
            showNotification('Ваша заявка успешно оформлена!')
        }
    }
}
