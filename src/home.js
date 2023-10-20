function pageLoadHome() {
    const content = document.getElementById('content')

    const wrapper = document.createElement('div')
    wrapper.setAttribute('id', 'wrapper')
    wrapper.classList.add('text-center')
    wrapper.classList.add('col-md')
    wrapper.classList.add('container')
    content.appendChild(wrapper)

    const titulo = document.createElement('h1')
    titulo.textContent = 'El Bondi'
    wrapper.appendChild(titulo)

    const imagen = document.createElement('img')
    imagen.src = "https://bocao.com.do/uploads/img28-02-2016-1795791087.jpg"
    imagen.alt = "el bondi logo"
    wrapper.appendChild(imagen)

    const parrafo = document.createElement('p')
    parrafo.textContent = '"El Bondi" un restaurante de comida Argentina cocinada directamente desde el fondo de tu alma. Vas a poder comer comida autentica, sabrosa e inolvidable. Que empiece la locomotora del sabor... En "El Bondi," te invitamos a un autentico viaje culinario a Argentina, la tierra del sabor inigualable. Nuestro acogedor restaurante es un rincón de Buenos Aires en el corazon de la ciudad, donde cada bocado es una experiencia de sabores tradicionales argentinos. Desde las deliciosas empanadas rellenas con ingredientes frescos y sazonados con amor, hasta las milanesas crujientes que te harán sentir como si estuvieras en una casa de campo en la Pampa, en "El Bondi" servimos lo mejor de la gastronomía argentina. Nuestro asado es una obra maestra de la parrilla, cocinado a la perfección para resaltar la jugosidad y el sabor de la carne de primera calidad. Y, por supuesto, no puedes dejar de probar nuestro clásico choripán, una deliciosa salchicha chorizo servida en un pan recién horneado. Ven a "El Bondi" y experimenta la pasión argentina por la comida en cada bocado. Te prometemos un viaje culinario que te hará sentir como si estuvieras en las calles de Buenos Aires. ¡Te esperamos para deleitar tu paladar con lo mejor de Argentina!'
    wrapper.appendChild(parrafo)

}

export default pageLoadHome