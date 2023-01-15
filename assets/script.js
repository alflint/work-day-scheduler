// defines each hour increment
var schedule = ["9am", "10am","11am","12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]
                
// gets the current hour 
var current_hour = dayjs().hour() 
var offset = schedule.length +9

$(function () {
  
  // creates variable names without yet assigning values
  let style
  let storedValue 

  // iterate over each hour
  for (let i = 9; i < offset; i++) {

    // set proper class based on relation to current hour
    if(i<current_hour) {
      style="past"
    } else if(i==current_hour) {
      style="present"
    } else {
      style="future"
    }
    
    // retrieve locally stored value if it's not null
    storedValue = localStorage.getItem(`#hour-${i}`) != null ? localStorage.getItem(`#hour-${i}`) : ""

    // append to html
    $('#time').append(
      `<div id="hour-${i}" class="row time-block ${style}">
        <div class="col-2 col-md-1 hour text-center py-3">${schedule[i-9]}</div>
        <textarea class="col-8 col-md-10 description" rows="3"> ${storedValue}</textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
      </div>`
    )
  }
  
  // saves values into local storage
  $('.saveBtn').on('click', function () {
    var hour = "#" + $(this).parent().attr('id')
    var content = $(hour).children('textarea').eq(0).val();
    localStorage.setItem(hour, content);
  });

  // appends current date to html
  var now = dayjs().format('dddd<br/>MM/DD/YYYY')
  $("#currentDay").html(now)
});
