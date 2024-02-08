document.getElementById("btn-case-plus").addEventListener("click", function () {
  caseNoField = document.getElementById("case-no-field");
  caseNoFieldString = caseNoField.value;
  caseNoValue = parseInt(caseNoFieldString);

  caseNo = caseNoValue + 1;
  caseNoField.value = caseNo;
});
