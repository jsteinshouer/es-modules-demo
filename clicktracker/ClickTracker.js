let clickCount = 0;
let callback = null;

export default {
    registerElement: function( elem ) {
        elem.addEventListener("click", function( e ) {
            clickCount++;
            if ( callback ){
                callback(clickCount);
            }
        } );
    },
    onClick: function( eventHandler ) {
        callback = eventHandler;
    }
        
}