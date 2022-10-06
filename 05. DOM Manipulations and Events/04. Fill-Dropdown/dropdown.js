function addItem() {
    const menuElement = document.getElementById('menu');
    const textElement = document.getElementById('newItemText');
    const valueElement = document.getElementById('newItemValue');

    const text = textElement.value;
    const value = valueElement.value;
    
    const optionElement = document.createElement('option');
    optionElement.textContent = text;
    optionElement.value = value;
    menuElement.appendChild(optionElement);

    textElement.value = '';
    valueElement.value = '';
}