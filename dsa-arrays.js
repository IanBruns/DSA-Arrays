const Array = require('./array');

function main() {

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push(3);
    //{length:1, capacity: 3, memory address: 0}

    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    // { length: 6, capacity: 12, memory address: 3 }

    arr.pop();
    arr.pop();
    arr.pop();
    // { length: 3, capacity: 12, memory address: 3 }
    //capacity doesn't change as the pop allows for the spaces to be reused

    const indexAtZero = arr.get(0);

    for (let i = arr.length - 1; i >= 0; i--) {
        arr.remove(i);
    }
    arr.push("tauhida");
    console.log(arr.get(0));
}

main();