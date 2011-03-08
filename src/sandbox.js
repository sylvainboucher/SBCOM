    (function(SBCOM) {
        SBCOM.sandbox = (function() {
        
            // dependencies   
            // ...    
            // end of dependencies
            
            // private properties and methods
            // ...        
            // end of private properties and methods
            
            // public API            
            return {
                create: function(core, moduleId) {
                    return {
                        subscribe: function(events) {
                            core.subscribe(events, moduleId);
                        },
                        unsubscribe: function(events) {
                            core.unsubscribe(events, moduleId);
                        },
                        publish: function(events) {
                            core.publish(events);
                        }                      
                    };
                }
            };
        }());
    }(SBCOM)); 
