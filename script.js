//local_storage

// var form = document.getElementById('form');
// form.addEventListener('submit', function(event){
//     event.preventDefault();

//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
//     var phone_no = document.getElementById('phone_no').value;

//     localStorage.setItem('name',name);
//     localStorage.setItem('email', email);
//     localStorage.setItem('phone_no', phone_no);
// });

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

var deleteBtn = document.getElementById('form');
deleteBtn.addEventListener('delete', function(event) {
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('phone_no');
});
