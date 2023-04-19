export function showDayOfTheWeek() {
  const nameDays = [
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
    "воскресенье",
  ];
  const str = prompt(`Введите дату в формате:\n'ДД.ММ.ГГГГ'`);
  const isTrue = /^([0-2][1-9]|3[0-1]).(0[1-9]|1[0-2]).([1-2][0-9]{3})$/.test(
    str
  );

  if (isTrue) {
    const elems = str.split(".");
    const indexDay = new Date(+elems[2], +elems[1] - 1, +elems[0]).getDay();

    return nameDays[indexDay - 1];
  }
  throw new Error("Incoming data does not meet requirements");
}

export function diffStartDayToNowInMinutes() {
  let now = Date.now();

  now = new Date(now);

  return now.getUTCHours() * 60 + now.getUTCMinutes();
}

export function whoAreYounger(date1, date2) {
  const elements1 = date1.split(".");
  const elements2 = date2.split(".");

  const userDate1 = new Date(+elements1[2], +elements1[1] - 1, +elements1[0]);
  const userDate2 = new Date(+elements2[2], +elements2[1] - 1, +elements2[0]);

  const diff = userDate1 - userDate2;

  if (diff > 0) {
    return `Пользователь с датой рождения - ${date1} моложе`;
  }
  if (diff < 0) {
    return `Пользователь с датой рождения - ${date2} моложе`;
  }
  if (diff === 0) {
    return "У пользователей одинаковая дата рождения!";
  }
}
