'use strict';
define(['app'], function (app) {

    var controllerId = 'page2Controller';

    app.register.controller(controllerId, controller);

    controller.$inject = [];

    function controller() {
        var vm = this;

        // Bindable properties and function are places on vm.
        vm.title = controllerId;

        activate();

        function activate() {

        }

    }

});