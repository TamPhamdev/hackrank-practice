let a  = '07:05:45PM';
function convertTime(time) {
  let [hours, minutes,modified ] = time.split(':');
 const seconds = modified.substring(0,2)
 const format = modified.substring(2,4)
if(hours == '12' && format === 'AM') {
  hours = '00'
}
if(format === 'PM' && hours != '12') {
 hours =  parseInt(hours) + 12
}
return `${hours}:${minutes}:${seconds}`
}
convertTime(a)

