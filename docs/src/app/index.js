'use strict';

angular.module('docs', [
    'eehNavigation',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ui.router']);
angular.module('docs').config(function ($stateProvider, $translateProvider, $urlRouterProvider, eehNavigationProvider) {
    $translateProvider.useSanitizeValueStrategy('sanitize');
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/main/main.html',
            controller: 'MainController'
        })
        .state('docs', {
            url: '/docs',
            templateUrl: 'app/docs/docs.html',
            controller: 'DocsController'
        })
        .state('docs.gettingStarted', {
            url: '/getting-started',
            templateUrl: 'partials/getting-started.html'
        })
        .state('docs.changeLog', {
            url: '/change-log',
            templateUrl: 'partials/change-log.html'
        })
        .state('docs.eehNavigationService', {
            url: '/eeh-navigation-service',
            templateUrl: 'partials/api/core/service/eehNavigation.html'
        })
        .state('docs.eehNavigationSidebar', {
            url: '/eeh-navigation-sidebar',
            templateUrl: 'partials/api/sidebar/directive/eeh-navigation-sidebar.html'
        })
        .state('docs.eehNavigationNavbar', {
            url: '/eeh-navigation-navbar',
            templateUrl: 'partials/api/navbar/directive/eeh-navigation-navbar.html'
        });

    eehNavigationProvider
        .iconBaseClass('fa')
        .menuItem('nav.gettingStarted', {
            text: 'Getting Started',
            state: 'docs.gettingStarted',
            iconClass: 'fa-power-off'
        })
        .menuItem('nav.changeLog', {
            text: 'Change Log',
            state: 'docs.changeLog',
            iconClass: 'fa-refresh'
        })
        .menuItem('nav.service', {
            text: 'Service'
        })
        .menuItem('nav.service.eehNavigationService', {
            text: 'eehNavigation',
            state: 'docs.eehNavigationService'
        })
        .menuItem('nav.directive', {
            text: 'Directive',
            isCollapsed: false
        })
        .menuItem('nav.directive.eehNavigationSidebar', {
            text: 'eehNavigationSidebar',
            state: 'docs.eehNavigationSidebar'
        })
        .menuItem('nav.directive.eehNavigationNavbar', {
            text: 'eehNavigationNavbar',
            state: 'docs.eehNavigationNavbar'
        });
});

angular.module('docs').directive('pre', function ($window) {
    return {
        restrict: 'E',
        link: function postLink(scope, element) {
            scope.$on('$viewContentLoaded', function () {
                element.addClass('prettyprint');
                element.html($window.prettyPrint(element.html(), '', true));
            });
        }
    };
});
