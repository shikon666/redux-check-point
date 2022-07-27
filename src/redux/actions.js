


export const addTodo = (MyToDo) =>{
    
    return {
        type:'ADD_TODO',
        payload:MyToDo
    }
}

export const todoIsDone = (data,skander ) =>{
    

    return {
        type:'IS_DONE',
        
        payload:data,
        skander:skander
      
       
        
    }
}

export const deleteToDo = (ID) =>{
    
    return {
        type:'DELETE',
        payload:ID
    }
}

export const filterDone = (filtedBy) =>{
   
    return {
        type:'FILTER_TODO',
        payload:filtedBy
    }
}