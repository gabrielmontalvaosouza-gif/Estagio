const $startGameButton = document.querySelector(".start-quiz")
const $questionContainer = document.querySelector(".question-container")
const $answersContainer = document.querySelector(".answers-container")
const $questionText = document.querySelector(".question")
const $nextQuestionButton = document.querySelector(".next-question")

// Bagulho da barra de progresso
const $currentQuestionSpan = document.getElementById("current-question")
const $totalQuestionsSpan = document.getElementById("total-questions")
const $questionCounter = document.querySelector(".question-counter")
const $progressContainer = document.querySelector(".progress-container")
const $progressBar = document.querySelector(".progress-bar")
$questionContainer.classList.add("fade-in");


$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

let currentQuestionsIndex = 0
let totalCorrect = 0

function startGame() {
    document.body.classList.remove("start")
    $startGameButton.classList.add("hide")
    $questionContainer.classList.remove("hide")
    document.getElementById("logo-small").classList.remove("hide")

    // Mostra contador e barra de progresso
    $questionCounter.classList.remove("hide")
    $progressContainer.classList.remove("hide")

    // Define total de perguntas
    $totalQuestionsSpan.textContent = questions.length
    $currentQuestionSpan.textContent = 1

    // Atualiza barra de progresso
    $progressBar.style.width = "0%"

    displayNextQuestion()
}

function displayNextQuestion() {
    resetState()
    if (questions.length == currentQuestionsIndex) {
        return finishGame()
    }

    // Atualiza contador
    $currentQuestionSpan.textContent = currentQuestionsIndex + 1

    // Atualiza barra de progresso
    const progresso = (currentQuestionsIndex / questions.length) * 100
    $progressBar.style.width = `${progresso}%`

    $questionText.textContent = questions[currentQuestionsIndex].question

    questions[currentQuestionsIndex].answers.forEach(answer => {
        const newAnswer = document.createElement("button")
        newAnswer.classList.add("button", "answer")
        newAnswer.textContent = answer.Text
        if (answer.correct) {
            newAnswer.dataset.correct = answer.correct
        }
        newAnswer.addEventListener("click", selectAnswer)
        $answersContainer.appendChild(newAnswer)
    })
}

function resetState() {
    while ($answersContainer.firstChild) {
        $answersContainer.removeChild($answersContainer.firstChild)
    }
   // document.body.removeAttribute("class");
    $nextQuestionButton.classList.add("hide");

    const feedbackDiv = document.querySelector(".feedback-image");
    feedbackDiv.innerHTML = "";
    feedbackDiv.classList.add("hide")
}

function selectAnswer(event) {
    const answerClicked = event.target;

    // Remove classes antigas antes de aplicar
    document.body.classList.remove("correct", "incorrect");

    if (answerClicked.dataset.correct) {
        document.body.classList.add("correct");
        totalCorrect++;
    } else {
        document.body.classList.add("incorrect");
    }

    document.querySelectorAll(".answer").forEach(button => {
        if (button.dataset.correct) {
            button.classList.add("correct");
        } else {
            button.classList.add("incorrect");
        }
        button.disabled = true;
    });

    const feedbackDiv = document.querySelector(".feedback-image");
    feedbackDiv.innerHTML = `<img src="${questions[currentQuestionsIndex].image}" alt="Imagem da resposta">`;
    feedbackDiv.classList.remove("hide");

    $nextQuestionButton.classList.remove("hide");
    currentQuestionsIndex++;
}


function finishGame() {
    // troca o fundo
    document.body.classList.remove("start");
    document.body.classList.add("finish");

    const totaQuestion = questions.length;
    const performace = Math.floor(totalCorrect * 100 / totaQuestion);

    let message = "";
    switch (true) {
        case (performace >= 90):
            message = "Excelente :)";
            break;
        case (performace >= 70):
            message = "Muito Bom :)";
            break;
        case (performace >= 50):
            message = "Bom";
            break;
        default:
            message = "Pode melhorar :(";
    }

    // usa apenas o container já existente, sem criar outro
    $questionContainer.innerHTML = `
        <p class="final-message">
            Você acertou ${totalCorrect} de ${totaQuestion} questões!<br>
            <span>Resultado: ${message}</span>
        </p>
        <button onclick="window.location.reload()" class="button">
            Refazer teste
        </button>
    `;

    $questionContainer.classList.remove("hide");
    $progressBar.style.width = "100%";
}



function updateCounter() {
    questionCounter.textContent = `Pergunta ${currentQuestionIndex + 1} de ${questions.length}`;
    const progress = ((currentQuestionIndex) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
}


const questions = [
    {
        question: "Qual escritor mineiro descreveu o Cerrado como 'o sertão é do tamanho do mundo'?",
        answers: [
            { Text: "João Guimarães Rosa", correct: true },
            { Text: "Monteiro Lobato", correct: false },
            { Text: "Euclides da Cunha", correct: false },
            { Text: "Machado de Assis", correct: false },
        ],
        image: "ImagensPerguntas/img.JPG"

    },
    {
        question: "Em qual obra de Monteiro Lobato aparecem personagens que exploram a fauna e flora brasileira?",
        answers: [
            { Text: "Sítio do Picapau Amarelo", correct: true },
            { Text: "O Tronco do Ipê", correct: false },
            { Text: "Iracema", correct: false },
            { Text: "Memórias Póstumas de Brás Cubas", correct: false },
        ],
        image: "ImagensPerguntas/img2.JPG" 

    },
    {
        question: "Qual fruto típico do Cerrado é conhecido por seu aroma forte e muito usado na culinária goiana?",
        answers: [
            { Text: "Baru", correct: false },
            { Text: "Pequi", correct: true },
            { Text: "Buriti", correct: false },
            { Text: "Araticum", correct: false },
        ],
        image: "ImagensPerguntas/img3.JPG" 


    },
    {
        question: "Qual animal é símbolo do Cerrado e é conhecido pelo canto alto e colorido?",
        answers: [
            { Text: "Lobo-guará", correct: false },
            { Text: "Tamanduá-bandeira", correct: false },
            { Text: "Arara-azul", correct: true },
            { Text: "Tatu-canastra", correct: false },
        ],
        image: "ImagensPerguntas/imagem4.JPG" 

    },
    {
        question: "Qual é a principal ameaça ao Cerrado atualmente?",
        answers: [
            { Text: "Turismo sustentável", correct: false },
            { Text: "Desmatamento e expansão agrícola", correct: true },
            { Text: "Pesca artesanal", correct: false },
            { Text: "Ecoturismo", correct: false },
        ],
        image: "ImagensPerguntas/img5.JPG" 

    },
    {
        question: "Qual festa tradicional goiana celebra a cultura e os produtos típicos do Cerrado?",
        answers: [
            { Text: "Festa do Pequi", correct: true },
            { Text: "Carnaval", correct: false },
            { Text: "Festa Junina", correct: false },
            { Text: "Oktoberfest", correct: false },
        ],
        image: "ImagensPerguntas/img6.JPG" 

    },
    {
        question: "Qual animal do Cerrado é conhecido por suas longas pernas e pelo pelo avermelhado?",
        answers: [
            { Text: "Lobo-guará", correct: true },
            { Text: "Tamanduá-bandeira", correct: false },
            { Text: "Onça-pintada", correct: false },
            { Text: "Capivara", correct: false },
        ],
        image: "ImagensPerguntas/img7.JPG" 

    },
    {
        question: "Qual árvore é característica do Cerrado, com tronco tortuoso e flores amarelas?",
        answers: [
            { Text: "Ipê-amarelo", correct: true },
            { Text: "Pau-brasil", correct: false },
            { Text: "Mangueira", correct: false },
            { Text: "Jacarandá", correct: false },
        ],
        image: "ImagensPerguntas/img8.JPG"

    },
    {
        question: "Qual planta do Cerrado é usada tradicionalmente para tratar inflamações e problemas digestivos?",
        answers: [
            { Text: "Pequi", correct: false },
            { Text: "Barbatimão", correct: true },
            { Text: "Buriti", correct: false },
            { Text: "Araticum", correct: false },
        ],
        image: "ImagensPerguntas/img9.JPG" 

    },
    {
        question: "O Cerrado é considerado um hotspot de biodiversidade porque:",
        answers: [
            { Text: "Possui poucas espécies", correct: false },
            { Text: "Possui muitas espécies endêmicas e ameaçadas", correct: true },
            { Text: "É totalmente protegido", correct: false },
            { Text: "Tem apenas árvores e arbustos", correct: false },
        ],
        image: "ImagensPerguntas/img10.JPG"

    },
    {
        question: "Qual é o maior roedor do mundo, que habita áreas alagadas do Cerrado?",
        answers: [
            { Text: "Capivara", correct: true },
            { Text: "Rato-do-mato", correct: false },
            { Text: "Cutia", correct: false },
            { Text: "Mocó", correct: false },
        ],
        image: "ImagensPerguntas/img11.JPG" 

    },
    {
        question: "Qual fruto do Cerrado é conhecido por sua polpa vermelha e rica em vitamina C?",
        answers: [
            { Text: "Pequi", correct: false },
            { Text: "Araticum", correct: true },
            { Text: "Baru", correct: false },
            { Text: "Bacaba", correct: false },
        ],
        image: "ImagensPerguntas/img12.JPG"

    },
    {
        question: "Qual é o papel das queimadas naturais no Cerrado?",
        answers: [
            { Text: "Destruir todas as plantas", correct: false },
            { Text: "Manter o equilíbrio ecológico", correct: true },
            { Text: "Aumentar a poluição", correct: false },
            { Text: "Não existe efeito", correct: false },
        ],
        image: "ImagensPerguntas/img13.JPG"

    },
    {
        question: "Qual instrumento musical tradicional é associado às festas e cantorias do Cerrado?",
        answers: [
            { Text: "Viola caipira", correct: true },
            { Text: "Violino", correct: false },
            { Text: "Piano", correct: false },
            { Text: "Flauta transversal", correct: false },
        ],
        image: "ImagensPerguntas/img 14.JPG"

    },
    {
        question: "Qual é a principal ação de conservação do Cerrado atualmente?",
        answers: [
            { Text: "Expansão agrícola", correct: false },
            { Text: "Criação de unidades de conservação", correct: true },
            { Text: "Urbanização de áreas protegidas", correct: false },
            { Text: "Mineração intensiva", correct: false },
        ],
        image: "ImagensPerguntas/img15.JPG"

    }
];
