function my_average_mark(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i].integer;
    }
    return (sum / arr.length).toFixed(1);
};

/*console.log(my_average_mark([
    {"string": "John", "integer": 7},
    {"string": "Margot", "integer": 8},
    {"string": "Jules", "integer": 4},
    {"string": "Marco", "integer": 19}
   ]));*/