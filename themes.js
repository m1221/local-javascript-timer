class Theme {
    constructor(id, displayName, backgroundImage="none"){
        this.id = id;
        this.displayName = displayName;
        this.colors = new Map(); // element alias mapped to colors
        this.backgroundImage = backgroundImage;
    }
}

var defaultTheme = new Theme("theme-default", "Default Theme");
defaultTheme.colors.set("timerPanelColor", "#282828c7");
defaultTheme.colors.set("hoursPanelColor", "#fa5559");
defaultTheme.colors.set("minutesPanelColor", "#26c2b9");
defaultTheme.colors.set("secondsPanelColor", "#f6bc58");
defaultTheme.colors.set("buttonColor", "#0074D9");
defaultTheme.colors.set("buttonActiveColor", "#fff");
defaultTheme.colors.set("footerColor", "#282828c7");

var halloweenTheme = new Theme("theme-halloween", "Halloween", "./background-images/halloween-background.jpg");
halloweenTheme.colors.set("timerPanelColor", "#282828f7");
halloweenTheme.colors.set("hoursPanelColor", "#D5632A");
halloweenTheme.colors.set("minutesPanelColor", "#D5B82A");
halloweenTheme.colors.set("secondsPanelColor", "#D52A47");
halloweenTheme.colors.set("buttonColor", "#5B3C00");
halloweenTheme.colors.set("buttonActiveColor", "#fff");
halloweenTheme.colors.set("footerColor", "#282828f7");

var christmasTheme = new Theme("theme-christmas", "Christmas", "./background-images/christmas-background.jpg");
christmasTheme.colors.set("timerPanelColor", "#002801f5");
christmasTheme.colors.set("hoursPanelColor", "#A70C0E");
christmasTheme.colors.set("minutesPanelColor", "#A7580C");
christmasTheme.colors.set("secondsPanelColor", "#A70C5C");
christmasTheme.colors.set("buttonColor", "#5B3C00");
christmasTheme.colors.set("buttonActiveColor", "#fff");
christmasTheme.colors.set("footerColor", "#002801f5");

var themes = new Map();
themes.set(defaultTheme.id, defaultTheme);
themes.set(halloweenTheme.id, halloweenTheme);
themes.set(christmasTheme.id, christmasTheme);
