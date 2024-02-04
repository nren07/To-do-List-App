
const container=document.querySelectorAll(".task-container");
let draggingElement=null; 

const onDragOver=(event)=>{
    //prevent default should be conditional 
    // within same container it is not dropable
    if(event.currentTarget.id===draggingElement.parentNode.id) return;

    else if(draggingElement.parentNode.id=="started" && event.currentTarget.id=="to-do"){
        return;
    }
    else if(draggingElement.parentNode.id=="completed" && event.currentTarget.id=="to-do" || 
        event.currentTarget.id=="started"){
        return;
    }
    else event.preventDefault();
};
const onDrop=(event)=>{

    const targetContainer=event.currentTarget;
    
    targetContainer.appendChild(draggingElement);
}

for(let i=0;i<container.length;i++){
    container[i].addEventListener("dragover",onDragOver);
    container[i].addEventListener("drop",onDrop);
}

let onDragStart=(event)=>{
    draggingElement=event.currentTarget;
}