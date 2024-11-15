
function addNotes(){
    const newNote = document.createElement('textarea')
    newNote.rows=4;
    newNote.cols=30;

    const notesPara = document.getElementById('notesPara')
    notesPara.appendChild(newNote)
    
    newNote.textContent = document.getElementById('notesPara').value
    document.getElementById('notesPara').value =""

}


function deleteAll(){
     const list= document.getElementById("notesPara");
     list.innerHTML="";    
}

