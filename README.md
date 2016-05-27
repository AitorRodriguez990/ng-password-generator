# ng-password-generator
AngularJS password generator directive:

    <password-generator field="passwordField"></password-generator>

## To Do List
* Create demo page
* Add minimum of uppercase characters, numbers and special characters when we set value to 'true'
* Require only one file to add in the app

## Install
### Manual
Download lastest release from [here](https://github.com/AitorRodriguez990/ng-password-generator/releases/latest).

### Bower
Install bower package:

    bower install ng-password-generator --save

Include the following files in your app:

    <script src="ng-password-generator/app/app.js"></script>
    <script src="ng-password-generator/app/password-generator.js></script>

Add ngPasswordGenerator to your app's dependencies:
    angular.module('myApplication', ['ngPasswordGenerator']);


## Usage
Custom input field. Required:

    <password-generator field="passwordField"></password-generator>

Custom password length. Default values is '8':

    <password-generator password-length="8"></password-generator>

Add uppercase characters on generated password. Default value is 'true':

    <password-generator uppercase="true"></password-generator>

Add numbers on generated password. Default value is 'true':

    <password-generator numbers="true"></password-generator>

Add special characters on generated password. Default value is 'true':

    <password-generator specials="true"></password-generator>

With all parameters:

    <password-generator field="passwordField" password-length="8" uppercase="true" numbers="true" specials="true"></password-generator>

## Options
* field: string - Required
* passwordLength: integer
* uppercase: boolean
* numbers: boolean
* symbols: boolean

## Changelog
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
