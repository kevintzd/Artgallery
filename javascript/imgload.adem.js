(function() {
    $.imgload = function(t, i) {
        var h, n;
        return h = new Image, h.src = t, n = {
            url: t,
            height: h.height,
            width: h.width,
            ratio: h.width / h.height
        }, h.onload = function() {
            return i(n)
        }, n
    }
}).call(this);