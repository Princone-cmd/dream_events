document.getElementById('more_cat').addEventListener('click', () => {
  location.replace("gallery.html");
});


function sendEmail() {
 
  if (String(document.getElementById("FullName").value).trim().length !=0 &&
              String(document.getElementById("EventType").value).trim() !=0 &&
              String(document.getElementById("District").value).trim() !=0 &&
              String(document.getElementById("Pincode").value).trim() !=0 &&
              String(document.getElementById("ContactNumber").value).trim() !=0 ) {

    var optional = String(document.getElementById("Options").value).trim();
    
    if (optional.length != 0) {
      optional = optional+" These are my extra optimizations."
     }
    var text = "Hello Sir,\n I am "+document.getElementById("FullName").value +
              "  from "+document.getElementById("District")+" District ,"+"Pincode "+document.getElementById("Pincode")+". I am Looking for "+document.getElementById("EventType").value+
              " Event Manager. I am interested in your team. \n"+
              "I would like to make a DEAL."+optional+" you can contact me via Mobile No: "+document.getElementById("ContactNumber").value+
              " or Mail. Looking forward for a quick reply. \nThank You.";

    mailWith(text);
    
    document.getElementById("FullName").value = "";
    document.getElementById("EventType").value = "";
	  document.getElementById("District").value = "";
  	document.getElementById("Pincode").value = "";
  	document.getElementById("Options").value = "";
  	document.getElementById("ContactNumber").value = "";

  }else{
    alert("Please fill the (*) mark fields");
  }

}

function mailWith(body){ 
  location.href="mailto:ashokdany713@gmail.com?subject=Request for An Event Management&body="+body; 
  window.setTimeout(function () { alert("You will receive reply to this mail in 24 hours") }, 0); 
} 

function mail(){ 
  location.href="mailto:ashokdany713@gmail.com?subject=Doubt Clarification&body=To, The Team Dream Events,"; 
} 

function openMenu() {
	document.querySelector(".dropdown").classList.toggle('open');
}

function scrollToContact() {
  document.getElementById('contact_footer').scrollIntoView();
}

function scrollToFaq() {
  document.getElementById('faqs_section_redirect').scrollIntoView();
}
