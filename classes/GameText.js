class GameText {
    props;

    constructor() {
        this.props = {
            textColor: [],
            textFontSize: 20,
            font:null
        }
    }

    setTextColor = (color = []) => {
        this.props.textColor = color;
    }

    setTextSize = (size = 32) => {
        this.props.textFontSize = size;
    }

    setupFont = () => {
        textFont(loadFont("assets/8bit.ttf"));
        textSize(this.props.textFontSize);
        textAlign(CENTER);
    }
}
