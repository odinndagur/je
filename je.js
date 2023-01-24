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








find_btn = document.querySelector('.button-yo')
if(!find_btn){
  btn = document.createElement('button')
  btn.addEventListener('click',ready)
  btn.textContent = 'netti netti'
  btn.classList.add('button-yo')
  document.body.appendChild(btn)
}

document.addEventListener('resize',ready)



function ready(){
  jeAll = document.querySelectorAll('.jon-egill')
  alreadyModifiedSpans = document.querySelectorAll('.je-modified')
  for(let el of alreadyModifiedSpans){
    console.log("Removing: " + el.textContent)
    el.remove()
  }
  for(let je of jeAll){
    if(je.style.display == 'none'){
        je.style.display = ''
    }
      text = je.textContent
      lines = extractLinesFromTextNode(je.firstChild)

      spacerCharacter = "\u3000"
      maxLen = Math.max(...lines.map(line => line.length))
      iterations = Math.ceil(text.length/maxLen)
      charOffset = 0
      
        for(let index = 0; index < iterations; ++index){
            currentLine = lines[index]
            currentMaxLen = Math.ceil(Math.min(currentLine.length,(text.length - charOffset)/2))
            charCounter = 0
            for(let i = 0; i < currentMaxLen; i++){
                let s = document.createElement('span')
                char1Offset = charOffset + i + (currentMaxLen)
                char2Offset = charOffset + i
                if(char1Offset < text.length){
                    char1 = text[char1Offset]
                    charCounter += 1
                }
                else {
                    char1 = spacerCharacter
                }
                if(char2Offset < text.length){
                    char2 = text[char2Offset]
                    charCounter +=1
                }
                else {
                    char2 = spacerCharacter
                }
                s.textContent = "" + char1 + char2
                s.classList.add('num')
                s.classList.add('je-modified')
                s.style.color = 'blue'
                je.parentNode.insertBefore(s,je)
            }
            charOffset += charCounter
        
      }
      
      je.style.display = 'none'
  }
}

ready()