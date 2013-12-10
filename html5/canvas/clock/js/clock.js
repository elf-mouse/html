var clock = new Array();
var length = 0;

function initApp(a, b) {
    clock[length] = new Clock(a, b);
    clock[length].clockApp();
    length += 1
}
function Clock(b, a) {
    this.name = b;
    this.color = a;
    this.canvas = document.getElementById(this.name);
    this.context = this.canvas.getContext("2d");
    this.clockImage = new Image();
    this.clockImageLoaded = false;
    var c = this;
    this.clockImage.onload = function() {
        c.clockImageLoaded = true
    };
    this.clockImage.src = "img/" + this.color + ".png"
}
Clock.prototype = {
    clockApp: function() {
        if (!this.clockImageLoaded) {
            var a = this;
            setTimeout(function() {
                a.clockApp()
            }, 100);
            return
        }
        this.context.translate(this.canvas.width / 2, this.canvas.height / 2);
        this.createClock()
    },
    createClock: function() {
        var a = this;
        setTimeout(function() {
            a.createClock()
        }, 1000);
        this.addBackgroundImage();
        var b = new Date();
        this.drawSecondHand(b);
        this.drawMinuteHand(b);
        this.drawHourHand(b);
        this.drawCenter()
    },
    degreesToRadians: function(a) {
        return (Math.PI / 180) * a
    },
    drawSecondHand: function(a) {
        this.context.save();
        var b = a.getSeconds();
        this.context.rotate(this.degreesToRadians(b * 6));
        this.drawHand((this.canvas.width / 4 + 50), (this.canvas.width / 100) - 2 * (this.canvas.width / 400), 1);
        this.context.restore()
    },
    drawHourHand: function(b) {
        this.context.save();
        var a = b.getHours() + b.getMinutes() / 60;
        var c = (a * 360 / 12) % 360;
        this.context.rotate(this.degreesToRadians(c));
        this.drawHand(this.canvas.width / 4, this.canvas.width / 100, 2);
        this.context.restore()
    },
    drawMinuteHand: function(b) {
        this.context.save();
        var a = b.getMinutes() + b.getSeconds() / 60;
        this.context.rotate(this.degreesToRadians(a * 6));
        this.drawHand((this.canvas.width / 4 + 20), (this.canvas.width / 100) - (this.canvas.width / 400), 1);
        this.context.restore()
    },
    addBackgroundImage: function() {
        this.context.drawImage(this.clockImage, (this.canvas.width / 2 * -1), (this.canvas.height / 2 * -1), this.canvas.width, this.canvas.height);
        this.drawTinte()
    },
    drawTinte: function() {
        var a = this.context.createRadialGradient(0, 0, 1, 0, 0, (this.canvas.height / 3));
        if (this.color == "black") {
            a.addColorStop(0, "#FFF");
            a.addColorStop(1, "#000")
        } else {
            a.addColorStop(0, "#101010");
            a.addColorStop(1, "#CCC")
        }
        this.context.fillStyle = a
    },
    drawCenter: function() {
        this.context.save();
        this.context.beginPath();
        this.context.arc(0, 0, (this.canvas.height / 40), 0, 2 * Math.PI, false);
        if (this.color == "black") {
            this.context.fillStyle = "#D1C7CA"
        } else {
            this.context.fillStyle = "#101010"
        }
        this.context.fill();
        this.context.lineWidth = 1;
        if (this.color == "black") {
            this.context.strokeStyle = "#FFF"
        } else {
            this.context.strokeStyle = "#909090"
        }
        this.context.stroke();
        this.context.arc(0, 0, (this.canvas.height / 60), 0, 2 * Math.PI, false);
        this.context.fill();
        this.context.lineWidth = 1;
        this.context.stroke();
        this.context.restore()
    },
    drawHand: function(c, b, a) {
        b = b || 4;
        this.context.shadowColor = "#555";
        this.context.shadowBlur = 10;
        this.context.shadowOffsetX = a;
        this.context.shadowOffsetY = a;
        this.context.beginPath();
        this.context.moveTo(0, 0);
        this.context.lineTo(b * -1, 0);
        this.context.lineTo(0, c * -1);
        this.context.lineTo(b, 0);
        this.context.lineTo(0, 0);
        this.context.fill()
    }
};