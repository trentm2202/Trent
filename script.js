// Function to add a user message to the chat log
function addUserMessage(message) {
  const chatLog = document.getElementById("chat-log");
  const userMessage = document.createElement("div");
  userMessage.className = "user-message";
  userMessage.textContent = "You: " + message;
  chatLog.appendChild(userMessage);
}

// Function to add a chatbot message to the chat log
function addChatbotMessage(message) {
  const chatLog = document.getElementById("chat-log");
  const chatbotMessage = document.createElement("div");
  chatbotMessage.className = "chatbot-message";
  chatbotMessage.textContent = "Chatbot: " + message;
  chatLog.appendChild(chatbotMessage);
}

// Function to handle user input and chatbot responses
function handleUserInput() {
  const userInput = document.getElementById("user-input");
  const message = userInput.value.trim();

  if (message !== "") {
    addUserMessage(message);
    // You can add your chatbot's response logic here
    // For now, let's just provide a simple example
    setTimeout(() => {
      addChatbotMessage("Hello! I'm your chatbot. How can I assist you?");
    }, 1000);

    userInput.value = "";
  }
}

// Event listener for the send button
const sendButton = document.getElementById("send-button");
sendButton.addEventListener("click", handleUserInput);

// Event listener for the Enter key in the input field
const userInput = document.getElementById("user-input");
userInput.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    handleUserInput();
  }
});

