function pageLoadMenu() {
    const content = document.getElementById('content')

    const wrapper = document.createElement('div')
    wrapper.setAttribute('id', 'wrapper')
    content.appendChild(wrapper)

    const titulo = document.createElement('h1')
    titulo.textContent = 'Menu'
    wrapper.appendChild(titulo)

    const imagen = document.createElement('img')
    imagen.src = "https://plantbased-passport.com/wp-content/uploads/vegan-argentinian-choripan-5.jpg"
    imagen.alt = "choripan"
    wrapper.appendChild(imagen)

    const parrafo = document.createElement('p')
    parrafo.textContent = '500 pe'
    wrapper.appendChild(parrafo)

}

export default pageLoadMenu