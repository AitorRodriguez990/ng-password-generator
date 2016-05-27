# ng-password-generator
AngularJS password generator directive:

    <password-generator field="passwordField"></password-generator>

## Status
Developing

## Example
Comming soon

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
### v0.2
* Set default values

### v0.1
* First preview of directive
* Example code

## Thanks
Based on https://github.com/rkammer/AngularJS-Password-Generator

## Copyright
Copyright (c) 2016 Aitor Rodríguez - [Front End Factory](http://www.frontendfactory.es). Directive licensed under the MIT License.
