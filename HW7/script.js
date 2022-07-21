const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 }

const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 }

const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 }

/* 
Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. 
Функція повинна викликатись через call та працювати з даними через this
*/

function getMyTaxes(salary) {
    return salary - salary * this.tax
}

console.log(getMyTaxes.call(ukraine, 3000));

/*
 Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує скільки у середньому податків платятт IT-спеціалісти у кожній країні.
 (tax * middleSalary). Функція повинна викликатись через call та працювати з даними через this
 */

function getMiddleTaxes(country) {
    return this.tax * this.middleSalary
 }

 console.log(getMiddleTaxes.call(latvia));

/*
 Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні. 
 (tax * middleSalary * vacancies). Функція повинна викликатись через call та працювати з даними через this
*/

function getTotalTaxes(country) {
    return this.tax * this.middleSalary * this.vacancies
}

console.log(getTotalTaxes.call(litva));

/*
Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } кожні 10 секунд. 
Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes – розраховується в залежності від вибраної країни та значення salary.
profit = salary - taxes;
*/

function getMySalary() {
    
    let obj = {}
    setInterval(function () {
        obj.salary = Number((Math.random() * (2000 - 1500) + 1500).toFixed(2))
        obj.taxes = Number((obj.salary * this.tax).toFixed(2))
        obj.profit =  Number((obj.salary - obj.taxes).toFixed(2))
        console.log(obj);
    }.bind(this), 10000)
}

getMySalary.call(ukraine)