'use strict';

var app = angular.module(
  'app',
  []
);


/*  Examples of Restrict 
  A : This options represents the directive that is an attribute of the element <div my-directive></div>
  E : This options represents the directive that is an element <my-directive></my-directive>
  C : This options represents thte directive that is an class definition <div class="my-directive"></div>
  M : This options represents the directive that is an comment <!--directive:my-directive attrs-->
*/

var definitionByeObject = {
  restrict : 'C',
  link : function( scope, element, attrs){
    element.text('Bye bye!!');
  } 
};

app.directive('sayBye',
  function(){
    return definitionByeObject;
  }
);