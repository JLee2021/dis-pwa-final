const catches = document.querySelector(".catches");

document.addEventListener("DOMContentLoaded", function () {
  // nav menu
  const menus = document.querySelectorAll(".side-menu");
  M.Sidenav.init(menus, { edge: "right" });
  // add recipe form
  const forms = document.querySelectorAll(".side-form");
  M.Sidenav.init(forms, { edge: "left" });
});

//render catch data
const renderCatches = (data, id) => {
  const html = `
      <div class="card-panel catch white row" data-id="${id}">
        <img src="/img/fish.png" alt="fish thumb" />
        <div class="catch-details">
          <div class="catch-name">${data.name}</div>
          <div class="catch-characteristics">${data.characteristics}</div>
        </div>
        <div class="catch-delete">
          <i class="material-icons" data-id="${id}">delete_outline</i>
        </div>
      </div>`;
  catches.innerHTML += html;
};
