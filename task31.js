console.log(remove_array_element([2, 5, 9, 6], 5));

function remove_array_element(ar, value) {
    ar.splice(ar.indexOf(value), 1)
    return ar;
}