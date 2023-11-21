import "./style.css";

const bouton_start = document.createElement("button")
  bouton_start.classList.add("bouton_start")
  bouton_start.setAttribute("type","button")
  bouton_start.innerText = "start"
  document.body.appendChild(bouton_start)

const text_pseudonyme = document.createElement("input")
  text_pseudonyme.classList.add("text_pseudonyme")
  document.body.appendChild(text_pseudonyme)

bouton_start.addEventListener("click", async () =>{

  const box_p = document.createElement("div")
  box_p.classList.add("box_p")

  const p2 = document.createElement('p')
  p2.classList.add("p2")

  await fetch("/files/" + text_pseudonyme.value)
  const res = await fetch("/hello/" + text_pseudonyme.value)
  const message = await res.text()
  p2.innerText = message

  text_pseudonyme.value = ""

  document.body.appendChild(box_p)
  box_p.appendChild(p2)

  debut_de_lanventure()

// const res = await fetch("/hello/")
// const message = await res.text()
// const p = document.createElement('p')
// p.innerText = message
// document.body.appendChild(p)
})


function debut_de_lanventure() {

  const central_box = document.createElement("div")
    central_box.classList.add("central_box")
    document.body.appendChild(central_box)

  // const central_box_div = document.createElement("div")
  //   central_box_div.classList.add("central_box_div")
  //   central_box.appendChild(central_box_div)

  const text_prenom = document.createElement("input")
    text_prenom.classList.add("text_prenom")
    central_box.appendChild(text_prenom)

  // const text_nom = document.createElement("input")
  //   text_nom.classList.add("text_nom")
  //   central_box.appendChild(text_nom)

  // const text_age = document.createElement("input")
  //   text_age.classList.add("text_age")
  //   central_box.appendChild(text_age)

  // const text_sex = document.createElement("input")
  //   text_sex.classList.add("text_sex")
  //   central_box.appendChild(text_sex)

  const bouton = document.createElement("button")
    bouton.classList.add("bouton_valide")
    bouton.setAttribute("type","button")
    bouton.innerText = "go"
    central_box.appendChild(bouton)

  bouton.addEventListener("click", async () => {

    let contenue = text_prenom

    await fetch("/personnages/" + text_pseudonyme.value + contenue)
    // const res = await fetch("/hello/" + text_pseudonyme.value)
    // const message = await res.text()
    // p2.innerText = message

    // const p_texte = document.createElement("p")
    // p_texte.innerText = text_nom.value
    // central_box.appendChild(p_texte)

    text_prenom.value = ""
    // text_nom.value = ""
    // text_age.value = ""
    // text_sex.value = ""
  })
}

// const res = await fetch("/hello/text_nom")
// const message = await res.text()
// const p = document.createElement('p')
// p.innerText = message
// document.body.appendChild(p)