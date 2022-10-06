function generateReport() {
    const rows = document.querySelectorAll('tbody tr');
    const filters = document.querySelectorAll('thead input');
    let list = [];

    for (let row of rows) {
        let data = {};

        for (let i = 0; i < filters.length; i++) {
            if (filters[i].checked) {
                data[filters[i].name] = row.children[i].textContent;
            }
        }

        list.push(data);
    }

    const resultElement = document.getElementById('output');
    resultElement.value = JSON.stringify(list);
}