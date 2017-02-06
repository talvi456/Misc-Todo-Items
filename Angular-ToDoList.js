var app = angular.module('myApp', []); 

    app.controller('todoCtrl', function($scope) {
        $scope.todoList = [{todoText:'Clean House', done:false}];

        $scope.colorName = "royalblue"

        $scope.todoAdd = function() {
            $scope.todoList.push({todoText:$scope.todoInput, done:false});
            $scope.todoInput = "";
        };

        $scope.addCelebName = function(){
            var nameIntro = "The Celebrity is "
                

            $scope.celebName = ""

            console.log($scope.celebName)
            var selectedName = $scope.celebName

            function assembleName(firstName) {
        
                function lastName (theLastName) {
                    return nameIntro + firstName + " " + theLastName;
                }
                
                return lastName
            }

            var mjName = assembleName (selectedName); 

                $scope.celebDisplay = mjName ("Jackson"); 


            
        }

        $scope.remove = function() {
            var oldList = $scope.todoList;
            $scope.todoList = [];
            angular.forEach(oldList, function(x) {
                if (!x.done) $scope.todoList.push(x);
            });
        };

    });