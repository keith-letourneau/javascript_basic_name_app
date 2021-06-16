function findText() {
  var keyword_search = document.getElementById('input_id').value
  var str = document.getElementById("string").innerHTML;
  var res = str.replaceAll(keyword_search, '<span class="findText">' +
    keyword_search + "</span>");
  document.getElementById("string").innerHTML = res;
}