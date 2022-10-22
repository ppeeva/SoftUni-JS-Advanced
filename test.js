const { expect } = require('chai');
//const { isOddOrEven } = require('./07. Unit Testing and Error Handling/02. evenOdd');
//const { lookupChar } = require('./07. Unit Testing and Error Handling/03. charLookup');
//const mathEnforcer = require('./07. Unit Testing and Error Handling/04. mathEnforcer');
const chooseYourCar = require('./Exam - 22.10.2022/03. chooseYourCar');



// Exam - Judge 88/100
describe("Choose cat tests", () => {
    describe("choosingType", () => {
        it("year < 1900", () => {
            expect(chooseYourCar.choosingType('Sedan', 'red', 1800).to.throw(new Error('Invalid Year!')))
        });
        it("year > 2022", () => {
            expect(chooseYourCar.choosingType('Sedan', 'red', 2023).to.throw(new Error('Invalid Year!')))
        });
        it("type different from Sedan", () => {
            expect(chooseYourCar.choosingType('Lada', 'red', 2000).to.throw(new Error('This type of car is not what you are looking for.')))
        });

        it("year >= 2010", () => {
            let type = "Sedan"
            let color = "red"
            expect(chooseYourCar.choosingType(type, color, 2010)).to.equal(`This ${color} ${type} meets the requirements, that you have.`)
        }); 
        it("year < 2010", () => {
            let type = "Sedan"
            let color = "red"
            expect(chooseYourCar.choosingType(type, color, 2009)).to.equal(`This ${type} is too old for you, especially with that ${color} color.`)
        }); 
    });

    describe("brandName", () => {
        it("brands is not an array", () => {
            expect(chooseYourCar.brandName('array', 1).to.throw(new Error('Invalid Information!')))
        });

        it("index is not a number", () => {
            expect(chooseYourCar.brandName([], 'a').to.throw(new Error('Invalid Information!')))
        });

        it("index is not an integer number", () => {
            expect(chooseYourCar.brandName([], 1.2).to.throw(new Error('Invalid Information!')))
        });

        it("index less than 0", () => {
            expect(chooseYourCar.brandName([], -1).to.throw(new Error('Invalid Information!')))
        });

        it("index larger than array length", () => {
            expect(chooseYourCar.brandName(['Mercedes', 'Sedan'], 2).to.throw(new Error('Invalid Information!')))
        });

        it("removes car at the given index from the array", () => {
            expect(chooseYourCar.brandName(['Mercedes', 'Sedan', 'Lada'], 0)).to.equal('Sedan, Lada')
        }); 
    });

    describe("carFuelConsumption", () => {
        it("liters/100km is less or equal to 7L", () => {
            expect(chooseYourCar.carFuelConsumption(200, 12)).to.equal('The car is efficient enough, it burns 6.00 liters/100 km.')
        });

        it("liters/100km is > 7L", () => {
            expect(chooseYourCar.carFuelConsumption(200, 22)).to.equal('The car burns too much fuel - 11.00 liters!')
        });

        it("distance is not a number", () => {
            expect(chooseYourCar.carFuelConsumption('a', 22).to.throw(new Error('Invalid Information!')))
        });

        it("consumpted fuel is not a number", () => {
            expect(chooseYourCar.carFuelConsumption(200, 'a').to.throw(new Error('Invalid Information!')))
        });
    });
});


// describe("MathEnforcer checker", function () {
//     describe('addFive', () => {
//         it('returns undefined for non-number param', () => {
//             expect(mathEnforcer.addFive('a')).to.equal(undefined);
//         });

//         it('returns param + 5', () => {
//             expect(mathEnforcer.addFive(1)).to.equal(6);
//             expect(mathEnforcer.addFive(-1)).to.equal(4);
//             expect(mathEnforcer.addFive(1.245)).to.closeTo(6.25, 0.01);
//         });
//     });

//     describe('subtractTen', () => {
//         it('returns undefined for non-number param', () => {
//             expect(mathEnforcer.subtractTen('a')).to.equal(undefined);
//         });

//         it('returns param - 10', () => {
//             expect(mathEnforcer.subtractTen(1)).to.equal(-9);
//             expect(mathEnforcer.subtractTen(-1)).to.equal(-11);
//             expect(mathEnforcer.subtractTen(-1.245)).to.closeTo(-11.245, 0.01);
//         });
//     });

//     describe('sum', () => {
//         it('returns undefined for non-number param', () => {
//             expect(mathEnforcer.sum('a', 1)).to.equal(undefined);
//             expect(mathEnforcer.sum('a', 'a')).to.equal(undefined);
//             expect(mathEnforcer.sum(1, 'a')).to.equal(undefined);
//         });

//         it('returns sum of params', () => {
//             expect(mathEnforcer.sum(1, 2)).to.equal(3);
//             expect(mathEnforcer.sum(1.245, 2.26789)).to.closeTo(3.51, 0.01);
//             expect(mathEnforcer.sum(1, 2.26789)).to.closeTo(3.26, 0.01);
//             expect(mathEnforcer.sum(-1, -2)).to.equal(-3);
//         });
//     });
// });



// describe("LookupChar checker", () => {
//     it('returns undefined for non-string first param', () => {
//         expect(lookupChar(1, 1)).to.equal(undefined);
//     });

//     it('returns undefined for non-integer-number second param', () => {
//         expect(lookupChar('a', 'b')).to.equal(undefined);
//         expect(lookupChar('a', 2.1)).to.equal(undefined);
//     });

//     it('returns incorrect index for negative-number index or index equal to or larger than text length', () => {
//         expect(lookupChar('a', -1)).to.equal('Incorrect index');
//         expect(lookupChar('a', 1)).to.equal('Incorrect index');
//         expect(lookupChar('a', 2)).to.equal('Incorrect index');
//     });

//     it('returns correct char for string', () => {
//         expect(lookupChar('abc', 0)).to.equal('a');
//         expect(lookupChar('abc', 1)).to.equal('b');
//         expect(lookupChar('abc', 2)).to.equal('c');
//     });

// });



// describe("EvenOdd checker", () => {
//     it('works with even string length', () => {
//         expect(isOddOrEven('test')).to.equal('even');
//     });

//     it('works with odd string length', () => {
//         expect(isOddOrEven('tes')).to.equal('odd');
//     });

//     it('returns undefined for non-string param', () => {
//         expect(isOddOrEven({})).to.equal(undefined);
//     });

//     it('returns valid odd/even result for string param', () => {
//         expect(isOddOrEven('even')).to.equal('even');
//         expect(isOddOrEven('odd')).to.equal('odd');
//         expect(isOddOrEven('example')).to.equal('odd');
//     });

// });
