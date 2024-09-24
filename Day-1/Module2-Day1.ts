
// First Question

function areaRectangle(a:number, b:number) {
    const length = a;
    const width = b;
    console.log(`Area of rectangle = ${length * width}`);
}

console.log(areaRectangle(5, 3));

// Second Question

function diameter(a: number) {
    const diamter = 2 * a;
    const circumference = 2 * Math.PI * a;
    const area = Math.PI * a ** 2;

    return `diameter = ${diamter}, circumference = ${circumference}, area = ${area}`;
}

console.log(diameter(5));

// Third question

function triangle(a, b) {
    const triangle = 180 - (a+b);

    return triangle;

}

console.log(triangle(80, 65))

// // forth question

function datesDifference(date1, date2) {
    const Date1: Date = new Date('2024-03-19');
    const Date2: Date = new Date('2024-03-21');
    const timeDifference = Math.abs(date2.getTime() - date1.getTime());
    const dayDifference = timeDifference / (1000 * 60 * 60 * 24);

    return datesDifference;

}

console.log(datesDifference(date1, date2));

// // Fifth question 

function initialName() {
    const fullName = "John Doe"
    const words = fullName.split(" ");
    const initials = words.map(word => word[0]).join(" ");

    return initialName;

}

console.log(initialName());