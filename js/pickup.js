/* ======================
   GLOBAL STATE
====================== */
const pickupState = {
  selectedStore: null,
  selectedMenus: {},
  currentCategory: 'all',
  selectedDate: '',
  selectedTime: ''
};

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
  pickupState.selectedStore = store;

  document.getElementById('store_info_box').innerHTML = `
    <strong>${store.spot}</strong>
    <p>${store.address}</p>
    <p>${store.timename1} ${store.time}</p>
    ${store.pickuptime ? `<p>${store.timename2} ${store.pickuptime}</p>` : ''}
    ${store.lastorder ? `<p>${store.lastorder}</p>` : ''}
  `;

  goStep(2);

  // ⚠ 메뉴 렌더링은 pickupmenu.js의 함수
  renderMenu();
}

/* ======================
   날짜 / 시간
====================== */
const date_list = document.getElementById('date_list');
const time_list = document.getElementById('time_list');
const selected_datetime = document.getElementById('selected_datetime');

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
  ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00']
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
  pickupState.selectedDate = v;
  updateDatetime();
}

function selectTime(v, el) {
  document.querySelectorAll('.time_item').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  pickupState.selectedTime = v;
  updateDatetime();
}

function updateDatetime() {
  if (pickupState.selectedDate && pickupState.selectedTime) {
    selected_datetime.innerText =
      `선택한 픽업: ${pickupState.selectedDate} ${pickupState.selectedTime}`;

    document.getElementById('store_info_box').innerHTML += `
      <div style="margin-top:8px;">
        픽업 날짜: ${pickupState.selectedDate}<br>
        픽업 시간: ${pickupState.selectedTime}
      </div>
    `;
  }
}

// 선택 완료 버튼
document.addEventListener('DOMContentLoaded', () => {
  generateDates();
  generateTimes();
});

function openNoticeModal() {
  document.getElementById('notice_modal').classList.add('is_open');
}

function closeNoticeModal() {
  document.getElementById('notice_modal').classList.remove('is_open');
}

function goPayment() {
  // 임시 결제 페이지
  location.href = '/payment.html';
}
