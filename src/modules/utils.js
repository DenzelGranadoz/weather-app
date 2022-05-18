const setTime = () => {
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

  setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const minutes = time.getMinutes();
    const standardFormat = hour >= 13 ? hour % 12 : hour;
    const AmPm = hour >= 12 ? 'PM' : 'PM';

    dateDisplay.innerHTML = `${days[day]}, ${months[month]} ${date}`;
    timeDisplay.innerHTML = `${
      standardFormat < 10 ? '0' + standardFormat : standardFormat
    }:${minutes < 10 ? '0' + minutes : minutes} ${AmPm}`;
  }, 1000);
};

export default setTime;

/* <div class="time-date-container">
      <div class="date" id="date">
        May 14, 2022
      </div>
      <div class="time" id="time">
        1:58 PM
      </div>
    </div> */
