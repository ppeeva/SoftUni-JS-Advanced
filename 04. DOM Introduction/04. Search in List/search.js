function search() {
   const items = document.querySelectorAll('#towns li');
   const searchBy = document.getElementById('searchText').value.toLowerCase();

   let matches = 0;
   for (let item of items) {
      if (item.textContent.toLowerCase().includes(searchBy)) {
         item.innerHTML = `<u><bold>${item.textContent}</bold></u>`;
         matches++;
      }
      else{
         item.innerHTML = item.textContent;
      }
   }

   const result = `${matches} matches found`;
   document.getElementById('result').textContent = result;
}
