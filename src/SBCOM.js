    var SBCOM = (function() {
        
        // dependencies   
        // ...    
        // end of dependencies
        
        // private properties and methods
        var debug = false; 
        // end of private properties and methods
        
        // public API
        var SBCOM = {
            enableDebug: function() {
                this.debug = true;
            },
            log: function(severity, message) {
                if(this.debug) {
                    if(typeof(console) !== undefined) {
                        console[ (severity === 1) ? 'log' : (severity === 2) ? 'warn' : 'error'](message);
                    }
                }
            }
        };
        // end of public API
        
        // Expose SBCOM to the global object
        return (window.SBCOM = SBCOM);
    }());
