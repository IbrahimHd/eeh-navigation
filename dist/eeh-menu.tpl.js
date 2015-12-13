angular.module('eehMenu').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('template/eeh-menu/eeh-menu.html',
    "<nav ng-class=\"navClass\">\n" +
    "    <ul>\n" +
    "        <li ng-repeat=\"item in menuItems | orderBy:'weight'\"\n" +
    "            ng-include=\"'template/eeh-menu/list-menu-item.html'\"\n" +
    "            ng-class=\"{ 'leaf': !item.hasChildren() }\"\n" +
    "            ng-if=\"item.isVisible()\"\n" +
    "            eeh-menu-active-menu-item=\"item\"></li>\n" +
    "    </ul>\n" +
    "</nav>\n" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"template/eeh-menu/list-menu-item.html\">\n" +
    "    <a ng-if=\"item.state\" ui-sref=\"{{item.state}}\">\n" +
    "        <span eeh-menu-menu-item-content=\"item\"></span>\n" +
    "    </a>\n" +
    "    <a ng-if=\"item.click\" ng-click=\"item.click()\">\n" +
    "        <span eeh-menu-menu-item-content=\"item\"></span>\n" +
    "    </a>\n" +
    "    <a ng-if=\"item.href\" ng-href=\"{{item.href}}\" target=\"{{item.target ? item.target : '_self'}}\">\n" +
    "        <span eeh-menu-menu-item-content=\"item\"></span>\n" +
    "    </a>\n" +
    "    <a ng-if=\"!item.state && item.hasChildren()\">\n" +
    "        <span eeh-menu-menu-item-content=\"item\"></span>\n" +
    "        <span class=\"float-right icon-fw {{ iconBaseClass() }}\"\n" +
    "              ng-class=\"item.isCollapsed ? menuItemCollapsedIconClass : menuItemExpandedIconClass\"></span>\n" +
    "    </a>\n" +
    "    <ul ng-if=\"!item.state && item.hasChildren()\">\n" +
    "        <li ng-repeat=\"item in item.children()\"\n" +
    "            ng-include=\"'template/eeh-menu/list-menu-item.html'\"\n" +
    "            ng-if=\"item.isVisible()\"\n" +
    "            eeh-menu-active-menu-item=\"item\"></li>\n" +
    "    </ul>\n" +
    "</script>\n"
  );


  $templateCache.put('template/eeh-menu/eeh-menu.menu-item-content.html',
    "<span class=\"menu-item-icon icon-fw {{ iconBaseClass() }} {{ menuItem.iconClass}}\"></span>\n" +
    "<span class=\"menu-item-text\"ng-hide=\"$parent.sidebarIsCollapsed\"> {{ menuItem.text|translate }}</span>\n"
  );

}]);