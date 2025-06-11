document.addEventListener("DOMContentLoaded", function() {
    // Seleziona i link delle nuove categorie
    const tuttoLink = document.getElementById('Tutto');
    const manualiLink = document.getElementById('Manuali');
    const teorieLink = document.getElementById('Teorie');
    const cataloghiLink = document.getElementById('Cataloghi'); // Ho corretto l'ID da "Cataloghi" per coerenza

    // Seleziona tutti i div con la classe 'list-card'
    const listCards = document.querySelectorAll('.list-contenitore .list-card');

    // Seleziona tutti i link del menu per gestire la classe 'active'
    const menuLinks = document.querySelectorAll('.categorie h2 a');

    // Funzione per filtrare i div in base alla categoria
    function filterCards(category) {
        listCards.forEach(card => {
            // Se la categoria è 'Tutto', mostra tutti i div
            if (category === 'Tutto') {
                card.style.display = 'block';
            } else if (card.classList.contains(category)) {
                // Se il div ha la classe della categoria selezionata, mostralo
                card.style.display = 'block';
            } else {
                // Altrimenti, nascondilo
                card.style.display = 'none';
            }
        });
    }

    // Funzione per impostare la classe 'active' sul link cliccato
    function setActiveLink(activeLink) {
        menuLinks.forEach(link => {
            link.classList.remove('active');
        });
        activeLink.classList.add('active');
    }

    // Aggiungi gli event listener per ogni link di categoria
    tuttoLink.addEventListener('click', function(event) {
        event.preventDefault();
        setActiveLink(tuttoLink);
        filterCards('Tutto');
    });

    manualiLink.addEventListener('click', function(event) {
        event.preventDefault();
        setActiveLink(manualiLink);
        filterCards('manuali'); // Usa la classe CSS del div
    });

    teorieLink.addEventListener('click', function(event) {
        event.preventDefault();
        setActiveLink(teorieLink);
        filterCards('teorie'); // Usa la classe CSS del div
    });

    cataloghiLink.addEventListener('click', function(event) {
        event.preventDefault();
        setActiveLink(cataloghiLink);
        filterCards('cataloghi'); // Usa la classe CSS del div
    });

    // Opzionale: mostra tutti gli elementi all'avvio della pagina e imposta 'Tutto' come attivo
    // Puoi rimuovere questa parte se preferisci che all'inizio non ci sia alcun filtro attivo
    setActiveLink(tuttoLink);
    filterCards('Tutto');
});