setInterval(showTime, 1000);
function showTime() {
	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
    let mills = time.getMilliseconds();
	// am_pm = "AM";

	// if (hour > 12) {
	// 	hour -= 12;
	// 	am_pm = "PM";
	// }
	// if (hour == 0) {
	// 	hr = 12;
	// 	am_pm = "AM";
	// }

	hour = hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min : min;
	sec = sec < 10 ? "0" + sec : sec;
	mills = mills < 10? "0" + mills : mills;
	mills = mills < 100? "0" + mills : mills;
	

	let currentTime = hour + ":"
			+ min + ":" + sec + ":" + mills;// + am_pm;

console.log(currentTime);
}
showTime();
