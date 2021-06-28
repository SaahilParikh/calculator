;
let add = (x, y) => x + y;
let sub = (x, y) => x - y;
let mul = (x, y) => x * y;
let div = (x, y) => x / y;
function operate(fn, x, y) {
    return fn(x, y);
}
let currentVal = 0;
function setCurrentValue(value) {
    currentVal = value;
}
function op(fn) {
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
$('#decimal').on('click', function (e) {
    const currentText = $('p').text();
    if (currentText.match(/[.]/)) {
        console.log("second decimal");
        return;
    }
    $('p').text($('p').text() + '.');
});
let noop = (x, y) => y;
let opVal = noop;
function runOperation(fn) {
    op(opVal);
    $("p").text("");
    opVal = fn;
}
$("#add").on('click', function (e) {
    runOperation(add);
});
$("#minus").on('click', function (e) {
    runOperation(sub);
});
$("#multiply").on('click', function (e) {
    runOperation(mul);
});
$("#division").on('click', function (e) {
    runOperation(div);
});
$("#equal").on('click', function (e) {
    runOperation(noop);
    $('p').text(currentVal.toPrecision(4));
});
$('#clear').on('click', () => clear());
$('#back').on('click', () => backspace());
//# sourceMappingURL=scripts.js.map