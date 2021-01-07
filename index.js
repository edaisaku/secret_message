//decode message
const { hash } = window.location;
const showMessage = atob(hash.replace('#' , ''));

if(showMessage){
    document.getElementsByClassName('messageShow')[0].classList.remove('hide')
    document.getElementsByClassName('messageInput')[0].classList.add('hide')
    document.querySelector('h2').innerHTML = showMessage
}

document.querySelector("form").addEventListener('submit', (event)=>{
    event.preventDefault();
    
    //take message
    const message = document.querySelector('#messageInput').value;
    
    //encode message to base64
    const result = window.btoa(message);
    
    //remove message window
    document.getElementsByClassName('messageInput')[0].classList.add('hide')
    //make the div visible
    document.getElementsByClassName('secret')[0].classList.remove('hide')
    
    //pass the encrypted link to linkInput
    const encrypted = document.querySelector('#linkInput')
    encrypted.value = `${window.location}#${result}`;
    encrypted.select()
});
