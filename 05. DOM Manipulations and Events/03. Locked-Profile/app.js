function lockedProfile() {
    const buttons = Array.from(document.querySelectorAll('button'));
    buttons.forEach(x => {
        x.addEventListener('click', onClick);
    });

    function onClick(ev){
        const elements = Array.from(ev.target.parentElement.children);
        const lockElement = elements.find(x => x.tagName == 'INPUT' && x.value == "lock");

        if(lockElement.checked == false){
            const hiddenElement = elements.find(x => x.tagName == 'DIV');

            if(hiddenElement.style.display == ''){
                hiddenElement.style.display = 'block';
                ev.target.textContent = "Hide it";
            }
            else {
                hiddenElement.style.display = '';
                ev.target.textContent = "Show more";
            }
        }        
    }
}