const isEmail = (email) => {
  const regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexp.test(String(email).toLowerCase());
}

const isPhone = (phone) => {
    return phone.replace(/\D/g, '').length === 11;
}

const isEmpty = (str) => {
  return str.trim().length === 0
}

export default {isEmail, isPhone, isEmpty}