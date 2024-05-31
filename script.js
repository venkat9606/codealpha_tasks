document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const dob = new Date(document.getElementById('dob').value);
    const today = new Date();
    
    let age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();
    const dayDifference = today.getDate() - dob.getDate();
    
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }
    
    document.getElementById('result').textContent = `Your age is ${age} years.`;
});
