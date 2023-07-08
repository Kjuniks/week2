const testimonials = document.querySelectorAll(".testimonial");

let currentTestimonialIndex = 0;

function showTestimonial(index) {
  for (let i = 0; i < testimonials.length; i++) {
    testimonials[i].classList.remove("testimonial--active");
  }
  testimonials[index].classList.add("testimonial--active");
}

function nextTestimonial() {
  if (currentTestimonialIndex >= testimonials.length - 1) {
    currentTestimonialIndex = 0;
  } else {
    currentTestimonialIndex += 1;
  }
  showTestimonial(currentTestimonialIndex);
}

function prevTestimonial() {
  if (currentTestimonialIndex <= 0) {
    currentTestimonialIndex = testimonials.length - 1;
  } else {
    currentTestimonialIndex -= 1;
  }
  showTestimonial(currentTestimonialIndex);
}

//FAQ

const answers = document.querySelectorAll(".question__answer");
const arrows = document.querySelectorAll(".fa-angle-down");
function showAnswer(event) {
  const question = event.target.closest(".faq__question");
  const questions = Array.from(
    document.getElementsByClassName("faq__question")
  );
  const index = questions.indexOf(question);
  for (let i = 0; i < answers.length; i++) {
    answers[i].classList.remove("question__answer--visible");
    arrows[i].classList.remove("rotate");
  }
  answers[index].classList.add("question__answer--visible");
  arrows[index].classList.add("rotate");
}

//Section reveal

const sections = document.querySelectorAll("section");

function checkScroll() {
  sections.forEach((section, index) => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop <= window.innerHeight / 2) {
      section.classList.add("show");
    }
  });
}
window.addEventListener("scroll", checkScroll);
window.addEventListener("load", checkScroll);
