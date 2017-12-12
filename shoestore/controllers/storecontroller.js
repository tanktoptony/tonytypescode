myStore.controller("myStoreController", function($scope,$http){
    $scope.shoes = $http.get("/data/shoes.json").then(
        function(response){
            $scope.shoes = response.data;
        }, 
        function(error){
            $scope.error = error;
        });
});