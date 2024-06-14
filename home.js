document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Rimuovi la classe 'active' da tutti gli elementi del menu
            menuItems.forEach(el => el.classList.remove('text-yellow-200'));
            // Aggiungi la classe 'active' all'elemento cliccato
            this.classList.add('text-yellow-200');
        });
    });
});

// Dropdown menu

const dropdowns = document.querySelectorAll('.dropdown-trigger');


dropdowns.forEach(dropdown => {
    // Aggiungi event listener per mouseenter (passaggio del mouse)
    dropdown.addEventListener('mouseenter', function () {
        // Trova il menu dropdown corrispondente
        const submenu = dropdown.nextElementSibling;
        // Aggiungi classe per visualizzare il dropdown
        submenu.classList.add('open');
        // Aggiungi stili per dropdown 
        submenu.classList.add('blue');
    });

    // Aggiungi event listener per mouseleave (uscita del mouse)
    dropdown.addEventListener('mouseleave', function () {
        // Trova il menu dropdown corrispondente
        const submenu = dropdown.nextElementSibling;
        // Rimuovi classe per nascondere il dropdown
        submenu.classList.remove('open');
        // Rimuovi stili per dropdown 
        submenu.classList.remove('blue');
    });
});


// Scorrimento delle card

const cardContainer = document.getElementById('cardContainer');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

// Calcola la larghezza di una singola card (96px + 8px di spazio tra le card)
const cardWidth = 96 + 8;

// Gestisci clic sulla freccia successiva
nextButton.addEventListener('click', () => {
    // Calcola la distanza massima di scorrimento a destra
    const maxScrollLeft = cardContainer.scrollWidth - cardContainer.clientWidth;
    
    cardContainer.scrollBy({
        left: maxScrollLeft,
        behavior: 'smooth'
    });

    // Aggiorna i pulsanti subito dopo lo scroll
    setTimeout(updateScrollButtons, 500);
});

// Gestisci clic sulla freccia precedente
prevButton.addEventListener('click', () => {
    // Scorri fino all'inizio
    cardContainer.scrollBy({
        left: -cardContainer.scrollLeft,
        behavior: 'smooth'
    });

    // Aggiorna i pulsanti subito dopo lo scroll
    setTimeout(updateScrollButtons, 500);
});

// Funzione per aggiornare lo stato dei pulsanti di scorrimento
function updateScrollButtons() {
    // Mostra o nascondi il pulsante "indietro" in base alla posizione dello scroll
    prevButton.classList.toggle('hidden', cardContainer.scrollLeft <= 0);

    // Mostra o nascondi il pulsante "avanti" in base alla posizione dello scroll
    nextButton.classList.toggle('hidden', cardContainer.scrollLeft >= cardContainer.scrollWidth - cardContainer.clientWidth);
}

// Aggiorna lo stato dei pulsanti di scorrimento all'avvio
updateScrollButtons();

// layout immagini


document.getElementById('menu').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        // Rimuove la classe highlighted da tutti i li
        document.querySelectorAll('#menu li').forEach(function(li) {
            li.classList.remove('highlighted');
        });

        // Aggiunge la classe highlighted al li cliccato
        event.target.classList.add('highlighted');

        // Nasconde tutte le sezioni del contenuto
        document.querySelectorAll('.content-section').forEach(function(section) {
            section.classList.add('hidden');
            section.classList.remove('block');
        });

        // Mostra la sezione del contenuto corrispondente
        const target = event.target.getAttribute('data-target');
        document.getElementById(target).classList.remove('hidden');
        document.getElementById(target).classList.add('block');
    }
});

// underline menu layout
document.querySelectorAll('#menu li').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('#menu li').forEach(li => li.classList.remove('underline'));
        this.classList.add('underline');
        
        document.querySelectorAll('.content-section').forEach(section => section.classList.remove('active'));
        document.getElementById(this.dataset.target).classList.add('active');
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const menuItems = [
        {
            name: "Chi Siamo",
            href: "#",
            dropdown: null
        },
        {
            name: "Connectivity",
            href: "#",
            dropdown: {
                title: "Connectivity",
                description: "La tecnologia di ultima generazione al servizio di aziende pubbliche e private.",
                imgSrc: "/img/dropdown-1.png",
                links: [
                    { text: "Rete fissa", href: "#" },
                    { text: "Rete mobile", href: "#" },
                    { text: "Linea internazionale", href: "#" },
                    { text: "Managed and Professional Services", href: "#" }
                ]
            }
        },
        {
            name: "Cloud",
            href: "#",
            dropdown: {
                title: "Cloud",
                description: "Le soluzioni di CRM per il supporto digitale di Aziende e Pubblica Amministrazione.",
                imgSrc: "/img/dropdown-2.png",
                links: [
                    { text: "Data Center", href: "#" },
                    { text: "Cloud Infrastructure", href: "#" },
                    { text: "Servizi di collaborazione", href: "#" },
                    { text: "Cloud Application", href: "#" },
                    { text: "Artificial Intelligence", href: "#" }
                ]
            }
        },
        // Add other menu items as needed
        {
            name: "Blog",
            href: "#",
            dropdown: null
        },
        {
            name: "Cerca",
            href: "#",
            dropdown: null
        },
        {
            name: "Area Clienti",
            href: "#",
            dropdown: null
        }
    ];

    const mainMenu = document.getElementById("main-menu");

    menuItems.forEach(item => {
        const menuItem = document.createElement("li");
        menuItem.classList.add("relative", "group");

        const link = document.createElement("a");
        link.href = item.href;
        link.classList.add("hover:text-red-500", "flex", "items-center", "font-bold");
        link.textContent = item.name;

        menuItem.appendChild(link);

        if (item.dropdown) {
            const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svg.classList.add("ml-1", "w-3", "h-3", "transform", "transition-transform");
            svg.setAttribute("fill", "none");
            svg.setAttribute("viewBox", "0 0 24 24");
            svg.setAttribute("stroke", "currentColor");
            svg.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />`;

            link.appendChild(svg);

            const dropdown = document.createElement("div");
            dropdown.classList.add("submenu", "absolute", "mt-11", "w-screen", "h-96", "bg-blue-900", "text-white", "shadow-lg", "rounded-md", "p-4");

            const dropdownContent = `
                <div class="flex w-3/4">
                    <div class="w-1/2">
                        <h1 class="text-xl mt-3 mb-4">${item.dropdown.title}</h1>
                        <h3 class="mb-2">${item.dropdown.title}</h3>
                        <p>${item.dropdown.description}<a href="#" class="underline">Scopri di più</a></p>
                        <img src="${item.dropdown.imgSrc}" alt="Immagine" class="mr-4 mt-6">
                    </div>
                    <div class="w-3/4 flex ml-16">
                        <ul class="w-1/2">
                            ${item.dropdown.links.map(link => `<li><a href="${link.href}" class="block px-2 py-1 hover:bg-blue-700 mt-3">${link.text}</a></li>`).join('')}
                        </ul>
                    </div>
                </div>
            `;

            dropdown.innerHTML = dropdownContent;
            menuItem.appendChild(dropdown);
        }

        mainMenu.appendChild(menuItem);
    });
});
