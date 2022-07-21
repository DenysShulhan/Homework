do {
    n = +prompt("Введіть число від якого ми будемо складати", 1);
    if (n % 1 !== 0)  alert("Введіть ціле число");
}while (n % 1 !== 0);
    

do {
    m = +prompt("Введіть число до якого ми будемо складати", 2);
    if (m % 1 !== 0)  alert("Введіть ціле число");
}while (m % 1 !== 0);
    
const skipPairs = confirm("Пропускать парные числа?");

let summary = 0;
if (m > n) {
for (let i = n; i <= m; i++) {
    if (skipPairs && i % 2 == 0) {
        continue;
    }
    summary += i;
}
} else {
    for (let i = n; i >= m; i--) {
        if (skipPairs && i % 2 == 0) {
            continue;
        }
        summary += i;
    }
}

document.write(`Сумма чисел між ${n} і ${m} складає ${summary}`)