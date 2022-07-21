const letters = document.querySelectorAll(".letter")
const audios = document.querySelectorAll('audio')

function word () {
    const dataKey = this.attributes[1].textContent
    audios.forEach(el => {
        if (dataKey === el.id) {
           elem = document.getElementById(`${dataKey}`)
           elem.play()
        }
    })
}

letters.forEach (el => {
    el.onclick = word
})

document.onkeydown = function (event) {
    audios.forEach(el => {
       if (event.keyCode == el.id) {
        let sound = event.keyCode
        elem = document.getElementById(`${sound}`)
        elem.play(0)
       }
    }
        )
}