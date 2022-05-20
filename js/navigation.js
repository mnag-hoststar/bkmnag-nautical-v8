// -------------------------------------
// Nautical: JS > Navigation
// -------------------------------------

$(document).ready(function () {
	
	// Toggles class open to display/hide the whole navigation

	$( ".widget__extendednavigation" ).addClass( "closed" );

	$( ".extendednavigation__navigation-toggle" ).click(function() {
		$( ".widget__extendednavigation" ).toggleClass( "open" ).toggleClass( "closed" );
	});


	// Togglse class open to display/hide folders

	$( ".navigation-item.folder .item-name--parent" ).each(function() {
		$( this ).click(function() {
				$( this ).parent( ".navigation-item.folder" ).toggleClass( "open" );
		});
	});

	$( ".extendednavigation__navigation-toggle" ).click(function() {
		$( "html" ).toggleClass( "nav-open" );
	});

	// Hides other submenus when a main menu point with a submenu is clicked.
    
	$(".navigation-item").click(function() {
		$(this).siblings(".navigation-item").removeClass("folder-open open");
	});
});