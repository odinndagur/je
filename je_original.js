let je
console.log('script start')
class JE {
    constructor(){
        this.jonEgillLoaded = false
        this.elements = []

        window.addEventListener("load", (event) => {
            console.log("page is fully loaded");
            if(!this.jonEgillLoaded){
                this.initJonEgill();
            }
        });

        window.addEventListener("resize",() => {
            // this.processElements()
        })
    }

    initJonEgill(){
        let els = document.querySelectorAll(".jon-egill")
        for(let el of els){
            this.elements.push({
                original_text: el.textContent,
                original_dom_element: el,
                replace_element_target: el,
            })
        }
        console.log('jon egill init done')
        this.jonEgillLoaded = true;
        this.processElements()
    }

    display(el,display_el){
        if(!(display_el === el.replace_element_target)){
            el.replace_element_target = display_el
            el.replace_element_target.replaceWith(display_el)
        }
    }

    processElements(){
        console.log()
        console.log(this.elements)
        this.elements.forEach(el =>{
            this.processElement(el)
            console.log(el)
        })
    }

    processElement(el){
        // this.display(el,el.original_dom_element)
        // if(!el.replace_element_target === el.original_dom_element){
        //     el.replace_element_target.replaceWith(el.original_dom_element)
        //     el.replace_element_target = el.original_dom_element
        // }
        let lines = extractLinesFromTextNode(el.original_dom_element.firstChild)

        // let clone = el.original_dom_element.cloneNode()
        let clone = document.createElement('span')
        clone.classList.add('num')

        let done = false
        let placedChars = 0
        let currentLine = 0
        let text = el.original_dom_element.textContent
        console.log(text)
        console.log('loop start')
        let line = lines[currentLine]
        let currentAvailableSlots = line.length
        if(currentAvailableSlots * 2 <= text.length - placedChars){
            for(let i = placedChars; i < placedChars + currentAvailableSlots; i++){
                if(text.length >= placedChars + i){
                    let temp = document.createElement('span')
                    temp.textContent = text[i+currentAvailableSlots] + text[i]
                    clone.appendChild(temp)
                    console.log(temp)
                    placedChars += 2
                }
                else {
                    let temp = document.createElement('span')
                    temp.textContent = " " + text[i]
                    clone.appendChild(temp)
                    placedChars += 1
                }
            }
            currentLine += 1
        }
        if(placedChars >= text.length){
            done = true
        }
        console.log('lolz')
        // this.display(el,clone)
        el.original_dom_element.appendChild(clone)

        // clone.textContent = "lolz yo"
        // let temp = document.createElement('span')
        // temp.textContent = "w'evz"
        // temp.style.color='grey'
        // clone.appendChild(temp)
        // el.replace_element_target.replaceWith(clone)

        // let currentAvailableSlots = lines[0].length

        // if(currentAvailableSlots * 2 >= remainingChars.length){
        //     //splitAll()
        //     let textElements = []
        //     let currentOffset = 0
        //     for(let i = currentOffset; i < currentOffset + targetSlotCount; i++){
        //         if(text.length >= i + currentOffset + targetSlotCount-1){
        //             textElements.push(text[i] + text[i+targetSlotCount])
        //         }
        //         else{
        //             textElements.push(text[i] + " ")
        //         }
        //     }
        // }

                //hvað komast margir?
                // let currentLineChars = remainingChars[:currentAvailableSlots*2]
                // let currentLineChars = remainingChars.substring(0,currentAvailableSlots * 2)
    
                // // let currentLineText = text.substring(0,currentLineTargetSlotCount*2)
                // text = text.substring(currentLineTargetSlotCount*2)
                // let textElements = []
                // for(let i = 0; i < currentLineTargetSlotCount; i++){
                //     if(text.length >= i+currentLineTargetSlotCount-1){
                //         textElements.push(text[i] + text[i+currentLineTargetSlotCount])
                //     }
                //     else{
                //         textElements.push(text[i] + " ")
                //     }
                // }
                //split(lines[0].length)
                //text = text.subString(lines[0].length*2)
                //regenerate lines
            // }
        // } 




        /*
        original_line.length / 2 er hversu mörg slots við þurfum

        finna línur
        fjöldi slots eftir í nuverandi línu er lines[0].length
        
        ef lines[0].length <= target_slots:
            splitta alla stafina
        else:
            chars = lines[0][:target_slots*2]
                target_slots = 3
                0,1,2
                3,4,5
                i   0, 1, 2
                i+3 3  4  5
                for i in range(target_slots):
                    text = line[i] + line[i+target_slots]
                
        */

        

        
        // let new_el = el.original_dom_element.cloneNode(true)
        // new_el.textContent = ""
        // let len = text.length
        // if(len % 2 != 0){
        //     text = text + " "
        // }

        // let currentLineCount = lines[0].length
        // let targetLength = currentLineCount*2

        // // if(original_dom_element.textContent.length > lines[0].length*2){
        //     var chunks = [];
            
        //     for (var i = 0; i < targetLength; i += 1) {
        //         chunks.push(text.substring(i, i + 2));
        //     }
        //     for(let chunk of chunks){
        //         let span = document.createElement("span")
        //         span.textContent = chunk
        //         span.setAttribute("class","num")
        //         new_el.appendChild(span)
        //     }
        //     el.replace_element_target.replaceWith(new_el)
        //     el.replace_element_target = new_el
        // }
    }
    
    // processElementPlaceholder(){
    //     let original_node = document.getElementById("jon-egill")
    //     console.log(original_node)
        
    //     let original_text = original_node.textContent
    //     let clone_node = original_node.cloneNode(true)
    //     original_node.appendChild(clone_node)
    //     clone_node.style.display = "none"
    //     original_node.textContent = ""
        
    //     if(original_text.length % 2 == 0){
    //         original_text = original_text.concat(" ")
    //     }
    //     var chunks = [];
        
    //     for (var i = 0, charsLength = original_text.length; i < charsLength; i += 2) {
    //         chunks.push(original_text.substring(i, i + 2));
    //     }
    //     for(let chunk of chunks){
    //         let span = document.createElement("span")
    //         span.textContent = chunk
    //         span.setAttribute("class","num")
    //         original_node.appendChild(span)
    //     }
        
    //     console.log(clone_node.textContent.length)
    //     console.log(this.isOverflown({element:clone_node,parent:clone_node.parentNode}))
    // }



    // isOverflown = ({ clientHeight, scrollHeight }) => scrollHeight > clientHeight
    // resizeText = ({ element, parent }) => {
    //     let i = 12 // let's start with 12px
    //     let overflow = false
    //     const maxSize = 128 // very huge text size

    //     while (!overflow && i < maxSize) {
    //         element.style.fontSize = `${i}px`
    //         overflow = isOverflown(parent)
    //         if (!overflow) i++
    //     }

    //     // revert to last state where no overflow happened:
    //     element.style.fontSize = `${i - 1}px`
    // }
    }
je = new JE()


var source = document.querySelector( ".jon-egill" ).firstChild;
var button = document.querySelector( ".button" );

// When the user clicks the button, process the text node.
button.addEventListener(
    "click",
    function handleClick( event ) {

        logLines( extractLinesFromTextNode( source ) );

    }
);

function extractLinesFromTextNode( textNode ) {

    if ( textNode.nodeType !== 3 ) {
        throw( new Error( "Lines can only be extracted from text nodes." ) );
    }
    textNode.textContent = collapseWhiteSpace( textNode.textContent );

    var textContent = textNode.textContent;
    var range = document.createRange();
    var lines = [];
    var lineCharacters = [];

    for ( var i = 0 ; i < textContent.length ; i++ ) {

        range.setStart( textNode, 0 );
        range.setEnd( textNode, ( i + 1 ) );

        var lineIndex = ( range.getClientRects().length - 1 );

        if ( ! lines[ lineIndex ] ) {
            lines.push( lineCharacters = [] );
        }
        // Add this character to the currently pending line of text.
        lineCharacters.push( textContent.charAt( i ) );

    }

    // At this point, we have an array (lines) of arrays (characters). Let's
    // collapse the character buffers down into a single text value.
    lines = lines.map(
        function operator( characters ) {
            return( collapseWhiteSpace( characters.join( "" ) ) );
        }
    );
    // DEBUGGING: Draw boxes around our client rectangles.
    drawRectBoxes( range.getClientRects() );

    return( lines );

}


/**
* I normalize the white-space in the given value such that the amount of white-
* space matches the rendered white-space (browsers collapse strings of white-space
* down to single space character, visually, and this is just updating the text to
* match that behavior).
*/
function collapseWhiteSpace( value ) {

    return( value.trim().replace( /\s+/g, " " ) );

}


/**
* I draw red boxes on the screen for the given client rects.
*/
function drawRectBoxes( clientRects ) {

    arrayFrom( document.querySelectorAll( ".box" ) ).forEach(
        function iterator( node ) {

            node.remove();

        }
    );

    arrayFrom( clientRects ).forEach(
        function iterator( rect ) {

            var box = document.createElement( "div" );
            box.classList.add( "box" )
            box.style.top = ( rect.y + "px" );
            box.style.left = ( rect.x + "px" );
            box.style.width = ( rect.width + "px" );
            box.style.height = ( rect.height + "px" );
            box.style.position = "absolute";
            document.body.appendChild( box );

        }
    );

}


/**
* I log the given lines of text using a grouped output.
*/
function logLines( lines ) {

    console.group( "Rendered Lines of Text" );

    lines.forEach(
        function iterator( line, i ) {

            console.log( i, line );

        }
    );

    console.groupEnd();

}


/**
* I create a true array from the given array-like data. Array.from() if you are on
* modern browsers.
*/
function arrayFrom( arrayLike ) {

    return( Array.prototype.slice.call( arrayLike ) );

}