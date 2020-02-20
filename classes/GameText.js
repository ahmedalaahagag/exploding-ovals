class GameText {
    props;

    constructor() {
        this.props = {
            textColor: [],
            textFontSize: 32,
            font:null
        }
    }

    setTextColor = (color = []) => {
        this.props.textColor = color;
    }

    setupFont = () => {
        textFont(loadFont("assets/8bit.ttf"));
        textSize(this.props.textFontSize);
        textAlign(CENTER);
    }
}
