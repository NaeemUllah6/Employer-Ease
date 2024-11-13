// --------------------script for navbar--------------------
document.querySelector('.navbar-toggler').addEventListener('click', function () {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    navbarCollapse.classList.toggle('active');
});
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 1) {
        navbar.classList.add('color_change')
    }
    else {
        navbar.classList.remove('color_change')
    }
});
// ----------------------------Tabs-------------------------------
function showContent(contentId) {
    const content = document.getElementById('content');

    const contentMap = {
        content1: `
                <img class="img-fluid" src="../images/tabimg.svg" alt="">
            `,
        content2: `
                <img class="img-fluid" src="../images/tabimg.svg" alt="">
               
            `,
        content3: `
                <img class="img-fluid" src="../images/tabimg.svg" alt="">
               
            `,
        content4: `
                <img class="img-fluid" src="../images/tabimg.svg" alt="">
               
            `
    };


    content.innerHTML = contentMap[contentId] || '<p>No content available.</p>';
}



// ---------------------------------------count down------------------------------------------


const targetDate = new Date("November 30, 2024 23:59:59").getTime();

const countdownTimer = setInterval(() => {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
   
    const milliseconds = Math.floor(timeRemaining % 1000).toString().padStart(3, '0');

    
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    
    document.getElementById("milliseconds").innerHTML = milliseconds;

  
    if (timeRemaining < 0) {
        clearInterval(countdownTimer);
        document.getElementById("countdown").innerHTML = "Countdown Complete!";
    }
}, 1);




const selectedItems = [];

function toggleDropdown() {
    document.getElementById('dropdown').classList.toggle('active');
}

function selectItem(item) {
    if (!selectedItems.includes(item)) {
        selectedItems.push(item);
        updateSelectedItems();
    }
}

function removeItem(item) {
    const index = selectedItems.indexOf(item);
    if (index > -1) {
        selectedItems.splice(index, 1);
        updateSelectedItems();
    }
}

function updateSelectedItems() {
    const selectedItemsContainer = document.querySelectorAll('selectedItems');
    selectedItemsContainer.innerHTML = '';
    selectedItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('selected-item');
        itemElement.innerHTML = `${item} <span class="remove-item" onclick="removeItem('${item}')">x</span>`;
        selectedItemsContainer.appendChild(itemElement);
    });
    toggleDropdown(); // Close dropdown after selection
}

// Close dropdown when clicking outside
document.addEventListener('click', function (event) {
    const isClickInside = document.querySelector('.input-container').contains(event.target);
    if (!isClickInside) {
        document.getElementById('dropdown').classList.remove('active');
    }
});


