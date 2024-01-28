const btnDarkMode = document. querySelector('.dark-mode-btn');

//1 Проверка темной темы на уровне системных настроек
if (window.matchMedia && window.matchMedia("prefers-color-scheme: dark").matches){
	btnDarkMode.classList.add("dark-mode-btn--active");
	document.body.classList.add("dark");
}

//2 проверка темной темы в LocalStorage
if (localStorage.getItem('darkMode') === 'dark'){
	btnDarkMode.classList.add("dark-mode-btn--active");
	document.body.classList.add("dark");
} 

//3 Включение ночного режима по кнопке
btnDarkMode.onclick = function () {
	btnDarkMode.classList.toggle("dark-mode-btn--active");
	const isDark = document.body.classList.toggle('dark');

	if (isDark) {
		localStorage.setItem('darkMode', 'dark')
	} else {
		localStorage.setItem('darkMode', 'Light');
	}
}

