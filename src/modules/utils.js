function displayTime() {
  const dateDisplay = document.getElementById('date');
  const timeDisplay = document.getElementById('time');

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const dateTime = new Date();
  const mth = dateTime.getMonth();
  const date = dateTime.getDate();
  const day = dateTime.getDay();
  const hrs = dateTime.getHours();
  const min = dateTime.getMinutes();
  const standard = hrs >= 13 ? hrs % 12 : hrs;
  const AmPm = hrs >= 12 ? 'PM' : 'AM';

  dateDisplay.innerHTML = `${days[day]}, ${months[mth]} ${date}`;
  timeDisplay.innerHTML = `${standard < 10 ? '0' + standard : standard}:${
    min < 10 ? '0' + min : min
  } ${AmPm}`;
}

// returns the next seven days in number form
function getDayArray(dayOne) {
  const arr = [];
  let current = dayOne + 1;
  for (let i = 0; i < 7; i++) {
    arr.push(current);
    current += 1;
    if (current > 7) current = 1;
  }
  return arr;
}

// returns current Day
function getDay() {
  const dateTime = new Date();
  const day = dateTime.getDay();
  return day;
}

// had to minus one since day count from the API doesn't start with 0
function minusArr(array) {
  const newArr = array;
  for (let i = 0; i < 7; i++) {
    newArr[i] -= 1;
  }
  return newArr;
}

// returns the next seven days in word form
function convertDays(numArr) {
  const dayArr = [];
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  const dayNumArr = minusArr(numArr);
  for (let i = 0; i < 7; i++) {
    dayArr.push(days[dayNumArr[i]]);
  }
  return dayArr;
}

export { displayTime, getDay, getDayArray, convertDays };
