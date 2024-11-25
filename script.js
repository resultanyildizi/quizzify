document.addEventListener("DOMContentLoaded", () => {
    // Parse the URL to determine the quiz ID
    const queryParams = new URLSearchParams(window.location.search);
    const quizId = queryParams.get('quiz'); // e.g., 'quiz1'

    // Dynamically load the quiz data script
    if (quizId) {
        const script = document.createElement('script');
        script.src = `${quizId}.js`; // Dynamically set the script file, e.g., quiz1.js
        script.onload = () => {
            if (typeof examData !== 'undefined') {
                setTitle(examData.title);
                initializeQuiz(examData);
            } else {
                console.error(`Quiz data for ${quizId} is not defined.`);
            }
        };
        script.onerror = () => {
            console.error(`Failed to load the quiz data script: ${quizId}.js`);
        };
        document.body.appendChild(script);
    } else {
        console.error('No quiz ID specified in the URL.');
    }
    
    // Set the title of the quiz
    function setTitle(title) {
      const titleContainer = document.getElementById('quiz-title');
      titleContainer.textContent = title
    }

    // Initialize the quiz after loading the exam data
    function initializeQuiz(examData) {
        const quizContainer = document.getElementById('quiz-container');

        // Render the questions
        examData.questions.forEach((q, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.classList.add('question-container');

            const questionTitle = document.createElement('h2');
            questionTitle.textContent = `${index + 1}. ${q.question}`;
            questionDiv.appendChild(questionTitle);

            const choicesList = document.createElement('ul');
            choicesList.classList.add('choices');

            Object.entries(q.choices).forEach(([key, value]) => {
                const choiceItem = document.createElement('li');
                choiceItem.classList.add('choice');
                choiceItem.textContent = value;
                choiceItem.dataset.choiceKey = key;

                // Add click event listener for selecting choices
                choiceItem.addEventListener('click', () => {
                    // Unhighlight all choices for this question
                    const allChoices = choicesList.querySelectorAll('.choice');
                    allChoices.forEach(choice => choice.classList.remove('selected'));

                    // Highlight the clicked choice
                    choiceItem.classList.add('selected');
                });

                choicesList.appendChild(choiceItem);
            });

            questionDiv.appendChild(choicesList);
            quizContainer.appendChild(questionDiv);
        });

        // Handle the submission logic
        document.getElementById('submit-btn').addEventListener('click', () => {
            let score = 0;
            const questions = quizContainer.querySelectorAll('.question-container');
            questions.forEach((questionDiv, index) => {
                const selectedChoice = questionDiv.querySelector('.choice.selected');
                const correctAnswer = examData.questions[index].answer;
                const allChoices = questionDiv.querySelectorAll('.choice');

                // Reset styles for all choices
                allChoices.forEach(choice => {
                    choice.classList.remove('correct', 'incorrect');
                });

                if (selectedChoice) {
                    // Highlight the correct answer in green
                    const correctChoice = Array.from(allChoices).find(choice => choice.dataset.choiceKey === correctAnswer);
                    if (correctChoice) {
                        correctChoice.classList.add('correct');
                    }

                    // Highlight incorrect choice in red if the selected answer is wrong
                    if (selectedChoice.dataset.choiceKey !== correctAnswer) {
                        selectedChoice.classList.add('incorrect');
                    } else {
                        score++;
                    }
                }
            });

            // Display the score to the user
            alert(`You scored ${score} out of ${examData.questions.length}`);
        });
    }
});

