function pageLoadMenu() {
    const content = document.getElementById('content')

    const wrapper = document.createElement('div')
    wrapper.setAttribute('id', 'wrapper')
    wrapper.classList.add('container')
    content.appendChild(wrapper)

    const titulo = document.createElement('h1')
    titulo.textContent = 'Menu'
    wrapper.appendChild(titulo)

    const areaComida = document.createElement('div')
    areaComida.classList.add('row')
    areaComida.classList.add('g-4')
    wrapper.appendChild(areaComida)

    

    //comida 1
    const areaComidaColumna1 = document.createElement('div')
    areaComidaColumna1.classList.add('col-lg-3')
    areaComidaColumna1.classList.add('col-md-6')
    areaComida.appendChild(areaComidaColumna1)

    const tarjeta1 = document.createElement('div')
    tarjeta1.classList.add('card')
    tarjeta1.classList.add('bg-light')
    areaComidaColumna1.appendChild(tarjeta1)


    const comida1 = document.createElement('div')
    comida1.setAttribute('id', 'comida1')
    comida1.classList.add('card-body')
    comida1.classList.add('text-center')
    tarjeta1.appendChild(comida1)

    const imagen1 = document.createElement('img')
    imagen1.src = "https://plantbased-passport.com/wp-content/uploads/vegan-argentinian-choripan-5.jpg"
    imagen1.alt = "choripan"
    imagen1.classList.add('mb-3')
    comida1.appendChild(imagen1)

    const parrafo1 = document.createElement('p')
    parrafo1.textContent = 'Choripan $500'
    parrafo1.classList.add('card-text')
    comida1.appendChild(parrafo1)

    //comida 2
    const areaComidaColumna2 = document.createElement('div')
    areaComidaColumna2.classList.add('col-lg-3')
    areaComidaColumna2.classList.add('col-md-6')
    areaComida.appendChild(areaComidaColumna2)

    const tarjeta2 = document.createElement('div')
    tarjeta2.classList.add('card')
    tarjeta2.classList.add('bg-light')
    areaComidaColumna2.appendChild(tarjeta2)

    const comida2 = document.createElement('div')
    comida2.setAttribute('id', 'comida2')
    comida2.classList.add('card-body')
    comida2.classList.add('text-center')
    tarjeta2.appendChild(comida2)

    const imagen2 = document.createElement('img')
    imagen2.src = "https://hispanickitchen.com/wp-content/uploads/2021/07/Optimized-Asado-Argentino-Hispanic-Kitchen.jpeg"
    imagen2.alt = "asado"
    imagen2.classList.add('mb-3')
    comida2.appendChild(imagen2)

    const parrafo2 = document.createElement('p')
    parrafo2.textContent = 'Asado $1500'
    parrafo2.classList.add('card-text')
    comida2.appendChild(parrafo2)

    //comida 3
    const areaComidaColumna3 = document.createElement('div')
    areaComidaColumna3.classList.add('col-lg-3')
    areaComidaColumna3.classList.add('col-md-6')
    areaComida.appendChild(areaComidaColumna3)


    const tarjeta3 = document.createElement('div')
    tarjeta3.classList.add('card')
    tarjeta3.classList.add('bg-light')
    areaComidaColumna3.appendChild(tarjeta3)

    const comida3 = document.createElement('div')
    comida3.setAttribute('id', 'comida3')
    comida3.classList.add('card-body')
    comida3.classList.add('text-center')
    tarjeta3.appendChild(comida3)

    const imagen3 = document.createElement('img')
    imagen3.src = "https://hips.hearstapps.com/hmg-prod/images/beef-empanadas-1640021932.jpeg?crop=0.668xw:1.00xh;0.167xw,0&resize=1200:*"
    imagen3.alt = "empanada"
    imagen3.classList.add('mb-3')
    comida3.appendChild(imagen3)

    const parrafo3 = document.createElement('p')
    parrafo3.textContent = 'Empanada $400'
    parrafo3.classList.add('card-text')
    comida3.appendChild(parrafo3)

    //comida 4
    const areaComidaColumna4 = document.createElement('div')
    areaComidaColumna4.classList.add('col-lg-3')
    areaComidaColumna4.classList.add('col-md-6')
    areaComida.appendChild(areaComidaColumna4)

    const tarjeta4 = document.createElement('div')
    tarjeta4.classList.add('card')
    tarjeta4.classList.add('bg-light')
    areaComidaColumna4.appendChild(tarjeta4)

    const comida4 = document.createElement('div')
    comida4.setAttribute('id', 'comida4')
    comida4.classList.add('card-body')
    comida4.classList.add('text-center')
    tarjeta4.appendChild(comida4)

    const imagen4 = document.createElement('img')
    imagen4.src = "https://thebigmansworld.com/wp-content/uploads/2023/03/milanesa-recipe.jpg"
    imagen4.alt = "milanesa"
    imagen4.classList.add('mb-3')
    comida4.appendChild(imagen4)

    const parrafo4 = document.createElement('p')
    parrafo4.textContent = 'Milanesa $900'
    parrafo4.classList.add('card-text')
    comida4.appendChild(parrafo4)

}

export default pageLoadMenu