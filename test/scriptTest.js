  "use strict";
  var MySingletonClass = function() {

    if ( MySingletonClass.prototype._singletonInstance ) {
      return MySingletonClass.prototype._singletonInstance;
    }
    MySingletonClass.prototype._singletonInstance = this;

    this.Foo = function() {
      // ...
    };
  };