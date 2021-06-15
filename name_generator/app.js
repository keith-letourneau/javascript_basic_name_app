function got_Name() {
  var first_name = document.getElementById('input_id').value
  var chkBox = document.getElementById('gender_m');

  if (chkBox.checked) {
    document.getElementById('output').innerHTML =
      'Mr. ' + first_name + ' Stark';
  } else {
    document.getElementById('output').innerHTML =
      'Mrs. ' + first_name + ' Stark';
  }
}