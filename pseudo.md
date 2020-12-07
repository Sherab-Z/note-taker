Layman's Plan:

0. Initailise variables:
    a. noteCounter = 0
    b. noteStr = ""

1. User adds note-string and presses 'Add Note'

2. JS gets & verifies User's note-string from text-box
    - if contains a string: itassigns it to noteStr variable
    - if empty string: alerts "Please write your note"

3. Create & add new note:
    a. increment noteCounter
    b. make container: create & add <div> tag with class="note-card" and temporary id="new-note"
    c. add title: create <h4>, append "Note " + value of noteCounter
    d. add noteStr: create <p>, append noteStr
    e. add 'View Detail' button:
        i. openModal(): shows entire note (scrollable with background fixed), dims background, has 'close' button
        ii. closeModal(): closes modal, restores page to previous state
    f. add 'x' button:
        i. removeNote(): deletes note from browser's html
    g. add note to shortest column
        i. compare column lengths & assign note to shortest column
            1. let sideCounter = 0
            1. iterate through notes, increment sideCounter for each right-note, decrement for each left-note
            3.  - if sideCounter <= 0: append "left-note" to div class (note goes to left  side if cols are equal)
                - else if sideCounter > 0: append "right-note" to div class
    h. remove id="new-note"

4. When 'View Detail' is clicked on a note, modal pops up:
    - displays entire note text
    - modal is scrollable without page itself scrolling behind it
    - modal has 'Close' btn

5. 'x' button on a note removes it's parent from the page