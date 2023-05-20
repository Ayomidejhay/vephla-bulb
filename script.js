const on = document.getElementById('on')
const off = document.getElementById('off')
const bulb = document.getElementById('bulb-off')

on.addEventListener('click', switchOn)
off.addEventListener('click',switchOff)

function switchOn(e) {
 bulb.setAttribute('src', 'light-on.jpeg.jpg')
 off.disabled = false
 on.disabled = true
}

function switchOff(e) {
 bulb.setAttribute('src', 'light-off.jpeg.jpg')
 off.disabled = true
 on.disabled = false
}