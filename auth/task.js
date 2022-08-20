function getData(){
    let userId = localStorage.getItem('user_id');
    if (userId != null){
        GrantAccess (userId);
    }else{
        signin__form.onsubmit = (e)=> {
            e.preventDefault();
            let formData = new FormData(signin__form)
            login(formData)
        }
    }  
}

function login(formData){
    const xhr = new XMLHttpRequest;
    xhr.open('POST', signin__form.action, true)
    xhr.send(formData)
    xhr.onload = function(e) {
        if(xhr.response.success){
            GrantAccess(xhr.response.user_id) 
        } else{
              alert('Неверный логин/пароль')
              signin__form.reset()
            }


    }
    xhr.responseType = 'json';
}

function GrantAccess (id){
    const form = document.getElementById('signin');
    const welcome = document.getElementById ('welcome');
    const button = document.getElementById('logout')
    form.className = 'signin';
    welcome.className = "welcome welcome_active";
    welcome.textContent =`Добро пожаловать, пользователь ${id}`
    button.className = 'logoutbutton-active';
    localStorage.setItem('user_id', id);
    button.addEventListener('click', function(){
        localStorage.clear();
        welcome.className = "welcome";
        button.className = 'logoutbutton';
        signin__form.reset()
        form.className = 'signin signin_active'
    })
}

getData()