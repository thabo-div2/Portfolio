let peoples = [
	{
		imgUrl: "./Images/godwin-dzvapatsra.jpg",
		personName: "Godwin Dzvapatsra",
		title: "Head of Curriculum and Learning",
		quote:
			"I see a lot of potential in Thabo as a developer. Thabo has been consistent in meeting timelines given by the lecturers.Godwin-Head of Curriculum and Learning",
	},
	{
		imgUrl: "./Images/thapelo-tsotetsi.jpg",
		personName: "Thapelo Tsotetsi",
		title: "Coding Lecturer",
		quote:
			"Thabo is one of the best student at Lifechoices Coding Academy. He has great communication and intellectual skills. Thabo is able to learn new programming tools quickly. I highly recommend him a position where he gets to work on both the back-end and front-end.",
	},
	{
		imgUrl: "./Images/C8Apr21GaryAfrica.JPG",
		personName: "Gary Africa",
		title: "Peer",
		quote:
			"Thabo, hard worker works well under pressure. He pays close attention to dead lines and always try to do the best of his ability to stand out. Hungry learner. When he decides to put his mind to his work is quite . He's gifts always comes comes true when you see he's work, that is where his secret hides.",
	},
	{
		imgUrl: "./Images/C8Apr21TashwillAndries.JPG",
		personName: "Tashwill Andries",
		title: "Peer",
		quote:
			"Thabo is a well-mannered individual whose skills in web development are undeniable. Any hurdle that is in his way, he always manages to overcome. He will always go above and beyond when helping his peers",
	},
	{
		imgUrl: "./Images/C8_Apr21_Abdullah_Isaacs.JPG",
		personName: "Abdullah Isaacs",
		title: "Peer",
		quote:
			"Thabo is a talented web developer who gives all his tasks 100%. He is very punctual and takes pride in his work. I have no doubt in the fact that Thabo will be a successful web developer",
	},
	{
		imgUrl: "./Images/C8_Apr21Mikayla_Beelders.JPG",
		personName: "Mikayla Beelders",
		title: "Peer",
		quote:
			"Thabo is conserved , yet always ready to assist others. He puts a tremendous amount of effort into the work he produces.",
	},
	{
		imgUrl: "./Images/C8Apr21UthmaanBreda.JPG",
		personName: "Uthmaan Breda",
		title: "Peer",
		quote:
			"Thabo is an honest, consistent in his work and above all is an interesting character with a great sense of humor. I am honoured to be a reference for him.",
	},
];

function testimonialCard(card) {
	let testimonialCard = `
    <div class="testimonial" style="background-image: url(${card.imgUrl})">
        <div class="content">
            <h4>${card.personName}</h4>
            <p>${card.title}</p>
            <q>${card.quote}</q>
        </div>
    </div>
    `;

	return testimonialCard;
}

function renderTestimonials() {
	let testimonialContainer = document.querySelector(".testimonials-container");

	for (people of peoples) {
		let card = testimonialCard(people);
		testimonialContainer.innerHTML += card;
	}
}

renderTestimonials();

const testimonials = document.querySelectorAll(".testimonial");

testimonials.forEach((testimonial) => {
	testimonial.addEventListener("click", () => {
		removeActiveClass();
		testimonial.classList.add("active");
	});
});

function removeActiveClass() {
	testimonials.forEach((testimonial) => {
		testimonial.classList.remove("active");
	});
}
