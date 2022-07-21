
function getMaxDigit(number) {
    const numberSplit = number.toString().split('')

    let maxValue = 0

    numberSplit.forEach(function(e) {
        if (e > maxValue) {
            maxValue = e
        }
    })
    return +maxValue
}

console.log(getMaxDigit(+prompt("Введіть число для 1 функції")))



function exalt(number, elevate) {
    if (elevate === 0) {
        return 1
    } else if (elevate < 0) { 
        let result = 1;
        for(let i = elevate;i < 0; i++){
        result*=number
    }
    result=1/result
    return result
    } else {
        let result = number
        for (let i = 0; i < elevate - 1; i++) {
            result = result * number
        }
        return result
    }
}

console.log(exalt(+prompt("Введіть число"), +prompt("Введіть степінь")))


function editName(name) {
    const result = name[0].toUpperCase() + name.slice(1).toLowerCase()
    return result
}

console.log(editName("den"))


function tax(salary) {
    const taxes = 19.5
    result = salary - salary * taxes / 100;
    return result.toFixed(2)
}

console.log(tax(1000))


function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

console.log(getRandom(5, 10))


function countLetter(letter, word) {
    let counter = 0
    for (let i = 0; i < word.length; i++) {
        if (word[i].toLowerCase() === letter.toLowerCase()) counter++
    }
    return counter
}

console.log(countLetter("a", "Ababab"))


function convertCurrency(data) {
    const exchRate = 33
    let message
    value = data.toLowerCase()
    if (
        isNaN(parseInt(value)) || 
        value
          .replace(`${parseInt(value)}`, "")
          .replace("$", "")
          .replace("uah","")
          .replace(" ","").length > 0
    ) { console.log("Введіть коректне значення")
  }else if (value.includes("$")) {
      message = `${parseInt(value)}$ = ${(parseInt(value) * exchRate).toFixed(2)}UAH`
  } else if (value.includes("uah")) {
      message = `${parseInt(value)}UAH = ${(parseInt(value) / exchRate).toFixed(
        2
      )}$`
  } else {
      console.log("Введіть коректну валюту")
  }
  return message
}

console.log(convertCurrency("2500 UAH"))


function getRandomPassword(length = 8) {
    let result = ''
    for (let i = 0; i < length; i++) {
        result += Math.floor(Math.random() * 10)
    }
    if (result[0] === '0') {
        return getRandomPassword(length)
    } else {
    return result}
}

console.log(+getRandomPassword(5))


const deleteLetters = (letter, text) => text.toLowerCase().split('').filter(item => item !== letter.toLowerCase()).join('')

console.log(deleteLetters('a', "blablabla"))


function isPalindrome(word) {
    const removeChar = word.replace(/[^A-Z0-9А-Я]/ig, "").toLowerCase();
    const checkPalindrome = removeChar.split('').reverse().join('');
    return (removeChar === checkPalindrome) ? 'Polindrome - true' : 'is a not Polindrome - false'
}

console.log(isPalindrome("мадам"));


const deleteDuplicateLetter = (text) => {
    let str = text.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (i !== str.lastIndexOf(str[i])) {
            str = str.split(str[i]).join('');
            i--;
        }
    }
    return str;
}

console.log(deleteDuplicateLetter("Бісквіт був дуже ніжним"));