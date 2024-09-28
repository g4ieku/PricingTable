let priceToggler = document.querySelector(".price_toggler");
let prices = document.querySelectorAll(".price");
let durations = document.querySelectorAll(".duration");

priceToggler.addEventListener("click", () => {
   priceToggler.classList.toggle("active");

   if (priceToggler.classList.contains("active")) {
      durations.forEach((duration) => {
         duration.innerText = "/yr";
      });
      prices.forEach((price) => {
         price.innerText = price.innerText * 10;
      });
   } else {
      durations.forEach((duration) => {
         duration.innerText = "/mo";
      });
      prices.forEach((price) => {
         price.innerText = price.innerText / 10;
      });
   }
});
