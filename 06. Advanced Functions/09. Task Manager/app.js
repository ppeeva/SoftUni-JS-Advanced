function solve() {
    document.getElementById('add').addEventListener('click', addTask);
    const [_, openSection, progressSection, finishSection] = Array.from(document.querySelectorAll('section')).map(x => x.children[1]);

    const input = {
        task: document.getElementById('task'),
        description: document.getElementById('description'),
        date: document.getElementById('date')
    };

    function addTask(event) {
        event.preventDefault();

        if (!input.task.value || !input.description.value || !input.date.value) {
            console.log('invalid input');
            return;
        }

        const article = document.createElement('article');

        article.appendChild(createElement('h3', input.task.value));
        article.appendChild(createElement('p', `Description: ${input.description.value}`));
        article.appendChild(createElement('p', `Due Date: ${input.date.value}`));

        const div = createElement('div', '', 'flex');
        const startButton = createElement('button', 'Start', 'green');
        const deleteButton = createElement('button', 'Delete', 'red');
        const finishButton = createElement('button', 'Finish', 'orange');
        div.appendChild(startButton);
        div.appendChild(deleteButton);
        
        article.appendChild(div);        
        openSection.appendChild(article);
        
        Object.values(input).forEach(x => x.value = '');
        
        startButton.addEventListener('click', startTask);
        deleteButton.addEventListener('click', deleteTask)
        finishButton.addEventListener('click', finishTask);
        
        function startTask() {
            startButton.remove();
            div.appendChild(finishButton);
            progressSection.appendChild(article);
        }
        
        function deleteTask() {
            article.remove();
        }

        function finishTask() {
            div.remove();
            finishSection.appendChild(article);
        }
    }

    function createElement(tagName, value, className) {
        const el = document.createElement(tagName);
        el.textContent = value;
        if (className) {
            el.classList.add(className);
        }
        return el;
    }
}