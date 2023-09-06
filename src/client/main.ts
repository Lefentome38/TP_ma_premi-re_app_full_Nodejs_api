import "./style.css";

const bouton_start = document.createElement("button")
bouton_start.classList.add("bouton_start")
bouton_start.setAttribute("type","button")
bouton_start.innerText = "start"
document.body.appendChild(bouton_start)

const text_nom = document.createElement("input")
text_nom.classList.add("text_nom")
document.body.appendChild(text_nom)

bouton_start.addEventListener("click", async () =>{

const p2 = document.createElement('p')
p2.innerText = "bonjour " + text_nom.value
text_nom.value = ""
document.body.appendChild(p2)

await fetch("/files")


const res = await fetch("/hello/")
const message = await res.text()
const p = document.createElement('p')
p.innerText = message
document.body.appendChild(p)
  debut_de_lanventure()
})


function debut_de_lanventure() {

const text = document.createElement("input")
text.classList.add("text")
document.body.appendChild(text)

const bouton = document.createElement("button")
bouton.classList.add("bouton_valide")
bouton.setAttribute("type","button")
bouton.innerText = "go"
document.body.appendChild(bouton)

bouton.addEventListener("click", async () => {
const p_texte = document.createElement("p")
p_texte.innerText = text.value
document.body.appendChild(p_texte)

text.value = ""
})
}

// const res = await fetch("/hello/text_nom")
// const message = await res.text()
// const p = document.createElement('p')
// p.innerText = message
// document.body.appendChild(p)