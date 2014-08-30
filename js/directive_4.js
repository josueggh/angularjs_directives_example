app.controller('heroes',['$scope','$http', heroesCtrl]);

function heroesCtrl($scope,$http){
  $http.get('data/heroes.json').then(
    function(response){
      $scope.heroes = response.data;
    }
  );
}

var definitionObject = {
  restrict    : 'A',
  scope       : {
    'name'      : '@',
    'avatar'    : '@',
    'realname'  : '@',
  },
  templateUrl : 'template/card.html',
};

app.directive('cardHero',
  function(){
    return definitionObject;
  }
);
