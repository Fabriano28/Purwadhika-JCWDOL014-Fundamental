let grade = "B";

if (grade == "A" ) {
    console.log("Excellent Result!");
} else if (grade == "B") {
    console.log("Great Result!");
} else if (grade == "C") {
    console.log("Average Result!");
} else {
    console.log("Invalid Result!");
}

switch(grade) {
    case "A": console.log("A");
    case "B": console.log("B");
}

let kata = "Typescript";

console.log(kata  === "Javascript" ?  "Javascript" : "Not Javascript");