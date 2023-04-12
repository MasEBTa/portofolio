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
// $('.tooltip').tooltip();
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
function luasBangunDatar() {
  openModal();
  $('.modal-title').text('Luas Bangun Datar');
  $('object').attr('data', 'bangun-datar-luas/index.html');
}
function frontendSkill() {
  openModal();
  $('.modal-title').text('Front End');
  $('object').attr('data', 'sertif/frontend/index.html');
}
function htmlSkill() {
  openModal();
  $('.modal-title').html('Html Sertificate');
  $('object').attr('data', 'sertif/html/index.html');
}
function cssSkill() {
  openModal();
  $('.modal-title').text('Css Sertificate');
  $('object').attr('data', 'sertif/css/index.html');
}
function jsSkill() {
  openModal();
  $('.modal-title').text('Javascript Sertificate');
  $('object').attr('data', 'sertif/js/index.html');
}
function bootstrapSkill() {
  openModal();
  $('.modal-title').text('Bootstrap Sertificate');
  $('object').attr('data', 'sertif/bootstrap/index.html');
}
function phpSkill() {
  openModal();
  $('.modal-title').text('Php Sertificate');
  $('object').attr('data', 'sertif/php/index.html');
}
function laravelSkill() {
  openModal();
  $('.modal-title').text('Laravel Sertificate');
  $('object').attr('data', 'sertif/laravel/index.html');
}
function vueSkill() {
  openModal();
  $('.modal-title').text('Vue Js Sertificate');
  $('object').attr('data', 'sertif/vue/index.html');
}
function jquerySkill() {
  openModal();
  $('.modal-title').text('Jquery Sertificate');
  $('object').attr('data', 'sertif/jquery/index.html');
}
function githubSkill() {
  openModal();
  $('.modal-title').text('Git & Github Sertificate');
  $('object').attr('data', 'sertif/github/index.html');
}
function sqlSkill() {
  openModal();
  $('.modal-title').text('Sql Sertificate');
  $('object').attr('data', 'sertif/sql/index.html');
}