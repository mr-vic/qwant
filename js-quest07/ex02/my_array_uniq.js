function my_array_uniq(arr) {
    let uniq = [... new Set(arr)];
    return uniq;
};

//console.log(my_array_uniq([1, 1, 1, 2, 3, 4, 1]));