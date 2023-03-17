let form = document.travelForm

form.addEventListener("submit", function(event){
    event.preventDefault()

    let fName = form.fName.value
    let lName = form.lName.value

    let age = form.age.value

    let gender = form.gender.value

    let destination = form.destination.value

    let checkedBoxes = []
        for (let i = 0; i < form.diet.length; i++) {
            if (form.diet[i].checked) {
                checkedBoxes.push(form.diet[i].value)
            }
        }

        alert(`Thanks for booking with us \n Please make sure your information is correct \n First Name: ${fName} \n Last Name: ${lName} \n Age: ${age} \n Gender: ${gender} \n Destination: ${destination} \n Diet Restrictions: ${checkedBoxes}`)
})
