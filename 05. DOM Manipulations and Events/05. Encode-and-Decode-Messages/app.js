function encodeAndDecodeMessages() {
    const buttons = document.querySelectorAll('button');
    buttons[0].addEventListener('click', encode);
    buttons[1].addEventListener('click', decode);

    const textareas = document.querySelectorAll('textarea');
    
    function encode() {
        let message = textareas[0].value;
        let encodedMessage = '';

        for(let i = 0; i < message.length; i++){
            encodedMessage += String.fromCharCode(message.charCodeAt(i) + 1);
        }

        textareas[0].value = '';
        textareas[1].value = encodedMessage;
    }

    function decode() {
        let message = textareas[1].value;
        let decodedMessage = '';

        for(let i = 0; i < message.length; i++){
            decodedMessage += String.fromCharCode(message.charCodeAt(i) - 1);
        }

        textareas[1].value = decodedMessage;
    }
}