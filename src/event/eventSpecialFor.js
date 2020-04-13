define( [
	"../core",
	"../var/hasOwn"
], function( jQuery, hasOwn ) {

"use strict";

function eventSpecialFor( type ) {
	return hasOwn.call( jQuery.event.special, type ) && jQuery.event.special[ type ] || {};
}

return eventSpecialFor;

} );
