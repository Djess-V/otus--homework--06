export function addAge(user) {
  const str = Number(prompt("Введите возраст админа"));

  if (!isNaN(str)) {
    user.age = str;
    return user;
  }
  throw new Error("Incoming data does not meet requirements");
}

export function createAdmin(user) {
  if (user instanceof Object) {
    const admin = { ...user };
    return admin;
  }
  throw new Error("Incoming data does not meet requirements");
}

export function destructProp(admin) {
  if (admin instanceof Object) {
    const { name, age, role } = { ...admin };
    console.log(name, age, role);
  } else {
    throw new Error("Incoming data does not meet requirements");
  }
}
