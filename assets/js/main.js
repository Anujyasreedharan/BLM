document.addEventListener("DOMContentLoaded", function() {
    var colorMode = document.getElementById("color_mode");
    colorMode.addEventListener("change", function() {
      colorModePreview(colorMode);
    });
  });
  
  function colorModePreview(ele) {
    if (ele.checked) {
      document.body.classList.add("dark-preview");
      document.body.classList.remove("white-preview");
    } else {
      document.body.classList.add("white-preview");
      document.body.classList.remove("dark-preview");
    }
  }



