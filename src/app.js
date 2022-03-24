function selector() {
    const matched = document.querySelector("#main")
    return matched
}

console.log(selector())

const students = [
    { name: "Tasha", grades: [80, 67, 75, 62] },
    { name: "Tuvok", grades: [90, 88, 91, 92] },
    { name: "Dax", grades: [88, 90, 89, 85] },
    { name: "Neelix", grades: [60, 54, 48, 50] }
]

function scholarfunction() {

    const students = [
        { name: "Tasha", grades: [80, 67, 75, 62] },
        { name: "Tuvok", grades: [90, 88, 91, 92] },
        { name: "Dax", grades: [88, 90, 89, 85] },
        { name: "Neelix", grades: [60, 54, 48, 50] }
    ]

    const studentsScholarship = []

    let sum = 0

    for (let student of students) {
        for (let grade of student.grades) {
            sum += grade
        }
        if (sum / student.grades.length > 80) {
            student['gradeAvg'] = student['grades']
            student.gradeAvg = (sum / student.grades.length)
            delete student['grades']
            studentsScholarship.push(student)
        }
        sum = 0
    }

    return studentsScholarship

}
console.log(scholarfunction())