document.addEventListener("DOMContentLoaded", () => {
  const menuGrid = document.querySelector(".menu_grid");
  const tabs = document.querySelectorAll(".category_item");

  /* 메뉴 렌더링 */
  function renderMenu(category, sub = null) {
    menuGrid.innerHTML = "";

    let items = [];

    if (category === "all") {
      Object.values(menuList).forEach(list => {
        if (Array.isArray(list)) {
          items = items.concat(list);
        } else {
          Object.values(list).forEach(subList => {
            items = items.concat(subList);
          });
        }
      });
    } else if (category === "beverage" && sub) {
      items = menuList.beverage[sub];
    } else if (category === "beverage") {
      Object.values(menuList.beverage).forEach(list => {
        items = items.concat(list);
      });
    } else {
      items = menuList[category];
    }

    if (!items || items.length === 0) {
      menuGrid.innerHTML = "<p>준비 중입니다.</p>";
      return;
    }

    items.forEach(item => {
      menuGrid.insertAdjacentHTML("beforeend", `
      <div class="menu_card">
        <img src="/assets/images/${item.image}.png" alt="${item.name}">
        <h4>${item.name}</h4>
      </div>
    `);
    });
  }

  /* 탭 클릭 */
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const category = tab.dataset.category;
      const sub = tab.dataset.sub;
      const isParent = tab.dataset.type === "parent";

      // 전체 active 제거
      tabs.forEach(t => t.classList.remove("is_active"));

      // 클릭한 탭 active
      tab.classList.add("is_active");

      // 🔥 beverage 서브 클릭 시 부모도 active 유지
      if (category === "beverage" && sub) {
        document
          .querySelector('.category_item[data-category="beverage"][data-type="parent"]')
          .classList.add("is_active");

        renderMenu("beverage", sub);
        return;
      }

      // BEVERAGE 부모 클릭
      if (isParent) {
        document.querySelectorAll(".category_item.beverage").forEach(el => {
          el.classList.toggle("is_open");
        });

        renderMenu("beverage");
        return;
      }

      // 일반 카테고리
      document.querySelectorAll(".category_item.beverage").forEach(el => {
        el.classList.remove("is_open");
      });

      renderMenu(category);
    });
  });

  /* 최초 전체 */
  renderMenu("all");
});
