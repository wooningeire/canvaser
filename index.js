"use strict";

var canvas = document.querySelector("canvas");
var context = canvas.getContext("2d");

for (var i = 0; i <= 1; i++) {
    for (var j = -1; j <= 1; j += 1 / 25) {
        var skew = Math.sqrt(-(j ** 2) + 1) || 1e-7;
        var m11 = 1;
        var m22 = 1;

        if (i == 1) {
            m11 = skew;
        } else {
            m22 = skew;
        }

        context.setTransform(m11, 0, 0, m22, canvas.width / 2, canvas.height / 2);

        context.beginPath();
        context.arc(0, 0, 500, 0, 2 * Math.PI);
        context.stroke();
    }
}