var mijnLinks = document.getElementsByTagName("a");
var mijnDivs = document.getElementsByTagName("div");
var teller = 0;
var lijntjesWegDivsOnzichtbaar = function() {
      var teller2 = 0;
      while (teller2 < mijnLinks.length) {
             mijnLinks[teller2].style.textDecoration = "none";
             teller2++;
      }
      var teller3 = 0;
      while (teller3 < mijnDivs.length) {
             mijnDivs[teller3].className = "";
             teller3++;
      }
};

document.getElementsByTagName("a")[0].style.textDecoration = "underline";
while(teller < mijnLinks.length) {
      mijnLinks[teller].onclick = function() {  
        lijntjesWegDivsOnzichtbaar();   
        this.style.textDecoration = "underline";
        document.getElementById(this.innerHTML).className = "getoond";
        return false;
      };
      teller++;
}