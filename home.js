const menu_items = document.getElementById("menu-items");

async function loadMenu(){
  let menu_json = await fetch(
    "https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json"
  );
  let menu_data = await menu_json.json();
  for (let i = 0; i < 3; i++) {
    let menu_item = `<div class="card bg-dark text-light" style="width: 100%;">
    <img src="${menu_data[i].imgSrc}" class="card-img-top p-2" alt="burger">
    <div class="card-body d-flex justify-content-between align-items-center">
        <div>
            <h5 class="card-title">${menu_data[i].name}</h5>
            <p class="m-0">$${menu_data[i].price}/-</p>
        </div>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 6.66663V25.3333" stroke="#878787" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.66663 16H25.3333" stroke="#878787" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
        </div>
    </div>
  </div>`;
    menu_items.insertAdjacentHTML("beforeend", menu_item);
  }
}

async function main(){
try {
  await loadMenu()
} catch (error) {
  console.log(error);
}
}
main()
