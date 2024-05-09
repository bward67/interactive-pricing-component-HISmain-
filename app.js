const billingBtn = document.querySelector(".billing-toggle-circle");
const price = document.querySelector("[data-price]");
const price2 = document.querySelector("[data-price2]");
const views = document.querySelector("[data-pageviews]");
console.log(views);
const priceSlider = document.getElementById("price-slider");

const billingToggle = document.getElementById("billing");

let pageViews = ["10K", "50K", "100K", "500K", "1M"];
let costPerMonth = [8, 12, 16, 24, 36];
let isYearly = false;

//FUNCTIONS
const updateValue = () => {
  if (isYearly) {
    price.innerHTML = costPerMonth[priceSlider.value] * 0.75;
    price2.innerHTML = costPerMonth[priceSlider.value] * 0.75;
  } else {
    price.innerHTML = costPerMonth[priceSlider.value];
    price2.innerHTML = costPerMonth[priceSlider.value];
  }
};
//EVENT LISTENERS
priceSlider.addEventListener("input", (e) => {
  updateValue();
  console.log(priceSlider.value);
  views.innerHTML = pageViews[priceSlider.value];

  //we want to extend and distend the cyan line when we toggle
  //and we can do this by changing the 2nd linear-gradient
  //we must change it by 25% each time
  let value = e.currentTarget.value * 25;
  console.log(value);
  e.currentTarget.style.background = `linear-gradient(
    to right,
    hsl(174, 77%, 80%) 0%,
    hsl(174, 77%, 80%) ${value}%,
    hsl(224, 65%, 95%) 0%,
    hsl(224, 65%, 95%) 100%
  )`;
});

billingToggle.addEventListener("change", () => {
  if (isYearly === false) {
    isYearly = true;
  } else {
    isYearly = false;
  }
  updateValue();
});

/*Here are the different page view ranges and the corresponding monthly price totals:

- 10K pageviews / $8 per month
- 50K pageviews / $12 per month
- 100K pageviews / $16 per month
- 500k pageviews / $24 per month
- 1M pageviews / $36 per month

If the visitor switches the toggle to yearly billing, a 25% discount should be applied to all prices.
*/

//I could not have completed the JS without this mans help
//https://www.youtube.com/watch?v=7Aaq3UZlzwg
