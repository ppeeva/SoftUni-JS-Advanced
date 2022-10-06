function solve() {
  const textareas = document.querySelectorAll('textarea');
  const buttons = document.querySelectorAll('button');
  const tbody = document.querySelector('tbody');

  buttons[0].addEventListener('click', onGenerate);
  buttons[1].addEventListener('click', onBuy);

  function onGenerate() {
    const list = JSON.parse(textareas[0].value);
    for (let item of list) {
      let row = createItemRow(item);
      tbody.appendChild(row);
    }
  }

  function onBuy() {
    const checks = Array.from(document.querySelectorAll('input[type="checkbox"]')).filter(x => x.checked == true);

    let names = [];
    let totalPrice = 0;
    let totalFactors = 0;
    
    for (let check of checks) {
      const parentRow = check.parentElement.parentElement;
      const name = parentRow.children[1].textContent;
      names.push(name);
      const price = Number(parentRow.children[2].textContent);
      totalPrice += price;
      const factor = Number(parentRow.children[3].textContent);
      totalFactors += factor;
    }

    let avgFactor = totalFactors / names.length;
    let result = `Bought furniture: ${names.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${avgFactor}`;
    textareas[1].value = result;
  }

  function createItemRow(item) {
    const row = document.createElement('tr');

    // image
    let imgCell = document.createElement('td');
    let img = document.createElement('img');
    img.src = item.img;
    imgCell.appendChild(img);
    row.appendChild(imgCell);

    // name
    let nameCell = document.createElement('td');
    let name = document.createElement('p');
    name.textContent = item.name;
    nameCell.appendChild(name);
    row.appendChild(nameCell);

    // price
    let priceCell = document.createElement('td');
    let price = document.createElement('p');
    price.textContent = item.price;
    priceCell.appendChild(price);
    row.appendChild(priceCell);

    // decoration factor
    let factorCell = document.createElement('td');
    let factor = document.createElement('p');
    factor.textContent = item.decFactor;
    factorCell.appendChild(factor);
    row.appendChild(factorCell);

    // mark
    let markCell = document.createElement('td');
    let mark = document.createElement('input');
    mark.type = "checkbox";
    markCell.appendChild(mark);
    row.appendChild(markCell);

    return row;
  }

}

// [{"name": "Sofa", "img": "https://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/grey-3-seater-sofa-bed-200-13-0-175521_9.jpg", "price": 150, "decFactor": 1.2}]