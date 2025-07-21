

// Open the 'All' Modal
function openAllModal() {
    document.getElementById('allMenu').style.display = 'block';
    document.querySelector('.panel-all').classList.add('hidden');  // Hide the 'All' button
}

// Close the 'All' Modal
function closeAllModal() {
    document.getElementById('allMenu').style.display = 'none';
    document.querySelector('.panel-all').classList.remove('hidden');  // Show the 'All' button again
}


// Handle form submission and save data to localStorage
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent form from refreshing the page
  
      // Collect form data
      const contactName = document.getElementById("contactName").value;
      const password = document.getElementById("password").value;
      const email = document.getElementById("email").value;
      const mobile = document.getElementById("mobile").value;
  
      // Save to localStorage
      const userData = {
        contactName: contactName,
        password: password,
        email: email,
        mobile: mobile
      };
      localStorage.setItem("userData", JSON.stringify(userData));
      alert("Registration successful!");
  
      // Redirect to login page
      window.location.href = "login.html";
    });
  
    // Show login button if user data exists
    const signInLink = document.querySelector(".singtheform");
    if (localStorage.getItem("userData")) {
      signInLink.textContent = "Login";
      signInLink.setAttribute("onclick", "showLoginPage()");
    }
  });
  
  // Redirect to login page
  function showLoginPage() {
    window.location.href = "login.html";
  }
  

