const arrowBtn = document.querySelector(".arrow-container");
const billingBtn = document.querySelector(".billing-toggle-circle");
const price = document.querySelector("[data-price]");
const pageViews = document.querySelector("[data-pageviews]");
const billingsP = [...document.querySelectorAll(".billing-section p")];

//Use the slider and toggle to see prices for different page view numbers
arrowBtn.addEventListener("click", () => {
  console.log("clicked");
});

//this is an extra
billingBtn.addEventListener("click", () => {
  billingBtn.classList.toggle("active");

  billingsP.forEach((item) => {
    console.log(item);
    item.classList.toggle("active");
    /*if (item.innerText.includes("Monthly")) {
      item.style.color = "red";
    }
    if (item.innerText.includes("Yearly")) {
      item.style.color = "red";
    }*/
  });
});
