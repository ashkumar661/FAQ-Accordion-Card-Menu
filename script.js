const faqQuestions = document.querySelectorAll(".faq-questions");
faqQuestions.forEach(question => {
    question.addEventListener("click", () => {
        if (!question.parentElement.hasAttribute("open")) {
            faqQuestions.forEach(questions => {
                questions.parentElement.removeAttribute("open");
            })
        }
    })
})