const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]

// // First version with 4 arguments

const createStudentComponent = (name, subject, info, performance) => {
    return `
        <div class="student">
            <h1 class="xx-large ${performance}">${name}</h1>
            <section class="bordered dashed section--padded">${subject}</section>
            <aside class="pushRight">${info}</aside>
        </div>`
}

for (const student of students) {
    let studentComponent = ""
    if (student.score >= 60) {
        studentComponent = createStudentComponent(student.name, student.subject, student.info, "passing")
    } else {
        studentComponent = createStudentComponent(student.name, student.subject, student.info, "failing")
    }
    document.querySelector("#container").innerHTML += studentComponent
}

// Refactored version with only one argument

const createStudentComponent = (studentObject) => {
    return `
        <div class="student">
            <h1 class="xx-large ${studentObject.performance}">${studentObject.name}</h1>
            <section class="bordered dashed section--padded">${studentObject.subject}</section>
            <aside class="pushRight">${studentObject.info}</aside>
        </div>`
}

for (const student of students) {
    let studentComponent = ""
    if (student.score >= 60) {
        student.performance = "passing"
        studentComponent = createStudentComponent(student)
    } 
     else {
        student.performance = "failing"
        studentComponent = createStudentComponent(student)
    }
    document.querySelector("#container").innerHTML += studentComponent
}

// Write functions that build the sub-components of the larger student component.
//     - h1
//     -section
//     - aside
// Invoke those functions inside the createStudentComponent function to build the parent <div>.


const h1 = (name) => {
    return `<h1 class="xx-large">${name}</h1>`
}
const section = (subject) => {
    return `<section class="bordered dashed section--padded">${subject}</section>`
}
const aside = (info) => {
    return `<aside class="pushRight">${info}</aside>`
}
const createStudentComponent = (student) => `
    <div id="student">
        ${h1(student.name)}
        ${section(student.subject)}
        ${aside(student.info)}
    </div>
`

for (const student of students) {
    let studentComponent = ""
    if (student.score >= 60) {
        studentComponent = createStudentComponent(student)
    } else {
        studentComponent = createStudentComponent(student)
    }
    document.querySelector("#container").innerHTML += studentComponent
}

// Create one function that will generate any HTML component, with any content. It should be defined with three arguments.
// 1. The type of HTML component to make
// 2. The content of the component
// 3. The value of the class attribute


const element = (tag, content, className) => {
    return `<${tag} class="${className}">${content}</${tag}>`
}
const createStudentComponent = (student) => `
    <div id="student">
        ${element("h1", student.name, "xx-large passing")}
        ${element("section", student.subject, "bordered dashed section--padded")}
        ${element("aside", student.info, "pushRight")}
    </div>`


for (const student of students) {
    let studentComponent = ""
    if (student.score >= 60) {
        studentComponent = createStudentComponent(student)
    } else {
        studentComponent = createStudentComponent(student)
    }
    document.querySelector("#container").innerHTML += studentComponent
}



