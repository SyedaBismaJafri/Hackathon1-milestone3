var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload

    // Collect input values, with null checks
    var name = document.getElementById('name') ? document.getElementById('name').value : '';
    var email = document.getElementById('email') ? document.getElementById('email').value : '';
    var phone = document.getElementById('phone') ? document.getElementById('phone').value : '';
    var education = document.getElementById('education') ? document.getElementById('education').value : '';
    var experience = document.getElementById('experience') ? document.getElementById('experience').value : '';
    var skills = document.getElementById('skills') ? document.getElementById('skills').value : '';

    // Generate the resume content dynamically
    var resumeHTML = `
        <h2><b>Resume</b></h2>
        <h3>Personal Information</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>

        <h3>Education</h3>
        <p>${education}</p>

        <h3>Experience</h3>
        <p>${experience}</p>

        <h3>Skills</h3>
        <p>${skills}</p>
    `;

    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    } else {
        console.error('The display element is missing.');
    }
});
