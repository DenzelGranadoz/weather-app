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

export default displayTime;
