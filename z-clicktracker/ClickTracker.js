let clickCount = 0;

export default function( elem ) {
    elem.addEventListener("click", function( e ) {
        clickCount++;
        let clickEvent = new CustomEvent( "clickTrackerClick", { detail: clickCount } );
        elem.dispatchEvent(clickEvent);
    } );
        
}