function pageLoad() {
    const content = document.getElementById('content')

    const titulo = document.createElement('h1')
    titulo.textContent = 'El Bondi'
    content.appendChild(titulo)

    const imagen = document.createElement('img')
    imagen.src = "https://bocao.com.do/uploads/img28-02-2016-1795791087.jpg"
    imagen.alt = "el bondi logo"
    content.appendChild(imagen)

    const parrafo = document.createElement('p')
    parrafo.textContent = '"El Bondi" un restaurante de comida Argentina cocinada directamente desde el fondo de tu alma. Vas a poder comer comida autentica, sabrosa e inolvidable. Que empiece la locomotora del sabor...'
    content.appendChild(parrafo)

}

export default pageLoad