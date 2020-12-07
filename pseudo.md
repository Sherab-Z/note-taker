Layman's Plan:

0. Initailise variables:
    a. noteCounter = 0
    b. noteStr = ""
    c. sideCounter = 0

1. User adds note-string and presses 'Add Note'

2. JS gets User's note-string from text-box, assigns it to noteStr variable

3. Create & add new note:
    a. increment noteCounter
    b. make container: create & add <div> tag with class="note-card"
    c. add title: create <h4>, append "Note " + value of noteCounter
    d. add noteStr: create <p>, append noteStr
    e. add 'View Detail' button:
        i. openModal(): shows entire note (scrollable with background fixed), dims background, has 'close' button
        ii. closeModal(): closes modal, restores page to previous state
    f. add 'x' button:
        i. removeNote(): deletes note from browser's html
    g. add note to shortest column
        i. compare column lengths
            1. leftArr = array of notes with class="left-note"
            2. make array of notes with class="right-note"
            3. compare array lengths to find the shortest
        ii. append corresponding class to new note div's class attribute

4. When 'View Detail' is clicked on a note, modal pops up:
    - displays entire note text
    - modal is scrollable without page itself scrolling behind it
    - modal has 'Close' btn

5. 'x' button on a note removes it's parent from the page