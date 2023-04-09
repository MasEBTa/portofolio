// When the user scrolls the page, execute myFunction
window.onscroll = function() {
    myFunction();
};

function myFunction() {
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
}

// jquery code
function openModal() {
  $('#modal').modal('toggle');
}
function bookself() {
  openModal();
  $('.modal-title').text('Bookself App');
  $('#object-modal').attr('data', 'bookself-app/index.html');
}
function igClone() {
  openModal();
  $('.modal-title').text('Instagram Login Page Clone');
  $('object').attr('data', 'ig-clone/index.html');
}
function eduworkClone() {
  openModal();
  $('.modal-title').text('Eduwork Landing Page Clone');
  $('object').attr('data', 'eduwork-clone/index.html');
}
function semantik() {
  openModal();
  $('.modal-title').text('Analisa Semantik HTML');
  $('object').attr('data', 'semantik-html/index.html');
}
function logicTest() {
  openModal();
  $('.modal-title').text('Analisa Semantik HTML');
  $('object').attr('data', 'test-logic/index.html');
}