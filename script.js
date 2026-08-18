function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission
    
    const fullname = document.getElementById('fullname').value;
    const dob = document.getElementById('dob').value;
    const gender= document.getElementById('gender').value;
    const email= document.getElementById('email').value;
    const phone= document.getElementById('phone').value;
    const address= document.getElementById('address').value;
    const nationality= document.getElementById('nationality').value;
    const maritalStatus= document.getElementById('marital').value;
   // const profileInput = document.getElementById('profile');
    const msg = document.getElementById('message'); 

    let msgText = "Successfully Submitted";
    msg.style.color = "green";
    msg.textContent = msgText;

    let details = "Full Name: " + fullname + "\n" +
                  "Date of Birth: " + dob + "\n" +  
                "Gender: " + gender + "\n" +
                "Email: " + email + "\n" +
                "Phone: " + phone + "\n" +
                "Address: " + address + "\n" +
                "Nationality: " + nationality + "\n" +
                "Marital Status: " + maritalStatus + "\n";
    alert(details);
}
function handleReset() {
    const msg = document.getElementById('message');
    msg.textContent = ""; // Clear the message
}