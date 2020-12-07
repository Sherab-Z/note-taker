document.getElementById("submit-btn").onclick = function() {
    newNoteObj.validateNote();
} 

let newNoteObj = {
// NOTE: this can be organised into sub-objects on 2nd coding iteration
    noteStr             : document.getElementById("textbox"),
    noteCounter         : 0,
    newNote             : "",
    
    validateNote        : function(noteStr) {
// checks for text string. If empty, alerts user; if ok, calls createNewNote()
        if(noteStr === "") {
            alert("Please write a note");
        } else {
            newNoteObj.createNewNote();
        }
        console.log("validateNote() has been called")
    },

    addNoteDiv          : function() { 
// adds div container, with class="note-card", to bottom-section-div

        noteDiv = document.createElement("div");
        noteDiv.className = "note-card ";

        newNote = noteDiv;

        console.log("addNoteDiv() has been called")
        return newNote;
    },

    floatToShortCol        : function(newNote) {
// compares column lengths; floats new note to shortest col, or floats left if cols are equal

        let sideCounter = 0;
        let positionArr = Array.from(document.getElementsByClassName("note-card"));
        let noteClass;
        
        for(noteClass in positionArr) {

            let side = noteClass.className;
// -- & ++ sideCounter
            if (side === "note-card left-note") {
                sideCounter --;
            } else if (side === "note-card right-note") {
                sideCounter ++;
            } /* else {
                console.log("note card has irregular class: " + ...)
            } ADD THIS IF THERE'S TIME */

            if(sideCounter <= 0) {
                newNote.className = "note-card left-note"
            } else if (sideCounter > 0) {
                newNote.className = "note-card right-note"
            }
        }

        console.log("floatToShortCol() has been called")
        return newNote;
    },

    addNoteTitle       : function(noteCounter, newNote) {
// adds a title to the new note with the note number

        let titleTag = document.createElement("h4");
        titleTag.className = "note-title";
        let node = titleTag.createTextNode("Note " + noteCounter);
        titleTag.appendChild(node);

        newNote.appendChild(node);

        console.log("addNoteTitle() has been called")
        return newNote;
    },

    addNoteText     : function(noteStr, newNote) {
// gets text-string from textbox, creates <p> tag with class="note-text", & appends string to <p> tag

        let contentTag = document.createElement("p");
        contentTag.className = "note-text";
        let node = contentTag.createTextNode(noteStr);
        contentTag.appendChild(node);
        newNote.appendChild(contentTag)

        return newNote;
    },

    addViewBtn         : function(newNote) {
//adds 'View Detail' button to new note, which opens full note in a modal with a 'close' button

        let viewBtnTag = document.createElement("button");
        viewBtnTag.type = "submit";
        viewBtnTag.className = "view-btn btn btn-info";
        let node = viewBtnTag.createTextNode("View Detail");
        viewBtnTag.appendChild(node);

        newNote.appendChild(viewBtnTag);

        return newNote;
    },

    addDeleteBtn       : function(newNote) {
// adds a delete button to new note, with bootstrap styling via classes

        let deleteBtnTag = document.createElement("button");
        deleteBtnTag.type = "submit";
        deleteBtnTag.className = "del-btn btn btn-light btn-sm";
        let node = deleteBtnTag.createTextNode("x");
        deleteBtnTag.appendChild(node);

        newNote.appendChild(deleteBtnTag);

        return newNote;
    },

    createNewNote       : function(newNote) {
// calls all relevant functions above to create new note to bottom of the page

        newNoteObj.addNoteDiv();
        newNoteObj.floatToShortCol();
        newNoteObj.addNoteTitle();
        newNoteObj.addNoteText();
        newNoteObj.addViewBtn();
        newNoteObj.addDeleteBtn();

        return newNote;
    },
   
    putNewNoteinPage    : function(newNote) {

        let noteSpace = document.getElementById("bottom-section-div");
        let node = noteSpace.createTextNode(newNote);
        notespace.appendChild(node);

        console.log("SUCCESS! Note added to page!");
    },

 /*   viewDetail          : function() {

    },
    closeDetail         : function() {

    },
    deleteNote          : function() {

    }, */

} 

/*
let viewBtn = {

    viewBtnType         : "type=\"submit\"",
    viewBtnClass        : "class=\"view-btn btn btn-info\"",
    viewBtnContent      : "View Detail",
    openModal           : function() {

    },
    closeModal          : function() {

    },
} */
