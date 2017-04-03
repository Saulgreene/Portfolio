'use strict';

(function(module){

  function Project(argument){
    this.title = argument.title;
    this.description = argument.description;
    this.date = argument.date;
    this.contributors = argument.contributors;
    this.link = argument.link;
    this.img = argument.img;
  }
  Project.all = [];

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
      $.getJSON('scripts/models/projectData.json', function(response) {
        localStorage.projectData = JSON.stringify(response);
        Project.loadAll(response);
        allProjects.initIndexPage();
      });
    }
  }

  Project.loadAll = function(projectData) {
      Project.all = projectData.
      (function(input){
        return new Project(input);
      });
  };
module.Project = Project;
})(window);
