document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chat-box');
    const chatInput = document.getElementById('chat-input');

    const responses = {
        "hi": "Hello! ",
        "hello": "Hi there!",
        "hey": "Hey! ",
        "experience": `My experience includes:
        - **Arrhythmia Detection (PPG)** (Feb 2024 - Present): Working on a Vision Transformer model for PPG signals.
        - **SRIP Research Scholar - IITRAM, India** (May 2023 - Jul 2023): Implemented RL & ML on an Energy-Efficient Biplane Quadcopter.
        - **Contributor - Hacktoberfest** (Oct 2022): Contributed to multiple organizations in web development and documentation.`,
        "projects": `Here are some of my projects:
        - **Seattle Weather Prediction**: Conducted weather prediction for Seattle using historical data.
        - **Air Traffic Prediction and Dashboard Development**: Developed a comprehensive dashboard showcasing real-time flight details.
        - **Automation of Vehicles**: Worked on methods to avoid conflicts at un-signalized roads using RL and ML.
        - **Gesture Controlled Robot**: Built a car controlled using hand gestures.
        - **Indoor Localization Scheme**: Improved indoor localization techniques.
        - **Studek**: Working on a website to help students find scholarships and internships.`,
        "skills": `My skills include:
        - Python, Data Analysis, Machine Learning, Natural Language Processing (NLP): NLTK, spaCy, Transformers., Pandas, Scikit-learn, TensorFlow, PyTorch
        - Signal Processing, Reinforcement Learning, MATLAB, Django, SQL, HTML/CSS, Git, Linux, LaTeX`,
        "achievements": `Some of my achievements are:
        - Won URA-1 (only project to win this)
        - Top 5% of ML Engineers certified by pro5.ai
        - AWS Machine Learning Foundation 2022 - Udacity & AWS
        - CS 229 & CS 234 - Stanford
        - Volunteered at a State-Level Government Hackathon
        - Founder - Jan Hopes Foundation
        - MEXT Scholarship (Interview Cleared)`,
        "contact": `You can contact me at:
        - **Email**: kartikeya.kiran24@gmail.com
        - **Phone**: +91 9759221811
        - **LinkedIn**: [LinkedIn Profile](https://www.linkedin.com/in/ktwillcode/)
        - **GitHub**: [GitHub Profile](https://github.com/ktwillcode/)
        - **Website**: [Personal Website](https://ktwillcode.github.io/)`
    };

    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const userInput = chatInput.value.trim().toLowerCase();
            if (userInput) {
                appendMessage('user', userInput);
                chatInput.value = '';
                handleUserInput(userInput);
            }
        }
    });

    window.addPrompt = function(prompt) {
        appendMessage('user', prompt);
        handleUserInput(prompt);
    };

    function appendMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message');
        messageElement.classList.add(sender === 'bot' ? 'bot-message' : 'user-message');
        messageElement.innerHTML = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function handleUserInput(input) {
        let response = 'I did not understand that. You can ask me about my experience, projects, skills, achievements, or contact details.';
        if (responses[input]) {
            response = responses[input];
        }
        setTimeout(() => {
            appendMessage('bot', response);
        }, 500);
    }
});
