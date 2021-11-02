const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('-')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

const limitDate = date => {
  const dayNum = 3
  const limitTime = date.getTime() + 86400000 * dayNum
  const limitDate = new Date(limitTime)
  const year = limitDate.getFullYear()
  const month = limitDate.getMonth() + 1
  const day = limitDate.getDate()

  return `${[year, month, day].map(formatNumber).join('-')}`
}

module.exports = {
  formatTime,
  limitDate
}
