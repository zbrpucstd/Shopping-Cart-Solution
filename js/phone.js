function phoneUpdate(operation) {
  const phoneNoField = document.getElementById("phone-no-field");
  const phoneNoFieldString = phoneNoField.value;
  const phoneNoValue = parseInt(phoneNoFieldString);

  if (operation == true) {
    phoneNo = phoneNoValue + 1;
  } else {
    phoneNo = phoneNoValue - 1;
  }

  if (phoneNo >= 0) {
    phoneNoField.value = phoneNo;
  } else {
    alert("value cannot be negative");
  }
  return phoneNo;
}

function phonePrice(phoneNo) {
  let totalPhonePrice = phoneNo * 1219;
  if (totalPhonePrice > 0)
    document.getElementById("phone-value").innerText = totalPhonePrice;
  else document.getElementById("phone-value").innerText = 0;
}

function getTextElementValueById(id) {
  phoneTotalField = document.getElementById(id);
  phoneTotalFieldString = phoneTotalField.innerText;
  currentPhoneTotal = parseInt(phoneTotalFieldString);
  return currentPhoneTotal;
}

function setTextElementValueById(id, value) {
  const Field = document.getElementById(id);
  Field.innerText = value;
}

function calculateSubTotal() {
  const currentPhoneTotal = getTextElementValueById("phone-value");
  const currentCaseTotal = getTextElementValueById("case-value");

  const subTotal = currentPhoneTotal + currentCaseTotal;
  setTextElementValueById("sub-total-field", subTotal);

  const totalTaxString = (subTotal * 0.1).toFixed(2);
  const totalTax = parseFloat(totalTaxString);
  setTextElementValueById("tax-field", totalTax);

  const finalValue = subTotal + totalTax;
  setTextElementValueById("final-val-field", finalValue);
}

document
  .getElementById("btn-phone-plus")
  .addEventListener("click", function () {
    const phoneNo = phoneUpdate(true);
    phonePrice(phoneNo);
    calculateSubTotal();
  });

document
  .getElementById("btn-phone-minus")
  .addEventListener("click", function () {
    const phoneNo = phoneUpdate(false);
    phonePrice(phoneNo);
    calculateSubTotal();
  });
