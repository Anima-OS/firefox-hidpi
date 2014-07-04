var HiDPI = {
    prefs: null,

    setScale: function(val)
    {
        this.prefs.setCharPref("layout.css.devPixelsPerPx", String(val));
    },

    getScale: function()
    {
        return parseFloat(this.prefs.getCharPref("layout.css.devPixelsPerPx"));
    },

    toggleHiDPI: function(event)
    {
        if (event.target.checked) {
            this.setScale(2.0);
        } else {
            this.setScale(1.0);
        }
    },

    startup: function()
    {
        this.prefs = Components.classes["@mozilla.org/preferences-service;1"]
            .getService(Components.interfaces.nsIPrefService);

        var button = document.getElementById("jlekstrand-net-hidpi-button");
        if (this.getScale() > 1) {
            button.checked = true;
        }
    }
}

window.addEventListener("load", function() { HiDPI.startup(); }, false);
