// 1. DATA: Your specific academic background
const educationHistory = [
    {
        institute: "University of Engineering & Technology, Peshawar",
        level: "Bachelor of Computer Science",
        year: "2025 - 2029"
    },
    {
        institute: "Modernage Public School & College, Abbottabad",
        level: "FSc (Pre-Engineering)",
        year: "2023 - 2025"
    },
    {
        institute: "Tameer-i-Watan Public School, Abbottabad",
        level: "Matriculation (Science)",
        year: "2021 - 2023"
    }
];

// 2. LOAD TABLE
document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById('academic-body');
    
    educationHistory.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>${item.institute}</strong></td>
            <td>${item.level}</td>
            <td><span style="background:var(--blob-color); padding:5px 10px; border-radius:10px; font-size:0.85rem;">${item.year}</span></td>
        `;
        tableBody.appendChild(row);
    });
});

// 3. THEME SWITCHER
const themeBtn = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeBtn.querySelector('i');

themeBtn.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        body.removeAttribute('data-theme');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        body.setAttribute('data-theme', 'dark');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
});

// 4. FORM VALIDATION
const form = document.getElementById('contactForm');

form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    
    let isValid = true;
    document.querySelectorAll('.error-msg').forEach(el => el.style.display = 'none');
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if(name === "") { showError('name-error', 'Name is required'); isValid = false; }
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email)) { showError('email-error', 'Valid email required'); isValid = false; }

    if(message.length < 5) { showError('msg-error', 'Message is too short'); isValid = false; }

    if(isValid) {
        alert("Thank you! Salman will connect with you soon.");
        form.reset();
    }
});

function showError(id, msg) {
    const el = document.getElementById(id);
    el.innerText = msg;
    el.style.display = 'block';
}