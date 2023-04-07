// When the user scrolls the page, execute myFunction
window.onscroll = function() {
    myFunction();
    // console.log('loh');
};

function myFunction() {
console.log('halo');
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  if (scrolled > 0.35) {
      document.getElementById("progBar").classList.add("headers");
      document.getElementById("header").classList.add("d-none");
      document.getElementById("progBar").classList.remove("d-none");
    } else {
      document.getElementById("progBar").classList.add("d-none");
      document.getElementById("progBar").classList.remove("headers");
      document.getElementById("header").classList.remove("d-none");
  }
  document.getElementById("myBar").style.width = scrolled + "%";
  console.log(scrolled);
}

// jquery code
function bookself() {
    $('#modal').modal('toggle');
    $('.modal-title').text('Bookself App');
    $('object').attr('data', 'bookself-app/index.html');
}
