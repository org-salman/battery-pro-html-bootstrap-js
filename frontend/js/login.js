
///////////////////////////////
      ////// Login //////
//////////////////////////////


document.getElementById("loginForm").addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent default form submission
  
    // Validate form fields
    if (!validateForm()) {
        return; // Exit if validation fails
    }
  
    // Get the login credentials from the form
    const username = $('#loginUsername').val();
    const password = $('#loginPassword').val();
  
    try {
        // Send a request to the server to authenticate the user
        const response = await fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
  
        const data = await response.json();
  
        if (response.ok) {
            // Authentication successful
            showMessage(data.message, 'success');
            // clearForm();
            loadPage('home')  // Redirect to home page or perform any other action
        } else {
            // Authentication failed
            showMessage(data.error, 'error');
        }
    } catch (error) {
        console.error('Error authenticating user:', error);
        showMessage('An unexpected error occurred', 'error');
    }
  });
  
  function showMessage(message, type) {
    $('#message').removeClass('success error').addClass(type).text(message).show();
  }



// Function to adjust eye icon position
function adjustEyeIconPosition() {
    var password = document.getElementById("loginPassword").value;
    var passwordError = document.getElementById("passwordError");
  
    if (password.trim() === "") {
        passwordError.innerHTML = "Please enter your password";
        document.getElementById("loginPassword").classList.add("error-border");
        document.getElementById("togglePassword").style.top = "55%";
    } else {
        passwordError.innerHTML = "";
        document.getElementById("loginPassword").classList.remove("error-border");
        document.getElementById("togglePassword").style.top = "75%";
    }
  }
  
  // Add event listener to password field
  document.getElementById("loginPassword").addEventListener("input", adjustEyeIconPosition);
  
  document.getElementById("togglePassword").addEventListener("click", function () {
    var passwordInput = document.getElementById("loginPassword");
    var passwordIcon = document.getElementById("passwordIcon");
  
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordIcon.classList.remove("bi-eye-slash");
        passwordIcon.classList.add("bi-eye");
    } else {
        passwordInput.type = "password";
        passwordIcon.classList.remove("bi-eye");
        passwordIcon.classList.add("bi-eye-slash");
    }
  });
  
    
  function validateForm() {
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;
  
    var usernameError = document.getElementById("usernameError");
    var passwordError = document.getElementById("passwordError");
  
    var isValid = true;
  
    usernameError.innerHTML = "";
    passwordError.innerHTML = "";
  
    // Check username
    if (username.trim() === "") {
        usernameError.innerHTML = "Please enter your username";
        document.getElementById("loginUsername").classList.add("error-border");
        isValid = false;
    } else {
        document.getElementById("loginUsername").classList.remove("error-border");
    }
  
    // Check password
    if (password.trim() === "") {
        passwordError.innerHTML = "Please enter your password";
        document.getElementById("loginPassword").classList.add("error-border");
        document.getElementById("togglePassword").style.top = "55%";
        isValid = false;
    } else {
        document.getElementById("loginPassword").classList.remove("error-border");
    }
  
    return isValid;
  }
  
  function clearForm() {
    document.getElementById("loginForm")[0].reset(); // Reset the form fields
  }
  