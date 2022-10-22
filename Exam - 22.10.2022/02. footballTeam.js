
// Judge 83/100

class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        for (let line of footballPlayers) {
            let [name, age, playerValue] = line.split('/');
            age = Number(age);
            playerValue = Number(playerValue);

            let existing = this.invitedPlayers.find(x => x.name == name);
            if (!existing) {
                existing = { name, age, playerValue };
                this.invitedPlayers.push(existing);
            }

            if (playerValue > existing.playerValue) {
                existing.playerValue = playerValue;
            }
        }

        let names = this.invitedPlayers.map(x => x.name);
        let result = `You successfully invite ${names.join(', ')}.`;
        return result;
    }

    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split('/');
        playerOffer = Number(playerOffer);

        let existing = this.invitedPlayers.find(x => x.name == name);
        if (!existing) {
            throw new Error(`${name} is not invited to the selection list!`);
        }
        else {
            if (playerOffer < existing.playerValue) {
                let priceDifference = existing.playerValue - playerOffer;
                throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`);
            }
            else {
                existing.playerValue = 'Bought';
                return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
            }
        }
    }

    ageLimit(name, age) {
        let existing = this.invitedPlayers.find(x => x.name == name);

        if (!existing) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if (existing.age < age) {
            let ageDifference = age - existing.age;
            if (ageDifference < 5) {
                return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`;
            }
            if (ageDifference > 5) {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!"`;
            }
        }
        else {
            return `${name} is above age limit!`;
        }
    }

    transferWindowResult() {
        let result = "Players list:\n";
        let sorted = this.invitedPlayers
            .sort((a, b) => (a.name).localeCompare(b.name))
            .map(x => `Player ${x.name}-${x.playerValue}`);

        result += sorted.join('\n');

        return result;
    }
}


// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));

// You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.signContract("Lionel Messi/60"));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
// console.log(fTeam.signContract("Barbukov/10"));

/*
You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres.
Congratulations! You sign a contract with Lionel Messi for 60 million dollars.
Congratulations! You sign a contract with Kylian Mbappé for 240 million dollars.
Uncaught Error: Barbukov is not invited to the selection list!
*/


// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.ageLimit("Lionel Messi", 33 ));
// console.log(fTeam.ageLimit("Kylian Mbappé", 30));
// console.log(fTeam.ageLimit("Pau Torres", 26));
// console.log(fTeam.signContract("Kylian Mbappé/240"));

/*
You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres.
Lionel Messi is above age limit!
Kylian Mbappé will sign a full 5 years contract for Barcelona in Spain!
Pau Torres will sign a contract for 1 years with Barcelona in Spain!
Congratulations! You sign a contract with Kylian Mbappé for 240 million dollars.
*/


// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
// console.log(fTeam.ageLimit("Kylian Mbappé", 30));
// console.log(fTeam.transferWindowResult());

/*
You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres.
Congratulations! You sign a contract with Kylian Mbappé for 240 million dollars. 
Kylian Mbappé will sign a full 5 years contract for Barcelona in Spain!
Players list:
Player Kylian Mbappé-Bought
Player Lionel Messi-50
Player Pau Torres-52
*/