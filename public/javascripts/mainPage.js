$(document).ready(function() {
  $doc = $(document);
  initBindEvents();
});

function initBindEvents() {
  $doc.on('click', '#oc', showNavbar);
};


function showNavbar() {
     document.getElementById('nav').style.visibility = 'visible';
     return false;
};
