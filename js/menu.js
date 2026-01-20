
const tabs = document.querySelectorAll('.category_item');
const cards = document.querySelectorAll('.menu_card');
const bg = document.getElementById('category_bg');

// const bgImages = {
//   all: '/assets/images/fb2c6362b7e0e.png',
//   donut: '/assets/images/menu-donut.jpg',
//   bakepy: '/assets/images/menu-donut.jpg',
//   cake: '/assets/images/menu-donut.jpg',
//   beverage: '/assets/images/menu-donut.jpg'
// };

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('is_active'));
    tab.classList.add('is_active');

    const category = tab.dataset.category;
    bg.style.backgroundImage = `url(${bgImages[category]})`;

    cards.forEach(card => {
      card.style.display =
        category === 'all' || card.dataset.category === category
          ? 'block'
          : 'none';
    });
  });
});