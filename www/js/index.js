var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        //app.onDeviceReady();
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
        if (device.platform == 'Android') {
            // check if it's Android 4.4 or higher so we can change viewport params since target-devicedpi is not depreciated
           /* var version = device.version.split('.');
            if ((parseInt(version[0]) >= 4 && parseInt(version[1]) >= 4) || parseInt(version[0]) > 4) {
                var scale = (1/window.devicePixelRatio).toFixed(2);
                document.getElementById('viewport').setAttribute('content', 'user-scalable=no, initial-scale=' + scale + ', minimum-scale=' + scale + ', maximum-scale=' + scale + ', width=device-width, height=device-height');
            }*/
        }
        if (device.platform == 'iOS') {
            var scale = (1/window.devicePixelRatio).toFixed(2);
            document.getElementById('viewport').setAttribute('content', 'user-scalable=no, initial-scale=' + scale + ', minimum-scale=' + scale + ', maximum-scale=' + scale + ', width=device-width, height=device-height');
        }

        angular.element(document).ready(function() {
            angular.bootstrap(document, ["recipesApp"]);
        });

        // hide splash screen; give angularjs app 2 secs to bootstrap
        setTimeout(function () {
            navigator.splashscreen.hide();
        }, 4000);
    }
};

app.initialize();