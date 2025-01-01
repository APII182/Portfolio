// on page load after 1s, hide the loader
window.addEventListener("load", function () {
	const loader = document.querySelector(".loader");
    const nav = document.querySelector("nav");
	setTimeout(() => {
		loader.style.display = "none";
        nav.style.display = "block";
	}, 1000);
});

// on page leave, show the loader
window.addEventListener("beforeunload", function () {
	const loader = document.querySelector(".loader");
	loader.style.display = "block";
});
