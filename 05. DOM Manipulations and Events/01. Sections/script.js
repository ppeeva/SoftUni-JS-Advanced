function create(words) {
   const content = document.getElementById('content');

   for(let word of words){
      let divElement = document.createElement('div');
      let pElement = document.createElement('p');
      pElement.textContent = word;
      pElement.style.display = 'none';
      divElement.appendChild(pElement);
      divElement.addEventListener('click', onClick);
      content.appendChild(divElement);
   }

   function onClick(ev){
      ev.target.children[0].style.display = 'block';
   }
}