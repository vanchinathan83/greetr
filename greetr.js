(function(global, $){
    
    var Greetr = function(firstName, lastName, language){
        return new Greetr.init(firstName, lastName, language);
    }
    
    // These variables are available to the functions through closures
    // But, they are not available outside this library
    var supportedLanguages = ['en', 'es'];
    var greetings = {
        en : 'Hello, ',
        es : 'Hola, '
    };
    
    var formalGreetings = {
        en : 'Welcome, ',
        es : 'Seludos, '
    };
    Greetr.prototype = {
        getFullName : function(){
            return this.lastName + ', ' + this.firstName;
        },
        
        greet : function (){
            this.greetingMessage  = greetings[this.language] + this.firstName + '!';
            if(console){
                console.log(this.greetingMessage);
            }
            // This is done to chain the object.
            return this;
        },
        
        validate: function(){
            if(supportedLanguages.indexOf(this.language) === -1){
                throw 'Unsupported Language!';
            }
        },
        
        formalGreeting : function(){
            this.greetingMessage = formalGreetings[this.language] + this.getFullName();
            if(console){
                console.log(this.greetingMessage);
            }
            
            return this;
        },
        
        setLang: function(language){
            this.language = language;
            this.validate();
            return this;
        },
        
        HTMLGreeting : function(selector, formal){
            if(!$){
                throw 'JQuery not Loaded!!';
            }
            
            if(!selector){
                throw 'selector not provided!';
            }
            if(formal){
                this.formalGreeting();
            }else{
                this.greet();
            }
            console.log('message' + this.greetingMessage);
            $(selector).text(this.greetingMessage);
            
            return this;
        }
    };
    Greetr.init = function(firstName, lastName, language){
        this.firstName = firstName || '';
        this.lastName  = lastName || '';
        this.language = language || 'en';
        this.greetingMessage = '';
    };
    Greetr.init.prototype = Greetr.prototype;
    global.Greetr = global.G$ = Greetr;
}(window, $));