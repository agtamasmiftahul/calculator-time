var now = document.querySelector(`#now-button`);
var hours = document.querySelector(`#hours-button`);
var minutes = document.querySelector(`#minutes-button`);
var seconds = document.querySelector(`#seconds-button`);
var

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

now.addEventListener(`click`, showDateNow);
hours.addEventListener(`click`, showDateHours);
minutes.addEventListener(`click`, showDateMinutes);
seconds.addEventListener(`click`, showDateSeconds);