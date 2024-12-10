const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const resultsSection = document.getElementById('results');

// Ejemplos de resultados por el momento 
const mockData = [
    {
        name: "Aspirina",
        tipo: "Analgésico",
        description: "Usado para reducir fiebre y aliviar dolor leve o moderado.",
    },
    {
        name: "Amoxicillina",
        tipo: "Antibiótico",
        description: "Tratamiento para infecciones causadas por bacterias, como: neumonía o bronquitis.",
    },
    {
        name: "Ibuprofeno",
        tipo: "Analgésico",
        description: "Alivia dolor e inflamación causado por diversas condiciones.",
    },
];

// Función para mostrar resultados
function displayResults(medicines) {
    resultsSection.innerHTML = ''; // Despejar resultados previos

    if (medicines.length === 0) {
        resultsSection.innerHTML = '<p>No se encontraron resultados.</p>';
        return;
    }

    medicines.forEach((medicine) => {
        const medicineCard = document.createElement('div');
        medicineCard.className = 'medicine-card';

        medicineCard.innerHTML = `
            <h3>${medicine.name}</h3>
            <p><strong>Type:</strong> ${medicine.tipo}</p>
            <p>${medicine.description}</p>
        `;

        resultsSection.appendChild(medicineCard);
    });
}

// Funcionalidad del buscador
searchButton.addEventListener('click', () => {
    const query = searchInput.value.toLowerCase();

    // Filtro
    const filteredMedicines = mockData.filter((medicine) =>
        medicine.name.toLowerCase().includes(query)
    );

    displayResults(filteredMedicines);
});

// Display inicial
displayResults(mockData);
