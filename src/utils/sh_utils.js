const Delay = (ms) => new Promise(res => setTimeout(res, ms));

function random(min, max) {
    return Math.floor(min + Math.random() * (max - min));
}