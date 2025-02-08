document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});//use to toggle menu


    document.getElementById('next').addEventListener('click', function () {
    document.querySelector('.slider').scrollBy({ left: 320, behavior: 'smooth' });
        });
        document.getElementById('prev').addEventListener('click', function () {
            document.querySelector('.slider').scrollBy({ left: -320, behavior: 'smooth' });
        });
      //slider of protfolio

      document.getElementById('feedback-form').addEventListener('submit', function(event) {
        event.preventDefault();
        document.getElementById('form-message').classList.remove('hidden');
    });//contact feedback form


 // Questions and Answers
 const qaData = [
    { question: "What services do you offer?", answer: "We provide web development, SEO, and UI/UX design services. Thank you!" },
    { question: "How can I contact support?", answer: "You can reach us via email at support@example.com or call us at 123-456-7890. Thank you!" },
    { question: "Do you offer free consultations?", answer: "Yes! We offer a 30-minute free consultation. Book via our website. Thank you!" }
];

// Select elements
const chatbotToggle = document.getElementById("chatbotToggle");
const chatbot = document.getElementById("chatbot");
const closeChatbot = document.getElementById("closeChatbot");
const chatQuestions = document.getElementById("chatQuestions");
const chatbox = document.getElementById("chatbox");

// Show/Hide Chatbot
chatbotToggle.addEventListener("click", () => {
    chatbot.classList.toggle("hidden");
});

closeChatbot.addEventListener("click", () => {
    chatbot.classList.add("hidden");
});

// Generate Questions
qaData.forEach((item) => {
    const button = document.createElement("button");
    button.className = "block w-full text-left bg-gray-200 text-gray-800 px-3 py-2 rounded hover:bg-gray-300";
    button.innerText = item.question;
    button.addEventListener("click", () => {
        // Append Question
        const userMsg = document.createElement("div");
        userMsg.className = "text-right text-white bg-black p-2 rounded max-w-xs ml-auto";
        userMsg.innerText = item.question;
        chatbox.appendChild(userMsg);

        // Append Answer
        setTimeout(() => {
            const botMsg = document.createElement("div");
            botMsg.className = "text-left text-black bg-yellow-300 p-2 rounded max-w-xs";
            botMsg.innerText = item.answer;
            chatbox.appendChild(botMsg);
            
            // Auto-scroll to the latest message
            chatbox.scrollTop = chatbox.scrollHeight;
        }, 500);
    });
    chatQuestions.appendChild(button);
});

    // Get the button
    const scrollToTopBtn = document.getElementById("scrollToTop");

    // Show/hide button on scroll
    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.opacity = "1";
        } else {
            scrollToTopBtn.style.opacity = "0";
        }
    });

    // Scroll to top when clicked
    scrollToTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
