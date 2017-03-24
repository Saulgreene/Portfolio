'use strict'

var allProjects =[];

function Project(argument){
  this.title = argument.title;
  this.description = argument.description;
  this.date = argument.date;
  this.contributors = argument.contributors;
  this.link = argument.link;
  this.img = argument.img;
}
Project.all = [];
allProjects.initIndexPage = function(){
  Project.all.forEach(function(a) {
    $('#projects').append(a.toHtml())
  });
};
Project.prototype.toHtml = function() {
  var source = $('#template').text();
  var templateRender = Handlebars.compile(source);
  return templateRender(this);
}


Project.loadAll = function(projectData) {
  projectData.forEach(function(input) {
    Project.all.push(new Project(input));
  })
};


Project.fetchAll = function() {
  if (localStorage.projectData) {
    Project.loadAll(JSON.parse(localStorage.projectData));
    allProjects.initIndexPage();
  } else {
    $.getJSON('scripts/projectData.json', function(response) {
      localStorage.projectData = JSON.stringify(response);
      Project.loadAll(response);
      allProjects.initIndexPage();
    });
  }
}

projectData.forEach(function(object){
  allProjects.push(new Project(object));
});


// allProjects.forEach(function(somethingDifferent){
//   console.log(somethingDifferent);
//   $('.projects').append(somethingDifferent.toHtml());
// });


$('.nav-content').hide();
$('.main-nav').on('click', '.nav', function(){
  $('.nav-content').hide();
  $('.home').hide();
  $('#' + $(this).attr('data-content')).fadeIn();
});
