// Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]];
const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];

const marks = [4, 5, 5, 3, 4, 5];

const boys = [];

const girls = [];

function division (students) {

students.forEach(function(e) {
    if (e[e.length - 1] === "а") {
        girls.push(e)
   } else {  boys.push(e)}
}
)
}

division(students)


function makePairs (boysArr, girlsArr) {
    const pairs = []
    for (let i = 0; i < boysArr.length; i++) {
    pairs.push([`${boysArr[i]} i ${girlsArr[i]}`])
    }
    return pairs
}

const pairs = makePairs(boys, girls);

console.log(pairs);

// Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати. 
// Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]]


function makePairsWithThemes (namePairs, themesTopic) {
    const pairsAndThemes = [];
    for (let i = 0; i < namePairs.length; i++) {
        pairsAndThemes.push([namePairs[i], themesTopic[i]].join(','))
    }
    return pairsAndThemes
}

console.log(makePairsWithThemes(pairs, themes));

// Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]
let c 

function makeStudentsAndMarks (student, mark) {
    const studentsAndMarks = [];
    for (let i = 0; i < student.length; i++) {
        studentsAndMarks.push([student[i]])
        studentsAndMarks[i].push(mark[i])
    }
    return studentsAndMarks
}

console.log(makeStudentsAndMarks(students,marks));

// Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, але не повинна мутувати массив):
// [["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]

const pairsWithThemes = makePairsWithThemes(pairs, themes);

function makeRandomMarks (pairs) {
const pairsWithRandomMarks = [];

for (let i = 0; i < pairs.length;i++) {
    pairsWithRandomMarks.push(pairs[i].split(','))
    pairsWithRandomMarks[i].push(Math.ceil(Math.random() * (5 - 1) + 1))
}
    return pairsWithRandomMarks
}

console.log(makeRandomMarks(pairsWithThemes));