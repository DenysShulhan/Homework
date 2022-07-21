/*Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. 
У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа, max – максимальне значення цілого числа. 
Приклад: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]*/

function getRandomArray(length, min, max) {
    let arr = []
    if (min >= max)  {
    return "Мінімальне значення не може бути більше максимального"
} else {

for (let i = 0; i < length;i++) {
    
    arr.push(Math.floor(Math.random() * (max + 1 - min) + min))
}
}
    return arr
}

console.log(getRandomArray(40,1,40))

console.log(getRandomArray(40,50,40))

/* 
Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ 
Приклад: getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2
*/

function getModa (...numbers) {
    const distinctNumbers = new Set (numbers.filter(item => Number.isInteger(item)))
    let max = 0;
    const result = [];
    distinctNumbers.forEach(num => {
        const count = numbers.filter(number => number === num).length
        if (max < count) max = count
        result.push({num, count})
    });
    return result.filter((item) => item.count == max).map(i => i.num).join()
    }

    console.log(getModa(1,3,4,5,5,6))
    
/*
 Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
Приклад: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4
*/

function getAverage(...numbers) {
    const intNumbers = numbers.filter(item => Number.isInteger(item))
    const sumArr = intNumbers.reduce((sum, curr) => { 
        return sum + curr
    }, 0)
    return sumArr / intNumbers.length
}

console.log(getAverage(1,5,7,5,4))

/*
Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
Приклад: getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 23 
Приклад: getMedian(1, 2, 3, 4) –> 2.5 Приклад: getMedian(1, 2, 3, 4, 5) –> 3
*/

function getMedian(...numbers) {
    const intNumbers = numbers.filter(item => Number.isInteger(item))

    if (intNumbers.length % 2 !== 0) {
        console.log(intNumbers[(intNumbers.length - 1)/2]);
    }    else {
        console.log((intNumbers[intNumbers.length / 2 - 1] + intNumbers[intNumbers.length / 2 ])/2);
    }
}

getMedian(1,2,3,4,5)
getMedian(1,2,3,4,5,6,7,8)
/*
Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції
Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5]
*/

function filterEvenNumbers(...numbers) {
    const evenNumbers = []
    numbers.forEach(num => {
        if (num % 2 !== 0)
        evenNumbers.push(num)
    })
    return evenNumbers
}

console.log(filterEvenNumbers(1,2,3,4,5,6))

/*
Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3
*/

function countPositiveNumbers(...numbers) {
    const positiveNumbers = []
    numbers.forEach(num => {
        if (num > 0)
        positiveNumbers.push(num)
    })
    return positiveNumbers.length
}

console.log(countPositiveNumbers(1,2,3,4,-5))

/*
Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5
Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55]
*/
function getDividedByFive(...numbers) {
    divideByFive = numbers.filter(num => num % 5 === 0)
    return divideByFive
}

console.log(getDividedByFive(20,15,11,22,30,60));

/*
Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*). 
При вирішенні цього завдання необхідно розбити масив на слова за допомогою функції .split(" "),
після чого масив необхідно буде склеїти .join(" ") Погані слова: shit та fuck. Передбачте можливість розширювати список цих слів у майбутньому.
*/

function replaceBadWords(string, ...words) {
    badWords = ['shit', 'fuck']
    
    words.forEach(word => {
        if (badwords.indexOf(word) === -1)
        badWords.push(word)
    })
    
    result = string.split(' ')

    final = result.map(res => {
        word = res
        badWords.forEach(bw => {
            if (word.includes(bw)) 
                word = word.replaceAll(bw, new Array (bw.length).fill('*').join(''))
            })
        return word
        }).join(' ')
return final
    }

console.log(replaceBadWords("Are you fucking kidding?"))  

/*
Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви. Якщо букв менше трьох – не розбиває.
Пробіли завжди видаляються. Рядок приводится до нижнього регістру. 
Приклад: divideByThree("Commander) -> ["com", "man", "der"] 
Приклад: divideByThree("live") -> ["liv", "e"]
*/

function divideByThree(word) {
    const lettersOfWord = [...word.toLowerCase()].filter(letter =>  letter !== ' ')
    const threeLetter = []
    if (lettersOfWord.length < 3) {
        console.log('Введіть слово більше 3 букв');
    } else {

    let i = Math.ceil(lettersOfWord.length / 3)

    for (; i > 0; i--) {
        threeLetter.push(lettersOfWord.splice(0,3).join(''))
    }
    }
    return threeLetter
}

console.log(divideByThree('Commander'))
console.log(divideByThree('co'))

/*
Створіть функцію generateCombinations(word), яка видасть всі можливі перестановки(унікальні, без повторень) букв в слові. 
Для тестів не передавайте слова в яких більше 10 букв. Краще взагалі обмежити работу функції 10 буквами. 
Приклад: generateCombinations("man") -> ["man", "mna", "amn", "anm", "nam", "nma"] Приклад: generateCombinations("ol") -> ["ol", "lo"]
*/
function generateCombinations(word) {
    if (word.length < 2) {
        return [word];
    } else if (word.length > 10) {
        return "Дуже довге слово"
    } else {
        let allCombinations = [];
        for (let i = 0; i < word.length; i++) {
            let letter = word[i];
            let shortWord = word.substr(0, i) + word.substr(i + 1, word.length - 1);
            let shortWordArray = generateCombinations(shortWord);
            for (let j = 0; j < shortWordArray.length; j++) {
                allCombinations.push(letter + shortWordArray[j]);
            }
        }
        return allCombinations;
    }
}

console.log(generateCombinations('man'))