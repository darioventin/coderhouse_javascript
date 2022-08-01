let productos = [
  {
    "id": "001",
    "titulo": "Mi Primer Balance",
    "precio": 10500,
    "img": "../multimedia/imagenes/cursos/balance.png",
    "descripcion": ""
  },
  {
    "id": "002",
    "titulo": "Clases Particulares",
    "precio": 1500,
    "img": "../multimedia/imagenes/cursos/clases.png",
    "descripcion": ""
  },
  {
    "id": "003",
    "titulo": "Iniciación Profesional",
    "precio": 15000,
    "img": "../multimedia/imagenes/cursos/iniciacion.png",
    "descripcion": ""
  },
  {
    "id": "004",
    "titulo": "Monotributo",
    "precio": 7800,
    "img": "../multimedia/imagenes/cursos/monotributo.png",
    "descripcion": ""
  },
  {
    "id": "005",
    "titulo": "Convenio Multilateral",
    "precio": 9000,
    "img": "../multimedia/imagenes/cursos/convenio.png",
    "descripcion": ""
  },
  {
    "id": "006",
    "titulo": "Ajuste por Inflación",
    "precio": 12000,
    "img": "../multimedia/imagenes/cursos/ajuste.png",
    "descripcion": ""
  }
]

let carrito
if (JSON.parse(localStorage.getItem('carrito'))) {
  carrito = JSON.parse(localStorage.getItem('carrito'))
} else {
  localStorage.setItem('carrito', JSON.stringify([]))
  carrito = JSON.parse(localStorage.getItem('carrito'))
}

function desplegarProductos() {
  for (let i = 0; i < productos.length; i++) {
    const element = productos[i]
    const { id, titulo, precio, img } = element
    const card = `
        <div class="card">
            <p class="titulo">${titulo}</p>
            <div>
                <img class='imgProducto' src=${img} alt=""/>
            </div>
            <div>
                <p class="precio">$${precio.toLocaleString()}</p>
            </div>
            <div class="btn-container">
                <button id=${id} class='btnAgregar'>AGREGAR AL CARRITO 😎</button>
            </div>
        </div>`
    const container = document.getElementById('container')
    container.innerHTML += card
  }

  const btnAgregar = document.getElementsByClassName('btnAgregar')

  for (let i = 0; i < btnAgregar.length; i++) {
    const element = btnAgregar[i]
    element.addEventListener('click', agregarAlCarrito)
  }
}

desplegarProductos()

function agregarAlCarrito(e) {
  const btn = e.target
  const id = btn.getAttribute('id')
  const prodEncontrado = productos.find((item) => item.id == id)
  const enCarrito = carrito.find((prod) => prod.id == prodEncontrado.id)

  if (!enCarrito) {
    carrito.push({ ...prodEncontrado, cantidad: 1 })
  } else {
    let carritoFiltrado = carrito.filter((prod) => prod.id != enCarrito.id)
    carrito = [
      ...carritoFiltrado,
      { ...enCarrito, cantidad: enCarrito.cantidad + 1 },
    ]
  }
  console.log(carrito)
  localStorage.setItem('carrito', JSON.stringify(carrito))
  contador.innerHTML = carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
}

const contador = document.getElementById('cartCounter')
contador.innerHTML = carrito.reduce((acc, prod) => acc + prod.cantidad, 0)