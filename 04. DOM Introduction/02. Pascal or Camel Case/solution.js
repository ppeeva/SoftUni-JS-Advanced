function solve() {
  const text = document.getElementById('text').value.toLowerCase();
  const convention = document.getElementById('naming-convention').value;

  let words = text.split(' ');
  let idx = -1;

  if (convention == 'Camel Case') {
    idx = 1;
  }
  else if (convention == 'Pascal Case'){
    idx = 0;    
  }
  else{
    words = ['Error!'];
  }

  if(idx >= 0){
    for (let i = idx; i < words.length; i++) {
      const word = words[i];
      words[i] = word.charAt(0).toUpperCase() + word.substring(1, word.length);
    }
  }

  const result = words.join('');
  document.getElementById('result').textContent = result;
}