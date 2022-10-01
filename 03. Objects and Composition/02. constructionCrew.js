function helpWorker(worker) {
    if (worker.dizziness == true) {
        worker.levelOfHydrated += 0.1 * worker.weight * worker.experience;
        worker.dizziness = false;
    }

    return worker;
}

console.log(helpWorker({ weight: 80, experience: 1, levelOfHydrated: 0, dizziness: true }));
// { weight: 80, experience: 1, levelOfHydrated: 8, dizziness: false }

console.log(helpWorker({ weight: 120, experience: 20, levelOfHydrated: 200, dizziness: true }));
// { weight: 120, experience: 20, levelOfHydrated: 440, dizziness: false }

console.log(helpWorker({ weight: 95, experience: 3, levelOfHydrated: 0, dizziness: false }));
// { weight: 95, experience: 3, levelOfHydrated: 0, dizziness: false }

