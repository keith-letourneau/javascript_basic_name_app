function got_Name() {
  var first_name = document.getElementById('input_id').value
  var chkBox = document.getElementById('gender_m');

  if (chkBox.checked) {
    document.getElementById('output').innerHTML =
      'Sir ' + first_name + ' Stark';
  } else {
    document.getElementById('output').innerHTML =
      'Lady ' + first_name + ' Stark';
  }
}
