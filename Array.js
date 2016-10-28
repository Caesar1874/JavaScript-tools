// 数组元素的和
function sum(array) {
    var summary = array.reduce(function(init, ele) {
        return init + ele;
    }, 0);
    return summary;
}

//数组元素的平均值
function average(array) {
    var total= sum(array);
    var length = array.length;
    return average = total / length;
}

//数组元素的乘积
function product(array) {
    var prod = array.reduce(function(init, ele) {
        return init * ele;
    }, 1);
    return prod;
}

// 数组中的最小值
function min(array){
    var minimum = array.reduce(function(init, ele) {
        return init < ele ? init : ele;
    })
    return minimum;
}

// 1 - 2 + 3 - 4 + 5 ... n
function sum1(n) {
    var result = -1 * Math.floor(n / 2) + n * (n % 2)
    return result;
}

// 1 + 2 - 3 + 4 - 5 ... n
function sum2(n){
    var result = 1 + -1 * Math.floor((n - 1) / 2) + n * ((n - 1) % 2);
    return result;
}

// range: 0 ~ n-1
function range(n) {
    var arr = [];
    for(var i = 0; i < n; i++) {
        arr.push(i);
    }
    return arr;
}

// 1 ~ n
function rangeVariant(n) {
    var arr = [];
    for(var i = 1; i <= n; i++) {
        arr.push(i);
    }
    return arr;
}

// 阶乘
function factorial(n){
    var arr = rangeVariant(n);
    return arr.reduce(function(init, ele) {
        return init * ele;
    }, 1);

}

// 四则运算
function calculator(operator, a, b){
    var expression = `${a}${operator}${b}`;
    return eval(expression);
}


