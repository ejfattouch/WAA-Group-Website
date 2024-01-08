const animation_elements = document.querySelectorAll('.brand-slide');

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('brand-slide-animation');
            var element2 = document.getElementById("delay");
            element2.classList.add("brand-slide-animation");
		}
	})
}, {
	threshold: 0.2
});

for (let i = 0; i < animation_elements.length; i++) {
	const el = animation_elements[i];

	observer.observe(el);
}
