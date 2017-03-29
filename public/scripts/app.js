'use strict';

(function(module){
var allProjects =[];

function Project(argument){
  this.title = argument.title;
  this.description = argument.description;
  this.date = argument.date;
  this.contributors = argument.contributors;
  this.link = argument.link;
  this.img = argument.img;
}
//projects page//
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

Project.loadAll = function(projectData) {
    Project.all = projectData.map(function(input){
      return new Project(input);
    });
  $('.nav-content').hide();
  $('.main-nav').on('click', '.nav', function(){
    $('.nav-content').hide();
    $('.home').hide();
    $('#' + $(this).attr('data-content')).fadeIn();
  });
};
module.Project = Project;
})(window);
