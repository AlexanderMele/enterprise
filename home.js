document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuItems.forEach(el => el.classList.remove('text-yellow-200'));
            this.classList.add('text-yellow-200');
        });
    });
});

// Dropdown menu

const dropdowns = document.querySelectorAll('.dropdown-trigger');


dropdowns.forEach(dropdown => {
    
    dropdown.addEventListener('mouseenter', function () {
        
        const submenu = dropdown.nextElementSibling;
      
        submenu.classList.add('open');
       
        submenu.classList.add('blue');
    });

    
    dropdown.addEventListener('mouseleave', function () {
        
        const submenu = dropdown.nextElementSibling;
       
        submenu.classList.remove('open');
        
        submenu.classList.remove('blue');
    });
});


// Scorrimento delle card

const cardContainer = document.getElementById('cardContainer');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');


const cardWidth = 96 + 8;


nextButton.addEventListener('click', () => {
   
    const maxScrollLeft = cardContainer.scrollWidth - cardContainer.clientWidth;
    
    cardContainer.scrollBy({
        left: maxScrollLeft,
        behavior: 'smooth'
    });

   
    setTimeout(updateScrollButtons, 500);
});


prevButton.addEventListener('click', () => {
   
    cardContainer.scrollBy({
        left: -cardContainer.scrollLeft,
        behavior: 'smooth'
    });

   
    setTimeout(updateScrollButtons, 500);
});


function updateScrollButtons() {
    
    prevButton.classList.toggle('hidden', cardContainer.scrollLeft <= 0);


    nextButton.classList.toggle('hidden', cardContainer.scrollLeft >= cardContainer.scrollWidth - cardContainer.clientWidth);
}


updateScrollButtons();

// layout immagini


document.getElementById('menu').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        
        document.querySelectorAll('#menu li').forEach(function(li) {
            li.classList.remove('highlighted');
        });

       
        event.target.classList.add('highlighted');

        
        document.querySelectorAll('.content-section').forEach(function(section) {
            section.classList.add('hidden');
            section.classList.remove('block');
        });

       
        const target = event.target.getAttribute('data-target');
        document.getElementById(target).classList.remove('hidden');
        document.getElementById(target).classList.add('block');
    }
});

// underline menu layout

