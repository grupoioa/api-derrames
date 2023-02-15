const now= new Date();
console.log(now);
var day = now.getDate()-1;
var month = now.getMonth() + 1;
var year = now.getFullYear();
const hour =now.getHours();
const minute =now.getMinutes();
const sec = now.getSeconds();

if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;

const today = year + "-" + month + "-" + day+ "T12:00";       
const id_string = 'run_'+year + month + now.getDate()+ hour+ minute+ sec+now.getMilliseconds();
console.log(today);
console.log(id_string);
document.getElementById("date_start").value = today;
document.getElementById("id").value = id_string;
