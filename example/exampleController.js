'use strict';

// Customers controller
passwordGeneratorApp.controller('passwordGeneratorController', ['$scope',
    function($scope) {
        $scope.passwordField = '';

        $scope.options = {
            passwordLength: 8,
            uppercase: true,
            numbers: true,
            specials: true
        };
    }
]);
