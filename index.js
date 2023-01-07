const form = document["my-form"]

//submit event

form.addEventListener("submit", function(event) {
    event.preventDefault()
    const firstName = form.firstName.value
    const lastName = form.lastName.value

    form.firstName.value = ""//clear text box upon submit
    form.lastName.value = ""

    console.log(firstName)

    const h1 = document.createElement('h1')
    h1.textContent = firstName + " " + lastName 
    document.getElementsByTagName("body")[0].append(h1)
})

