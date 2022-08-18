function getData(){
    let user_id = localStorage.getItem('user_id');
    if (user_id != null){
        GrantAccess (user_id);
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
    xhr.onloadend = function(e) {
        if (xhr.status == 200){
            if(JSON.parse(xhr.responseText).success){
                GrantAccess(JSON.parse(xhr.responseText).user_id) 
            } else{
                alert('Неверный логин/пароль')
                controlClean()
            }
                    
        } else {
            alert(xhr.status)
        }

    }
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
        controlClean()
        form.className = 'signin signin_active'
    })
}

function controlClean(){
    const inputs = document.getElementsByClassName('control')
    for (let i =0; i < inputs.length; i++){
        inputs[i].value = '';
    }
}

getData()