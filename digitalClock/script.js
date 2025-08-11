function updateClockAndDate() {
	const now = new Date();
	const clock = document.getElementById('clock');
	const date = document.getElementById('date');
	
	const h = String(now.getHours()).padStart(2, '0');
	const m = String(now.getMinutes()).padStart(2, '0');
	const s = String(now.getSeconds()).padStart(2, '0');
	clock.textContent = `${h}:${m}:${s}`;

	const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	date.textContent = now.toLocaleDateString(undefined, options);
}

setInterval(updateClockAndDate, 1000);
updateClockAndDate();

const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
	document.body.classList.toggle('light');
	themeToggle.textContent = document.body.classList.contains('light') ? 'Dark Theme' : 'Light Theme';
});
