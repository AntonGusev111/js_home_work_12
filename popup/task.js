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
    return true
}

function checkCoockie(name){
    let pairs = document.cookie.split('; ');
    let cookie = pairs.find(item => item.startsWith(name + '='));
    return cookie != undefined
}


popup()