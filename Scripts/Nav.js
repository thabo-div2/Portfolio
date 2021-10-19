function toggleNavbar() {
	document.getElementsByClassName("navbar-links")[0].classList.toggle("active");
}

const sections = document.querySelectorAll("section[id]");

const highLighter = () => {
	let scrollY = window.pageYOffset;

	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - 50;
		const sectionId = current.getAttribute("id");
		console.log(sectionId);

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document
				.querySelector(`.navbar a[href*=${sectionId}]`)
				.classList.add("active");
		} else {
			document
				.querySelector(`.navbar a[href*=${sectionId}]`)
				.classList.remove("active");
		}
	});
};

window.addEventListener("scroll", highLighter);
