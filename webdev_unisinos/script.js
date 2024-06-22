const results = [
    {
        id: 1,
        image: 'image1.jpg',
        name: 'Nome do Negócio 1',
        priceRange: '$$$',
        rating: '5 estrelas',
        event: 'formatura',
        location: 'Porto Alegre, RS'
    },
    {
        id: 2,
        image: 'image1.jpg',
        name: 'Nome do Negócio 2',
        priceRange: '$$',
        rating: '4 estrelas',
        event: 'casamento',
        location: 'São Leopoldo, RS'
    },
    {
        id: 3,
        image: 'image1.jpg',
        name: 'Nome do Negócio 3',
        priceRange: '$',
        rating: '3 estrelas',
        event: 'aniversário',
        location: 'Novo Hamburgo, RS'
    },
    // adicionar mais dados
];

document.getElementById('search-button').addEventListener('click', function() {
    const filter1 = document.querySelector('.filter:nth-child(2)').value;
    const filter2 = document.querySelector('.filter:nth-child(3)').value;
    const filter3 = document.querySelector('.filter:nth-child(4)').value;
    const filter4 = document.querySelector('.filter:nth-child(5)').value;
    
    const filteredResults = results.filter(result => {
        return (!filter1 || result.rating === filter1) &&
               (!filter2 || result.priceRange === filter2) &&
               (!filter3 || result.event === filter3) &&
               (!filter4 || result.location === filter4);
    });
    
    displayResults(filteredResults);
});

function displayResults(filteredResults) {
    const resultsContainer = document.querySelector('.results');
    resultsContainer.innerHTML = ''; // Clear previous results
    
    if (filteredResults.length === 0) {
        resultsContainer.innerHTML = '<p>No results found</p>';
    } else {
        filteredResults.forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';
            
            const img = document.createElement('img');
            img.src = result.image;
            img.alt = `foto negocio ${result.id}`;
            
            const description = document.createElement('p');
            description.innerHTML = `Nome: <span>${result.name}</span><br>
                                     Faixa de Preço: <span>${result.priceRange}</span><br>
                                     Avaliação: <span>${result.rating}</span><br>
                                     Evento: <span>${result.event}</span><br>
                                     Local: <span>${result.location}</span>`;
            
            resultItem.appendChild(img);
            resultItem.appendChild(description);
            resultsContainer.appendChild(resultItem);
        });
    }
}

// Initially display all results
displayResults(results);
