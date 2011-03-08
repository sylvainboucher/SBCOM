    (function(SBCOM) {
        SBCOM.core = (function() {  
          
            // dependencies   
            var sandbox = SBCOM.sandbox;   
            // end of dependencies
            
            // private properties and methods
            var modules = {};       
            // end of private properties and methods
            
            // public API        
            return {
                registerModule: function(moduleId, creator) {
                    modules[moduleId] = {
                        create: creator,
                        instance: null
                    };
                    SBCOM.log(1, moduleId + ' has been registered');
                },
                start: function(moduleId) {
                    var module = modules[moduleId];
                    if(module) {
                        module.instance = module.create(sandbox.create(this, moduleId));
                        SBCOM.log(1, moduleId + ' has been created');                        
                        module.instance.init();
                        SBCOM.log(1, moduleId + ' has been initialized');
                    }
                },
                startAll: function() {
                    var moduleId;
                    for(moduleId in modules) {
                        if(modules.hasOwnProperty(moduleId)) {
                            this.start(moduleId);
                        }
                    }
                },
                stop: function(moduleId) {
                    var module = modules[moduleId];
                    if(module && module.instance) {
                        module.instance.destroy();
                        module.instance = null;
                        SBCOM.log(1, moduleId + ' has been stopped');
                    }
                },
                stopAll: function() {
                    var moduleId;
                    for(moduleId in modules) {
                        if(modules.hasOwnProperty(moduleId)) {
                            this.stop(moduleId);
                        }
                    }                
                },
                subscribe: function(events, moduleId) {
                    modules[moduleId].events = events;
                    SBCOM.log(1, moduleId + ' has been subscribed');
                },
                unsubscribe: function(events, moduleId) {
                    delete modules[moduleId].events;
                    SBCOM.log(1, moduleId + ' has been unsubscribed');
                },
                publish: function(event) {
                    var moduleId;
                    for(moduleId in modules) {
                        if (modules.hasOwnProperty(moduleId)) {
                            modules[moduleId].events[event.type](event.data);
                            SBCOM.log(1, event.type + ' has been published');
                        }
                    }
                }                            
            };
        }());
    }(SBCOM));
