const container = document.getElementById('container');
const resetButton = document.getElementById('resetButton');

function createGrid(size) {
    container.innerHTML = '';
    const gridSize = 960 / size;
    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.style.width = `${gridSize}px`;
        gridItem.style.height = `${gridSize}px`;
        gridItem.addEventListener('mouseover', changeColor);
        container.appendChild(gridItem);
    }
}

function changeColor(e) {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    e.target.style.backgroundColor = randomColor;
}

resetButton.addEventListener('click', () => {
    let size = prompt("Digite o número de quadrados por lado (máximo 100):");
    size = parseInt(size);
    if (size > 0 && size <= 100) {
        createGrid(size);
    } else {
        alert("Por favor, insira um número entre 1 e 100.");
    }
});

createGrid(16);
