function my_count_on_it(arr) {
    arr_count = []
    for (let i=0; i<arr.length; i++){
        arr_count[i] = arr[i].length;
    }

    return arr_count;
};

//console.log(my_count_on_it(["This", "is", "the", "way"]));