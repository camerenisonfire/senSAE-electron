var NUM_OF_THEMES;

function ThemeList(){
    //Themes
    this.list = new Array();
    this.list.push(new TreeTheme());
    this.list.push(new FreqBarTheme());
    this.list.push(new CircleGridTheme());
    this.list.push(new ShapePopTheme());
    this.list.push(new CircleMoverTheme());

    NUM_OF_THEMES = this.list.length;
    this.themeCounter = 0;
}

ThemeList.prototype.render = function(){
    this.list[this.themeCounter].render();
}

ThemeList.prototype.updateThemeCounter = function(dir){
    this.themeCounter += dir;
    if(this.themeCounter < 0){
        this.themeCounter = NUM_OF_THEMES - 1;
    }else if(this.themeCounter >= NUM_OF_THEMES){
        this.themeCounter = 0;
    }
}
