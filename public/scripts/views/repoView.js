'use strict';

(function(module) {
  const repoView = {};


  const render= Handlebars.compile($('#repo-template').text());

  repoView.index = function() {
    $('#github-repos').append(
      repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(window);
