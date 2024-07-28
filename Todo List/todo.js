let todo=[];
let req=prompt("enter your choise");
while(true)
    {
    if(req=="quit"){
        console.log("quitting todo app");
        break;
    }
    if(req=="list")
        {
        console.log("___________");
        for(let i=0;i<todo.length;i++)
            {
            console.log(i,todo[i]);
        }
        console.log("___________");   
    }
    else if(req=="add")
        {
        let task=prompt("please enter the task you want to add");
        todo.push(task);
        console.log("task added");
    }
    else if(req=="delete")
        {
        let idx =prompt("Please enter the task index");
        todo.splice(idx,1);
        console.log("Task deletde");
    }
    else
    {
        console.log("wrong request");
    }
    req=prompt("enter your choise");
}