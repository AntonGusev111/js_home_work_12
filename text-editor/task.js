function text(){
    let text = localStorage.getItem('text');
    const textArea = document.getElementById('editor');
    const button = document.getElementById('btn');
    if (text){
        textArea.value = text;
    } 
    else {
        textArea.addEventListener('keyup', function(e){

            localStorage.setItem('text', textArea.value);
        })
    }
    button.onclick = () =>{
        textArea.value = '';
        localStorage.clear();
    }
}



text()