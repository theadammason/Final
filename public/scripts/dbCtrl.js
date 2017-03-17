var app = angular.module('myMod');



app.controller('dbCtrl', function($scope, $animate, dbFactory, readingFactory, studentFactory, $location) {
  $('#loginModal').modal('show');
  var date = new Date();
  $scope.year = date.getFullYear();

    // Gets all the rows from DB
    dbFactory.getStudent().then(function() {
        $scope.students = dbFactory.update();
        console.log("$scope.students=" + $scope.students);
    });
    //taking the name as a variable called student in the ng-model and using that name to search our database, returns the entire row based on that
    $scope.student = {};
    $scope.getUser = function() {
        console.log($scope.student);
        var index = $scope.students.map(function(x) {
            return x.studentname;
        }).indexOf($scope.student.studentname);
        $scope.selectedStudent = $scope.students[index];

        if ($scope.selectedStudent === undefined){
          alert("Check your spelling and try again");
        }else{

          studentFactory.sendStudent($scope.selectedStudent);
          //displays the message shown on login
          if (!$scope.loginConfirmMessage) {
              $scope.loginConfirmMessage = !$scope.loginConfirmMessage;
          } else {

          };

          if (!$scope.loginButton) {
              $scope.loginButton = !$scope.loginButton;
              $scope.registerButton = !$scope.registerButton;

          } else {

          };
          $location.path('/formOutput');

        }



    }





});
