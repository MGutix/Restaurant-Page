function pageLoadHome() {
    const content = document.getElementById('content')

    const wrapper = document.createElement('div')
    wrapper.setAttribute('id', 'wrapper')
    content.appendChild(wrapper)

    const titulo = document.createElement('h1')
    titulo.textContent = 'El Bondi'
    wrapper.appendChild(titulo)

    const imagen = document.createElement('img')
    imagen.src = "https://bocao.com.do/uploads/img28-02-2016-1795791087.jpg"
    imagen.alt = "el bondi logo"
    wrapper.appendChild(imagen)

    const parrafo = document.createElement('p')
    parrafo.textContent = '"El Bondi" un restaurante de comida Argentina cocinada directamente desde el fondo de tu alma. Vas a poder comer comida autentica, sabrosa e inolvidable. Que empiece la locomotora del sabor...'
    wrapper.appendChild(parrafo)

}

export default pageLoadHome