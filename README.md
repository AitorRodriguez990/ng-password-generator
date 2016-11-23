# ng-password-generator
AngularJS password generator directive:

    <password-generator field="passwordField"></password-generator>

## Demo
See the [demo page](https://aitorrodriguez990.github.io/ng-password-generator/demo.html) with directive working.

## Install
### Manual
Download lastest release from [here](https://github.com/AitorRodriguez990/ng-password-generator/releases/latest).

### Bower
Install bower package:

    bower install ng-password-generator --save

Include the following files in your app:

    <script src="ng-password-generator/app/password-generator.js></script>

Add ngPasswordGenerator to your app's dependencies:

    angular.module('myApplication', ['ngPasswordGenerator']);

## Usage
### Basic
* field (required) - string: Custom input field.

        <password-generator field="passwordField"></password-generator>

### Options
* buttonText - string: Custom button text. Default value is 'Generate password'.

        <password-generator field="passwordField" button-text="'Click to generate'"></password-generator>

* passwordLength - integer: Custom password length. Default values is '8'.

        <password-generator field="passwordField" password-length="8"></password-generator>

* uppercase - boolean: Add uppercase characters on generated password. Default value is 'true'.

        <password-generator field="passwordField" uppercase="true"></password-generator>

* numbers - boolean: Add numbers on generated password. Default value is 'true'.

        <password-generator field="passwordField" numbers="true"></password-generator>

* specials - boolean: Add special characters on generated password. Default value is 'true'.

        <password-generator field="passwordField" specials="true"></password-generator>

### All parameters

    <password-generator field="passwordField" password-length="8" uppercase="true" numbers="true" specials="true"></password-generator>  

## Changelog
### v1.1
* Enable custom button text

### v1.0
* Improved file structure
* Removing dependence of two files

### v0.4
* Minor changes

### v0.3
* Bower package created

### v0.2
* Set default values

### v0.1
* First preview of directive
* Example code

## Thanks
Based on https://github.com/rkammer/AngularJS-Password-Generator

## Copyright
Copyright (c) 2016 Aitor Rodríguez - [Front End Factory](http://www.frontendfactory.es). Directive licensed under the MIT License.
