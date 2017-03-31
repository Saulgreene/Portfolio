(function(module){

  const allProjects ={};

  allProjects.initIndexPage = function(){
    Project.all.forEach(function(a) {
      $('#projects').append(a.toHtml())
    });
  };

module.allProjects = allProjects;
})(window);
