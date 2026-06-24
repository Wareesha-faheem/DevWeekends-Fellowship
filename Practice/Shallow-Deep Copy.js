// 1. Create a shallow copy of an object using the spread operator and change one of its primitive properties. Does the original object change?
const user1={
    name:"Wareesha",
    email:"worldwareeshas@gmail.com",
    age:18
}
const user2= {...user1}
user2.name="Ali"
console.log(user1.name)
console.log(user2.name)

// 2. Create a shallow copy of an object containing a nested object. Modify a nested property in the copy. What happens to the original object?
const test={
    id:6,
    address:{
        city:"karachi",
        state:"sindh"
    }
}
const test2={...test}
test2.address.city="lahore"
console.log(test.address.city)
console.log(test2.address.city)

// 3. Create a deep copy of an object using structuredClone(). Modify a nested property in the copy. Does the original object change?
const test3=structuredClone(test)
test3.address.state="punjab"
console.log(test.address.state)
console.log(test3.address.state)

// 4. Create a shallow copy of an array using the spread operator. Add a new element to the copied array. Does the original array change?
const arr=[1,2,3]
const arr2=[...arr]

arr2.push(4)
console.log(arr)
console.log(arr2)

// 5. Create a shallow copy of a nested array. Modify an inner array element. Explain why the original array changes.
const arr1=[
    [1,2,3],
    [4,5,6]
]
const arr3=[...arr1]
arr3[0][1]=91
console.log(arr1[0][1])
console.log(arr3[0][1])

// 6. Given two variables pointing to the same object, modify one variable and observe the effect on the other. Why does this happen?
const u2=user1;
u2.age=99
console.log(user1.age);
console.log(u2.age)

// 7. Write a shallowCopy() function that creates a shallow copy of an object.
function shallowcopy(userobj){
    const usernew={...userobj}
    return usernew
}
const nu=shallowcopy(user1)
nu.name="Ayesha"
console.log(user1.name)
console.log(nu.name)

// 8. Write a deepCopy() function that creates a deep copy of an object.
function deepcopy(newobj){
    const deepobj=structuredClone(newobj)
    return deepobj
}
const myobj=deepcopy(test)
myobj.address.city="ISLAMABAD"
console.log(test.address.city)
console.log(myobj.address.city)

// 9. Given an object containing nested arrays and objects, create both a shallow copy and a deep copy and compare their behavior after modifying nested values.
const cmplx={
    nme:"Wareesha",
    location:{
        housenum:[1,2,3],
        area:"gulshan"
    }
}
const shallowcmplx={...cmplx}
shallowcmplx.location.housenum[0]=24
console.log("SHALLOW COPY: ")
console.log(cmplx.location.housenum[0])
console.log(shallowcmplx.location.housenum[0])

console.log("DEEP COPY")
const deepcmplx=structuredClone(cmplx)
deepcmplx.location.housenum[0]=68
console.log(cmplx.location.housenum[0])
console.log(deepcmplx.location.housenum[0])

// 10. Explain the difference between shallow copy and deep copy with an example.
console.log("Shallow Copy: ")
console.log("Shallow copy refers to making a copy but it doesn't copies nested items for each object. For primitive datatypes, copying using shallow copy assigns different memory lcoaiton and a storage for each copy however for non primtive datatypes in heap, both copy of objects refer to the same location of object therefore changing properties of copied obejct also affects the original object")
console.log("Example: ")
console.log(`const test={
    id:6,
    address:{
        city:"karachi",
        state:"sindh"
    }
}
const test2={...test}
test2.address.city="lahore"
console.log(test.address.city)
console.log(test2.address.city)`);

console.log("Deep Copy: ")
console.log("deep copy creates a completely new and seprate copy for each object regardless of type. For objects deep copy cna be created using structuredclone() function. When deep copy is done, the copied obejct no mroe has a reference to the original object providing it a seprate version which doesnt affects the original one")
console.log("Example: ")
console.log(`const test3=structuredClone(test)
test3.address.state="punjab"
console.log(test.address.state)
console.log(test3.address.state)`)