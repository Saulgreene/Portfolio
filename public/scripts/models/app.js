'use strict';

(function(module){

//projects constructor
  function Project(argument){
    this.title = argument.title;
    this.description = argument.description;
    this.date = argument.date;
    this.contributors = argument.contributors;
    this.link = argument.link;
    this.img = argument.img;
  }
  //projects page initialization, appending each project to the dom //
  Project.all = [];

  //project Handlebars  rendering
  Project.prototype.toHtml = function() {
    var source = $('#template').text();
    var templateRender = Handlebars.compile(source);
    return templateRender(this);
  }


//fetch all goes through the JSON file and looks for the project information at which point it calls loadAll which pushes each JSON object through the constructor and then runs the hide all and show this ID functionability of the nav-bar
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
//this pushes each project through the constructor and then hides all and shows the page with the matching ID of what was clicked.
  Project.loadAll = function(projectData) {
      Project.all = projectData.map(function(input){
        return new Project(input);
      });
  };
module.Project = Project;
})(window);
