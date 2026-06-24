// // Q1. Store all three fruits in separate variables and print them.
// const fruits = ["Apple", "Banana", "Mango"];
// const [a,b,c] =fruits;
// console.log(a)
// console.log(b)
// console.log(c)

// // Q2. Extract only 10, 30, and 50.
// const numbers = [10, 20, 30, 40, 50];
// const [n1, , n2, , n3] =numbers
// console.log(n1)
// console.log(n2)
// console.log(n3)

// // Q3. Extract all properties and print:
// const student = {
//     name: "Ali",
//     age: 20,
//     city: "Karachi"
// };
// const {name,age,city}=student
// console.log(name + " is "+age+" years old and lives in "+city);

// // Q4. Store the first two marks separately and all remaining marks in another array.
// const marks = [85, 90, 95, 80, 75];
// const [num1,num2,...rem]=marks;
// console.log(num1)
// console.log(num2)
// console.log(rem)

// // Q5. Extract the properties but rename the variables
// const user = {
//     username: "wareesha",
//     email: "abc@gmail.com"
// };
// const {username:uname, email:mail}=user
// console.log(uname)
// console.log(mail)

// // Q6. Extract name and salary.
// // If salary doesn't exist, it should automatically become 50000.
// const employee = {
//     name: "Ahmed"
// };
// const {name:nname, salary=50000}=employee
// console.log(nname)
// console.log(salary)

// // Q7. Swap the values
// let x = 100;
// let y = 200;

// [x,y]=[y,x]
// console.log(x)
// console.log(y)

// // Q8. Print without using dot notation
// const person = {
//     name: "Sara",
//     address: {
//         city: "Lahore",
//         country: "Pakistan"
//     }
// };
// const {name:fname, address:{city:ncity,country:ncountry}}=person
// console.log(fname+ " lives in "+ncity+", "+ ncountry)

// // Q9. Extract name, age & first skill
// const data = [
//     "Ali",
//     20,
//     ["HTML", "CSS", "JS"]
// ];
// const [nm, ag, [a1,a2,a3]]=data
// console.log(nm)
// console.log(ag)
// console.log(a1)

// // Q10. Extract & print employee names - role
// const company = {
//     companyName: "TechSoft",
//     employees: [
//         {
//             name: "Ali",
//             role: "Developer"
//         },
//         {
//             name: "Sara",
//             role: "Designer"
//         }
//     ]
// };
// const {name:cname, employees:[{name:nm1, role:r1},{name:nm2, role:r2}]}=company
// console.log(nm1+" - "+r1);
// console.log(nm2+" - "+r2);

// // Q11. Create a function that receives object and using desturcting print it
// const usernew={
//     name:"wareesha",
//     age:18,
//     city:"karachi"
// }
// function displayuser({name, age, city}){
//     console.log(name);
//     console.log(age);
//     console.log(city);
// }
// displayuser(usernew)

// // Q12. Extract name and email in one destructuring statement.
// const response = {
//     status: "success",
//     data: {
//         user: {
//             name: "Ali",
//             email: "ali@gmail.com"
//         }
//     }
// };
// const {status, data:{user:{name:newname, email:em}}}=response
// console.log("Name: "+newname+" Email: "+em)

// // Q13. Extract: First student's name, First student's highest mark (90) without accessing them using indexes after destructuring.
// const students = [
//     {
//         name: "Ali",
//         marks: [80, 85, 90]
//     },
//     {
//         name: "Sara",
//         marks: [88, 92, 95]
//     }
// ];
// const [{name:nwm1, marks:mr1},{name:nwm2, marks:[mrn1,mrn2,mrn3]}]=students
// console.log("First students name: "+nwm1);
// // max=0;
// // for(let i=0;i<3;i++){
// //     if(mr1[i]>max){
// //         max=mr1[i]
// //     }
// // }
// const [ab1,ab2,ab3]=mr1;
// console.log("First students max marks: "+ab3)

// // Q14. Using a single destructuring statement, extract.
// const profile = {
//     name: "Wareesha",
//     skills: ["HTML", "CSS", "JavaScript", "React"],
//     social: {
//         github: "wareesha-dev",
//         linkedin: "wareesha-faheem"
//     }
// };
// const {name:my,skills:[s1,s2,s3,s4],social:{github,linkedin}}=profile
// console.log(my);
// console.log(s1);
// console.log(github);

// // Q15. Using one destructuring statement, extract
// const university = {
//     name: "ABC University",
//     departments: {
//         cs: {
//             students: [
//                 {
//                     name: "Ali",
//                     cgpa: 3.8
//                 }
//             ]
//         }
//     }
// };
// const {name:uniname,departments:{cs:{students:[{name:sname,cgpa}]}}}=university
// console.log(uniname);
// console.log(sname);
// console.log(cgpa);

var nm="Wareesha"
console.log(nm)
console.log(`My name is ${nm}`)
console.log("My name is Wareesha")

