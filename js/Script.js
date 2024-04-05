// Lista de productos (puedes obtenerla de una base de datos o API)
const products = [
    { id: 1, name: 'Netflix', description: 'Descripción del producto en construcción...', prices: ['Perfil: $ 13.000', 'Cuenta: $ 46.000'] },
    { id: 2, name: 'Netflix Internacional', description: 'Descripción del producto en construcción...', prices: ['Perfil: $ 13.000'] },
    { id: 3, name: 'Netflix Smart TV', description: 'Descripción del producto en construcción...', prices: ['Perfil: $ 13.000'] },
    { id: 4, name: 'Amazone Prime Video', description: 'Descripción del producto en construcción...', prices: ['Perfil: $ 8.000', 'Cuenta: $ 18.000'] },
    { id: 5, name: 'Disney', description: 'Descripción del producto en construcción...', prices: ['Perfil: $ 6.000', 'Cuenta: $ 14.000'] },
    { id: 6, name: 'MAX', description: 'Descripción del producto en construcción...', prices: ['Perfil: $ 6.000', 'Cuenta: $ 14.000'] },
    { id: 7, name: 'Star+', description: 'Descripción del producto en construcción...', prices: ['Perfil: $6.000', 'Cuenta: $ 14.000'] },
    { id: 8, name: 'ViX', description: 'Descripción del producto en construcción...', prices: ['Perfil: $6.000', 'Cuenta: $ 14.000'] },
    { id: 9, name: 'Plex', description: 'Descripción del producto en construcción...', prices: ['Perfil: $6.000', 'Cuenta: $ 14.000'] },
    { id: 10, name: 'ProfeNet', description: 'Descripción del producto en construcción...', prices: ['Perfil: $ 13.000'] },
    { id: 11, name: 'Universal', description: 'Descripción del producto en construcción...', prices: ['Perfil: $7.000', 'Cuenta: $ 16.000'] },
    { id: 12, name: 'IPTV', description: 'Descripción del producto en construcción...', prices: ['Perfil: $8.000', 'Cuenta: $ 18.000'] },
    { id: 13, name: 'MLB+', description: 'Descripción del producto en construcción...', prices: ['Perfil: $7.000'] },
    { id: 14, name: 'Crunchyroll', description: 'Descripción del producto en construcción...', prices: ['Perfil: $6.000', 'Cuenta: $ 14.000'] },
    { id: 15, name: 'NBA', description: 'Descripción del producto en construcción...', prices: ['Perfil: $7.000'] },
    { id: 16, name: 'Paramount+', description: 'Descripción del producto en construcción...', prices: ['Perfil: $6.000', 'Cuenta: $ 14.000'] },
    { id: 17, name: 'PornHub', description: 'Descripción del producto en construcción...', prices: ['Perfil: $12.000'] },
    { id: 18, name: 'MagixTV', description: 'Descripción del producto en construcción...', prices: ['Perfil: $12.000', 'Cuenta: $ 25.000'] },
    { id: 19, name: 'AppleTV', description: 'Descripción del producto en construcción...', prices: ['Perfil: $45.000'] },
    { id: 20, name: 'Filmity', description: 'Descripción del producto en construcción...', prices: ['Perfil: $16.000', 'Cuenta: $ 46.000'] },
    { id: 21, name: 'Viki_rokuten', description: 'Descripción del producto en construcción...', prices: ['Perfil: $6.000', 'Cuenta: $ 14.000'] },
    { id: 22, name: 'Canva', description: 'Descripción del producto en construcción...', prices: ['Perfil: $8.000', 'Cuenta: $ 35.000'] },
    { id: 23, name: 'YoutubePremium', description: 'Descripción del producto en construcción...', prices: ['Perfil: $10.000', 'Cuenta: $ 18.000'] },
    { id: 24, name: 'Spotify', description: 'Descripción del producto en construcción...', prices: ['1xMes: $10.000', '2xMes: $ 15.000', '3xMes: $ 20.000']  },
    { id: 25, name: 'SmartOne', description: 'Descripción del producto en construcción...', prices: ['Perfil: $20.000'] },
    { id: 26, name: 'Instagram', description: 'Descripción del producto en construcción...', prices: ['Bots Desde: $20.000', 'Reales Desde: $ 50.000'] },
    { id: 27, name: 'Facebook', description: 'Descripción del producto en construcción...', prices: ['Bots Desde: $20.000', 'Reales Desde: $ 50.000'] },
    { id: 28, name: 'Directv', description: 'Descripción del producto en construcción...', prices: ['Perfil: $17.000', 'Cuenta: $ 28.000'] },
    { id: 29, name: 'Disney_Start', description: 'Descripción del producto en construcción...', prices: ['Cuenta: $ 22.000'] },
    { id: 30, name: 'ClaroVideo', description: 'Descripción del producto en construcción...', prices: ['Cuenta: $ 22.000'] },
    { id: 31, name: 'Deluxe', description: 'Descripción del producto en construcción...', prices: ['Anual: $380.000'] },
    { id: 32, name: 'FreeFire', description: 'Descripción del producto en construcción...', prices: ['Desde: $9.000', 'hasta: $ 100.000'] },
    { id: 33, name: 'Xbox', description: 'Descripción del producto en construcción...', prices: ['Perfil: $28.000'] },
    { id: 34, name: 'FC24', description: 'Descripción del producto en construcción...', prices: ['Cuenta: $ 180.000'] },
    { id: 35, name: 'GTA', description: 'Descripción del producto en construcción...', prices: [ 'Cuenta: $ 90.000'] },
    { id: 36, name: 'Office', description: 'Descripción del producto en construcción...', prices: ['Cuenta: $ 90.000'] },
    { id: 37, name: 'Roku', description: 'Descripción del producto en construcción...', prices: ['Dispositivo: $ 200.000'] },
    { id: 38, name: 'AndroidTv', description: 'Descripción del producto en construcción...', prices: ['Dispositivo: $ 160.000'] },
    
    // Agrega más productos aquí
];

// Variables para paginación
const itemsPerPage = 12;
let currentPage = 1;

// Función para mostrar los productos de la página actual
function showProducts() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const productsToShow = products.slice(startIndex, endIndex);

    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = '';
    productsToShow.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.dataset.id = product.id;
        productElement.dataset.description = product.description;
        productElement.innerHTML = `
            <img src="../App/img/producto${product.id}.png"  alt="${product.name}" width='196' height='196'>
            <div class="prices">
                <p><b>${product.name}</b></p>               
            </div>
        `;
        productsContainer.appendChild(productElement);
    });

    // Actualizar paginación
    updatePagination();
}

// Función para actualizar la paginación
function updatePagination() {
    const totalPages = Math.ceil(products.length / itemsPerPage);
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.addEventListener('click', () => {
            currentPage = i;
            showProducts();
        });
        if (i === currentPage) {
            button.classList.add('active');
        }
        pagination.appendChild(button);
    }
}

// Mostrar productos al cargar la página
showProducts();

// Event listeners para el modal
document.querySelectorAll('.product').forEach(item => {
    item.addEventListener('click', event => {
        const id = parseInt(item.dataset.id);
        const product = products.find(p => p.id === id);
        document.getElementById('modal-description').textContent = product.description;
        document.getElementById('modal-prices').innerHTML = product.prices.map(price => `<p>${price}</p>`).join('');
        document.getElementById('modal').style.display = 'block';
    });
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

window.addEventListener('click', event => {
    if (event.target === document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
});
