export const numberFormat = (value) => {
  var param = {}
  var k = 10000
  var sizes = ['', '万', '亿', '万亿']
  var i
  if (value < k) {
    param.value = value
    param.unit = ''
  } else {
    i = Math.floor(Math.log(value) / Math.log(k))

    param.value = ((value / Math.pow(k, i))).toFixed(2)
    param.unit = sizes[i]
  }
  return param.value + param.unit
}
