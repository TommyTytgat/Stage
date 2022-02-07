// $("body").mousemove(function(e) {
//   document.Form1.posx.value = e.pageX;
//   document.Form1.posy.value = e.pageY;
// })

var tar_id;

$( "html" ).on("mousemove", (e) => {
  console.log(`mouse location (x, y): ${e.pageX}, ${e.pageY}\r\n`);

  try {
    tar_id = e.target.id || e.target.parentElement.id || e.target.parentElement.parentElement.id || e.target.parentElement.parentElement.parentElement.id
  } 
  catch {
    tar_id = "Absolutely nothing"
  }
  // console.log(e.target.tagName); // test-log (debug)
 

  // Do specific things when hovering any object (exclusions in if-statement possible)
  if (e.target.tagName != "BODY" && 
      e.target.tagName != "HTML" && 
      e.target.tagName != "H1" && 
      e.target.tagName != "SPAN" && 
      e.target.tagName != "P") {

    $(e.target).addClass("selected");
    $(e.target).removeClass("unselected");
    e.target.addEventListener("mouseleave", (event) => {
      $(e.target).removeClass("selected").addClass("unselected");
    })
  }


  // Do specific things when hovering specific objects
  switch (tar_id) {
    case "hover-me":
      $( "#color" ).removeClass("off").addClass("on");
      document.getElementById("State").innerHTML = "ON";
      break;
    default:
      $( "#color" ).removeClass("on").addClass("off");
      document.getElementById("State").innerHTML = "OFF";
  }
});