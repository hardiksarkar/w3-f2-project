const menu_items = document.getElementById("menu-items");
const home = document.getElementById("home");
home.addEventListener("click", () => {
  window.location.href = "./index.html";
});

// get menu function

const getMenu = async () => {
  let menu_json;
  let menu_data;
    menu_json = await fetch(
      "https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json"
    );
    menu_data = await menu_json.json();
  for (const i of menu_data) {
    let menu_item = `<div class="card bg-dark text-light" style="width: 100%;">
    <img src="${i.imgSrc}" class="card-img-top p-2" alt="burger">
    <div class="card-body d-flex justify-content-between align-items-center">
        <div>
            <h5 class="card-title">${i.name}</h5>
            <p class="m-0">$${i.price}/-</p>
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
  return menu_data;
};

// take order function

const TakeOrder = (menu_data, order) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        let item1 = Math.floor(Math.random() * menu_data.length);
      let item2 = Math.floor(Math.random() * menu_data.length);
      let item3 = Math.floor(Math.random() * menu_data.length);
      order.item1 = menu_data[item1].name;
      order.item2 = menu_data[item2].name;
      order.item3 = menu_data[item3].name;
      resolve(order);
      } catch (error) {
        reject(error);
      }
    }, 2500);
  });
};

// order preparation function

const orderPrep = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ order_status: true, paid: false });
    }, 1500);
  });
};

// pay order function

const payOrder = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ order_status: true, paid: true });
    }, 1000);
  });
};

// thank you function

const thankyouFnc = () => {
  alert("Thank you for eating with us today!");
};

// main function

const mainFunc = async () => {
  let menu_data;
  try {
    menu_data = await getMenu();
  } catch (error) {
    console.log(error);
  }

  const order = {};

  try {
    let takeOrder = await TakeOrder(menu_data, order);
    console.log(takeOrder);

    let order_prep = await orderPrep();
    console.log(order_prep);
    let pay_order = await payOrder();
    console.log(pay_order);
    thankyouFnc();

  } catch (error) {
    console.log(error);
  }
};

mainFunc();
