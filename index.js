/*let submitNoteStr = {
    clearTextbox        : function() {

    },
} */

document.getElementById("submit-btn").onclick=function(){
    newNoteObj.addNoteDiv();
} 

let newNoteObj = {
// NOTE: this can be organised into sub-objects on 2nd coding iteration

    noteCounter         : 0,
    title               : "Note " + noteCounter,
    noteStr             : document.getElementById("textbox"),
    floatToSide         : "",
    divClass            : "class='note-card", // Remove this?
    
    addNoteDiv         : function() {

        let noteDivTag = document.createElement("div");
        noteDivTag.className = "note-card " + floatToSide + "-note";
        
        noteDivTag.innerHTML = "<h2>It worked!</h2>"

        let noteSpace = document.getElementById("bottom-section-div");
        noteSpace.appendChild(noteDivTag);

        return noteDivTag;    
/* Returning noteDivTag variable so as to grab it later more easily when filling 
that div with the other tags. 
*/
    },

    prepNoteTitle       : function(title) {
    //adds a title to the new note with the note number
        let titleTag = document.createElement("h4");
        titleTag.classnoteDivTag.className = "note-title";
        let node = titleTag.createTextNode(title);
        titleTag.appendChild(node);

        return titleTag;
    },

    prepNoteContent     : function(noteStr) {
    //
        let contentTag = document.createElement("p");
        contentTag.classnoteDivTag.className = "note-content";
        let node = contentTag.createTextNode(noteStr);
        contentTag.appendChild(node);

        return contentTag;
    },

    prepViewBtn         : function() {

        let viewBtnTag = document.createElement("button");
        viewBtnTag.type = "submit";
        viewBtnTag.classnoteDivTag.className = "view-btn btn btn-info";
        let node = viewBtnTag.createTextNode("View Detail");
        viewBtnTag.appendChild(node);

        return viewBtnTag;
    },

    prepDeleteBtn       : function() {

        let deleteBtnTag = document.createElement("button");
        deleteBtnTag.type = "submit";
        deleteBtnTag.classnoteDivTag.className = "del-btn btn btn-danger btn-sm";
        let node = deleteBtnTag.createTextNode("x");
        deleteBtnTag.appendChild(node);

        return deleteBtnTag;
    },

    addNoteToPage       : function(noteDivTag, titleTag, contentTag, viewBtnTag, deleteBtnTag) {

        noteDivTag.appendChild(titleTag);
        noteDivTag.appendChild(contentTag);
        noteDivTag.appendChild(viewBtnTag);
        noteDivTag.appendChild(deleteBtnTag);
    },
    
    floatToShortCol        : function() {

        let sideCounter = 0;
        let positionArr = Array.from(document.getElementsByClassName("note-card"));
        let noteClass;
        
        for(noteClass in positionArr) {

            let side = this.classnoteDivTag.className;

            if (side === "note-card left-note") {
                sideCounter --;
            } else if (side === "note-card right-note") {
                sideCounter ++;
            } /* else {
                console.log("note card has irregular class: " + ...)
            } ADD THIS IF THERE'S TIME */

            if(sideCounter <= 0) {
                this.className = "note-card left-note"
            } else if (sideCounter > 0) {
                this.className = "note-card right-note"
            }
        }
    },
   
    viewDetail          : function() {

    },
    closeDetail         : function() {

    },
    deleteNote          : function() {

    },

} 

let putNoteInTable = {

}

let viewBtn = {

    viewBtnType         : "type=\"submit\"",
    viewBtnClass        : "class=\"view-btn btn btn-info\"",
    viewBtnContent      : "View Detail",
    openModal           : function() {

    },
    closeModal          : function() {

    },
}

let delBtn = {
    deBtnT

}