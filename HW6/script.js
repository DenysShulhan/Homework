const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];

  /*
  Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] - яка повертає список предметів для конкретного студента. 
  Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл 
  */

  function getSubjects(student) {
    arrKeys = Object.keys(student.subjects)
    arrKeysUpp = []
    arrFinalEdit = []
    arrKeys.forEach(key => {arrKeysUpp.push(key[0].toUpperCase() + key.slice(1).toLowerCase())})
    for (let key of arrKeysUpp) {
        arrFinalEdit.push(key.replace('_', ' '))
    }
    return arrFinalEdit
  }

  console.log(getSubjects(students[0]))

  /*
  Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ. 
  Оцінку округліть до 2ого знаку. Можна використовувати функції, написані у попередніх домашніх завданнях :)
  */
  function getAverage(numbers) {
    const intNumbers = numbers.filter(item => Number.isInteger(item))
    const sumArr = intNumbers.reduce((sum, curr) => { 
        return sum + curr
    }, 0)
    return +(sumArr / intNumbers.length).toFixed(2)
}


  function getAverageMark (student) {
    allMarks = [].concat(...Object.values(student.subjects))
    return getAverage(allMarks)
  }

console.log(getAverageMark(students[0])) 

/*
Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} – яка повертає інформацію загального виду 
по переданому студенту (вам знадобиться функція з попереднього завдання). ПОвинна бути виведена інформація: курс, ім'я, середня оцінка.
 */ 

function getStudentInfo (student) {
    result = {
        course : student.course,
        name : student.name,
        'average mark' : getAverageMark(student)
    }
    return result
}

console.log(getStudentInfo(students[0]))

/*
Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – яка повертає імена студентів у алфавітному порядку.
*/

function getStudentsNames(students) {
  const namesStudents = students.map(student => student.name).sort()
  return namesStudents
}

console.log(getStudentsNames(students));

/*
Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого студента зі списку по показнику середньої оцінки.
*/

function getBestStudent(students) {
  const bestMark = Math.max(...students.map(student => getAverageMark(student)))

  result = students.map(student => ({name: student.name, averageMark: getAverageMark(student)})).filter(num => num.averageMark === bestMark)
  bestStudent = result[0].name
  return bestStudent
}

console.log(getBestStudent(students));

/*
Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка повертає обє'кт, в якому ключі це букви у слові, 
а значення – кількість їх повторень.
*/

function calculateWordLetters(word) {
  let calcLetter = {}
word.toLowerCase().split('').forEach(letter => { if (letter in calcLetter) {
  calcLetter[letter]++
} else {calcLetter[letter] = 1}
})
return calcLetter
}

console.log(calculateWordLetters('test'));


