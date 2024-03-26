// array objecy class with push, pop and swap methods
class array_object {
    constructor() {
        this.key_values = {};
        this.length = 0;
    }

    // push method to add element to the array
    push(element) {
        this.length++;
        this.key_values[this.length - 1] = element;
    }
  
    // pop method to remove element from the array
    pop() {
        if (this.length === 0) {
            console.log("Array is Empty");
            return undefined;
        }
        
        // remove the last element from the array
        const removed_element = this.key_values[this.length - 1];
        delete this.key_values[this.length - 1];
        this.length--;
        return removed_element;
    }

    // swap method to swap elements at given indexes
    swap(a, b) {
        if (this.length === 0 || a < 0 || a >= this.length || b < 0 || b >= this.length) {
            console.log("Invalid index");
            return;
        }
        [this.key_values[a], this.key_values[b]] = [this.key_values[b], this.key_values[a]];
    }
}
  
// testing the array object
const test_array = new array_object();
test_array.push(10);
test_array.push(2);
test_array.push(3);
console.log("array object:", test_array.key_values);
  
// removing the last element from the array
const last_element = test_array.pop();
console.log("element removed:",last_element);
console.log("array after removing last element:", test_array.key_values);
  
// swapping elements at given indexes
test_array.swap(0, 1);
console.log("array after swapping elements:",test_array.key_values);
  
// swapping elements at invalid indexes
test_array.swap(0, 10);
console.log("array after trying to swap elements with invalid indexes:",test_array.key_values);