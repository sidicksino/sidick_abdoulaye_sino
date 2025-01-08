
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
	navLinks.classList.toggle('active');
});






// Back-to-Top Button Functionality
document.addEventListener('DOMContentLoaded', () => {
	const backToTopButton = document.createElement('button');
	backToTopButton.id = 'backToTop';
	backToTopButton.textContent = '↑ Top';
	backToTopButton.style.display = 'none';
	backToTopButton.style.position = 'fixed';
	backToTopButton.style.bottom = '20px';
	backToTopButton.style.right = '20px';
	backToTopButton.style.zIndex = '1000';
	document.body.appendChild(backToTopButton);

	// Show the button when scrolling down
	window.addEventListener('scroll', () => {
		if (window.scrollY > 300) {
			backToTopButton.style.display = 'block';
		} else {
			backToTopButton.style.display = 'none';
		}
	});

	// Scroll to top when the button is clicked
	backToTopButton.addEventListener('click', () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});
});








function toggleContent(element) {
	const content = element.nextElementSibling;
	const symbol = element.querySelector("span");
	if (content.style.display === "block") {
		content.style.display = "none";
		symbol.textContent = "+";
	} else {
		content.style.display = "block";
		symbol.textContent = "−";
	}
}


// Scroll-triggered animations
document.addEventListener("DOMContentLoaded", () => {
	const elements = document.querySelectorAll("[os-animation]");

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("animated");
				observer.unobserve(entry.target);
			}
		});
	}, { threshold: 0.5 });

	elements.forEach((element) => {
		observer.observe(element);
	});
});

