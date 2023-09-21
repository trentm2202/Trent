// Define an array of possible responses
const chatbotResponses = [
  "How can I assist you today?",
  "Ask me anything!",
  "I'm here to help. What's on your mind?",
  "Hello there! What can I do for you?",
];

// Function to add a user message to the chat log
function addUserMessage(message) {
  const chatLog = document.getElementById("chat-log");
  const userMessage = document.createElement("div");
  userMessage.className = "user-message";
  userMessage.textContent = "You: " + message;
  chatLog.appendChild(userMessage);
}

// Function to add a chatbot message to the chat log with a random response
function addChatbotMessage() {
  const chatLog = document.getElementById("chat-log");
  const chatbotMessage = document.createElement("div");
  chatbotMessage.className = "chatbot-message";

  // Select a random response from the array
  const randomResponse = chatbotResponses[Math.floor(Math.random() * chatbotResponses.length)];

  chatbotMessage.textContent = "Joe: " + randomResponse; // Use "Joe" as the chatbot's name
  chatLog.appendChild(chatbotMessage);
}

// Function to handle user input and chatbot responses
function handleUserInput() {
  const userInput = document.getElementById("user-input");
  const message = userInput.value.trim();

  if (message !== "") {
    addUserMessage(message);
    // Call the addChatbotMessage function to get a random response from Joe
    addChatbotMessage();

    userInput.value = "";
  }
}

// Event listener for the send button
const sendButton = document.getElementById("send-button");
sendButton.addEventListener("click", handleUserInput);

// Event listener for the Enter key in the input field
const userInput = document.getElementById("user-input");
userInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    handleUserInput();
  }
});
