

// for the layout of this Info-Layer we will do a CSS-FILE Injection
var externalCSS = document.createElement('link');
externalCSS.id = "dynamic-externalCSS";
externalCSS.href = 'https://guarded-anchorage-85319.herokuapp.com/modal/requestly_insert_content.css?v=1.1';
externalCSS.setAttribute('rel', 'stylesheet');
externalCSS.type = 'text/css';
document.getElementsByTagName('head')[0].appendChild(externalCSS);

var contentOne =
`
	<div class="modal password-modal" id="most_important" >
		<div class="most_important_inside">
		    <h3>${CustomerName}</h3>
		    	This page is proxied and modified. It will not get indexed by Search Engines.
		    	</br>
				</br>
				</br>
				Find more information about this service on:</br>
				<code>https://github.com/stefanibus/smazyProxy</code> <br/> <br/>
				<input type="button"  id="buttonLayer" class="submit-button" value="Okay" /> <br/><br/><br/>
		</div>
	</div>
	<div class="overlay-modal-info"></div>
`;

$('body').append(contentOne);
$('#buttonLayer').click(function(event) {
	$('#most_important').hide();
	$('.overlay-modal-info').hide();
});