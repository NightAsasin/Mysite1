// Отримуємо посилання на елементи
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');

// Отримуємо посилання на кнопки закриття
const closeButtons = document.querySelectorAll('.close-button'); // Вибере всі кнопки із цим класом

// Функція для відкриття модального вікна
function openModal(modal) {
    if (modal) { // Перевірка, чи модалка існує
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Заборонити прокрутку фону
    }
}

// Функція для закриття модального вікна
function closeModal(modal) {
    if (modal) { // Перевірка, чи модалка існує
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Дозволити прокрутку фону
    }
}

// Додаємо слухачі подій для кнопок відкриття
// Перевірка if (loginBtn) та if (signupBtn) важлива, якщо ці кнопки можуть бути відсутні на сторінці
if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        closeModal(signupModal); // Закриваємо іншу модалку, якщо вона відкрита
        openModal(loginModal);
    });
}

if (signupBtn) {
    signupBtn.addEventListener('click', () => {
        closeModal(loginModal); // Закриваємо іншу модалку, якщо вона відкрита
        openModal(signupModal);
    });
}

// Додаємо слухачі подій для кнопок закриття
closeButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        // Знаходимо батьківський .auth-modal і закриваємо його
        const modal = event.target.closest('.auth-modal');
        if (modal) {
            closeModal(modal);
        }
    });
});

// Закриття модального вікна при кліку за його межами
window.addEventListener('click', (event) => {
    if (event.target === loginModal) {
        closeModal(loginModal);
    }
    if (event.target === signupModal) {
        closeModal(signupModal);
    }
});

// Закриття модального вікна при натисканні Escape
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        if (loginModal && loginModal.classList.contains('active')) {
            closeModal(loginModal);
        }
        if (signupModal && signupModal.classList.contains('active')) {
            closeModal(signupModal);
        }
    }
});