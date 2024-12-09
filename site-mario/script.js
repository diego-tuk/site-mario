const form = document.querySelector(".formulario-faleconosco")
const mascara = document.querySelector(".mascara-formulario")
const header = document.querySelector("fale-conosco")

function cliqueinobotao(){
  form.style.left = "50%"
  form.style.transform = "translateX(-50%)"
  mascara.style.visibility = "visible"
}
function cliqueinoheader(){
  form.style.left = "50%"
  form.style.transform = "translateX(-50%)"
  mascara.style.visibility = "visible"
}

function cliqueinamascara(){
    form.style.left = "-300px"
    mascara.style.visibility = "hidden"
    form.style.transform = "translateX(0%)"
}