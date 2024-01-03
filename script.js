const quizData = [
    {
      question: "What is the best university in Thailand",
      options: ["Kasetsart", "Rayaphat", "SBU", "MT"],
      correctAnswer: "Kasetsart"
    },
    {
      question: "ภาษาโปรแกรมใดถือว่าเป็น 'ภาษาแห่งเว็บไซต์'?",
      options: ["Java", "Python", "JavaScript", "C++"],
      correctAnswer: "JavaScript"
    },
    {
        question: "เมืองหลวงของประเทศไทยคือที่ไหน",
        options: ["กรุงเทพ", "เพชรบูรณ์", "แพร่", "ชลบุรี"],
        correctAnswer: "กรุงเทพ"
    },
    {
        question: "HTML ย่อมาจากอะไร",
        options: ["Hypertext Markup Language", "Hyper Transfer Markup Language", "Hyper Transition Mount Language", "Hype Trading Market Language"],
        correctAnswer: "Hypertext Markup Language"
    },
    {
        question: "คำสั่งใดใน CSS ที่ทำหน้าที่ควบคุมช่องว่างระหว่าง Elements",
        options: ["align", "spacing", "margin", "padding"],
        correctAnswer: "margin"
    },
    // can add คำถาม
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuestion() {
    const questionContainer = document.getElementById("question-container");
    const optionsContainer = document.getElementById("options-container");
  
    questionContainer.innerText = quizData[currentQuestion].question;
    optionsContainer.innerHTML  = "";
  
    quizData[currentQuestion].options.forEach((option) => {
      const button = document.createElement("button");
      button.innerText = option;
      button.onclick = () => selectAnswer(option);
      optionsContainer.appendChild(button);
    });
  }
  
  function selectAnswer(selectedOption) {
    const feedbackContainer = document.getElementById("feedback-container");
  
    if (selectedOption === quizData[currentQuestion].correctAnswer) {
      feedbackContainer.innerText = "ถูกต้อง!";
      score++;
    } else {
      feedbackContainer.innerText = "ผิด! คำตอบที่ถูกคือ: " + quizData[currentQuestion].correctAnswer;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      displayScore();
    }
  }
  
  function displayScore() {
    const scoreContainer = document.getElementById("score-container");
    scoreContainer.innerText = "คะแนนที่คุณได้: " + score + " จาก " + quizData.length;
  }
  
  // โหลดคำถาม
  loadQuestion();
  