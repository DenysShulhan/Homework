function getRandomInt() {
    return Math.floor(Math.random() * 256);
  }

function generateBlocks () {
    const block = document.createElement("div");
    block.className = "box";
    document.body.append(block);

    for (let el = 0; el < 25; el++) {
        const elem = document.createElement("div");
        elem.className = "elem";
        block.append(elem);

        elem.style.background = `rgb(${getRandomInt()}, ${getRandomInt()}, ${getRandomInt()})`
    }
}


function generateBlocksInterval () {
    const block = document.createElement("div");
    block.className = "box";
    document.body.append(block);

    for (let el = 0; el < 25; el++) {
        const elem = document.createElement("div");
        elem.className = "elem";
        block.append(elem);

        setInterval(() => elem.style.background = `rgb(${getRandomInt()}, ${getRandomInt()}, ${getRandomInt()})`, 1000);
    }
}

document.body.querySelector("#btnOutput").onclick = generateBlocks;
document.body.querySelector("#btnMix").onclick = generateBlocksInterval;