var now = document.querySelector(`#now-button`);
var hours = document.querySelector(`#hours-button`);
var minutes = document.querySelector(`#minutes-button`);
var seconds = document.querySelector(`#seconds-button`);
var advanceButton = document.querySelector(`#advanced-button`);

var year = document.querySelector(`#year`);
var month = document.querySelector(`#month`);
var day = document.querySelector(`#day`);
var hour = document.querySelector(`#hour`);
var minute = document.querySelector(`#minute`);
var second = document.querySelector(`#second`);

var messageToast;
var duration;

var date = new Date();

function showToast(messageToast, duration) {
  Materialize.toast(messageToast, duration);
}

function dateNow() {
  return date;
}

function dateHours() {
  return date.getHours();
}

function dateMinutes() {
  return date.getMinutes();
}

function dateSeconds() {
  return date.getSeconds();
}

function showDateNow() {
  dateNow();
  showToast(`This time is ${date}`, 2000);
}

function showDateHours() {
  var hours = dateHours();
  showToast(`The hour is ${hours}`, 2000);
}

function showDateMinutes() {
  var minutes = dateMinutes();
  showToast(`The minute is ${minutes}`, 2000);
}

function showDateSeconds() {
  var seconds = dateSeconds();
  showToast(`The second is ${seconds}`, 2000);
}

function setData() {
  var getYear = year.value;
  var getMonth = month.value;
  var fixMonth = getMonth - 1;
  var getDay = day.value;
  var getHour = hour.value;
  var getMinute = minute.value;
  var getSecond = second.value;
  var milisecond = 0;

  var dateA = new Date(getYear, fixMonth, getDay, getHour, getMinute, getSecond, milisecond);

  showToast(dateA, 2000);

}

now.addEventListener(`click`, showDateNow);
hours.addEventListener(`click`, showDateHours);
minutes.addEventListener(`click`, showDateMinutes);
seconds.addEventListener(`click`, showDateSeconds);
advanceButton.addEventListener(`click`, setData);