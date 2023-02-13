//local_storage

var form = document.getElementById('form');
form.addEventListener('submit', function(event){
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone_no = document.getElementById('phone_no').value;

    localStorage.setItem('name',name);
    localStorage.setItem('email', email);
    localStorage.setItem('phone_no', phone_no);
});