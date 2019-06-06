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
        this.timer = setInterval(this.fall, 0.1)
    }

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
        return this
    };

    deactivate = () => {
        this.active = false;
        return this
    };

    fall = () => {
            this.top += 1;
    };
}

export default rigitBody
