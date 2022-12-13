const generateAddressByKeys = (keys, data) => {
  let str;
  if (data) {
    keys.forEach((item) => {
      if (data[item]) {
        if (str) {
          str = str + ', ' + data[item]
        } else {
          str = data[item]
        }
      }
    })
  }
  return str
}

export default generateAddressByKeys;
