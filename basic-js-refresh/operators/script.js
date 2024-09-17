function calculate(num1, num2) {
    return {
        sum: num1 + num2,
        difference: num1 - num2,
        product: num1 * num2,
        quotient: num1 / num2,
        remainder: num1 % num2,
        power: num1 ** num2
    };
}

calculate(10, 4);