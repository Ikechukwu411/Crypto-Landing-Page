const navMenu = document.querySelector(".ul");
const hamburger = document.querySelector(".Ham");
const boxes = document.querySelectorAll(".box");
const show = document.querySelector("#Show");
const overlay = document.querySelector(".overlay");
const form = document.querySelector(".form");
const removeModal = document.getElementById("removeModal");
const Money = document.querySelectorAll(".Money");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});
document.querySelectorAll(".nav-links").forEach((n) => {
  n.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBotton = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBotton) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

show.addEventListener("click", () => {
  overlay.classList.remove("hidden");
  form.classList.remove("hidden");
});

removeModal.addEventListener("click", () => {
  overlay.classList.add("hidden");
  form.classList.add("hidden");
});

const obj = {
  method: "GET",
  headers: {
    "X-CoinAPI-Key": "17DF8DDD-4C76-42C0-8CF3-3AD817B53573",
  },
};
fetch("https://rest.coinapi.io/v1/trades/latest", obj)
  .then((data) => {
    return data.json();
  })
  .then((completeData) => {
    let data1 = "";
    completeData.map((value, i, arr) => {
      data1 = `<div>
      <p id="fetchCoin">Hot Coins</p>
      <div class="ApiFetch">
        <div>
          <p id="AnotherColor"><img src="./img/products-5-2022101518.jpg" alt="" width="5%"> ${arr[0].price}</p>
          <p>${arr[0].price}</p>
        </div>
        <div>
          <p>${arr[0].taker_side}</p>
          <p>${arr[0].size}</p>
        </div>
        <div class="Apifetch-btn">
        <button class="Money" href="https://google.com" type="button">Buy</button>
        <button>Sell</button>
      </div>
      </div>
      <div class="ApiFetch">
        <div>
          <p id="AnotherColor"><img src="./img/products-5-2022101518.jpg" alt="" width="5%"> ${arr[1].price}</p>
          <p>${arr[1].price}</p>
        </div>
        <div>
          <p>${arr[1].taker_side}</p>
          <p>${arr[1].size}</p>
        </div>
        <div class="Apifetch-btn">
        <button class="Money">Buy</button>
        <button>Sell</button>
      </div>
      </div>
      <div class="ApiFetch">
        <div>
          <p id="AnotherColor"><img src="./img/products-5-2022101518.jpg" alt="" width="5%"> ${arr[2].price}</p>
          <p>${arr[2].price}</p>
        </div>
        <div>
          <p>${arr[2].taker_side}</p>
          <p>${arr[2].size}</p>
        </div>
        <div class="Apifetch-btn">
        <button class="Money">Buy</button>
        <button>Sell</button>
      </div>
      </div>
      <div class="ApiFetch">
        <div>
          <p id="AnotherColor"><img src="./img/products-5-2022101518.jpg" alt="" width="5%"> ${arr[3].price}</p>
          <p>${arr[3].price}</p>
        </div>
        <div>
          <p>${arr[3].taker_side}</p>
          <p>${arr[3].size}</p>
        </div>
        <div class="Apifetch-btn">
        <button class="Money">Buy</button>
        <button>Sell</button>
      </div>
      </div>
      <div class="ApiFetch">
        <div>
          <p id="AnotherColor"><img src="./img/products-5-2022101518.jpg" alt="" width="5%">${arr[4].price}</p>
          <p>${arr[4].price}</p>
        </div>
        <div>
          <p>${arr[4].taker_side}</p>
          <p>${arr[4].size}</p>
        </div>
        <div class="Apifetch-btn">
        <button class="Money">Buy</button>
        <button>Sell</button>
      </div>
      </div>
    </div>`;
    });
    document.querySelector(".fetch").innerHTML = data1;
    console.log(completeData);
  })
  .catch((error) => {
    console.log(error);
  });
