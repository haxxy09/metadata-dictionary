/* global angular */

'use strict';

/* Controllers */
var appSeedControllers = angular.module('appSeedControllers', [])

        .controller('MainController', function ($scope, $routeParams, $window, ModalService) {
            $scope.title = 'Meta Data Dictionary';

        })

        .controller('dataElementsController', function ($scope, dataElement, $routeParams, $window, ModalService) {
            $scope.title = "Data Elements";
            var apiResource = "dataElements";
            dataElement.listAllMetadata(apiResource).then(function (alldataelements) {

                $scope.result = alldataelements;

            });
        })

        .controller('indicatorsController', function ($scope, $routeParams, dataElement, $window, ModalService) {
            $scope.title = "Indicators";
            var apiResource = "indicators";
            dataElement.listAllMetadata(apiResource).then(function (alldataelements) {
                $scope.result = alldataelements;

            });

        })

        .controller('DataSetsController', function ($scope, $routeParams, dataElement, $window, ModalService) {
            $scope.title = "Data Sets";
            var apiResource = "dataSets";
            dataElement.listAllMetadata(apiResource).then(function (alldataelements) {

                $scope.result = alldataelements;

            });

        });

