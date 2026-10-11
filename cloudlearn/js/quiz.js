/**
 * CloudLearn – Cloud Computing Academy
 * Interactive Quiz Module (quiz.js)
 * Features 15 comprehensive multiple-choice questions, real-time validation,
 * detailed explanations, progress tracking, score calculation, category breakdowns,
 * and complete review mode.
 */

const quizQuestions = [
  {
    id: 1,
    category: "Fundamentals",
    question: "According to the NIST definition, which of the following is considered an essential characteristic of cloud computing?",
    options: [
      "Physical access to server hardware racks for client engineers",
      "On-demand self-service without requiring human interaction with the service provider",
      "Mandatory long-term multi-year hardware leasing contracts",
      "Manual provisioning of physical networking cables"
    ],
    correctIndex: 1,
    explanation: "On-demand self-service is one of NIST's five essential characteristics of cloud computing. Consumers can unilaterally provision computing capabilities (such as server time and network storage) automatically as needed without human intervention from the provider."
  },
  {
    id: 2,
    category: "Service Models",
    question: "In Infrastructure as a Service (IaaS), which of the following is the cloud customer typically responsible for managing?",
    options: [
      "Physical data center cooling, power, and physical security",
      "Host virtualization hypervisor hardware maintenance",
      "Operating system configuration, application software, and security patches",
      "Underlying physical optical network cables between availability zones"
    ],
    correctIndex: 2,
    explanation: "Under the IaaS model, the cloud provider manages physical hardware, facilities, and the hypervisor layer. The customer manages the guest operating system, runtime, middleware, data, and application software updates."
  },
  {
    id: 3,
    category: "Service Models",
    question: "Which cloud service model is best suited for developers who want to deploy web applications without managing the underlying operating system or server configuration?",
    options: [
      "Infrastructure as a Service (IaaS)",
      "Platform as a Service (PaaS)",
      "Bare Metal as a Service (BMaaS)",
      "Hardware as a Service (HaaS)"
    ],
    correctIndex: 1,
    explanation: "Platform as a Service (PaaS), such as AWS Elastic Beanstalk or Azure App Service, provides a managed runtime environment where developers can upload code directly while the provider automatically handles server provisioning, OS patching, and scaling."
  },
  {
    id: 4,
    category: "Service Models",
    question: "Which of the following represents Software as a Service (SaaS)?",
    options: [
      "Amazon EC2 virtual instances",
      "Google Cloud Storage buckets",
      "Google Workspace (Gmail, Docs) or Microsoft 365",
      "Configuring a raw Linux kernel on a bare metal host"
    ],
    correctIndex: 2,
    explanation: "Google Workspace and Microsoft 365 are classic SaaS applications. End users consume the software over a web browser, and the cloud provider manages everything from the infrastructure to the application code itself."
  },
  {
    id: 5,
    category: "Deployment Models",
    question: "What is a 'Hybrid Cloud' architecture?",
    options: [
      "A cloud environment combining on-premises private infrastructure with one or more public cloud services",
      "A single cloud vendor operating two data centers within the same city",
      "An air-gapped military mainframe with no internet connectivity",
      "Running applications solely on consumer smartphones and tablets"
    ],
    correctIndex: 0,
    explanation: "A hybrid cloud combines on-premises private infrastructure (or private cloud) with public cloud services, allowing data and applications to be shared and orchestrated across both environments securely."
  },
  {
    id: 6,
    category: "Security & IAM",
    question: "Under the Shared Responsibility Model, which responsibility falls squarely on the CUSTOMER across all cloud models?",
    options: [
      "Securing physical data center perimeters and access badges",
      "Customer data classification, access credentials, and IAM authorization policies",
      "Disposing of decommissioned server hard drives securely",
      "Cooling system airflow management in provider server rooms"
    ],
    correctIndex: 1,
    explanation: "In all cloud service models (IaaS, PaaS, SaaS), data security, user identity, and access management (IAM) remain the customer's responsibility. The provider secures the 'cloud itself', but the customer secures what they put 'in the cloud'."
  },
  {
    id: 7,
    category: "Architecture",
    question: "What is the key technical difference between a Virtual Machine (VM) and a Container (e.g., Docker)?",
    options: [
      "Containers require their own dedicated guest operating system kernel per instance",
      "VMs share the host OS kernel, while containers emulate full hardware",
      "VMs virtualize hardware and include a full guest OS, whereas containers share the host OS kernel and package application dependencies",
      "Containers can only run on physical mainframes, not in the cloud"
    ],
    correctIndex: 2,
    explanation: "Virtual Machines use a hypervisor to virtualize physical hardware and each require their own guest operating system. Containers share the host operating system's kernel and isolate at the user-space level, making them lightweight and faster to start."
  },
  {
    id: 8,
    category: "Storage & Databases",
    question: "Which storage type is optimized for unstructured data (such as photos, videos, backups, and static website files) accessible via REST APIs over HTTP/HTTPS?",
    options: [
      "Block Storage (e.g., AWS EBS, Azure Managed Disk)",
      "Object Storage (e.g., AWS S3, Azure Blob, Google Cloud Storage)",
      "Local Non-Volatile RAM cache",
      "Direct-Attached Magnetic Tape Storage"
    ],
    correctIndex: 1,
    explanation: "Object Storage stores data as objects with unique identifiers and metadata. It scales virtually infinitely and is accessed over HTTP/HTTPS via standard RESTful APIs, making it ideal for media, backups, and static web assets."
  },
  {
    id: 9,
    category: "Networking",
    question: "What is the primary function of a Virtual Private Cloud (VPC) or Virtual Network (VNet)?",
    options: [
      "To mine cryptocurrencies on unused virtual machines",
      "To provide an isolated, private virtual network where users can define subnets, IP ranges, route tables, and gateways",
      "To replace the physical worldwide internet backbone entirely",
      "To automatically purchase domain names on third-party registrars"
    ],
    correctIndex: 1,
    explanation: "A VPC (or VNet in Azure) is a logically isolated virtual network dedicated to your cloud account. It gives you full control over your virtual networking environment, including selection of IP address ranges, subnets, and configuration of route tables and gateways."
  },
  {
    id: 10,
    category: "Architecture",
    question: "What is the difference between 'Scalability' and 'Elasticity' in cloud computing?",
    options: [
      "Scalability is the ability to grow capacity to handle sustained workload increases, while elasticity is the ability to automatically expand and contract resources dynamically as demand fluctuates",
      "Scalability only applies to storage, while elasticity only applies to network bandwidth",
      "Elasticity requires manual hardware replacement, while scalability is purely software-based",
      "There is no difference; they are exact technical synonyms"
    ],
    correctIndex: 0,
    explanation: "Scalability refers to the system's capacity to accommodate larger workloads over time (often planned). Elasticity refers to rapid, automated matching of resources to current demand in real time (e.g., auto-scaling web servers up during a flash sale and immediately scaling down afterwards)."
  },
  {
    id: 11,
    category: "Architecture",
    question: "In cloud infrastructure, what is an 'Availability Zone' (AZ)?",
    options: [
      "A software licensing category for open-source tools",
      "One or more discrete, physically separated data centers with independent power, cooling, and networking within a geographic Region",
      "A time zone boundary for scheduled automated backups",
      "The coverage area of an individual Wi-Fi router"
    ],
    correctIndex: 1,
    explanation: "An Availability Zone (AZ) consists of one or more physical data centers with independent redundant power, cooling, and networking located within a Region. Deploying across multiple AZs provides fault tolerance against data center outages."
  },
  {
    id: 12,
    category: "Architecture",
    question: "Which of the following is a core characteristic of Serverless Computing (Function as a Service - FaaS)?",
    options: [
      "Users must keep a server running 24/7 and pay for idle compute capacity",
      "Manual installation of Linux patches every weekend",
      "Event-driven execution where code runs only when triggered, and billing is strictly based on execution time and resources used",
      "Physical server racks located in the customer's own basement"
    ],
    correctIndex: 2,
    explanation: "In serverless computing (like AWS Lambda or Google Cloud Functions), developers write functions that execute in response to events. You do not manage or pay for idle servers; you are billed strictly for the execution duration and memory consumed while the function runs."
  },
  {
    id: 13,
    category: "Operations & Cost",
    question: "How does cloud computing shift financial expenditures compared to traditional on-premises data centers?",
    options: [
      "From OpEx (operational expenses) to large upfront CapEx (capital expenses)",
      "From CapEx (heavy upfront capital purchases of hardware) to OpEx (pay-as-you-go operational expenses)",
      "It completely eliminates all IT expenses permanently",
      "It forces companies to pay only in fixed physical cash currencies"
    ],
    correctIndex: 1,
    explanation: "Traditional data centers require high upfront capital expenditures (CapEx) to buy servers, storage arrays, and real estate. Cloud computing shifts this model to operational expenditures (OpEx), where organizations pay variable fees based on actual consumption."
  },
  {
    id: 14,
    category: "Cloud Providers",
    question: "Which was the first commercially successful modern public cloud provider, launched by Amazon in 2006?",
    options: [
      "Amazon Web Services (AWS)",
      "Microsoft Azure",
      "Google Cloud Platform (GCP)",
      "IBM Cloud"
    ],
    correctIndex: 0,
    explanation: "Amazon Web Services (AWS) pioneered modern commercial public cloud computing when it launched Simple Storage Service (S3) and Elastic Compute Cloud (EC2) in 2006."
  },
  {
    id: 15,
    category: "Cloud Providers",
    question: "Google Cloud Platform (GCP) is particularly recognized for originating which major open-source container orchestration technology?",
    options: [
      "OpenStack",
      "Kubernetes (K8s, evolved from Google Borg)",
      "Apache Tomcat",
      "VMware vSphere"
    ],
    correctIndex: 1,
    explanation: "Google developed Borg internally to manage billions of containers each week, and open-sourced Kubernetes in 2014 based on lessons learned from Borg. Google Cloud's GKE (Google Kubernetes Engine) remains an industry-leading managed Kubernetes service."
  }
];

document.addEventListener('DOMContentLoaded', () => {
  initQuiz();
});

function initQuiz() {
  let currentQuestionIndex = 0;
  let userAnswers = new Array(quizQuestions.length).fill(null);
  let score = 0;
  let hasAnsweredCurrent = false;

  // DOM Elements
  const quizCard = document.getElementById('quizCard');
  const resultsCard = document.getElementById('resultsCard');
  const reviewSection = document.getElementById('reviewSection');

  const progressFill = document.getElementById('progressFill');
  const currentQNum = document.getElementById('currentQNum');
  const totalQNum = document.getElementById('totalQNum');
  const categoryBadge = document.getElementById('categoryBadge');
  const currentScoreDisplay = document.getElementById('currentScoreDisplay');

  const questionText = document.getElementById('questionText');
  const optionsContainer = document.getElementById('optionsContainer');
  const explanationBox = document.getElementById('explanationBox');
  const nextBtn = document.getElementById('nextBtn');
  const restartBtn = document.getElementById('restartBtn');
  const reviewToggleBtn = document.getElementById('reviewToggleBtn');

  if (!quizCard || !questionText) return;

  totalQNum.textContent = quizQuestions.length;

  function loadQuestion(index) {
    hasAnsweredCurrent = false;
    const q = quizQuestions[index];

    // Update Progress
    const progressPercent = ((index) / quizQuestions.length) * 100;
    progressFill.style.width = `${progressPercent}%`;
    currentQNum.textContent = index + 1;
    categoryBadge.textContent = q.category;
    currentScoreDisplay.textContent = score;

    // Reset UI
    questionText.textContent = q.question;
    optionsContainer.innerHTML = '';
    explanationBox.classList.remove('visible');
    explanationBox.innerHTML = '';
    nextBtn.disabled = true;
    nextBtn.textContent = index === quizQuestions.length - 1 ? 'Finish & See Results' : 'Next Question';

    // Render Options
    const letters = ['A', 'B', 'C', 'D'];
    q.options.forEach((optText, optIndex) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'quiz-option-btn';
      btn.setAttribute('data-option-index', optIndex);

      btn.innerHTML = `
        <span class="option-letter">${letters[optIndex]}</span>
        <span class="option-text">${optText}</span>
      `;

      btn.addEventListener('click', () => handleSelectOption(optIndex));
      optionsContainer.appendChild(btn);
    });
  }

  function handleSelectOption(selectedIndex) {
    if (hasAnsweredCurrent) return;
    hasAnsweredCurrent = true;

    const q = quizQuestions[currentQuestionIndex];
    userAnswers[currentQuestionIndex] = selectedIndex;
    const isCorrect = selectedIndex === q.correctIndex;

    if (isCorrect) {
      score++;
      currentScoreDisplay.textContent = score;
    }

    // Update option buttons UI
    const optionButtons = optionsContainer.querySelectorAll('.quiz-option-btn');
    optionButtons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === q.correctIndex) {
        btn.classList.add('correct');
      } else if (idx === selectedIndex) {
        btn.classList.add('incorrect');
      }
    });

    // Show Explanation
    explanationBox.className = `quiz-explanation-box visible`;
    explanationBox.innerHTML = `
      <div class="explanation-title ${isCorrect ? 'correct' : 'incorrect'}">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          ${isCorrect 
            ? '<polyline points="20 6 9 17 4 12"></polyline>' 
            : '<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>'}
        </svg>
        ${isCorrect ? 'Correct!' : 'Incorrect'}
      </div>
      <div class="explanation-text">${q.explanation}</div>
    `;

    nextBtn.disabled = false;
    nextBtn.focus();
  }

  // Next / Finish Button Handler
  nextBtn.addEventListener('click', () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      currentQuestionIndex++;
      loadQuestion(currentQuestionIndex);
    } else {
      showResults();
    }
  });

  // Show Results View
  function showResults() {
    progressFill.style.width = '100%';
    quizCard.style.display = 'none';
    resultsCard.classList.add('visible');

    const finalPercent = Math.round((score / quizQuestions.length) * 100);
    const scoreNumEl = document.getElementById('finalScoreNumber');
    const scoreTitleEl = document.getElementById('resultsTitle');
    const scoreFeedbackEl = document.getElementById('resultsFeedback');

    if (scoreNumEl) scoreNumEl.textContent = `${finalPercent}%`;

    let title = '';
    let feedback = '';

    if (finalPercent >= 85) {
      title = 'Outstanding Cloud Mastery! 🌟';
      feedback = `You scored ${score} out of ${quizQuestions.length}. You have an exceptional grasp of cloud computing fundamentals, architectures, service models, and provider platforms.`;
    } else if (finalPercent >= 65) {
      title = 'Great Cloud Knowledge! 🚀';
      feedback = `You scored ${score} out of ${quizQuestions.length}. You understand the core principles well. Reviewing the few questions you missed will solidify your expertise.`;
    } else {
      title = 'Good Start – Keep Learning! 📚';
      feedback = `You scored ${score} out of ${quizQuestions.length}. Cloud computing has many nuanced concepts. Check out our Learn section and project guides to strengthen your skills.`;
    }

    if (scoreTitleEl) scoreTitleEl.textContent = title;
    if (scoreFeedbackEl) scoreFeedbackEl.textContent = feedback;

    // Render Category Breakdown
    renderCategoryBreakdown();
    renderReviewList();

    // Scroll to results card
    resultsCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function renderCategoryBreakdown() {
    const breakdownList = document.getElementById('categoryBreakdownList');
    if (!breakdownList) return;

    const categoryStats = {};
    quizQuestions.forEach((q, idx) => {
      if (!categoryStats[q.category]) {
        categoryStats[q.category] = { total: 0, correct: 0 };
      }
      categoryStats[q.category].total++;
      if (userAnswers[idx] === q.correctIndex) {
        categoryStats[q.category].correct++;
      }
    });

    breakdownList.innerHTML = '';
    Object.keys(categoryStats).forEach(cat => {
      const { total, correct } = categoryStats[cat];
      const pct = Math.round((correct / total) * 100);
      const row = document.createElement('div');
      row.className = 'breakdown-item';
      row.innerHTML = `
        <span style="font-weight:600; color:var(--color-navy-dark);">${cat}</span>
        <span style="color:var(--color-text-muted);">${correct} / ${total} (${pct}%)</span>
      `;
      breakdownList.appendChild(row);
    });
  }

  function renderReviewList() {
    const reviewListContainer = document.getElementById('reviewListContainer');
    if (!reviewListContainer) return;

    reviewListContainer.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];

    quizQuestions.forEach((q, idx) => {
      const userChoice = userAnswers[idx];
      const isCorrect = userChoice === q.correctIndex;

      const item = document.createElement('div');
      item.className = `review-item ${isCorrect ? 'was-correct' : 'was-incorrect'}`;
      item.innerHTML = `
        <div class="review-question-title">
          ${idx + 1}. ${q.question}
        </div>
        <div class="review-answer-line" style="color: ${isCorrect ? 'var(--color-success)' : 'var(--color-danger)'}; font-weight:600;">
          Your Answer: ${userChoice !== null ? `${letters[userChoice]}. ${q.options[userChoice]}` : 'Unanswered'} 
          ${isCorrect ? '✓ Correct' : '✗ Incorrect'}
        </div>
        ${!isCorrect ? `
          <div class="review-answer-line" style="color: var(--color-success); font-weight:600;">
            Correct Answer: ${letters[q.correctIndex]}. ${q.options[q.correctIndex]}
          </div>
        ` : ''}
        <div style="font-size:0.875rem; color:var(--color-text-muted); margin-top:0.5rem; background-color:var(--color-bg-alt); padding:0.6rem 0.8rem; border-radius:var(--border-radius-sm);">
          <strong>Explanation:</strong> ${q.explanation}
        </div>
      `;
      reviewListContainer.appendChild(item);
    });
  }

  // Toggle Review
  if (reviewToggleBtn) {
    reviewToggleBtn.addEventListener('click', () => {
      const isVisible = reviewSection.classList.contains('visible');
      if (isVisible) {
        reviewSection.classList.remove('visible');
        reviewToggleBtn.textContent = 'Review All Questions & Answers';
      } else {
        reviewSection.classList.add('visible');
        reviewToggleBtn.textContent = 'Hide Question Review';
        reviewSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Restart Quiz
  if (restartBtn) {
    restartBtn.addEventListener('click', () => {
      currentQuestionIndex = 0;
      userAnswers = new Array(quizQuestions.length).fill(null);
      score = 0;
      resultsCard.classList.remove('visible');
      reviewSection.classList.remove('visible');
      quizCard.style.display = 'block';
      loadQuestion(0);
      quizCard.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Initialize first question
  loadQuestion(0);
}
