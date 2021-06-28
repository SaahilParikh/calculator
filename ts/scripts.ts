interface operation {
    (data: number, toUpper: number): number;
};

let add: operation =  (x: number, y: number) => x + y;
let sub: operation =  (x: number, y: number) => x - y;
let mul: operation =  (x: number, y: number) => x * y;
let div: operation =  (x: number, y: number) => x / y;

function operate(fn: operation, x: number, y: number) {
    return fn(x, y);
}

let currentVal = 0;
function setCurrentValue(value: number) {
    currentVal = value;
}

function op(fn: operation) {
    setCurrentValue(operate(fn, currentVal, +$('p').text()));
}

function clear() {
    currentVal = 0;
    $('p').text("");
}

function backspace() {
    $('p').text($('p').text().slice(0, -1));
}

$(".number").on('click', (e) => $('p').text($('p').text() + e.target.getAttribute('data-number')));
$('#decimal').on('click', function(e) {
    const currentText: String = $('p').text();
    if (currentText.match(/[.]/)) {
        console.log("second decimal");
        return;
    }
    $('p').text($('p').text() + '.');
});

let noop: operation =  (x: number, y: number) => y;
let opVal:operation = noop;

function runOperation(fn: operation) {
    op(opVal);
    $("p").text("");
    opVal = fn;
}

$("#add").on('click', function(e) {
   runOperation(add);
});

$("#minus").on('click', function(e) {
    runOperation(sub);
});

$("#multiply").on('click', function(e) {
    runOperation(mul);
});

$("#division").on('click', function(e) {
    runOperation(div);
});

$("#equal").on('click', function(e) {
    runOperation(noop);
    $('p').text(currentVal.toPrecision(4));
});

$('#clear').on('click', () => clear());
$('#back').on('click', () => backspace());

