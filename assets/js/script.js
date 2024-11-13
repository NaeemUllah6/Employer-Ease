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


function initializeSwiper() {
    const screenWidth = window.innerWidth;
    let slidesPerView = 3;
    if (screenWidth <= 640) {
        slidesPerView = 1;
    } else if (screenWidth <= 1024) {
        slidesPerView = 2;
    }

    return new Swiper('.swiper-container', {
        slidesPerView: slidesPerView,
        spaceBetween: 20,
        navigation: {
            nextEl: '.next',
            prevEl: '.prev',
        },
    });
}

let swiper = initializeSwiper();


window.addEventListener('resize', () => {
    swiper.destroy(true, true);
    swiper = initializeSwiper();
});

const icons = document.querySelectorAll('.previous');

icons.forEach(icon => {
    icon.addEventListener('click', () => {
        if (!icon.classList.contains('border')) {
            icon.classList.add('border');
        } else {
            icon.classList.remove('border', 'icon-style');
        }
    });
});


const data = {

    datasets: [{
        label: 'My First Dataset',
        data: [20, 80],
        backgroundColor: [
            '#EAECF0',
            '#3684A4',
        ],
        hoverOffset: 4
    }]
};


const config = {

    type: 'doughnut',
    data: data,
    options: {
        responsive: true,
        cutout: '80%',
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: false,
                text: 'Chart.js Donut Chart'
            }
        }
    }
};


const myDonutChart = new Chart(
    document.getElementById('myDonutChart'),
    config
);


const myvideo = document.getElementById('auto-play');
const click_button = document.getElementById('play');
const icon = click_button.querySelector('i');
click_button.addEventListener('click', () => {
    if (myvideo.paused) {
        myvideo.play();
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
    }
    else {
        myvideo.pause();
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    }
});