document.getElementById('calcBtn').addEventListener('click', function() {
    // Get values from 4 inputs
    let s1 = parseFloat(document.getElementById('sub1').value) || 0;
    let s2 = parseFloat(document.getElementById('sub2').value) || 0;
    let s3 = parseFloat(document.getElementById('sub3').value) || 0;
    let s4 = parseFloat(document.getElementById('sub4').value) || 0;

    // Calculate Total and Percentage (divided by 4 for 4 subjects)
    let total = s1 + s2 + s3 + s4;
    let percentage = total / 4;

    // If-Else condition to check result grade
    let grade = "";
    if (percentage >= 75) {
        grade = "Distinction";
    } else if (percentage >= 60) {
        grade = "First Class";
    } else if (percentage >= 50) {
        grade = "Second Class";
    } else {
        grade = "Fail";
    }

    // Display output
    document.getElementById('total').innerText = total;
    document.getElementById('percentage').innerText = percentage.toFixed(2);
    document.getElementById('grade').innerText = grade;
});