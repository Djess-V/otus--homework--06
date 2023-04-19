export function isDate() {
  const date = prompt(
    "Введите дату в одном из следующих форматов\nДД.ММ.ГГГГ\nДД-ММ-ГГГГ"
  );
  const isTrue =
    /^([0-2][1-9]|3[0-1])[.-](0[1-9]|1[0-2])[.-]([1-2][0-9]{3})$/.test(date);
  if (isTrue) {
    return "Строка является датой в требуемом формате";
  }
  throw new Error("Incoming data does not meet requirements");
}

export function isEmail() {
  const date = prompt("Введите E-mail");
  const isTrue = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(date);
  if (isTrue) {
    return "Имя e-mail соответствует требованиям";
  }
  throw new Error("Incoming data does not meet requirements");
}

export function isPhoneNumber() {
  const date = prompt(
    "Введите номер телефона в предложенном формате\n+79999999999 или\n+7-999-999-9999 или\n+7 999 999 9999"
  );
  const isTrue =
    /^\+7((9[0-9]{9})|(-[0-9]{3}-[0-9]{3}-[0-9]{4})|( [0-9]{3} [0-9]{3} [0-9]{4}))$/.test(
      date
    );
  if (isTrue) {
    return "Номер телефона соответствует требованиям";
  }
  throw new Error("Incoming data does not meet requirements");
}
