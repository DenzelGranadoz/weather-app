(()=>{"use strict";var n={890:(n,e,A)=>{A.d(e,{Z:()=>m});var t=A(537),i=A.n(t),r=A(645),a=A.n(r),o=A(667),d=A.n(o),s=new URL(A(452),A.b),c=a()(i()),E=d()(s);c.push([n.id,"@font-face {\n  font-family: 'Acme';\n  src: url("+E+") format('woff');\n  font-weight: normal;\n  font-style: normal;\n}\n\n:root {\n  --main-color: #edc7b7;\n}\n\n*,\n*::before,\n*::after {\n  font-family: inherit;\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: 'Acme', 'sans-serif';\n  background-color: var(--main-color);\n  display: grid;\n  grid:\n    'search search today today' 50vh\n    'week week week week' 50vh /\n    1fr 1fr 1fr 1fr;\n}\n\n.search-date-container {\n  grid-area: search;\n  margin: 2rem 0;\n  padding: 1.5rem 3rem;\n  border-right: 3px solid black;\n}\n\n.search-div {\n  display: flex;\n  justify-content: center;\n  height: 3rem;\n}\n\n.search-form {\n  display: flex;\n  width: 30%;\n  padding: 0.25rem 0;\n}\n\n.search-div input[type='text'] {\n  width: 85%;\n  height: 100%;\n  padding: 0.25rem;\n  padding-left: 0.5rem;\n  font-size: 20px;\n  border-radius: 5px;\n}\n\n.search-icon {\n  width: 25px;\n  height: 25px;\n}\n\n#submitBtn {\n  background-color: white;\n  width: 35px;\n  border-radius: 5px;\n  padding: 0;\n  cursor: pointer;\n  transition: transform 200ms ease-in-out;\n}\n\n#submitBtn:hover {\n  transform: scale(1.1);\n}\n\n.time-date-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 80%;\n}\n\n.date {\n  font-size: 5rem;\n}\n\n.time {\n  font-size: 3.5rem;\n}\n\n.credit {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  font-size: 1.5rem;\n  padding: 0 5rem;\n}\n\n.credit a {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.credit span {\n  color: black;\n}\n\n.today-weather-container {\n  grid-area: today;\n  padding: 3rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.logo-location {\n  display: flex;\n  width: 80%;\n  border-bottom: 3px solid black;\n}\n\n.logo-location img {\n  width: 30%;\n}\n\n.loc-display-desc {\n  text-align: center;\n  padding: 1rem;\n  flex: 1;\n}\n\n.loc-display {\n  font-size: 5rem;\n  margin: auto;\n  border-bottom: 3px solid black;\n}\n\n.loc-desc {\n  font-size: 2.5rem;\n  margin: auto;\n}\n\n.weather-details {\n  display: flex;\n  width: 80%;\n}\n\n.current-temp {\n  flex-basis: 100%;\n  padding: 2rem 1.5rem;\n  text-align: center;\n  font-size: 5.5rem;\n}\n\n.details-container {\n  flex-basis: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 1rem 0rem;\n  border-left: 3px solid black;\n}\n\n.detail p {\n  margin: 0;\n  font-size: 1.8rem;\n}\n\n.week-forecast-container {\n  grid-area: week;\n  display: flex;\n  flex-direction: column;\n  padding: 4rem;\n  padding-top: 0;\n}\n\n.week-forecast-title h2 {\n  width: 100%;\n  text-align: center;\n  border-bottom: 3px solid #000;\n  line-height: 0em;\n  margin: 10px 0 20px;\n}\n\n.week-forecast-title h2 span {\n  background: var(--main-color);\n  padding: 0 25px;\n}\n\n.daily-forecast {\n  display: flex;\n  flex-grow: 1;\n  justify-content: space-between;\n  padding: 1rem;\n}\n\n.daily-w {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 13%;\n}\n\n.day {\n  font-size: 2.5rem;\n  margin: 0;\n}\n\n.w-desc {\n  font-size: 1.5rem;\n}\n\n.week-temp {\n  font-size: 2.5rem;\n  margin: 0;\n  margin-bottom: 1rem;\n}\n\n/* media queries */\n@media only screen and (max-width: 1500px) {\n  .search-date-container {\n    margin: 1.5rem 0;\n    padding: 1.5rem 2.5rem;\n    border-right: 3px solid black;\n  }\n\n  .search-icon {\n    width: 25px;\n    height: 25px;\n  }\n\n  .date {\n    font-size: 4.5rem;\n  }\n\n  .time {\n    font-size: 3rem;\n  }\n\n  .credit {\n    font-size: 1.2rem;\n  }\n\n  .today-weather-container {\n    padding: 2.5rem;\n  }\n\n  .loc-display-desc {\n    padding: 0.8rem;\n  }\n\n  .loc-display {\n    font-size: 4rem;\n  }\n\n  .loc-desc {\n    font-size: 2rem;\n  }\n\n  .current-temp {\n    padding: 1.8rem 1.2rem;\n    font-size: 5rem;\n  }\n\n  .detail p {\n    margin: 0;\n    font-size: 1.5rem;\n  }\n\n  .daily-forecast {\n    padding: 0.8rem;\n  }\n\n  .daily-w {\n    width: 14%;\n  }\n\n  .day {\n    font-size: 2rem;\n  }\n\n  .w-desc {\n    font-size: 1.2rem;\n  }\n}\n\n@media only screen and (max-width: 1250px) {\n  .search-date-container {\n    padding: 2.5rem;\n  }\n\n  .search-div input[type='text'] {\n    font-size: 18px;\n  }\n\n  .search-icon {\n    width: 20px;\n    height: 20px;\n  }\n\n  .date {\n    font-size: 4rem;\n  }\n\n  .time {\n    font-size: 2.5rem;\n  }\n\n  .credit {\n    font-size: 0.8rem;\n  }\n\n  .today-weather-container {\n    padding: 2rem;\n  }\n\n  .loc-display-desc {\n    padding: 0.6rem;\n  }\n\n  .loc-display {\n    font-size: 3.5rem;\n  }\n\n  .loc-desc {\n    font-size: 1.5rem;\n  }\n\n  .current-temp {\n    padding: 1.5rem 1rem;\n    font-size: 4.5rem;\n  }\n\n  .detail p {\n    font-size: 1.2rem;\n  }\n\n  .daily-forecast {\n    padding: 0.6rem;\n  }\n\n  .daily-w {\n    width: 15%;\n  }\n\n  .day {\n    font-size: 1.7rem;\n  }\n\n  .w-desc {\n    font-size: 1rem;\n  }\n\n  .week-temp {\n    font-size: 2rem;\n  }\n}\n\n@media only screen and (max-width: 1050px) {\n  body {\n    grid:\n      'search' auto\n      'today' auto\n      'week' auto /\n      1fr;\n  }\n\n  .search-date-container {\n    margin: 0;\n    padding: 3rem;\n    border-right: 0;\n    border-bottom: 3px solid black;\n  }\n\n  .search-div {\n    height: 2.5em;\n  }\n\n  .search-form {\n    width: 20%;\n  }\n\n  .search-div input[type='text'] {\n    font-size: 15px;\n  }\n\n  .search-icon {\n    width: 20px;\n    height: 20px;\n  }\n\n  #submitBtn {\n    width: 30px;\n  }\n\n  .date {\n    font-size: 3.5rem;\n  }\n\n  .time {\n    font-size: 2rem;\n  }\n\n  .credit {\n    font-size: 1.2rem;\n  }\n\n  .today-weather-container {\n    padding: 1.5rem;\n  }\n\n  .loc-display-desc {\n    padding: 0.5rem;\n  }\n\n  .loc-display {\n    font-size: 4rem;\n  }\n\n  .loc-desc {\n    font-size: 2rem;\n  }\n\n  #locLogo {\n    height: 150px;\n    width: 150px;\n  }\n\n  .details-container {\n    margin: 1rem 0rem;\n    padding: 1rem 0rem;\n  }\n\n  .detail p {\n    margin: 0;\n    font-size: 1.2rem;\n  }\n\n  .week-forecast-title h2 {\n    font-size: 1.2rem;\n  }\n\n  .daily-forecast {\n    padding: 0.6rem;\n  }\n\n  .daily-w {\n    width: 14%;\n  }\n\n  .day {\n    font-size: 1.5rem;\n  }\n\n  .w-desc {\n    font-size: 0.8rem;\n  }\n\n  .week-temp {\n    font-size: 2rem;\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  body {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .search-date-container {\n    margin: 0;\n    padding: 1.5rem;\n    border-right: 0;\n    border-bottom: 3px solid black;\n  }\n\n  .search-form {\n    width: 30%;\n  }\n\n  .search-div input[type='text'] {\n    font-size: 15px;\n  }\n\n  .search-icon {\n    width: 20px;\n    height: 20px;\n  }\n\n  #submitBtn {\n    width: 30px;\n  }\n\n  .time-date-container {\n    padding: 1rem;\n  }\n\n  .date {\n    font-size: 3.5rem;\n  }\n\n  .time {\n    font-size: 2rem;\n  }\n\n  .credit {\n    font-size: 1rem;\n    padding: 0 3.5rem;\n  }\n\n  .today-weather-container {\n    padding: 1.2rem;\n  }\n\n  .loc-display-desc {\n    padding: 0.5rem;\n  }\n\n  .loc-display {\n    font-size: 3.5rem;\n  }\n\n  .loc-desc {\n    font-size: 2rem;\n  }\n\n  #locLogo {\n    height: 125px;\n    width: 125px;\n  }\n\n  .current-temp {\n    font-size: 4.5rem;\n  }\n\n  .details-container {\n    margin: 1rem 0rem;\n  }\n\n  .detail p {\n    margin: 0;\n    font-size: 1rem;\n  }\n\n  .week-forecast-title h2 {\n    font-size: 1rem;\n  }\n\n  .daily-forecast {\n    padding: 0.5rem;\n  }\n\n  .daily-w {\n    width: 15%;\n  }\n\n  .day {\n    font-size: 1.2rem;\n  }\n\n  .w-desc {\n    font-size: 0.65rem;\n  }\n\n  .week-temp {\n    font-size: 1.8rem;\n  }\n}\n\n@media only screen and (max-width: 575px) {\n  body {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .search-date-container {\n    margin: 0;\n    padding: 1.5rem;\n    border-right: 0;\n    border-bottom: 3px solid black;\n  }\n\n  .search-form {\n    width: 50%;\n  }\n\n  .search-div input[type='text'] {\n    font-size: 15px;\n  }\n\n  .search-icon {\n    width: 20px;\n    height: 20px;\n  }\n\n  #submitBtn {\n    width: 30px;\n  }\n\n  .time-date-container {\n    padding: 0.8rem;\n  }\n\n  .date {\n    font-size: 3rem;\n  }\n\n  .time {\n    font-size: 1.5rem;\n  }\n\n  .credit {\n    font-size: 1rem;\n    padding: 0;\n  }\n\n  .today-weather-container {\n    padding: 1rem;\n  }\n\n  .loc-display-desc {\n    padding: 0.4rem;\n  }\n\n  .loc-display {\n    font-size: 3rem;\n  }\n\n  .loc-desc {\n    font-size: 1.8rem;\n  }\n\n  #locLogo {\n    height: 100px;\n    width: 100px;\n  }\n\n  .current-temp {\n    font-size: 3.5rem;\n  }\n\n  .details-container {\n    margin: 1rem 0rem;\n  }\n\n  .detail p {\n    font-size: 0.9rem;\n  }\n\n  /* .week-forecast-container {\n    grid-area: week;\n    display: flex;\n    flex-direction: column;\n    padding: 4rem;\n    padding-top: 0;\n  } */\n\n  .week-forecast-title h2 {\n    font-size: 1rem;\n  }\n\n  .daily-forecast {\n    flex-direction: column;\n    padding: 0.5rem;\n  }\n\n  .day {\n    font-size: 1.5rem;\n  }\n\n  .w-desc {\n    font-size: 1rem;\n  }\n\n  .week-temp {\n    font-size: 1.8rem;\n  }\n\n  .daily-w {\n    width: 100%;\n    border-bottom: 2px solid black;\n    padding-top: 0.4rem;\n  }\n}\n","",{version:3,sources:["webpack://./src/styles/style.css"],names:[],mappings:"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",sourcesContent:["@font-face {\n  font-family: 'Acme';\n  src: url('../assets/Acme-Regular-webfont.woff') format('woff');\n  font-weight: normal;\n  font-style: normal;\n}\n\n:root {\n  --main-color: #edc7b7;\n}\n\n*,\n*::before,\n*::after {\n  font-family: inherit;\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: 'Acme', 'sans-serif';\n  background-color: var(--main-color);\n  display: grid;\n  grid:\n    'search search today today' 50vh\n    'week week week week' 50vh /\n    1fr 1fr 1fr 1fr;\n}\n\n.search-date-container {\n  grid-area: search;\n  margin: 2rem 0;\n  padding: 1.5rem 3rem;\n  border-right: 3px solid black;\n}\n\n.search-div {\n  display: flex;\n  justify-content: center;\n  height: 3rem;\n}\n\n.search-form {\n  display: flex;\n  width: 30%;\n  padding: 0.25rem 0;\n}\n\n.search-div input[type='text'] {\n  width: 85%;\n  height: 100%;\n  padding: 0.25rem;\n  padding-left: 0.5rem;\n  font-size: 20px;\n  border-radius: 5px;\n}\n\n.search-icon {\n  width: 25px;\n  height: 25px;\n}\n\n#submitBtn {\n  background-color: white;\n  width: 35px;\n  border-radius: 5px;\n  padding: 0;\n  cursor: pointer;\n  transition: transform 200ms ease-in-out;\n}\n\n#submitBtn:hover {\n  transform: scale(1.1);\n}\n\n.time-date-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 80%;\n}\n\n.date {\n  font-size: 5rem;\n}\n\n.time {\n  font-size: 3.5rem;\n}\n\n.credit {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  font-size: 1.5rem;\n  padding: 0 5rem;\n}\n\n.credit a {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.credit span {\n  color: black;\n}\n\n.today-weather-container {\n  grid-area: today;\n  padding: 3rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.logo-location {\n  display: flex;\n  width: 80%;\n  border-bottom: 3px solid black;\n}\n\n.logo-location img {\n  width: 30%;\n}\n\n.loc-display-desc {\n  text-align: center;\n  padding: 1rem;\n  flex: 1;\n}\n\n.loc-display {\n  font-size: 5rem;\n  margin: auto;\n  border-bottom: 3px solid black;\n}\n\n.loc-desc {\n  font-size: 2.5rem;\n  margin: auto;\n}\n\n.weather-details {\n  display: flex;\n  width: 80%;\n}\n\n.current-temp {\n  flex-basis: 100%;\n  padding: 2rem 1.5rem;\n  text-align: center;\n  font-size: 5.5rem;\n}\n\n.details-container {\n  flex-basis: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 1rem 0rem;\n  border-left: 3px solid black;\n}\n\n.detail p {\n  margin: 0;\n  font-size: 1.8rem;\n}\n\n.week-forecast-container {\n  grid-area: week;\n  display: flex;\n  flex-direction: column;\n  padding: 4rem;\n  padding-top: 0;\n}\n\n.week-forecast-title h2 {\n  width: 100%;\n  text-align: center;\n  border-bottom: 3px solid #000;\n  line-height: 0em;\n  margin: 10px 0 20px;\n}\n\n.week-forecast-title h2 span {\n  background: var(--main-color);\n  padding: 0 25px;\n}\n\n.daily-forecast {\n  display: flex;\n  flex-grow: 1;\n  justify-content: space-between;\n  padding: 1rem;\n}\n\n.daily-w {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 13%;\n}\n\n.day {\n  font-size: 2.5rem;\n  margin: 0;\n}\n\n.w-desc {\n  font-size: 1.5rem;\n}\n\n.week-temp {\n  font-size: 2.5rem;\n  margin: 0;\n  margin-bottom: 1rem;\n}\n\n/* media queries */\n@media only screen and (max-width: 1500px) {\n  .search-date-container {\n    margin: 1.5rem 0;\n    padding: 1.5rem 2.5rem;\n    border-right: 3px solid black;\n  }\n\n  .search-icon {\n    width: 25px;\n    height: 25px;\n  }\n\n  .date {\n    font-size: 4.5rem;\n  }\n\n  .time {\n    font-size: 3rem;\n  }\n\n  .credit {\n    font-size: 1.2rem;\n  }\n\n  .today-weather-container {\n    padding: 2.5rem;\n  }\n\n  .loc-display-desc {\n    padding: 0.8rem;\n  }\n\n  .loc-display {\n    font-size: 4rem;\n  }\n\n  .loc-desc {\n    font-size: 2rem;\n  }\n\n  .current-temp {\n    padding: 1.8rem 1.2rem;\n    font-size: 5rem;\n  }\n\n  .detail p {\n    margin: 0;\n    font-size: 1.5rem;\n  }\n\n  .daily-forecast {\n    padding: 0.8rem;\n  }\n\n  .daily-w {\n    width: 14%;\n  }\n\n  .day {\n    font-size: 2rem;\n  }\n\n  .w-desc {\n    font-size: 1.2rem;\n  }\n}\n\n@media only screen and (max-width: 1250px) {\n  .search-date-container {\n    padding: 2.5rem;\n  }\n\n  .search-div input[type='text'] {\n    font-size: 18px;\n  }\n\n  .search-icon {\n    width: 20px;\n    height: 20px;\n  }\n\n  .date {\n    font-size: 4rem;\n  }\n\n  .time {\n    font-size: 2.5rem;\n  }\n\n  .credit {\n    font-size: 0.8rem;\n  }\n\n  .today-weather-container {\n    padding: 2rem;\n  }\n\n  .loc-display-desc {\n    padding: 0.6rem;\n  }\n\n  .loc-display {\n    font-size: 3.5rem;\n  }\n\n  .loc-desc {\n    font-size: 1.5rem;\n  }\n\n  .current-temp {\n    padding: 1.5rem 1rem;\n    font-size: 4.5rem;\n  }\n\n  .detail p {\n    font-size: 1.2rem;\n  }\n\n  .daily-forecast {\n    padding: 0.6rem;\n  }\n\n  .daily-w {\n    width: 15%;\n  }\n\n  .day {\n    font-size: 1.7rem;\n  }\n\n  .w-desc {\n    font-size: 1rem;\n  }\n\n  .week-temp {\n    font-size: 2rem;\n  }\n}\n\n@media only screen and (max-width: 1050px) {\n  body {\n    grid:\n      'search' auto\n      'today' auto\n      'week' auto /\n      1fr;\n  }\n\n  .search-date-container {\n    margin: 0;\n    padding: 3rem;\n    border-right: 0;\n    border-bottom: 3px solid black;\n  }\n\n  .search-div {\n    height: 2.5em;\n  }\n\n  .search-form {\n    width: 20%;\n  }\n\n  .search-div input[type='text'] {\n    font-size: 15px;\n  }\n\n  .search-icon {\n    width: 20px;\n    height: 20px;\n  }\n\n  #submitBtn {\n    width: 30px;\n  }\n\n  .date {\n    font-size: 3.5rem;\n  }\n\n  .time {\n    font-size: 2rem;\n  }\n\n  .credit {\n    font-size: 1.2rem;\n  }\n\n  .today-weather-container {\n    padding: 1.5rem;\n  }\n\n  .loc-display-desc {\n    padding: 0.5rem;\n  }\n\n  .loc-display {\n    font-size: 4rem;\n  }\n\n  .loc-desc {\n    font-size: 2rem;\n  }\n\n  #locLogo {\n    height: 150px;\n    width: 150px;\n  }\n\n  .details-container {\n    margin: 1rem 0rem;\n    padding: 1rem 0rem;\n  }\n\n  .detail p {\n    margin: 0;\n    font-size: 1.2rem;\n  }\n\n  .week-forecast-title h2 {\n    font-size: 1.2rem;\n  }\n\n  .daily-forecast {\n    padding: 0.6rem;\n  }\n\n  .daily-w {\n    width: 14%;\n  }\n\n  .day {\n    font-size: 1.5rem;\n  }\n\n  .w-desc {\n    font-size: 0.8rem;\n  }\n\n  .week-temp {\n    font-size: 2rem;\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  body {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .search-date-container {\n    margin: 0;\n    padding: 1.5rem;\n    border-right: 0;\n    border-bottom: 3px solid black;\n  }\n\n  .search-form {\n    width: 30%;\n  }\n\n  .search-div input[type='text'] {\n    font-size: 15px;\n  }\n\n  .search-icon {\n    width: 20px;\n    height: 20px;\n  }\n\n  #submitBtn {\n    width: 30px;\n  }\n\n  .time-date-container {\n    padding: 1rem;\n  }\n\n  .date {\n    font-size: 3.5rem;\n  }\n\n  .time {\n    font-size: 2rem;\n  }\n\n  .credit {\n    font-size: 1rem;\n    padding: 0 3.5rem;\n  }\n\n  .today-weather-container {\n    padding: 1.2rem;\n  }\n\n  .loc-display-desc {\n    padding: 0.5rem;\n  }\n\n  .loc-display {\n    font-size: 3.5rem;\n  }\n\n  .loc-desc {\n    font-size: 2rem;\n  }\n\n  #locLogo {\n    height: 125px;\n    width: 125px;\n  }\n\n  .current-temp {\n    font-size: 4.5rem;\n  }\n\n  .details-container {\n    margin: 1rem 0rem;\n  }\n\n  .detail p {\n    margin: 0;\n    font-size: 1rem;\n  }\n\n  .week-forecast-title h2 {\n    font-size: 1rem;\n  }\n\n  .daily-forecast {\n    padding: 0.5rem;\n  }\n\n  .daily-w {\n    width: 15%;\n  }\n\n  .day {\n    font-size: 1.2rem;\n  }\n\n  .w-desc {\n    font-size: 0.65rem;\n  }\n\n  .week-temp {\n    font-size: 1.8rem;\n  }\n}\n\n@media only screen and (max-width: 575px) {\n  body {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .search-date-container {\n    margin: 0;\n    padding: 1.5rem;\n    border-right: 0;\n    border-bottom: 3px solid black;\n  }\n\n  .search-form {\n    width: 50%;\n  }\n\n  .search-div input[type='text'] {\n    font-size: 15px;\n  }\n\n  .search-icon {\n    width: 20px;\n    height: 20px;\n  }\n\n  #submitBtn {\n    width: 30px;\n  }\n\n  .time-date-container {\n    padding: 0.8rem;\n  }\n\n  .date {\n    font-size: 3rem;\n  }\n\n  .time {\n    font-size: 1.5rem;\n  }\n\n  .credit {\n    font-size: 1rem;\n    padding: 0;\n  }\n\n  .today-weather-container {\n    padding: 1rem;\n  }\n\n  .loc-display-desc {\n    padding: 0.4rem;\n  }\n\n  .loc-display {\n    font-size: 3rem;\n  }\n\n  .loc-desc {\n    font-size: 1.8rem;\n  }\n\n  #locLogo {\n    height: 100px;\n    width: 100px;\n  }\n\n  .current-temp {\n    font-size: 3.5rem;\n  }\n\n  .details-container {\n    margin: 1rem 0rem;\n  }\n\n  .detail p {\n    font-size: 0.9rem;\n  }\n\n  /* .week-forecast-container {\n    grid-area: week;\n    display: flex;\n    flex-direction: column;\n    padding: 4rem;\n    padding-top: 0;\n  } */\n\n  .week-forecast-title h2 {\n    font-size: 1rem;\n  }\n\n  .daily-forecast {\n    flex-direction: column;\n    padding: 0.5rem;\n  }\n\n  .day {\n    font-size: 1.5rem;\n  }\n\n  .w-desc {\n    font-size: 1rem;\n  }\n\n  .week-temp {\n    font-size: 1.8rem;\n  }\n\n  .daily-w {\n    width: 100%;\n    border-bottom: 2px solid black;\n    padding-top: 0.4rem;\n  }\n}\n"],sourceRoot:""}]);const m=c},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var A="",t=void 0!==e[5];return e[4]&&(A+="@supports (".concat(e[4],") {")),e[2]&&(A+="@media ".concat(e[2]," {")),t&&(A+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),A+=n(e),t&&(A+="}"),e[2]&&(A+="}"),e[4]&&(A+="}"),A})).join("")},e.i=function(n,A,t,i,r){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var o=0;o<this.length;o++){var d=this[o][0];null!=d&&(a[d]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);t&&a[c[0]]||(void 0!==r&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=r),A&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=A):c[2]=A),i&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=i):c[4]="".concat(i)),e.push(c))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},537:n=>{n.exports=function(n){var e=n[1],A=n[3];if(!A)return e;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(A)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),r="/*# ".concat(i," */"),a=A.sources.map((function(n){return"/*# sourceURL=".concat(A.sourceRoot||"").concat(n," */")}));return[e].concat(a).concat([r]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function A(n){for(var A=-1,t=0;t<e.length;t++)if(e[t].identifier===n){A=t;break}return A}function t(n,t){for(var r={},a=[],o=0;o<n.length;o++){var d=n[o],s=t.base?d[0]+t.base:d[0],c=r[s]||0,E="".concat(s," ").concat(c);r[s]=c+1;var m=A(E),l={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)e[m].references++,e[m].updater(l);else{var p=i(l,t);t.byIndex=o,e.splice(o,0,{identifier:E,updater:p,references:1})}a.push(E)}return a}function i(n,e){var A=e.domAPI(e);return A.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;A.update(n=e)}else A.remove()}}n.exports=function(n,i){var r=t(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<r.length;a++){var o=A(r[a]);e[o].references--}for(var d=t(n,i),s=0;s<r.length;s++){var c=A(r[s]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}r=d}}},569:n=>{var e={};n.exports=function(n,A){var t=function(n){if(void 0===e[n]){var A=document.querySelector(n);if(window.HTMLIFrameElement&&A instanceof window.HTMLIFrameElement)try{A=A.contentDocument.head}catch(n){A=null}e[n]=A}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(A)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,A)=>{n.exports=function(n){var e=A.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(A){!function(n,e,A){var t="";A.supports&&(t+="@supports (".concat(A.supports,") {")),A.media&&(t+="@media ".concat(A.media," {"));var i=void 0!==A.layer;i&&(t+="@layer".concat(A.layer.length>0?" ".concat(A.layer):""," {")),t+=A.css,i&&(t+="}"),A.media&&(t+="}"),A.supports&&(t+="}");var r=A.sourceMap;r&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,A)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},452:(n,e,A)=>{n.exports=A.p+"ffcfc894b5afde3b4983.woff"},328:(n,e,A)=>{n.exports=A.p+"afde00ab19b32864cdd8.png"}},e={};function A(t){var i=e[t];if(void 0!==i)return i.exports;var r=e[t]={id:t,exports:{}};return n[t](r,r.exports,A),r.exports}A.m=n,A.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return A.d(e,{a:e}),e},A.d=(n,e)=>{for(var t in e)A.o(e,t)&&!A.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},A.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),A.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;A.g.importScripts&&(n=A.g.location+"");var e=A.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),A.p=n})(),A.b=document.baseURI||self.location.href,(()=>{var n=A(379),e=A.n(n),t=A(795),i=A.n(t),r=A(569),a=A.n(r),o=A(565),d=A.n(o),s=A(216),c=A.n(s),E=A(589),m=A.n(E),l=A(890),p={};p.styleTagTransform=m(),p.setAttributes=d(),p.insert=a().bind(null,"head"),p.domAPI=i(),p.insertStyleElement=c(),e()(l.Z,p),l.Z&&l.Z.locals&&l.Z.locals;var C=A(328);function f(){const n=document.getElementById("date"),e=document.getElementById("time"),A=new Date,t=A.getMonth(),i=A.getDate(),r=A.getDay(),a=A.getHours(),o=A.getMinutes(),d=a>=13?a%12:a,s=a>=12?"PM":"AM";n.innerHTML=`${["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][r]}, ${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t]} ${i}`,e.innerHTML=`${d<10?"0"+d:d}:${o<10?"0"+o:o} ${s}`}function B(n){return n.charAt(0).toUpperCase()+n.slice(1)}function h(n){return Math.round(n)}const u=function(n,e){document.getElementById("locDisplay").innerHTML=n.cityName,function(n){const e=document.getElementById("locLogo"),A=n.current.weather[0].icon;e.src=`http://openweathermap.org/img/wn/${A}@2x.png`,document.getElementById("locDesc").innerHTML=B(n.current.weather[0].description),document.getElementById("currentTemp").innerHTML=`${h(n.current.temp)}&#8451;`,document.getElementById("currentFeelsLike").innerHTML=`${n.current.feels_like}&#8451;`,document.getElementById("currentHumidity").innerHTML=`${n.current.humidity}&#37;`,document.getElementById("currentPop").innerHTML=100*n.daily[0].pop+"&#37;",document.getElementById("currentWindSpeed").innerHTML=`${n.current.wind_speed}km/h`}(e),function(n){const e=function(n){const e=[];let A=(new Date).getDay()+1;for(let n=0;n<7;n++)e.push(A),A+=1,A>7&&(A=1);return e}(),A=function(n){const e=[],A=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],t=function(n){const e=n;for(let n=0;n<7;n++)e[n]-=1;return e}(n);for(let n=0;n<7;n++)e.push(A[t[n]]);return e}(e);console.log(e),console.log(A);const t=document.getElementById("weekForecast");!function(n){for(;n.firstChild;)n.removeChild(n.firstChild)}(t);for(let i=0;i<e.length;i++){const r=document.createElement("div");r.classList.add("daily-w"),r.setAttribute("id",e[i]),t.appendChild(r);const a=document.createElement("p");a.classList.add("day"),a.innerHTML=A[i],r.appendChild(a);const o=document.createElement("p");o.classList.add("w-desc"),o.innerHTML=B(n.daily[i].weather[0].description),r.appendChild(o);const d=document.createElement("p");d.classList.add("week-temp"),d.innerHTML=h((n.daily[i].temp.day+n.daily[i].temp.eve)/2)+"&#8451;",r.appendChild(d);const s=document.createElement("img");s.classList.add("daily-w-icon"),s.alt="Forecast Logo",s.src=`http://openweathermap.org/img/wn/${n.daily[i].weather[0].icon}@2x.png`,r.appendChild(s)}}(e),console.log(e)},g=document.getElementById("location");function y(){g.value=""}async function x(){if(""===g.value)return;const n=await async function(n){try{const e=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${n}&units=metric&APPID=3b64ee637f1db8b2a33aeda84b863bcf`,{mode:"cors"});if(!e.ok){const A=`An error has occured: ${e.status}, ${n} not found`;throw new Error(A)}return function(n){const{coord:{lat:e,lon:A},name:t}=n;return{latitude:e,longtitude:A,cityName:t}}(await e.json())}catch(n){return alert(n),null}}(g.value),e=await async function(n){try{const e=await fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${n.latitude}&lon=${n.longtitude}&exclude=hourly,minutely&units=metric&APPID=3b64ee637f1db8b2a33aeda84b863bcf`,{mode:"cors"});if(!e.ok){const n=`An error has occured: ${e.status}`;throw new Error(n)}return await e.json()}catch(n){return alert(n),null}}(n);u(n,e)}document.getElementById("form").addEventListener("submit",(n=>{n.preventDefault(),x(),y()})),document.querySelector(".search-icon").src=C,window.addEventListener("load",(()=>{x(),y(),setInterval(f,1e3)}))})()})();
//# sourceMappingURL=main.js.map