let timestamp = 9462;
let hours = Math.floor(timestamp / 60 / 60);
let minutes = Math.floor(timestamp / 60) - (hours * 60);
let seconds = timestamp % 60;

console.log(hours + ':' + minutes + ':' + seconds);