const submit_button = document.querySelector("[data-button]");
const result = document.querySelector("[data-rate]");
const container_rating = document.querySelector("[data-rating]");
const container_thankYou = document.querySelector("[data-thankYou]");

submit_button.addEventListener("click", addRate);

function addRate() {
     const checkedValue = document.querySelector("input:checked");
     if (checkedValue) {
          container_rating.style.display = "none";
          container_thankYou.style.display = "grid";
          result.innerText = `You selected ${checkedValue.value} of 5`;
     } else {
          result.textContent = "you need to select a rate value";
     }
}
