let user = JSON.parse(localStorage.getItem('currentUserPatient'));
if(user == null){
    window.location.href = 'login-pacientel.html'
}