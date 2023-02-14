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

var deleteBtn = document.getElementById('delete');
deleteBtn.addEventListener('click', function(event) {
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('phone_no');
});

var editBtn = document.getElementById('edit');
editBtn.addEventListener('click', function(event) {
    var name = localStorage.getItem('name');
    var email = localStorage.getItem('email');
    var phone_no = localStorage.getItem('phone_no');

    document.getElementById('name').value = name;
    document.getElementById('email').value = email;
    document.getElementById('phone_no').value = phone_no;
});

