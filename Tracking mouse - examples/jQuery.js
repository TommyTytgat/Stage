// $("body").mousemove(function(e) {
//   document.Form1.posx.value = e.pageX;
//   document.Form1.posy.value = e.pageY;
// })
$( document ).ready(() => {
  var tar_id;
  var pos = new Array();
  var hov_en = 0;

  $( "html" ).on("mousemove", (e) => {
    // console.log(`mouse location (x, y): ${e.pageX}, ${e.pageY}\r\n`);

    try {
      tar_id = e.target.id || e.target.parentElement.id || e.target.parentElement.parentElement.id || e.target.parentElement.parentElement.parentElement.id
    } 
    catch {
      tar_id = "Absolutely nothing"
    }
    // console.log(e.target.tagName); // test-log (debug)
  

    // Do specific things when hovering any object (exclusions in if-statement possible)
    if(hov_en) {
      if (e.target.tagName != "BODY" && 
        e.target.tagName != "HTML" && 
        e.target.tagName != "H1" && 
        e.target.tagName != "H2" && 
        e.target.tagName != "H3" && 
        e.target.tagName != "SPAN" && 
        e.target.tagName != "IMG" && 
        e.target.tagName != "P") {

        $(e.target).addClass("selected");
        $(e.target).removeClass("unselected");
        e.target.addEventListener("mouseleave", (event) => {
          $(e.target).removeClass("selected").addClass("unselected");
        })
      }
    }


    // Do specific things when hovering specific objects
    switch (tar_id) {
      case "hover-me":
        $( "#color-hover" ).removeClass("off").addClass("on");
        document.getElementById("State").innerHTML = "ON";
        break;
      default:
        $( "#color-hover" ).removeClass("on").addClass("off");
        document.getElementById("State").innerHTML = "OFF";
    }
  });

  $( "#switch" ).click(() => {
    hov_en = !hov_en;
    if (hov_en) {
      $( "#color" ).removeClass("off").addClass("on");
      document.getElementById("state").innerHTML = "ON";
    }
    else {
      $( "#color" ).removeClass("on").addClass("off");
      document.getElementById("state").innerHTML = "OFF";
    }
  });
})