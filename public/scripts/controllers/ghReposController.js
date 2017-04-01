'use strict';
const ghReposView = {};


ghReposView.init = () => {
  $('#github-repos').show().siblings().hide();
  repos.requestRepos(repoView.index);

};
