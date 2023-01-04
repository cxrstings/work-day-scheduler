//sets the current hour for the user
let currentHour = dayjs().format('H');

$(function () {
  //creates todays date at top of page
  let today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY'));
//logs user's time and todo to the local storage
  $('.saveBtn').click(function() {
    let userTodo = $(this).siblings(".description").val();
    let time = $(this).parent().attr("id");
    localStorage.setItem(time, userTodo);
  });

  //sets the color of past/present/future events
  function timeColor() {
  if (9 < currentHour) {
    $(document.querySelector('#hour-9')).removeClass("future");
    $(document.querySelector('#hour-9')).removeClass("present");
    $(document.querySelector('#hour-9')).addClass("past");
  } else if (9 == currentHour) {
    $(document.querySelector('#hour-9')).removeClass("future");
    $(document.querySelector('#hour-9')).removeClass("past");
    $(document.querySelector('#hour-9')).addClass("present");
  } else if (9 > currentHour) {
    $(document.querySelector('#hour-9')).removeClass("past");
    $(document.querySelector('#hour-9')).removeClass("present");
    $(document.querySelector('#hour-9')).addClass("future");
  } if (10 < currentHour) {
    $(document.querySelector('#hour-10')).removeClass("future");
    $(document.querySelector('#hour-10')).removeClass("present");
    $(document.querySelector('#hour-10')).addClass("past");
  } else if (10 == currentHour) {
    $(document.querySelector('#hour-10')).removeClass("future");
    $(document.querySelector('#hour-10')).removeClass("past");
    $(document.querySelector('#hour-10')).addClass("present");
  } else if (10 > currentHour) {
    $(document.querySelector('#hour-10')).removeClass("past");
    $(document.querySelector('#hour-10')).removeClass("present");
    $(document.querySelector('#hour-10')).addClass("future");
  } if (11 < currentHour) {
    $(document.querySelector('#hour-11')).removeClass("future");
    $(document.querySelector('#hour-11')).removeClass("present");
    $(document.querySelector('#hour-11')).addClass("past");
  } else if (11 == currentHour) {
    $(document.querySelector('#hour-11')).removeClass("future");
    $(document.querySelector('#hour-11')).removeClass("past");
    $(document.querySelector('#hour-11')).addClass("present");
  } else if (11 > currentHour) {
    $(document.querySelector('#hour-11')).removeClass("past");
    $(document.querySelector('#hour-11')).removeClass("present");
    $(document.querySelector('#hour-11')).addClass("future");
  } if (12 < currentHour) {
    $(document.querySelector('#hour-12')).removeClass("future");
    $(document.querySelector('#hour-12')).removeClass("present");
    $(document.querySelector('#hour-12')).addClass("past");
  } else if (12 == currentHour) {
    $(document.querySelector('#hour-12')).removeClass("future");
    $(document.querySelector('#hour-12')).removeClass("past");
    $(document.querySelector('#hour-12')).addClass("present");
  } else if (12 > currentHour) {
    $(document.querySelector('#hour-12')).removeClass("past");
    $(document.querySelector('#hour-12')).removeClass("present");
    $(document.querySelector('#hour-12')).addClass("future");
  } if (13 < currentHour) {
    $(document.querySelector('#hour-13')).removeClass("future");
    $(document.querySelector('#hour-13')).removeClass("present");
    $(document.querySelector('#hour-13')).addClass("past");
  } else if (13 == currentHour) {
    $(document.querySelector('#hour-13')).removeClass("future");
    $(document.querySelector('#hour-13')).removeClass("past");
    $(document.querySelector('#hour-13')).addClass("present");
  } else if (13 > currentHour) {
    $(document.querySelector('#hour-13')).removeClass("past");
    $(document.querySelector('#hour-13')).removeClass("present");
    $(document.querySelector('#hour-13')).addClass("future");
  } if (14 < currentHour) {
    $(document.querySelector('#hour-14')).removeClass("future");
    $(document.querySelector('#hour-14')).removeClass("present");
    $(document.querySelector('#hour-14')).addClass("past");
  } else if (14 == currentHour) {
    $(document.querySelector('#hour-14')).removeClass("future");
    $(document.querySelector('#hour-14')).removeClass("past");
    $(document.querySelector('#hour-14')).addClass("present");
  } else if (14 > currentHour) {
    $(document.querySelector('#hour-14')).removeClass("past");
    $(document.querySelector('#hour-14')).removeClass("present");
    $(document.querySelector('#hour-14')).addClass("future");
  } if (15 < currentHour) {
    $(document.querySelector('#hour-15')).removeClass("future");
    $(document.querySelector('#hour-15')).removeClass("present");
    $(document.querySelector('#hour-15')).addClass("past");
  } else if (15 == currentHour) {
    $(document.querySelector('#hour-15')).removeClass("future");
    $(document.querySelector('#hour-15')).removeClass("past");
    $(document.querySelector('#hour-15')).addClass("present");
  } else if (15 > currentHour) {
    $(document.querySelector('#hour-15')).removeClass("past");
    $(document.querySelector('#hour-15')).removeClass("present");
    $(document.querySelector('#hour-15')).addClass("future");
  } if (16 < currentHour) {
    $(document.querySelector('#hour-16')).removeClass("future");
    $(document.querySelector('#hour-16')).removeClass("present");
    $(document.querySelector('#hour-16')).addClass("past");
  } else if (16 == currentHour) {
    $(document.querySelector('#hour-16')).removeClass("future");
    $(document.querySelector('#hour-16')).removeClass("past");
    $(document.querySelector('#hour-16')).addClass("present");
  } else if (16 > currentHour) {
    $(document.querySelector('#hour-16')).removeClass("past");
    $(document.querySelector('#hour-16')).removeClass("present");
    $(document.querySelector('#hour-16')).addClass("future");
  } if (17 < currentHour) {
    $(document.querySelector('#hour-17')).removeClass("future");
    $(document.querySelector('#hour-17')).removeClass("present");
    $(document.querySelector('#hour-17')).addClass("past");
  } else if (17 == currentHour) {
    $(document.querySelector('#hour-17')).removeClass("future");
    $(document.querySelector('#hour-17')).removeClass("past");
    $(document.querySelector('#hour-17')).addClass("present");
  } else if (17 > currentHour) {
    $(document.querySelector('#hour-17')).removeClass("past");
    $(document.querySelector('#hour-17')).removeClass("present");
    $(document.querySelector('#hour-17')).addClass("future");
  } if (18 < currentHour) {
    $(document.querySelector('#hour-18')).removeClass("future");
    $(document.querySelector('#hour-18')).removeClass("present");
    $(document.querySelector('#hour-18')).addClass("past");
  } else if (18 == currentHour) {
    $(document.querySelector('#hour-18')).removeClass("future");
    $(document.querySelector('#hour-18')).removeClass("past");
    $(document.querySelector('#hour-18')).addClass("present");
  } else if (18 > currentHour) {
    $(document.querySelector('#hour-18')).removeClass("past");
    $(document.querySelector('#hour-18')).removeClass("present");
    $(document.querySelector('#hour-18')).addClass("future");
  } if (19 < currentHour) {
    $(document.querySelector('#hour-19')).removeClass("future");
    $(document.querySelector('#hour-19')).removeClass("present");
    $(document.querySelector('#hour-19')).addClass("past");
  } else if (19 == currentHour) {
    $(document.querySelector('#hour-19')).removeClass("future");
    $(document.querySelector('#hour-19')).removeClass("past");
    $(document.querySelector('#hour-19')).addClass("present");
  } else if (19 > currentHour) {
    $(document.querySelector('#hour-19')).removeClass("past");
    $(document.querySelector('#hour-19')).removeClass("present");
    $(document.querySelector('#hour-19')).addClass("future");
  } if (20 < currentHour) {
    $(document.querySelector('#hour-20')).removeClass("future");
    $(document.querySelector('#hour-20')).removeClass("present");
    $(document.querySelector('#hour-20')).addClass("past");
  } else if (20 == currentHour) {
    $(document.querySelector('#hour-20')).removeClass("future");
    $(document.querySelector('#hour-20')).removeClass("past");
    $(document.querySelector('#hour-20')).addClass("present");
  } else if (20 > currentHour) {
    $(document.querySelector('#hour-20')).removeClass("past");
    $(document.querySelector('#hour-20')).removeClass("present");
    $(document.querySelector('#hour-20')).addClass("future");
  }
}

timeColor();
  //get the values of the todos to display properly 
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));
$("#hour-18 .description").val(localStorage.getItem("hour-18"));
$("#hour-19 .description").val(localStorage.getItem("hour-19"));
$("#hour-20 .description").val(localStorage.getItem("hour-20"));
});

