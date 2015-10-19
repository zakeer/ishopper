var app = angular.module("iShopper", []);

app.run(['$http', function($http) {
    $http.get("/template/menu.html").then(function(response) {
        app.constant("config", response.data);
    }, function(errorResponse) {
        // Handle error case
    });
}]);

app.factory('iShopper', function($http) {
    var menu = "";
    return {
        setMenu: function(htmlString) {
            this.menu = htmlString;
        },

        getMenu: function() {
            return this.menu;
        }
    };
})

app.controller('MainCtrl', ["$scope", "$http", "iShopper", function($scope, $http, iShopper) {
    $http.get("/template/menu.html").then(function(response) {
        iShopper.setMenu(response.data);
        console.log(response.data);
    }, function(errorResponse) {
        // Handle error case
    });
   
}]);
