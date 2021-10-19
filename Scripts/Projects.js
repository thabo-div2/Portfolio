// // projects slide
// var slideIndex = 1;
// showSlides(slideIndex);

// // function plusSlides(n) {
// //   showSlides((slideIndex += n));
// // }

// // function currentSlide(n) {
// //   showSlides((slideIndex = n));
// // }

// // function showSlides(n) {
// //   var i;
// //   var slides = document.getElementsByClassName("mySlides");
// //   var dots = document.getElementsByClassName("dot");
// //   if (n > slides.length) {
// //     slideIndex = 1;
// //   }
// //   if (n < 1) {
// //     slideIndex = slides.length;
// //   }
// //   for (i = 0; i < slides.length; i++) {
// //     slides[i].style.display = "none";
// //   }
// //   for (i = 0; i < dots.length; i++) {
// //     dots[i].className = dots[i].className.replace(" active", "");
// //   }
// //   slides[slideIndex - 1].style.display = "block";
// //   dots[slideIndex - 1].className += " active";
// // }

let projects = [
	{
		imgURL: "./Images/Screenshot_2021-04-30 Testimonials.png",
		imgALT: "Testimonial",
		title: "Testimonial Exercise",
		techStack: "HTML/CSS",
		description: "An exercise showing how I used owl-carousel",
		githubURL: "https://github.com/thabo-div2/Testimonials_Sliders",
		liveProjectURL: "https://optimistic-bardeen-a13c08.netlify.app/",
	},
	{
		imgURL: "./Images/Screenshot_2021-05-12 Project Cards.png",
		imgALT: "Project Cards",
		title: "Project Cards Exercise",
		techStack: "HTML/CSS",
		description: "An exercise showing and styling my previous projects",
		githubURL: "https://github.com/thabo-div2/Project_Cards",
		liveProjectURL: "https://confident-aryabhata-78e10b.netlify.app",
	},
	{
		imgURL: "./Images/Screenshot_2021-04-30 Thabo's Contact Form.png",
		imgALT: "Contact",
		title: "Contact Form Exercise",
		techStack: "HTML/CSS",
		description: "An exercise that shows a simple contact page.",
		githubURL: "https://github.com/thabo-div2/Contact_Form",
		liveProjectURL: "https://jolly-shaw-42b983.netlify.app/",
	},
	{
		imgURL: "./Images/Screenshot_2021-04-30 My Timeline.png",
		imgALT: "Timeline",
		title: "Timeline Exercise",
		techStack: "HTML/CSS",
		description: "An exercise that shows a sample Timeline",
		githubURL: "https://github.com/thabo-div2/My_Timeline",
		liveProjectURL: "https://mystifying-hermann-44afd1.netlify.app/",
	},
	{
		imgURL: "./Images/Screenshot_2021-05-12 Sneaker Store(1).png",
		imgALT: "Sneaker",
		title: "Sneaker Website Exercise",
		techStack: "HTML/CSS",
		description: "A basic Sneaker Website",
		githubURL: "https://github.com/thabo-div2/Project_Cards",
		liveProjectURL: "https://hungry-hodgkin-a8c68d.netlify.app",
	},
	{
		imgURL: "./Images/Screenshot_2021-05-12 python_tkinter_exercise.png",
		imgALT: "Tkinter",
		title: "Add Two Numbers",
		techStack: "Python",
		description: "A simple tkinter programme that adds two numbers",
		githubURL:
			"https://github.com/thabo-div2/python_tkinter_exercise/blob/main/Exercise.py",
		liveProjectURL: "https://replit.com/@ThaSet/pythontkinterexercise#main.py",
	},
	{
		imgURL: "./Images/Screenshot_2021-05-12 BMI_Exercise-1.png",
		imgALT: "BMI",
		title: "BMI Calculator",
		techStack: "Python",
		description: "A tkinter exercise that calculates a persons BMI",
		githubURL: "https://github.com/thabo-div2/BMI_Exercise/blob/main/BMI.py",
		liveProjectURL: "https://replit.com/@ThaSet/BMIExercise-1#main.py",
	},
	{
		imgURL: "./Images/Weather_APp.png",
		imgALT: "Weather",
		title: "Weather App",
		techStack: "Python",
		description: "A app that shows the current weather",
		githubURL: "https://github.com/thabo-div2/Weather_App",
		liveProjectURL: "https://replit.com/@ThaSet/WeatherApp",
	},
	{
		imgURL: "./Images/Lotto_screen.png",
		imgALT: "Lotto",
		title: "Lotto App",
		techStack: "Python",
		description: "Python End of Module Project: Lotto",
		githubURL: "https://github.com/thabo-div2/python_EOMP",
		liveProjectURL: "https://replit.com/@ThaSet/pythonEOMP#main.py",
	},
	{
		imgURL: "./Images/JSCALC.png",
		imgALT: "Js Calculator",
		title: "JS Calculator",
		techStack: "JavaScript",
		description: "A app that uses javascript to calculate",
		githubURL: "https://github.com/thabo-div2/JS_Calculator",
		liveProjectURL: "https://objective-blackwell-b84d26.netlify.app",
	},
	{
		imgURL: "./Images/Poke.png",
		imgALT: "Poke",
		title: "PokeAPI JS",
		techStack: "JavaScript",
		description: "Fetch API exercise",
		githubURL: "https://github.com/thabo-div2/PokeApi",
		liveProjectURL: "https://pokeapi-thabo.netlify.app/",
	},
	{
		imgURL: "./Images/Screenshot 2021-10-06 140613.png",
		imgALT: "Calendar",
		title: "Calendar JS",
		techStack: "JavaScript",
		description: "A Basic JS Calendar",
		githubURL: "https://github.com/thabo-div2/Calendar_JS",
		liveProjectURL: "https://setsubi-calenedar.netlify.app/",
	},
	{
		imgURL: "./Images/Screenshot 2021-10-06 140651.png",
		imgALT: "Dentist",
		title: "Dentist Registry",
		techStack: "JavaScript",
		description: "Final End of Module Project with both my own API and design",
		githubURL: "https://github.com/thabo-div2/final_project_frontend",
		liveProjectURL: "https://setsubi-dentist-registry-11101.netlify.app/",
	},
];

function createCard(card) {
	let createdCard = `
  <div class="cards-container fade" techStack=${card.techStack}>
    <div class="cards-items">
      <img class="project-img" src="${card.imgURL}" alt="${card.imgALT}">
      <div class="project-overlay">
        <h3>${card.title}</h3>
        <h4>${card.techStack}</h4>
        <p>${card.description}</p>
        <div>
          <a href="${card.githubURL}" target="blank">
            <button>Github</button>
          </a>
          <a href="${card.liveProjectURL}" target="blank">
            <button>Live Link</button>
          </a>
        </div>
      </div>
    </div>
  </div>
  `;
	return createdCard;
}

function renderCards() {
	let projectContainer = document.querySelector(".project-cards");
	for (project of projects) {
		let card = createCard(project);
		projectContainer.innerHTML += card;
	}
}

renderCards();

function filterCards(category) {
	let cards = document.getElementsByClassName("cards-container");

	if (category === "All") {
		for (card of cards) {
			card.style.display = "block";
		}
		return;
	}

	for (card of cards) {
		console.log(card);
		card.style.display = "none";
	}

	let selectedCards = document.querySelectorAll(`[techStack = '${category}']`);

	for (card of selectedCards) {
		card.style.display = "block";
	}
}
