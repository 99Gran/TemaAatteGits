let name = document.querySelector('#name')
let email = document.querySelector('#email')
let passord = document.querySelector('#passord')
let agree = document.querySelector('#agree')
let submit = document.querySelector('#submit')
let form = document.querySelector('#form')

submit.addEventListener('click', okButton)

function okButton() {
    console.log(name.value, email.value, passord.value. agree.value)
    greet()
}

function greet() {
    form.innerHTML = '<h1>Hei ' + name.value + '</h1>'
    form.innerHTML += '<p>Så fint å se at du er interessert i våre fritidsaktiviteter!</p>'
    form.innerHTML += '<p>Om jeg forstår det korrekt, er navnet ditt ' + name.value + ' og eposten din er: ' + email.value + ' og at du er glad i...</p>'

    const newOkButton = document.createElement('button')
    newOkButton.innerHTML = 'Ok'
    newOkButton.addEventListener('click', function(){
        form.innerHTML = '<h1>Supert!</h1>'
    })
    form.appendChild(newOkButton)

    const newCancelButton = document.createElement('button')
    newCancelButton.innerHTML = 'Cancel'
    newCancelButton.addEventListener('click', function(){
        form.innerHTML = ''
        form.appendChild(name)
        form.appendChild(email)
        form.appendChild(submit)
    })
    form.appendChild(newCancelButton)
}