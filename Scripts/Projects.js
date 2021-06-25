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
    techStack: "",
    description:
      "An exercise that shows a simple contact page. Styled with Neumorphism",
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
    title: "Contact Form Exercise",
    techStack: "Python",
    description: "A tkinter exercise that calculates a persons BMI",
    githubURL: "https://github.com/thabo-div2/BMI_Exercise/blob/main/BMI.py",
    liveProjectURL: "https://replit.com/@ThaSet/BMIExercise-1#main.py",
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
          <a href="${card.githubURL}">
            <button>Github</button>
          </a>
          <a href="${card.liveProjectURL}>
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
