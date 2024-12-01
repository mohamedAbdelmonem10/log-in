

//  to say welcome 
var username = localStorage.getItem('sessionUsername')
if (username) {
    document.getElementById('username').textContent = "Welcome " + username
}

// logout button

document.getElementById('logoutBtn').addEventListener('click', function () {
    localStorage.removeItem('sessionUsername')
    // window.location.href = 'https://' + location.hostname
    window.location = "./index.html"
})