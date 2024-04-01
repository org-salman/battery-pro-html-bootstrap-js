
///////////////////////////////
      ////// Register //////
//////////////////////////////



$(document).ready(function() {
    $('#registerForm').submit(async function(event) {
        event.preventDefault(); // Prevent default form submission
  
        // Validate form fields
        if (!validateForm()) {
            return; // Exit if validation fails
        }
  
        const username = $('#registerUsername').val();
        const email = $('#registerEmail').val();
        const password = $('#registerPassword').val();
        const confirm_password = $('#registerConfirmPassword').val();
  
        try {
            const response = await fetch('http://localhost:3001/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password, confirm_password })
            });
  
            const data = await response.json();
  
            if (response.ok) {
                showMessage(data.message, 'success');
                clearForm(); // Clear the form on successful registration
                loadPage('login'); // Load the login page after successful registration
            } else {
                showMessage(data.error, 'error');
                clearForm(); // Clear the form on successful registration
            }
        } catch (error) {
            console.error('Error registering user:', error);
            showMessage('An unexpected error occurred', 'error');
        }
    });
  });
  
  function showMessage(message, type) {
    $('#message').removeClass('success error').addClass(type).text(message).show();
  }
  
  function clearForm() {
    $('#registerForm')[0].reset(); // Reset the form fields
  }
  
  function validateForm() {
    var username = document.getElementById("registerUsername");
    var email = document.getElementById("registerEmail");
    var password = document.getElementById("registerPassword");
    var confirmPassword = document.getElementById("registerConfirmPassword");

    var usernameError = document.getElementById("usernameError");
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var confirmPasswordError = document.getElementById("confirmPasswordError");

    var isValid = true;

    // Resetting border color before validation
    resetBorderColor(username);
    resetBorderColor(email);
    resetBorderColor(password);
    resetBorderColor(confirmPassword);

    usernameError.innerHTML = "";
    emailError.innerHTML = "";
    passwordError.innerHTML = "";
    confirmPasswordError.innerHTML = "";

    if (username.value.length < 4) {
        usernameError.innerHTML = "Username must be at least 4 characters";
        setBorderColor(username);
        isValid = false;
    }

    if (!validateEmail(email.value)) {
        emailError.innerHTML = "Invalid email address";
        setBorderColor(email);
        isValid = false;
    }

    if (password.value.length < 6) {
        passwordError.innerHTML = "Password must be at least 6 characters";
        setBorderColor(password);
        isValid = false;
    }

    if (password.value !== confirmPassword.value) {
        confirmPasswordError.innerHTML = "Passwords do not match";
        setBorderColor(confirmPassword);
        isValid = false;
    }

    return isValid;
}

function validateEmail(email) {
    // Basic email validation regex
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function setBorderColor(element) {
    element.classList.add('error-border');
}

function resetBorderColor(element) {
    element.classList.remove('error-border');
}
  