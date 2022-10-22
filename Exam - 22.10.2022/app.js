window.addEventListener("load", solve);

// Judge - 91/100

function solve() {

  const mainDiv = document.getElementById('main');

  const elements = {
    firstName: { reference: document.getElementById('first-name'), value: '' },
    lastName: { reference: document.getElementById('last-name'), value: '' },
    age: { reference: document.getElementById('age'), value: '' },
    title: { reference: document.getElementById('story-title'), value: '' },
    story: { reference: document.getElementById('story'), value: '' }
  }

  const options = document.querySelectorAll('#genre option');
  let selectedOption = undefined;

  const btnPublish = document.getElementById('form-btn');
  btnPublish.addEventListener('click', publish);

  const previewList = document.getElementById('preview-list');

  const listItem = document.createElement('li');
  listItem.classList.add('story-info');

  const article = document.createElement('article');
  listItem.appendChild(article);

  const saveBtn = document.createElement('button');
  saveBtn.textContent = 'Save Story';

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit Story';

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete Story';


  function isValidInput() {
    elements.firstName.value = elements.firstName.reference.value;
    elements.lastName.value = elements.lastName.reference.value;
    elements.age.value = elements.age.reference.value;
    elements.title.value = elements.title.reference.value;
    elements.story.value = elements.story.reference.value;

    if (elements.firstName.value && elements.lastName.value && elements.age.value && elements.title.value && elements.story.value) {
      return true;
    }

    return false;
  }

  function publish() {
    if (!isValidInput()) {
      return;
    }

    const namePreview = document.createElement('h4');

    namePreview.textContent = `Name: ${elements.firstName.value} ${elements.lastName.value}`;

    const agePreview = document.createElement('p');
    agePreview.textContent = `Age: ${elements.age.value}`;

    const titlePreview = document.createElement('p');
    titlePreview.textContent = `Title: ${elements.title.value}`;

    const genrePreview = document.createElement('p');
    selectedOption = Array.from(options).find(x => x.selected == true);
    genrePreview.textContent = `Genre: ${selectedOption.value}`;

    const storyPreview = document.createElement('p');
    storyPreview.textContent = elements.story.value;

    article.appendChild(namePreview);
    article.appendChild(agePreview);
    article.appendChild(titlePreview);
    article.appendChild(genrePreview);
    article.appendChild(storyPreview);


    saveBtn.classList.add('save-btn');
    saveBtn.addEventListener('click', save);
    saveBtn.classList.remove('disabled');
    saveBtn.disabled = false;

    editBtn.classList.add('edit-btn');
    editBtn.addEventListener('click', edit);
    editBtn.classList.remove('disabled');
    editBtn.disabled = false;

    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', deleteStory);
    deleteBtn.classList.remove('disabled');
    deleteBtn.disabled = false;

    article.appendChild(saveBtn);
    article.appendChild(editBtn);
    article.appendChild(deleteBtn);

    previewList.appendChild(listItem);

    clear();
    btnPublish.classList.add('disabled');
    btnPublish.disabled = true;
  }

  function clear() {
    elements.firstName.reference.value = '';
    elements.lastName.reference.value = '';
    elements.age.reference.value = '';
    elements.title.reference.value = '';
    Array.from(options).forEach(x => x.selected = false);
    elements.story.reference.value = '';
  }

  function save() {
    mainDiv.innerHTML = '<h1>Your scary story is saved!</h1>';
  }

  function edit() {
    elements.firstName.reference.value = elements.firstName.value;
    elements.lastName.reference.value = elements.lastName.value;
    elements.age.reference.value = elements.age.value;
    elements.title.reference.value = elements.title.value;
    Array.from(options).forEach(x => {
      x.selected = x.value == selectedOption.value ? true : false;
    });
    elements.story.reference.value = elements.story.value;


    btnPublish.classList.remove('disabled');
    btnPublish.disabled = false;

    saveBtn.classList.add('disabled');
    saveBtn.disabled = true;

    editBtn.classList.add('disabled');
    editBtn.disabled = true;

    deleteBtn.classList.add('disabled');
    deleteBtn.disabled = true;

    previewList.removeChild(listItem);

  }

  function deleteStory() {
    previewList.removeChild(listItem);

    btnPublish.classList.remove('disabled');
    btnPublish.disabled = false;
  }

}
