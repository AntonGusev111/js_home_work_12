function popup(){

    const popup = document.getElementById('subscribe-modal')
    const popupClose = document.getElementsByClassName('modal__close modal__close_times')
    if (checkCoockie('modal')){
        popup.className = 'modal';
    } else{
        popup.className = 'modal modal_active'
    }
    popupClose[0].onclick = () => {
        popup.className = 'modal';
        setCookie('modal', 'true')
    }
}


function setCookie(name, value){
    document.cookie = name + '=' + encodeURIComponent(value);
}

function checkCoockie(name){
    const pairs = document.cookie.split('; ');
    const cookie = pairs.find(item => item.startsWith(name + '='));
    if (cookie == 'undefined'){
        return true
    } else{
        return false
    }
    
}

// Прошу подсказать, почему cookie не устанавливаются. Функия setCookie в точности как на учебном видео

popup()