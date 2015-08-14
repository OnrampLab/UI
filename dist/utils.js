
(function (myNameSpace) {
    'use strict';

    window[myNameSpace] = {

        getUniqueId: function(prefix) {
            let s4 = function() {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }
            if ( !prefix ) {
                return s4() + s4() + s4() + s4();
            }
            return prefix + s4() + s4() + s4() + s4();
        },
    
    };

})('utils');
