
let newNoteObj = {
/* this contains all the properties & methods needed for the app to function. Each successive method updates newNoteTags property's value, 
   until putNewNoteTagsIntoNewNoteDiv() passes it, completed, over to html */

// NOTE: this obj can be organised into sub-objects on 2nd coding iteration

/// PROPERTIES:

    noteTextStr         : "",
    noteCounter         : 0,
    newNoteTags         : "test string",

/// METHODS:

    validateNote() {
// checks for text string. If empty, alerts user; if ok, calls createNewNote()
        if(this.noteTextStr === "") {
            alert("Please write a note");
        } else {
            this.createNewNote();

            console.log("validateNote() has been called. noteTextStr: '" + this.noteTextStr + "' ; Note Counter: " 
            + this.noteCounter);
        }
    },

    createNewNote() {
// calls all relevant functions below to create & append new note to bottom of the page
        
                this.addNoteDivToPage();
                this.floatToShortCol();
                this.addNoteTitle();
                this.addNoteText();
                this.addViewBtn();
                this.addDeleteBtn();
        
                this.putNewNoteTagsIntoNewNoteDiv();

                console.log("createNewNote() has been called. newNote: " + this.newNoteTags.value);
    },
           
    addNoteDivToPage() { 
// adds div container, with class="note-card", to bottom-section-div

        noteDiv = document.createElement("div");
        noteDiv.className = "note-card ";
        noteDiv.id = "new-note"; // this is a temporary id for locating this div while building it out. It'll be removed once the note is complete

        let noteSpace = document.getElementById("bottom-section-div");
        noteSpace.appendChild(noteDiv);

        console.log("addNoteDiv() has been called. noteDiv: " + noteDiv.outerHTML);
    },

    floatToShortCol() {
// compares column lengths; floats new note to shortest col, or floats left if cols are equal

        let newNote = document.getElementById("new-note");
        let sideCounter = 0;
        let positionArr = Array.from(document.getElementsByClassName("note-card"));
        let note;
        
        for(note in positionArr) {

            let side = note.className;
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

        console.log("floatToShortCol() has been called. newNote: " + this.newNoteTags.value);
        return newNoteTags;
    },

    addNoteTitle() {
// adds a title to the new note with the note number

        let titleTag = document.createElement("h4");
        titleTag.className = "note-title";
        let node = document.createTextNode("Note " + this.noteCounter);
        titleTag.appendChild(node);

        this.newNoteTags.push(titleTag);

        console.log("addNoteTitle() has been called. newNote: " + this.newNoteTags.value);
        return newNoteTags;
    },

    addNoteText() {
// gets text-string from textbox, creates <p> tag with class="note-text", & appends string to <p> tag

        let contentTag = document.createElement("p");
        contentTag.className = "note-text";
        let node = document.createTextNode(this.noteTextStr);
        contentTag.appendChild(node);
        this.newNoteTags.push(contentTag)

        console.log("addNoteText() has been called. newNote: " + this.newNoteTags.value);
        return newNoteTags;
    },

    addViewBtn() {
//adds 'View Detail' button to new note, which opens full note in a modal with a 'close' button

        let viewBtnTag = document.createElement("button");
        viewBtnTag.type = "submit";
        viewBtnTag.className = "view-btn btn btn-info";
        let node = document.createTextNode("View Detail");
        viewBtnTag.appendChild(node);

        this.newNoteTags.push(viewBtnTag);

        console.log("addViewBtn() has been called. newNote: " + this.newNoteTags.value);
        return newNoteTags;
    },

    addDeleteBtn() {
// adds a delete button to new note, with bootstrap styling via classes

        let deleteBtnTag = document.createElement("button");
        deleteBtnTag.type = "submit";
        deleteBtnTag.className = "del-btn btn btn-light btn-sm";
        let node = document.createTextNode("x");
        deleteBtnTag.appendChild(node);

        this.newNoteTags.push(deleteBtnTag);

        console.log("addDeleteBtn() has been called. newNote: " + this.newNoteTags.value);
        return newNoteTags;
    },

    putNewNoteTagsIntoNewNoteDiv() {

        let newNote = document.getElementById("new-note");
        let node = this.newNoteTags;
        newNote.appendChild(node);

        console.log("SUCCESS! Note added to page!");

        document.getElementById("new-note").id.remove();
    }

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

/// EVENT HANDLERS:

document.getElementById("submit-btn").onclick = function() {

    newNoteObj.noteTextStr = document.getElementById("textbox").value;
    newNoteObj.validateNote();
} 