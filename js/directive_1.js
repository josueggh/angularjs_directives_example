var definitionObject = {
  restrict : 'E',
  link : function( scope, element, attrs){
    element.text('Hello AngularJS México');
  } 
};

app.directive('helloMeetup',
  function(){
    return definitionObject;
  }
);
