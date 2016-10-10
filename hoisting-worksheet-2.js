//exercise 1

var myObj = { class: [] };
var className = 'animating';

function animateLeft(obj) {
	var className2 = 'left';
    obj.class.push(className);
    obj.class.push(className2);
}

animateLeft(myObj);
console.log(myObj);

// created a second variable name for "left" and moved it to the top of the local scope. So there is 
// no conflict with global variable.




//exercise 2

var unit = 'F';

function formatTemp(temp, celcius) {
	var trueUnit = unit;

    if (celcius) {
        trueUnit = 'C';
    }

    return temp + '&deg;' + trueUnit;
}

var temp = formatTemp(99);

console.log(temp);

// moved var unit = 'C'; to outside of formatTemp as it was returning undefined when contained by the formatTemp function.




//exercise 3

var update = true;
var a = 0;

function increment() {
    if (update === false) {
        return;
    }

    function refresh() {
        a++;

        if (a >= 10) {
            update = false;
        }
    }

    refresh();
}

for (var i = 0; i < 50; i++) {
    increment();
}

console.log(a);

// changed "function update" to "function refresh" to avoid conflict with var update.





// exercise 4

function outer() {
	function inner() { return 'Hello'; }
    return inner();
    
}

console.log(outer());

// moved "function inner() { return 'Hello'; }" above "return inner();"






// exercise 5

var logTime = function logTime () {
    var date = new Date();
    console.log('The time is ' + date.getHours() + ':' + date.getMinutes());
}

logTime();

// moved logTime(); below the function as "var logTime" was being hoisted and "function logTime" was not 
// resulting in var logTime = undefined























