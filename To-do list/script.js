tasks=[];

function edittask(id){
    let st=tasks.filter(tk=>tk.id==id);
    let userInput = prompt("Enter Updated Text: ");
    if (userInput !== null && userInput.trim() !== "") {
        st[0].title=userInput
    }
    rendertask()
}
function deletetask(id){
    tasks=tasks.filter(tk=>tk.id!==id);
    rendertask();
}
function rendertask(){ 
    const task=document.getElementById("TaskList")
    task.innerHTML=""
    console.log("Hello World", tasks)
    tasks.forEach(tk => {
        // console.log(tk.title)
        task.innerHTML+=`<li>${tk.title}</li> <button class="edit" onclick="edittask(${tk.id})">Edit</button><button class="delete" onclick="deletetask(${tk.id})">Delete</button>`

    });
}

function addtask(){
    let val_inp=document.getElementById("todo").value.trim()
    // console.log(val_inp)
    tasks.push({
        id:Date.now(),
        title:val_inp
    })
    rendertask()
}

