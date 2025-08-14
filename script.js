const menu = document.getElementById('menu');
const sections = {
    main: [document.getElementById('main'), document.getElementById('main-content')],
    about: [document.getElementById('about')],
    products: [document.getElementById('products-section')],  // исправлено здесь
    info: [document.getElementById('info')],
    b2b: [document.getElementById('b2b')],
    contacts: [document.getElementById('contacts')]
};

menu.addEventListener('click', e => {
    if (e.target.tagName !== 'LI') return;

    // Удаляем активный класс у всех пунктов меню
    [...menu.children].forEach(li => li.classList.remove('active'));
    e.target.classList.add('active');

    // Скрываем все секции
    Object.values(sections).flat().forEach(section => {
        if(section) section.classList.remove('active');
    });

    // Показываем нужные секции
    const key = e.target.getAttribute('data-section');
    if (sections[key]) {
        sections[key].forEach(section => {
            if(section) section.classList.add('active');
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const productsMenuItem = document.querySelector('li[data-section="products"]');
    const productsDropdown = document.getElementById('products-dropdown');

    let timeoutId;

    function showDropdown() {
        clearTimeout(timeoutId);
        productsDropdown.style.display = 'block';
    }

    function hideDropdown() {
        timeoutId = setTimeout(() => {
            productsDropdown.style.display = 'none';
        }, 200);
    }

    productsMenuItem.addEventListener('mouseenter', showDropdown);
    productsMenuItem.addEventListener('mouseleave', hideDropdown);
    productsDropdown.addEventListener('mouseenter', showDropdown);
    productsDropdown.addEventListener('mouseleave', hideDropdown);
});
