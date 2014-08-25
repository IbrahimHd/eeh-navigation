angular.module('template/eeh-navigation/navigation.html', [])
.run(['$templateCache', function($templateCache) {
    $templateCache.put('template/eeh-navigation/navigation.html',
        '<nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">' +
        '<div class="navbar-header"> ' +
        '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> ' +
        '<span class="sr-only">Toggle navigation</span> ' +
        '<span class="icon-bar"></span> ' +
        '<span class="icon-bar"></span> ' +
        '<span class="icon-bar"></span> ' +
        '</button> ' +
        '<a ng-if="navbarBrand.state" class="navbar-brand" ui-sref="{{ navbarBrand.state }}" href="#">{{ navbarBrand.text }}</a> ' +
        '</div> ' +
        '<ul class="nav navbar-top-links navbar-right">' +
        '<li class="dropdown" ng-repeat="dropdown in navbarDropdowns">' +
        '<a class="dropdown-toggle" data-toggle="dropdown" href="#">' +
        '<span class="fa fa-user fa-fw"></span> ' +
        '<span> {{ dropdown.text }}</span> ' +
        '<span class="fa fa-caret-down"></span> ' +
        '</a> ' +
        '<ul class="dropdown-menu dropdown-user"> ' +
        '<li ng-repeat="item in dropdown.children" ng-class="{\'divider\': item.isDivider}"> ' +
        '<a ng-if="!item.isDivider && item.state" ui-sref="{{ item.state }}" href="#"> ' +
        '<span class="fa fa-fw {{ item.iconClass }}"></span> ' +
        '<span> {{ item.text }}</span> ' +
        '</a> ' +
        '</li> ' +
        '</ul> ' +
        '</li> ' +
        '</ul> ' +
        '<div class="navbar-default sidebar" role="navigation">' +
        '<div class="sidebar-nav navbar-collapse"> ' +
        '<ul class="nav"> ' +
        '<li class="sidebar-search"> ' +
        '<div class="input-group custom-search-form"> ' +
        '<input type="text" class="form-control" placeholder="Search..."> ' +
        '<span class="input-group-btn"> ' +
        '<button class="btn btn-default" type="button"> ' +
        '<i class="fa fa-search"></i> ' +
        '</button> ' +
        '</span> ' +
        '</div> ' +
        '</li> ' +
        '<li ng-repeat="item in items" ng-include="\'sidebar-menu-item.html\'"></li> ' +
        '</ul>' +
        '</div>' +
        '</div>' +
        '</nav> ' +
        '<script type="text/ng-template" id="sidebar-menu-item.html">' +
        '<a ng-if="item.state" ui-sref="{{item.state}}" ui-sref-active="active">' +
        '<span class="fa fa-fw {{ item.iconClass}}"></span>' +
        '<span> {{ item.text }}</span>' +
        '</a>' +
        '<a ng-if="!item.state && item.children" ng-click="item.isCollapsed = !item.isCollapsed">' +
        '<span class="fa fa-fw {{ item.iconClass}}"></span>' +
        '<span> {{ item.text }}</span>' +
        '<span class="pull-right fa fa-fw" ng-class="item.isCollapsed ? \'fa-chevron-left\' : \'fa-chevron-down\'"></span>' +
        '</a> ' +
        '<ul ng-if="!item.state && item.children" collapse="item.isCollapsed" class="nav nav-third-level"> ' +
        '<li ng-repeat="item in item.children" ng-include="\'sidebar-menu-item.html\'"></li> ' +
        '</ul> ' +
        '</script>');
}]);

angular.module('eehNavigation', ['template/eeh-navigation/navigation.html'])
.provider('eehNavigation', function () {
    var self = this;
    self.sidebarItems = [];
    self.navbarBrand = {};
    self.navbarDropdowns = [];
    self.$get = function () {
        return {
            navbarBrand: self.navbarBrand,
            navbarDropdowns: self.navbarDropdowns,
            sidebarItems: self.sidebarItems
        };
    };
})
.directive('eehNavigation', function (eehNavigation) {
    return {
        restrict: 'AE',
        templateUrl: 'template/eeh-navigation/navigation.html',
        link: function (scope) {
            scope.navbarBrand = eehNavigation.navbarBrand;
            scope.navbarDropdowns = eehNavigation.navbarDropdowns;
            scope.items = eehNavigation.sidebarItems;
        }
    }
});
