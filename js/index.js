const CSS_COLOR_NAMES = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"];

document.addEventListener( "DOMContentLoaded", function(){
    for( let i = 0; i < CSS_COLOR_NAMES.length; i++ ){
        let collapsible = document.createElement( "div" );
        collapsible.setAttribute( "class", "collapsible" );
        document.body.appendChild( collapsible );

        let title = document.createElement( "div" );
        title.setAttribute( "class", "title" );
        title.style.setProperty( "background-color", CSS_COLOR_NAMES[ i ] )
        collapsible.appendChild( title );

        let divTextColor = document.createElement( "div" );
        divTextColor.setAttribute( "class", "divTextColor" );
        title.appendChild( divTextColor );

        let textColor = document.createTextNode( CSS_COLOR_NAMES[ i ] );
        divTextColor.appendChild( textColor );

        let content = document.createElement( "div" );
        content.setAttribute( "class", "content" );
        collapsible.appendChild( content );

        let textContent = document.createTextNode( "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." );
        content.appendChild( textContent );

        let bgcolor = window.getComputedStyle( title, null ).getPropertyValue( "background-color" );
        bgcolor = bgcolor.substr( 0, bgcolor.indexOf( ")" ) ) + ", 0.7 )";
        content.style.setProperty( "background-color", bgcolor );
    }
    document.querySelectorAll( ".title" ).forEach( function( title, i ){
        title.addEventListener( "mouseover", function(){
            let bgcolor = window.getComputedStyle( this, null ).getPropertyValue( "background-color" );
            bgcolor = bgcolor.substr( 0, bgcolor.indexOf( ")" ) ) + ", 0.8)";
            this.style.setProperty( "background-color", bgcolor );
        });
        title.addEventListener( "mouseout", function(){
            let bgcolor = window.getComputedStyle( this, null ).getPropertyValue( "background-color" );
            bgcolor = bgcolor.substr( 0, bgcolor.lastIndexOf( "," ) ) + ", 1)";
            this.style.setProperty( "background-color", bgcolor );
        });
        title.addEventListener( "click", function(){
            if( !title.classList.contains( "active" ) ){
                document.querySelectorAll( ".active" ).forEach( function( active ){
                    active.click();
                });
            }
            this.classList.toggle( "active" );
            let content = this.parentElement.querySelector( ".content" );
            if( content.style.maxHeight ){
                content.style.maxHeight = null;
                content.style.padding = "0px 30px";
            }else{
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.padding = "30px 30px";
            }
        });
    });
});