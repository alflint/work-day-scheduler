$(function () {
  

  // appends current date to html
  var now = dayjs().format('dddd<br/>MM/DD/YYYY')
  $("#currentDay").html(now)
});
