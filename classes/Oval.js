class Oval {
    props;

    constructor(color) {
        this.props = {
            x: Math.floor(Math.random() * windowWidth),
            y: Math.floor(Math.random() * windowHeight),
            width: 20,
            height: 20,
            growthRate: Math.random() * 3 | 1,
            maxGrowth:  Math.random() * 150 | 200,
            color: color,
            isDoneGrowing: false
        };
    }
    getOvalCoords = () => {
        return {ovalX:this.props.x, ovalY:this.props.y};
    };
    getOvalDims = () => {
        return {ovalWidth: this.props.width,ovalHeight:this.props.height};
    };
    getOvalColor = () => {
        return this.props.color;
    }

    colorOval = () => {
        fill(...this.props.color);
    };

    setIsDoneGrowing = (isDoneGrowing) => {
        this.props.isDoneGrowing = isDoneGrowing
    };

    hasReachedMaxGrowth = () => {
        return this.props.width >= this.props.maxGrowth;
    };

    update = () => {
        if (this.props.width < this.props.maxGrowth) {
            this.props.width += this.props.growthRate;
            this.props.height += this.props.growthRate;
        } else {
            this.props.isDoneGrowing = true;
        }
    };

    display = () => {
        this.colorOval(this.props.color)
        ellipse
        (
            this.props.x,
            this.props.y,
            this.props.width,
            this.props.height
        );
    };
}
