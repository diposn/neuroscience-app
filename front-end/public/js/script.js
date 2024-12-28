const signupForm = document.getElementById('signupForm');
const uce = document.getElementById('user-created-error');
const ucr = document.getElementById('user-created-response');

signupForm.addEventListener('submit', async(event) => {
    event.preventDefault();  // Prevent default form submission

    try {
        const formData = new FormData(signupForm);
        const formDataObj = Object.fromEntries(formData);

        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        const response = await fetch("/api/users/signup", {
            method: "POST",
            body: JSON.stringify(formDataObj),
            headers: headers
        });

        // Handle the response
        if (response.ok) {
            let data = await response.json();
            console.log("response:", data);

            // Show success message
            uce.style.visibility = "hidden";
            ucr.textContent = "Thanks for signing up! Press the link above to log in.";
            ucr.style.display = "block";
            ucr.style.visibility = "visible";
        } else {
            // Handle error (email already exists)
            ucr.style.visibility = "hidden";
            uce.textContent = "Your email already exists.";
            uce.style.display = "block";
            uce.style.visibility = "visible";
        }
    } catch (error) {
        console.log("Error occurred: ", error);
    }
});
