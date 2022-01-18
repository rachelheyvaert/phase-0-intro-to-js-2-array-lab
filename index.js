// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}





function appendCat(name) {
    return appendCat = [...cats, name];
}

function prependCat(name) {
    return prependCat = [name, ...cats]
}

function removeLastCat() {
    return removeLastCat = [...cats.slice(0, 2)];
}
function removeFirstCat() {
    return removeFirstCat = [...cats.slice(1)];
}