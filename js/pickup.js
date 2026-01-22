/* ======================
   기본 데이터
====================== */
const menus = [
  { name: '얼그레이 도넛', price: 3800, category: 'donut', desc: '홍차 향 가득한 시그니처 도넛' },
  { name: '딸기 케이크', price: 28000, category: 'cake', desc: '제철 딸기 생크림 케이크' }
];

let selectedMenus = {};
let selectedStore = {};
let currentCategory = 'all';
let selectedDate = '';
let selectedTime = '';
let currentDetail = null;

/* ======================
   DOM
====================== */
const date_list = document.getElementById('date_list');
const time_list = document.getElementById('time_list');
const selected_datetime = document.getElementById('selected_datetime');

/* ======================
   STEP 이동
====================== */
function goStep(n) {
  document.querySelectorAll('.step').forEach(s => s.classList.remove('is_active'));
  document.getElementById('step' + n).classList.add('is_active');
}

/* ======================
   매장 선택
====================== */
function selectStore(idx) {
  const store = pickupStep1_content[idx];

  selectedStore = {
    name: store.spot,
    time: store.pickuptime
  };

  document.getElementById('store_info_box').innerHTML =
    `<strong>${store.spot}</strong><br>픽업 가능 시간 ${store.pickuptime}`;

  goStep(2);
  renderMenu();
}

/* ======================
   메뉴
====================== */
function filterMenu(cat, btn) {
  currentCategory = cat;
  document.querySelectorAll('.menu_category button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderMenu();
}

function renderMenu() {
  const list = document.getElementById('menu_list');
  list.innerHTML = '';

  menus
    .filter(m => currentCategory === 'all' || m.category === currentCategory)
    .forEach(m => {
      list.innerHTML += `
        <div class="menu_card">
          <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587">
          <h4>${m.name}</h4>
          <p class="price">₩${m.price.toLocaleString()}</p>
          <div class="actions">
            <button class="secondary" onclick="openDetail('${m.name}')">상세</button>
            <button onclick="addMenu('${m.name}',${m.price})">담기</button>
          </div>
        </div>
      `;
    });
}

function addMenu(name, price) {
  selectedMenus[name] = selectedMenus[name] || { price, qty: 0 };
  selectedMenus[name].qty++;
  renderSelected();
}

function renderSelected() {
  const list = document.getElementById('selected_list');
  list.innerHTML = '';

  let total = 0;
  let qty = 0;

  Object.keys(selectedMenus).forEach(n => {
    const i = selectedMenus[n];
    total += i.price * i.qty;
    qty += i.qty;

    list.innerHTML += `
      <div class="selected_item">
        <span>${n}</span>
        <div class="qty">
          <button onclick="changeQty('${n}',-1)">-</button>
          <span>${i.qty}</span>
          <button onclick="changeQty('${n}',1)">+</button>
        </div>
        <span class="remove" onclick="removeMenu('${n}')">✕</span>
      </div>
    `;
  });

  document.getElementById('total').innerText =
    `총 ${qty}개 / ₩${total.toLocaleString()}`;
}

function changeQty(n, d) {
  selectedMenus[n].qty += d;
  if (selectedMenus[n].qty <= 0) delete selectedMenus[n];
  renderSelected();
}

function removeMenu(n) {
  delete selectedMenus[n];
  renderSelected();
}

/* ======================
   상세 모달
====================== */
function openDetail(name) {
  currentDetail = menus.find(m => m.name === name);
  detail_name.innerText = currentDetail.name;
  detail_desc.innerText = currentDetail.desc;
  detail_price.innerText = `₩${currentDetail.price.toLocaleString()}`;
  detail_modal.classList.add('is_open');
}

function closeDetail() {
  detail_modal.classList.remove('is_open');
}

function addMenuFromDetail() {
  addMenu(currentDetail.name, currentDetail.price);
  closeDetail();
}

/* ======================
   날짜 / 시간
====================== */
function generateDates() {
  date_list.innerHTML = '';
  const today = new Date();

  for (let i = 0; i < 7; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);

    const el = document.createElement('div');
    el.className = 'date_item';
    el.innerText = `${d.getMonth() + 1}/${d.getDate()}`;
    el.onclick = () => selectDate(el.innerText, el);
    date_list.appendChild(el);
  }
}

function generateTimes() {
  time_list.innerHTML = '';

  ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00']
    .forEach(t => {
      const el = document.createElement('div');
      el.className = 'time_item';
      el.innerText = t;
      el.onclick = () => selectTime(t, el);
      time_list.appendChild(el);
    });
}

function selectDate(v, el) {
  document.querySelectorAll('.date_item').forEach(d => d.classList.remove('active'));
  el.classList.add('active');
  selectedDate = v;
  updateDatetime();
}

function selectTime(v, el) {
  document.querySelectorAll('.time_item').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  selectedTime = v;
  updateDatetime();
}

function updateDatetime() {
  if (selectedDate && selectedTime) {
    selected_datetime.innerText =
      `선택한 픽업: ${selectedDate} ${selectedTime}`;
  }
}

/* ======================
   실행
====================== */
document.addEventListener('DOMContentLoaded', () => {
  generateDates();
  generateTimes();
});
