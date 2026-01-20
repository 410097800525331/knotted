const pickupStep1_content = [
  {
    spot: '광주 상무',
    address: '광주광역시 서구 치평동 1208-5',
    timename1: '영업(픽업)시간 :',
    timename2: '',
    time: '11:00~21:00',
    pickuptime: '',
    lastorder: '',
  },
  {
    spot: '구의역',
    address: '서울특별시 광진구 아차산로 402 구의 이스트폴 B1층',
    timename1: '영업(픽업)시간 :',
    timename2: '',
    time: '10:00~22:00',
    pickuptime: '',
    lastorder: '',
  },
  {
    spot: '광교 중앙역',
    address: '경기도 수원시 영통구 도청로66번길6(이의동1333)<br>힐스테이트 광교중앙역 퍼스트 1층 135-1호',
    timename1: '영업시간 :',
    timename2: '픽업가능시간 :',
    time: '월-목 10:30~20:00 / 금-일 10:30~21:00',
    pickuptime: '11:00~20:00',
    lastorder: '',
  },
  {
    spot: '여주 프리미엄 아울렛',
    address: '경기 여주시 명품로 370 여주프리미엄아울렛 WEST동 640B호(주말 및 공휴일 10:30~21:00)',
    timename1: '영업시간 :',
    timename2: '픽업가능시간 :',
    time: '10:30~20:30',
    pickuptime: '11:00~20:00',
    lastorder: '',
  },
  {
    spot: '안성 스타필드',
    address: '경기 안성시 공도읍 서동대로 3930-39 스타필드안성1층',
    timename1: '영업시간 :',
    timename2: '픽업가능시간 :',
    time: '10:00~22:00',
    pickuptime: '10:00~21:30',
    lastorder: '',
  },
  {
    spot: '신림',
    address: '서울시 관악구 신림로 364, 우장빌딩 1층',
    timename1: '영업(픽업)시간 :',
    timename2: '',
    time: '09:00~21:00',
    pickuptime: '',
    lastorder: 'Last Order : 20:00',
  },
  {
    spot: '서울로 에너지플러스',
    address: '서울시 중구 회현동 84-17 에너지플러스 3층',
    timename1: '영업시간 :',
    timename2: '픽업가능시간 :',
    time: '08:00~20:00',
    pickuptime: '08:30~19:30',
    lastorder: '',
  },
  {
    spot: '전주 롯데',
    address: '전북 전주시 완산구 온고을로 2, 1층',
    timename1: '영업시간 :',
    timename2: '픽업가능시간 :',
    time: '10:30~20:30(Mon-Thu), 21:00(Fri-Sun)',
    pickuptime: '11:00~20:00',
    lastorder: '',
  },
  {
    spot: '부산 프리미엄 아울렛',
    address: '부산 기장군 장안읍 정관로 1133 부산프리미엄아울렛 지하 1층',
    timename1: '영업시간 :',
    timename2: '픽업가능시간 :',
    time: '10:30~20:30(Mon-Thu), 21:00(Fri-Sun)',
    pickuptime: '10:30~20:00',
    lastorder: '',
  },
  {
    spot: '죽전 스타필드마켓',
    address: '경기 용인시 수지구 포은대로 552 스타필드마켓 죽전점 1층',
    timename1: '영업(픽업)시간 :',
    timename2: '',
    time: '10:00~22:00<br>매 월 둘째, 넷째 주 일요일 휴무',
    pickuptime: '',
    lastorder: '',
  },
  {
    spot: '대구 빌리브 헤리티지',
    address: '대구 수성구 수성동4가 2266 빌리브 헤리티지 근린생활시설 201~207호',
    timename1: '영업(픽업)시간 :',
    timename2: '',
    time: '10:00~20:00',
    pickuptime: '',
    lastorder: '',
  },
  {
    spot: '천안아산 신세계',
    address: '충남 천안시 동남구 만남로43 본관2동 6층 푸드스트리트',
    timename1: '영업(픽업)시간 :',
    timename2: '',
    time: '<br>월-금 10:30~20:30 <br>토-일 10:30~21:00',
    pickuptime: '',
    lastorder: '',
  },
  {
    spot: '가산퍼블릭',
    address: '서울 금천구 디지털로 178 A동 지상1층 117호',
    timename1: '영업(픽업)시간 :',
    timename2: '',
    time: '10:00~20:00',
    pickuptime: '',
    lastorder: 'Last Order: 19:30',
  },
  {
    spot: '광주 신세계',
    address: '광주 서구 무진대로 932 신세계백화점강주점, 지하 1층',
    timename1: '영업시간 :',
    timename2: '픽업가능시간 :',
    time: '월-목 10:30~20:00 / 금-일 10:30~20:30',
    pickuptime: '11:00~19:30',
    lastorder: 'Last Order: 19:30',
  },
  {
    spot: '동탄 롯데',
    address: '경기도 화성시 통탄역로 160(오산동) 롯데백화점 동탄점 지하 1층',
    timename1: '영업시간 :',
    timename2: '픽업가능시간 :',
    time: '10:30~20:00',
    pickuptime: '11:00~19:30(Last Order: 19:30)',
    lastorder: '',
  },
  {
    spot: '부천 현대',
    address: '경기 부천시 원미구 길주로 180, 지하 1층',
    timename1: '영업시간 :',
    timename2: '픽업가능시간 :',
    time: '10:30~20:00',
    pickuptime: '11:00~19:30',
    lastorder: 'Last Order: 19:30',
  },
  {
    spot: '대전 신세계',
    address: '대전광역시 유성구 엑스포로 1, 지하 1층 A34호(도룡동)',
    timename1: '영업시간 :',
    timename2: '픽업가능시간 :',
    time: '10:30~20:00',
    pickuptime: '11:00~19:30',
    lastorder: 'Last Order: 19:30',
  },
  {
    spot: '수원 스타필드',
    address: '경기도 수원시 장안구 수성로 175, 1층',
    timename1: '영업시간 :',
    timename2: '픽업가능시간 :',
    time: '10:00~22:00',
    pickuptime: '10:00~21:00',
    lastorder: 'Last Order: 20:00',
  },
  {
    spot: '김포 롯데몰',
    address: '서울 강서구 하늘길 77 롯데몰 김포공항점 GF층',
    timename1: '영업시간 :',
    timename2: '픽업가능시간 :',
    time: '10:30~22:00',
    pickuptime: '11:00~20:00',
    lastorder: 'Last Order: 21:30',
  },
  {
    spot: '제주 DT',
    address: '제주시 연오로 5, 1층 101호 102호(오라삼동)<br>전화번호: 010-4925-9377',
    timename1: '영업시간 :',
    timename2: '픽업가능시간 :',
    time: '09:00~20:00',
    pickuptime: '11:00~20:00',
    lastorder: '',
  },
  {
    spot: '종각하이커',
    address: '서울 중구 청계천로 40<br>전화번호: 070-8869-9377',
    timename1: '영업시간 :',
    timename2: '픽업가능시간 :',
    time: '10:00~20:00',
    pickuptime: '10:30~19:00',
    lastorder: '',
  },
  {
    spot: '여의도IFC',
    address: '서울 영등포구 국제금융로 10<br>전화번호: 070-4700-9377',
    timename1: '영업시간 :',
    timename2: '픽업가능시간 :',
    time: '10:00~22:00',
    pickuptime: '11:00~22:00(Last Order: 21:30)',
    lastorder: '',
  },
  {
    spot: '대전 갤러리아',
    address: '대전 서구 대덕대로 211<br>전화번호: 042-720-6131',
    timename1: '영업시간 :',
    timename2: '픽업가능시간 :',
    time: '10:30~21:00',
    pickuptime: '11:00~21:00(Last Order: 20:50)',
    lastorder: '',
  },
  {
    spot: '노티드월드(잠실롯데월드몰)',
    address: '서울 송파구 올림픽로 300<br>전화번호: 070-8873-9377',
    timename1: '영업시간 :',
    timename2: '픽업가능시간 :',
    time: '10:30~22:00',
    pickuptime: '11:00~21:30(Last Order: 22:00)',
    lastorder: '',
  },
  {
    spot: '부산 롯데본점',
    address: '부산 부산진구 가야대로 772<br>전화번호: 010-9638-9377',
    timename1: '영업시간 :',
    timename2: '픽업가능시간 :',
    time: '10:30~20:00',
    pickuptime: '11:00~19:30',
    lastorder: '',
  },
  {
    spot: '강남 신세계',
    address: '서울 서초구 신반포로 176<br>전화번호: 070-8860-9377',
    timename1: '영업시간 :',
    timename2: '픽업가능시간 :',
    time: '월-목 10:30~20:00 / 금-일 10:30~20:30',
    pickuptime: '11:00~19:00',
    lastorder: '',
  },
  {
    spot: '하남 스타필드',
    address: '경기 하남시 미사대로 750 1층',
    timename1: '영업시간 :',
    timename2: '픽업가능시간 :',
    time: '10:00~22:00',
    pickuptime: '10:30~21:30',
    lastorder: 'Last Order: 22:00',
  },
  {
    spot: '대구 신세계',
    address: '대구 동구 동부로 149 신세계동대구복합환승센터 지하 1층',
    timename1: '영업시간 :',
    timename2: '픽업가능시간 :',
    time: '10:30~20:00',
    pickuptime: '10:30~19:30(Last Order: 20:00)',
    lastorder: '',
  },
  {
    spot: '송도 현대아울렛',
    address: '인천 연수구 송도국제대로 123 현대프리미엄아울렛 송도점 지하 1층',
    timename1: '영업시간 :',
    timename2: '픽업가능시간 :',
    time: '10:30~21:00',
    pickuptime: '11:00~20:00(Last Order: 21:00)',
    lastorder: '',
  },
];

$(pickupStep1_content).each((idx, data) => {
  const html = `
    <div class="store_list">
      <div class="store_card" onclick="selectStore(${idx})">

        <div class="store_img">
          <img src="/assets/images/${data.spot}.webp" alt="${data.spot}">
        </div>

        <div class="store_title">
          ${data.spot}
        </div>

        <div class="store_detail">
          <p>주소 ${data.address}</p>
          <p>${data.timename1} ${data.time}</p>
          ${data.pickuptime ? `<p>${data.timename2} ${data.pickuptime}</p>` : ``}
          ${data.lastorder ? `<p>${data.lastorder}</p>` : ``}
        </div>

      </div>
    </div>
  `;
  $('#step1').append(html);
});

function selectStore(index) {
  const store = pickupStep1_content[index];
  console.log('선택 매장:', store.spot);
}



// /* ======================
//    기본 데이터
// ====================== */
// const menus = [
//   { name: '얼그레이 도넛', price: 3800, category: 'donut', desc: '홍차 향 가득한 시그니처 도넛' },
//   { name: '딸기 케이크', price: 28000, category: 'cake', desc: '제철 딸기 생크림 케이크' }
// ];

// let selectedMenus = {};
// let selectedStore = {};
// let currentCategory = 'all';
// let selectedDate = '';
// let selectedTime = '';
// let currentDetail = null;

// /* ======================
//    DOM
// ====================== */
// const date_list = document.getElementById('date_list');
// const time_list = document.getElementById('time_list');
// const selected_datetime = document.getElementById('selected_datetime');

// /* ======================
//    STEP 이동
// ====================== */
// function goStep(n) {
//   document.querySelectorAll('.step').forEach(s => s.classList.remove('is_active'));
//   document.getElementById('step' + n).classList.add('is_active');
// }

// /* ======================
//    매장 선택
// ====================== */
// function selectStore(idx) {
//   const store = pickupStep1_content[idx];

//   selectedStore = {
//     name: store.spot,
//     time: store.pickuptime
//   };

//   document.getElementById('store_info_box').innerHTML =
//     `<strong>${store.spot}</strong><br>픽업 가능 시간 ${store.pickuptime}`;

//   goStep(2);
//   renderMenu();
// }

// /* ======================
//    메뉴
// ====================== */
// function filterMenu(cat, btn) {
//   currentCategory = cat;
//   document.querySelectorAll('.menu_category button').forEach(b => b.classList.remove('active'));
//   btn.classList.add('active');
//   renderMenu();
// }

// function renderMenu() {
//   const list = document.getElementById('menu_list');
//   list.innerHTML = '';

//   menus
//     .filter(m => currentCategory === 'all' || m.category === currentCategory)
//     .forEach(m => {
//       list.innerHTML += `
//         <div class="menu_card">
//           <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587">
//           <h4>${m.name}</h4>
//           <p class="price">₩${m.price.toLocaleString()}</p>
//           <div class="actions">
//             <button class="secondary" onclick="openDetail('${m.name}')">상세</button>
//             <button onclick="addMenu('${m.name}',${m.price})">담기</button>
//           </div>
//         </div>
//       `;
//     });
// }

// function addMenu(name, price) {
//   selectedMenus[name] = selectedMenus[name] || { price, qty: 0 };
//   selectedMenus[name].qty++;
//   renderSelected();
// }

// function renderSelected() {
//   const list = document.getElementById('selected_list');
//   list.innerHTML = '';

//   let total = 0;
//   let qty = 0;

//   Object.keys(selectedMenus).forEach(n => {
//     const i = selectedMenus[n];
//     total += i.price * i.qty;
//     qty += i.qty;

//     list.innerHTML += `
//       <div class="selected_item">
//         <span>${n}</span>
//         <div class="qty">
//           <button onclick="changeQty('${n}',-1)">-</button>
//           <span>${i.qty}</span>
//           <button onclick="changeQty('${n}',1)">+</button>
//         </div>
//         <span class="remove" onclick="removeMenu('${n}')">✕</span>
//       </div>
//     `;
//   });

//   document.getElementById('total').innerText =
//     `총 ${qty}개 / ₩${total.toLocaleString()}`;
// }

// function changeQty(n, d) {
//   selectedMenus[n].qty += d;
//   if (selectedMenus[n].qty <= 0) delete selectedMenus[n];
//   renderSelected();
// }

// function removeMenu(n) {
//   delete selectedMenus[n];
//   renderSelected();
// }

// /* ======================
//    상세 모달
// ====================== */
// function openDetail(name) {
//   currentDetail = menus.find(m => m.name === name);
//   detail_name.innerText = currentDetail.name;
//   detail_desc.innerText = currentDetail.desc;
//   detail_price.innerText = `₩${currentDetail.price.toLocaleString()}`;
//   detail_modal.classList.add('is_open');
// }

// function closeDetail() {
//   detail_modal.classList.remove('is_open');
// }

// function addMenuFromDetail() {
//   addMenu(currentDetail.name, currentDetail.price);
//   closeDetail();
// }

// /* ======================
//    날짜 / 시간
// ====================== */
// function generateDates() {
//   date_list.innerHTML = '';
//   const today = new Date();

//   for (let i = 0; i < 7; i++) {
//     const d = new Date(today);
//     d.setDate(today.getDate() + i);

//     const el = document.createElement('div');
//     el.className = 'date_item';
//     el.innerText = `${d.getMonth() + 1}/${d.getDate()}`;
//     el.onclick = () => selectDate(el.innerText, el);
//     date_list.appendChild(el);
//   }
// }

// function generateTimes() {
//   time_list.innerHTML = '';

//   ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00']
//     .forEach(t => {
//       const el = document.createElement('div');
//       el.className = 'time_item';
//       el.innerText = t;
//       el.onclick = () => selectTime(t, el);
//       time_list.appendChild(el);
//     });
// }

// function selectDate(v, el) {
//   document.querySelectorAll('.date_item').forEach(d => d.classList.remove('active'));
//   el.classList.add('active');
//   selectedDate = v;
//   updateDatetime();
// }

// function selectTime(v, el) {
//   document.querySelectorAll('.time_item').forEach(t => t.classList.remove('active'));
//   el.classList.add('active');
//   selectedTime = v;
//   updateDatetime();
// }

// function updateDatetime() {
//   if (selectedDate && selectedTime) {
//     selected_datetime.innerText =
//       `선택한 픽업: ${selectedDate} ${selectedTime}`;
//   }
// }

// /* ======================
//    실행
// ====================== */
// document.addEventListener('DOMContentLoaded', () => {
//   generateDates();
//   generateTimes();
// });
