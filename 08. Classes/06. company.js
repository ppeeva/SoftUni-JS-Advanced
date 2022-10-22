class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || !salary || !position || !department || salary < 0) {
            throw new Error('Invalid input!');
        }

        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = { employees: [], avg: 0 };
        }

        this.departments[department].employees.push({ name, salary, position });
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        Object.entries(this.departments)
            .forEach(x => x[1].avg = x[1].employees.reduce((sum, a) => sum + a.salary, 0) / x[1].employees.length);

        let sortedDep = Object.entries(this.departments).sort((a, b) => b.avg - a.avg);
        let result = [`Best Department is: ${sortedDep[0][0]}`];
        result.push(`Average salary: ${sortedDep[0][1].avg.toFixed(2)}`);

        let sortedEmp = sortedDep[0][1].employees.sort((a,b) => {
            if(a.salary == b.salary){
                return a.name.localeCompare(b.name);
            }
            else {
                return b.salary - a.salary;
            }
        });

        for (let emp of sortedEmp) {
            result.push(`${emp.name} ${emp.salary} ${emp.position}`);
        }

        return result.join('\n');
    }
}


let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());

/*
Best Department is: Construction
Average salary: 1500.00
Stan 2000 architect
Stanimir 2000 engineer
Pesho 1500 electrical engineer
Slavi 500 dyer
*/