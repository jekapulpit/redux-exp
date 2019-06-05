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
}

export default rigitBody
