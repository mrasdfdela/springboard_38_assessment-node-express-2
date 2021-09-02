times = [
  "00:00",
  "00:12",
  "01:00",
  "06:01",
  "06:10",
  "06:18",
  "06:30",
  "10:34",
  "12:00",
  "12:09",
  "23:23"
]

times.forEach((time) => {
  
});

function timeWord(timeStr) {
  if (checkTwelves(timeStr)) return checkTwelves(timeStr);
  const [ hourStr, minStr ] = timeStr.split(":");
  const [ hourWord, meridiem ] = evalHour(hourStr);
  const minWord = evalMinute(minStr);

  return `${hourWord} ${minWord} ${meridiem}`
}

function checkTwelves(str) {
  if (str === "00:00") return "midnight"
  if (str === "12:00") return "noon"
}

function evalHour(str) {
  let hour = parseInt(str);

  switch(true) {
    case (hour == 0):
      return ["twelve","am"]
    case (hour < 12):
      return [wordify(hour), "am"]
    case (hour == 12):
      return [wordify(hour), "pm"]
    default: 
      return [wordify(hour-12), "pm"]
  }
}

function evalMinute(str) {
  let minute = parseInt(str);

  switch(true){
    case (minute == 0):
      return "o’clock";
    case (minute < 10):
      return `oh ${wordify(minute)}`
    case (minute < 20):
      return wordify(minute)
    default:
      const ones = minute % 10;
      const tens = minute - ones;
      word = minute % 10 === 0 ? wordify(tens) : `${wordify(tens)} ${wordify(ones)}`;
      return word;
  }
}

function wordify(num){
  const numList = {
    0:"",
    1:"one",
    2:"two",
    3:"three",
    4:"four",
    5:"five",
    6:"six",
    7:"seven",
    8:"eight",
    9:"nine",
    10:"ten",
    11:"eleven",
    12:"twelve",
    13:"thirteen",
    14:"fourteen",
    15:"fifteen",
    16:"sixteen",
    17:"seventeen",
    18:"eighteen",
    19:"nineteen",
    20:"twenty",
    30:"thirty",
    40:"fourty",
    50:"fifty"
  }
  return numList[num]
}


module.exports = { timeWord, checkTwelves, evalHour, evalMinute };