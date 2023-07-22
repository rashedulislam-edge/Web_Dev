function largestElement(numbers) {
    let largest = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        let elemenet = numbers[i];

        if (elemenet > largest) {
            largest = elemenet;
        }
    }
    return largest;
}
//let ages=[23,11,2342,24,2342,143,353];
console.log("oldest", largestElement([23, 11, 2342, 24, 2342, 121314, 143, 353]));


function smallestElement(numbers) {
    let smallest = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        let elemenet = numbers[i];
        if (elemenet < smallest) {
            smallest = elemenet;
        }
    }
    return smallest;
}
let ages = [12, 32, 42, -12, 543, 64, 12,];
console.log("Smallest:", smallestElement(ages));
