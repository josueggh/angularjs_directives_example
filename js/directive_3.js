var definitionObject = {
  restrict : 'AEC',
  link : function( scope, element, attrs){
    element.text('Hello ' + attrs.name);
  } 
};

app.directive('helloMeetup',
  function(){
    return definitionObject;
  }
);
