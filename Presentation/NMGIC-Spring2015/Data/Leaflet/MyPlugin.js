var MyPlugin = L.Class.extend({
    initialize: function (name) {
        this.name = name;
        
    },

    hi: function () {
        alert('Hi ' + this.name)
    }
});