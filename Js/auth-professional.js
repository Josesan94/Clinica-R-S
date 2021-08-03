let user = JSON.parse(localStorage.getItem('currentUserProfessional'));
if(user == null){
    window.location.href = 'login-profesional.html'
}