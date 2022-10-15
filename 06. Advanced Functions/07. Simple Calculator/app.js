function calculator() {
    let result = {
        init,
        add,
        subtract
    };

    function init(selector1, selector2, resultSelector) {
        result.field1 = document.querySelector(selector1);
        result.field2 = document.querySelector(selector2);
        result.resultField = document.querySelector(resultSelector);
    }

    function add() {
        const num1 = Number(result.field1.value);
        const num2 = Number(result.field2.value);
        result.resultField.value = num1 + num2;
        clearFields();
    }

    function subtract() {
        const num1 = Number(result.field1.value);
        const num2 = Number(result.field2.value);
        result.resultField.value = num1 - num2;
        clearFields();
    }

    function clearFields(){
        result.field1.value = '';
        result.field2.value = '';
    }

    return result;
}


const calculate = calculator();

calculate.init('#num1', '#num2', '#result');

