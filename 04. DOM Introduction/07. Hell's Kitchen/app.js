function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      const input = JSON.parse(document.querySelector('#inputs textarea').value);
      const restaurants = [];

      for (let line of input) {
         const tokens = line.split(' - ');
         const restaurantName = tokens[0].trim();

         let restaurant = restaurants.find(x => x.restaurantName == restaurantName);
         if (restaurant == null) {
            restaurant = { restaurantName, workers: [] };
            restaurants.push(restaurant);
         }

         const workersList = tokens[1].split(', ');
         for (let workerLine of workersList) {
            const workerTokens = workerLine.split(' ');
            const workerName = workerTokens[0];
            const workerSalary = Number(workerTokens[1]);

            let worker = restaurant.workers.find(x => x.name == workerName);
            if (worker == null) {
               worker = { name: workerName };
               restaurant.workers.push(worker);
            }
            worker.salary = workerSalary;
         }
      }

      restaurants.forEach(x => {
         let salaries = x.workers.map(w => w.salary);
         let total = salaries.reduce((sum, a) => sum + a, 0);
         let avg = Number((total/salaries.length).toFixed(2));
         x.avgSalary = avg;
         x.bestSalary = Math.max(...salaries);
         return;
      })

      let bestRestaurant = restaurants.sort((a, b) => b.avgSalary - a.avgSalary)[0];
      let bestResult = `Name: ${bestRestaurant.restaurantName} Average Salary: ${bestRestaurant.avgSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;
      
      let resultElement = document.querySelector('div#bestRestaurant p');
      resultElement.textContent = bestResult;

      
      let workersResult = '';
      for(let worker of bestRestaurant.workers.sort((a,b) => b.salary - a.salary)){
         workersResult += `Name: ${worker.name} With Salary: ${worker.salary} `;
      }

      let workersElement = document.querySelector('div#workers p');
      workersElement.textContent = workersResult;
   }
}

// ["PizzaHut - Peter 500, George 300, Mark 800", "TheLake - Bob 1300, Joe 780, Jane 660"]
/*
Name: TheLake Average Salary: 913.33 Best Salary: 1300.00 
Name: Bob With Salary: 1300 Name: Joe With Salary: 780 Name: Jane With Salary: 660
*/

// ["Mikes - Steve 1000, Ivan 200, Paul 800","Fleet - Maria 850, Janet 650"]
/*
Name: Fleet Average Salary: 750.00 Best Salary: 850.00 
Name: Maria With Salary: 850 Name: Janet With Salary: 650
*/

