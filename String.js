
var log = function(){
    console.log.apply(console, arguments);
}
var ensure = function(condition, message) {
    if(!condition) {
        log("***测试失败", message);
    }
}

// 将字符串重复指定次数
    // 以给定字符生成指定长度的字符串
function strRepeatNth(str, len) {
    var result= "";
    for(var i = 0; i <　len; i ++) {
        result += str;
    }
    return result;
}

// 重复字符串直到指定长度
function strRepeatUntil(str, length) {
    var result = "";
    while( result.length < length) {
        result += str;
    }
    console.log(result);
    return result.slice(0, length);
}

// 以指定字符在开始补全字符串
function complement(str, length, fillchar = " ") {
    var str = String(str);
    var fill = strRepeatNth(fillchar, length - str.length)
    return fill + str;
}

var testComplement = function(){
    ensure(complement(1, 4, 0) === "0001", "zfill 测试 1");
    ensure(complement(23, 4, 0) === "0023", "zfill 测试 2");
    ensure(complement(12345, 4, 0) === "12345", "zfill 测试 3");
    ensure(complement(169, 5, 0) === "00169", "zfill 测试 4");
}
testComplement();

// 字符串是否只包含空格
function isPureSpace(str){
    if(str === ""){
        return false;
    }
    var space = strRepeatNth(" ", str.length);
    return str.includes(space);
}

// 测试函数
var testIsPureSpace= function() {
    ensure(isPureSpace(' '), 'center 测试 1')
    ensure(isPureSpace('   '), 'center 测试 2')
    ensure(!isPureSpace(''), 'center 测试 3')
    ensure(!isPureSpace('gua'), 'center 测试 4')
}
testIsPureSpace();

// 字符串只包含数字
function isDigit(s) {
    var length = s.length;
    var numbers = "0123456789";
    for(var i = 0; i < length; i++){
        var current = s[i];
        if(!numbers.includes(current)){
            return false;
        }
    }
    return true;
}
var testIsDigit = function() {
    ensure(isDigit('123'), 'is_digit 测试 1')
    ensure(isDigit('0'), 'is_digit 测试 2')
    ensure(!isDigit('  '), 'is_digit 测试 3')
    ensure(!isDigit('1.1'), 'is_digit 测试 4')
    ensure(!isDigit('gua'), 'is_digit 测试 5')
}
testIsDigit();


// 删除字符串前面的空格
function stripLeft(s){
    if( s === "" ||　isPureSpace(s)){
        return "";
    }
    var length = s.length;
    for(var i = 0; i < length; i++){
        var current = s[i];
        if(current !== " "){
            return s.slice(i);
        }
    }
}

var testStripLeft = function() {
    ensure(stripLeft('  gua') === 'gua', 'strip_left 测试 1')
    ensure(stripLeft(' gua  ') === 'gua  ', 'strip_left 测试 2')
    ensure(stripLeft('') === '', 'strip_left 测试 3')
    ensure(stripLeft('    ') === '', 'strip_left 测试 4')
}
testStripLeft();


// 删除字符串后的空格
function stripRight(s) {
    if( s === "" || isPureSpace(s)){
        return "";
    }
    var length = s.length;
    for (var i = length -1 ; i >= 0; i--){
        if( s[i] !== " "){
            return s.slice(0, i+1);
        }
    }
}
// 测试函数
var testStripRight = function() {
    ensure(stripRight('  gua') === '  gua', 'strip_right 测试 1')
    ensure(stripRight(' gua  ') === ' gua', 'strip_right 测试 2')
    ensure(stripRight('') === '', 'strip_right 测试 3')
    ensure(stripRight('    ') === '', 'strip_right 测试 4')
}
testStripRight();

// 删除字符前后的空格
function strip(s){
    s = stripLeft(s);
    s = stripRight(s);
    return s;
}
var test_strip = function() {
    ensure(strip('  gua') === 'gua', 'strip 测试 1')
    ensure(strip(' gua  ') === 'gua', 'strip 测试 2')
    ensure(strip('') === '', 'strip 测试 3')
    ensure(strip('    ') === '', 'strip 测试 4')
}
test_strip();

// 删除字符串中的所有空格
function stripAll(str) {
    if( str === "" ||　isPureSpace(str)){
        return "";
    }
    var result = str.split("").filter(function(ele) {
        return ele !== " ";
    });
    return result.join("");
}

