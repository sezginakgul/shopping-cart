//?Selectors
const element = document.querySelector(".element");
const subTotal = document.querySelector(".subtotal");
const tax = document.querySelector(".tax");
const shipping = document.querySelector(".shipping");
const total = document.querySelector(".total");

element.addEventListener("click", (e) => {
  console.log(e.target.parentNode.parentNode);
  //? increase button event handler
  if (e.target.classList.contains("fa-plus")) {
    e.target.previousElementSibling.textContent =
      Number(e.target.previousElementSibling.textContent) + 1;

    //? Increase Product Total F. / Sum Product Total F. / Tax F. / Total F. => call
    fPlus(e);
    fCountPrice();
    fTax();
    fTotal();
  }

  //? decrease button event handler
  else if (e.target.classList.contains("fa-minus")) {
    if (e.target.nextElementSibling.textContent > 1) {
      e.target.nextElementSibling.textContent =
        Number(e.target.nextElementSibling.textContent) - 1;

      //? Decrease Product Total F. / Sum Product Total F. / Tax F. / Total F. => call
      fMinus(e);
      fCountPrice();
      fTax();
      fTotal();
    }
  }
  //? remove button event handler
  if (e.target.classList.contains("fa-trash")) {
    e.target.parentNode.parentNode.remove();
    fCountPrice();
    fTax();
    fTotal();
  }
  if (subTotal.innerText == 0) {
    tax.textContent = (0).toFixed(2);
    shipping.textContent = (0).toFixed(2);
    total.textContent = (0).toFixed(2);
  }
});

//?Window onload event handler
window.addEventListener("load", () => {
  fCountPrice();
  fTax();
  shipping.innerHTML = (15).toFixed(2);
  fTotal();
});

//? Function of Sum Product Total
const fCountPrice = () => {
  const count = document.querySelectorAll(".countprice");
  sum = 0;
  count.forEach((x) => {
    sum += Number(x.innerText);
  });
  return (subTotal.innerText = sum.toFixed(2));
};

//? Function of Tax
const fTax = () => (tax.innerText = (subTotal.innerHTML * 0.18).toFixed(2));

//? Function of Total
const fTotal = () => {
  total.innerText = (
    Number(subTotal.innerText) +
    Number(tax.innerText) +
    Number(shipping.innerText)
  ).toFixed(2);
};

//? Function of Increase Product Total
const fPlus = (e) => {
  e.target.parentNode.nextElementSibling.nextElementSibling.children[1].textContent =
    (
      e.target.parentNode.parentNode.children[1].children[1].children[0]
        .textContent * Number(e.target.previousElementSibling.textContent)
    ).toFixed(2);
};

//? Function of Decrease Product Total
const fMinus = (e) => {
  e.target.parentNode.nextElementSibling.nextElementSibling.children[1].textContent =
    (
      e.target.parentNode.parentNode.children[1].children[1].children[0]
        .textContent * Number(e.target.nextElementSibling.textContent)
    ).toFixed(2);
};
