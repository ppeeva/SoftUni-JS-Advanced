function solve() {
  const text = document.getElementById('input').value;
  const sentences = text.split('.').filter(x => x.length > 0);
  const result = document.getElementById('output');
  result.innerHTML = '';

  for (let i = 0; i < sentences.length; i += 3) {
    const first = sentences[i] + '.';
    const second = (i + 1) < sentences.length ? sentences[i + 1] + '.' : '';
    const third = (i + 2) < sentences.length ? sentences[i + 2] + '.' : '';
    let paragraph = `<p>${first}${second}${third}</p>`;
    result.innerHTML += paragraph;
  }

}