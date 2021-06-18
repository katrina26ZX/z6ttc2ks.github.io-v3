




function copyaddresseth() {
  var copyElement = document.getElementsByClassName("author_eth")[0];
  var range = document.createRange();
  range.selectNode(copyElement);
  window.getSelection().addRange(range);
  document.execCommand('copy');
  alert("Wallet address has been copied to the clipboard.");
}