function pageLoadContact() {
    const content = document.getElementById('content')

    const wrapper = document.createElement('div')
    wrapper.setAttribute('id', 'wrapper')
    content.appendChild(wrapper)


    const titulo = document.createElement('h1')
    titulo.textContent = 'Contact'
    wrapper.appendChild(titulo)

    const imagen = document.createElement('img')
    imagen.src = "https://as2.ftcdn.net/v2/jpg/01/63/09/31/1000_F_163093143_oPtxxIYW1SL1yCDVEq7prWsozOEOpQHU.jpg"
    imagen.alt = "Location"
    wrapper.appendChild(imagen)

    const parrafo = document.createElement('p')
    parrafo.textContent = 'Llamame bb'
    wrapper.appendChild(parrafo)

}

export default pageLoadContact