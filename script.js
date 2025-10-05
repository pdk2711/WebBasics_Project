// Contact Form Validation
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const errorBox = document.getElementById("error");
  const successBox = document.getElementById("success");

  form.addEventListener("submit", function(e) {
    e.preventDefault(); // Stop page reload

    // Clear messages
    errorBox.textContent = "";
    successBox.textContent = "";

    // Get trimmed values
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Validate fields
    if (!name || !email || !message) {
      errorBox.textContent = "⚠️ All fields are required.";
      return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
      errorBox.textContent = "⚠️ Please enter a valid email address.";
      return;
    }

    // If everything is valid
    successBox.textContent = "✅ Message sent successfully!";
    form.reset();
  });
});
