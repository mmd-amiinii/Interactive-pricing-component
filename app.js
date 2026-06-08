const btnHandler = document.querySelector('.btn-handler');
const currentPrice = document.querySelector('.current-price');
const viewNumber = document.querySelector('.view-number');
let isYear = false;
let price = 32;
btnHandler.addEventListener('click', ()=>{
    isYear = !isYear;
    price = isYear ? 100 : 32;
    console.log(price);
    currentPrice.textContent = `$${price / 2}.00`;
    btnHandler.parentElement.classList.toggle('bg-[#0fa5ad]');
    btnHandler.classList.toggle('translate-x-[18px]');
})

const slider = document.querySelector("input[type='range']");

function updateSlider() {
  const value =((slider.value - slider.min) /(slider.max - slider.min)) * 100;
  console.log(price);
  currentPrice.textContent = `$${(price * value / 100).toFixed(2)}`;
  console.log(price * value / 100)
  viewNumber.textContent = Math.trunc(200_000 * value / 100);
  if(viewNumber.textContent.endsWith('000')) {
    viewNumber.textContent = viewNumber.textContent.slice(0, -3) + 'k'
  }
  slider.style.setProperty("--progress", `${value}%`);
}

slider.addEventListener("input", updateSlider);
updateSlider();