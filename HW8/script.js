class Students {
    constructor(university, course, fullName, marks) {
        this.university = university
        this.course = course
        this.fullName = fullName
        this.marks = marks
        this.dismiss = false
    }

    get getMarks() {
        if (this.dismiss) {
            return null            
        } else {
        return this.marks
        }
    }

    set setMarks(number) {
        if (this.dismiss) {
            return null            
        } else {
            this.marks.push(number)
        }
    }

    getAverageMark() {
       return this.marks.reduce((sum, curr) => { 
            return sum + curr / this.marks.length
        }, 0)
    }
    
    getInfo() {
        return `${this.course} ${this.university} ${this.fullName}`
    }

    dismissed() {
        this.dismiss = true
    }

    recover() {
        this.dismiss = false
    }
    
}

// Advanced

class BudgetStudents extends Students { 
    constructor (university, course, fullName, marks, scholarShip) {
    super(university, course, fullName, marks)
    this.scholarShip = scholarShip
    setInterval (function () {
        this.getScholarship()
    }.bind(this), 30000)
    }

    getScholarship() {
        if (this.dismiss || this.getAverageMark() < 4) {
            return 'Ви виключені або Ваша середня оцінка менше 4'
        } else {
            console.log('Ви отримали 1400 грн. стипендії');
        }
    }
}



const ostap = new Students('Вищої Школи Психотерапії м.Одеса', 'Студент 1го курсу', 'Остап Бендер', [5, 4, 4, 5])

console.log(ostap)

console.log(ostap.getInfo())

console.log(ostap.getMarks)

ostap.setMarks = 5

console.log(ostap.getMarks)

console.log(ostap.getAverageMark())

console.log(ostap.dismissed())

ostap.setMarks = 5

console.log(ostap.getMarks)

// Перевірка advanced 

const taras = new BudgetStudents('Вищої Школи Психотерапії м.Одеса', 'Студент 1го курсу', 'Тарас Бендер', [5, 4, 4, 5], 1400)

/*console.log(taras.getScholarship())

taras.dismissed()

console.log(taras.getScholarship())

taras.recover()

taras.setMarks = 1

console.log(taras.getScholarship())*/
