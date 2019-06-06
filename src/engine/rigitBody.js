import Field from '../field'

class rigitBody {
    constructor(object) {
        this.id = object.id;
        this.radius = object.radius;
        this.color = object.color;
        this.mass = object.mass;
        this.top = object.top;
        this.left = object.left;
        this.active = object.active;
        this.force = object.mass;
        this.speed = 0;
        this.fall = this.fall.bind(this);
        this.startFall = this.startFall.bind(this);
        this.stopFall = this.stopFall.bind(this);
        this.startFall();
    }

    startFall = () => {
        this.timer = setInterval(this.fall, 0.1)
    };

    stopFall = () => {
        this.timer = clearInterval(this.timer);
        this.speed = 0;
    };

    setColor = (color) => {
        this.color = color;
        return this
    };

    moveTo = (x, y) => {
        this.left = x;
        this.top = y;
        return this
    };

    activate = () => {
        this.active = true;
        this.stopFall();
        return this
    };

    deactivate = () => {
        this.active = false;
        if(!this.timer)
            this.startFall();
        return this
    };



    fall = () => {
        if (this.top >= Field.Height - this.radius*2)
            this.stopFall();
        this.top += this.speed/1000;
        this.speed += this.mass/1000;
    };
}

export default rigitBody
