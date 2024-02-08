function caseUpdate(operation) {
  const caseNoField = document.getElementById("case-no-field");
  const caseNoFieldString = caseNoField.value;
  const caseNoValue = parseInt(caseNoFieldString);

  if (operation == true) {
    caseNo = caseNoValue + 1;
  } else {
    caseNo = caseNoValue - 1;
  }

  if (caseNo >= 0) {
    caseNoField.value = caseNo;
  } else {
    alert("value cannot be negative");
  }
  return caseNo;
}

function casePrice(caseNo) {
  let totalCasePrice = caseNo * 59;
  if (totalCasePrice > 0)
    document.getElementById("case-value").innerText = totalCasePrice;
  else document.getElementById("case-value").innerText = 0;
}

document.getElementById("btn-case-plus").addEventListener("click", function () {
  const caseNo = caseUpdate(true);
  casePrice(caseNo);
  calculateSubTotal();
});

document
  .getElementById("btn-case-minus")
  .addEventListener("click", function () {
    const caseNo = caseUpdate(false);
    casePrice(caseNo);
    calculateSubTotal();
  });
