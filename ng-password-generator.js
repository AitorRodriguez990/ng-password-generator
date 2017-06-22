/*
 * ng - password - generator - AngularJS directive to generate a password
 * Author: Aitor Rodríguez - http://www.frontendfactory.es/
 * Version: 1.2.0
 * License: MIT
 */

'use strict';

angular
	.module('ngPasswordGenerator', [])
	.controller('passwordGeneratorController', ['$scope', function($scope) {
		$scope.passwordField = '';

		$scope.options = {
			passwordLength: 8,
			prefix: '',
			uppercase: true,
			numbers: true,
			specials: true,
			similarChars: true
		};
	}])
	.directive('passwordGenerator', function() {
		return {
			restrict: 'AE',
			replace: true,
			scope: {
				field: '=field',
				passwordLength: '=?passwordLength',
				prefix: '=?prefix',
				uppercase: '=?uppercase',
				numbers: '=?numbers',
				specials: '=?specials',
				similarChars: '=?similarChars',
				buttonText: '@?buttonText'
			},
			template: '<button type="button" data-ng-click="generatePassword()">{{ buttonText }}</button>',
			link: function(scope) {

				// Initialize the default values
				scope.passwordLength = (scope.passwordLength) ? scope.passwordLength : 8;
				scope.prefix = (scope.prefix) ? scope.prefix : '';
				scope.uppercase = (scope.uppercase) ? scope.uppercase : false;
				scope.numbers = (scope.numbers) ? scope.numbers : false;
				scope.specials = (scope.specials) ? scope.specials : false;
				scope.similarChars = (scope.similarChars) ? scope.similarChars : false;
				scope.buttonText = (scope.buttonText !== undefined) ? scope.buttonText : 'Generate password';

				// Enable password generation
				scope.generatePassword = function() {

					// Create variables with characters, numbers and special
					var lowerCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
						upperCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
						numbers = ['2', '3', '4', '5', '6', '7', '8', '9'],
						specials = ['!', '"', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '}', '~'];

					if (scope.similarChars) {
						lowerCharacters = lowerCharacters.concat(['i', 'l', 'o']);
						upperCharacters = upperCharacters.concat(['I', 'O']);
						numbers = numbers.concat(['0', '1']);
						specials = specials.concat(['|']);
					}

					// Concatenate the differents variables according to true/false
					var finalCharacters = lowerCharacters;

					if (scope.uppercase) {
						finalCharacters = finalCharacters.concat(upperCharacters);
					}

					if (scope.numbers) {
						finalCharacters = finalCharacters.concat(numbers);
					}

					if (scope.specials) {
						finalCharacters = finalCharacters.concat(specials);
					}

					// Iterate while the number is less than passwordLength
					var finalPassword = [];

					for (var i = 0; i < scope.passwordLength; i++) {
						finalPassword.push(finalCharacters[Math.floor(Math.random() * finalCharacters.length)]);
					}

					// Save the result on field
					scope.field = scope.prefix+finalPassword.join('');
				};
			}
		};
	});
