document.addEventListener("DOMContentLoaded", () => {
  const shopGrid = document.querySelector(".shop_grid");
  const tabs = document.querySelectorAll(".category_item");

  function renderMenu(category, sub = null) {
    shopGrid.innerHTML = "";
    let items = [];

    if (category === "all") {
      Object.values(menuList).forEach(group => {
        if (Array.isArray(group)) {
          items = items.concat(group);
        } else {
          Object.values(group).forEach(subGroup => {
            items = items.concat(subGroup);
          });
        }
      });
    }
    else if (sub) {
      items = menuList[category]?.[sub] || [];
    }
    else {
      items = menuList[category] || [];
    }

    if (!items.length) {
      shopGrid.innerHTML = "<p>준비 중입니다.</p>";
      return;
    }

    items.forEach(item => {
      shopGrid.insertAdjacentHTML(
        "beforeend",
        `
        <div class="shop_card">
          <img src="/assets/images/${item.image}.png" alt="${item.name}">
          <h4>${item.name}</h4>
          <p>21,900원</p>
          <button class="btn">담기</button>
        </div>
        `
      );
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const category = tab.dataset.category;
      const sub = tab.dataset.sub;

      // active 초기화
      tabs.forEach(t => t.classList.remove("is_active"));
      tab.classList.add("is_active");

      // 🔥 모든 서브 일단 닫기
      document
        .querySelectorAll(".category_item.food")
        .forEach(el => el.classList.remove("is_open"));

      document
        .querySelectorAll(".category_item.living")
        .forEach(el => el.classList.remove("is_open"));

      // ===== 부모 탭 =====
      if (category === "food") {
        document
          .querySelectorAll(".category_item.food")
          .forEach(el => el.classList.add("is_open"));
        return;
      }

      if (category === "living") {
        document
          .querySelectorAll(".category_item.living")
          .forEach(el => el.classList.add("is_open"));
        return;
      }

      // ===== 서브 탭 =====
      if (sub) {
        // 서브 클릭 시 부모 유지
        document
          .querySelector(`.category_item[data-category="${category}"]`)
          ?.classList.add("is_active");

        renderMenu(category, sub);
        return;
      }

      // ===== 일반 =====
      renderMenu(category);
    });
  });

  renderMenu("all");
});
