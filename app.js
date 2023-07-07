const testimonials = document.querySelectorAll(".testimonial");

let counter = 0;

function showT(index) {
  for (let i = 0; i < testimonials.length; i++) {
    testimonials[i].classList.remove("testimonial--active");
  }
  testimonials[index].classList.add("testimonial--active");
}

function nextTestimonial() {
  if (counter >= testimonials.length - 1) {
    counter = 0;
  } else {
    counter += 1;
  }
  showT(counter);
}

function prevTestimonial() {
  if (counter <= 0) {
    counter = testimonials.length - 1;
  } else {
    counter -= 1;
  }
  showT(counter);
  console.log(counter);
}

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
