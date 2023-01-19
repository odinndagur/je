const isOverflown = ({ clientHeight, scrollHeight }) => scrollHeight > clientHeight

let doubles = document.querySelectorAll(".double");
doubles.forEach(span=>{
    let temp = document.createElement("span");
    temp.innerHTML = span.innerHTML;
    document.body.appendChild(temp);

    let trect = temp.getBoundingClientRect();
    let twidth = trect.width;
    let theight = trect.height;
    document.body.removeChild(temp);
    span.setAttribute("style","width:" + twidth/1.8 + "px")
})
  window.onresize = () =>{
      let span = document.getElementsByClassName("double")[0];
  
      let temp = document.createElement("span");
      temp.innerHTML = span.innerHTML;
      temp.setAttribute("overflow","auto")
      temp.setAttribute("white-space", "nowrap")
      document.body.appendChild(temp);
  
      let trect = temp.getBoundingClientRect();
      let twidth = trect.width;
      let theight = trect.height;
      document.body.removeChild(temp);
      span.setAttribute("style","width:" + twidth/2 + "px")
      console.log(twidth, twidth/2, theight);
  
    //   let rect = span.getBoundingClientRect();
    //   let width = rect.width;
    //   let height = rect.height;
    //   // span.setAttribute("style","width:" + width/1.8 + "px")
    //   console.log(width, width/2, height);
  
      
  
  
      // document.body.appendChild(temp);
  }; 