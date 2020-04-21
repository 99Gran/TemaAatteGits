let name = document.querySelector('#name')
let email = document.querySelector('#email')
let submit = document.querySelector('#submit')
let form = document.querySelector('#form')

submit.addEventListener('click', okButton)

function okButton() {
    console.log(name.value, email.value)
    greet()
}

function greet() {
    /*let overskrift = document.createElement('h1')
    overskrift.innerHTML = name.value
    form.appendChild(overskrift)*/
    form.innerHTML = '<h1>Hei ' + name.value + '</h1>'
    form.innerHTML += '<p>Det var hyggelig at du ville være med i prosjektet</p>'
    form.innerHTML += '<p>Om jeg forstår det korrekt, er navnet ditt ' + name.value + ' og eposten din er: ' + email.value + '</p>'

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

/* name.addEventListener('input', nameInput)

function nameInput() {
    console.log(name.value)
} 

let main = document.querySelector('main')
console.log(main)
main.style.backgroundColor = 'green'
main.style.opacity = '.4'
main.style.display = 'none'*/