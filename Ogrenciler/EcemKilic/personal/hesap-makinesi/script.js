let result = document.getElementById('result');

function appendToResult(value) {
    result.value += value;
}

function clearResult() {
    result.value = '';
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        alert('Geçersiz işlem');
        clearResult();
    }
}