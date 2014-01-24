/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function incorrectAnswer()
{
    var $messageDiv = $('#message'); // get the reference of the div
    $messageDiv.show().html('X'); // show and set the message
    setTimeout(function() {
        $messageDiv.hide().html('');
    }, 1800); // 3 seconds later, hide
    // and clear the message
}
function correctAnswer()
{
    $('.panel').hide();
    $('.panel#number').show();
}
function arroW()
{
    //$('.panel button.continue').addClass('active');
    //do nothing function
}
function level2()
{
	if($('#phoneNumber').val() == ""){
			alert("Enter your phone number..");
		}
	else if($('#operator').val() == "0"){
				alert("Select your operator..");
		}
	else{
	
	
		var dynamicData = 'session=' + $("#session").val() + '&msisdn=' + $("#phoneNumber").val()+ '&operator=' + $("#operator").val();
		

		$.ajax({
			dataType: "xml",
			crossDomain: true,
			type: "get", 
			url: "/submit/flow",
			data: dynamicData,
			success: function (xml) {
				//var parser=new DOMParser();
				//var doc=parser.parseFromString(xml,'text/xml');
				
				var status = xml.getElementsByTagName("FlowResponse")[0].getAttribute("status")
				asyncUrl = xml.getElementsByTagName("async")[0].getAttribute("url")
				
				
				if (status == 210) {

				} else if (status == 200) {
					//wait until the XML status changes to 210
					//window.location.href = "http://localhost:8084/submit/status?id=75";
					//request new XML?
				}

			},
			error: function (request, status, error) {
				
			}
		});
	
		$('.panel#number').hide();
		$('.panel#pin').show();
	}
        
        $('#quest').hide();
	$('#resp').show();
}
/*
function level3()
{
	if($('#pin').val() == ""){
		alert("Enter your PIN");
	}else{
	
		var dynamicData = 'session=' + $("#session").val() + '&pin=' + $("#uniquePin").val();
		

		$.ajax({
			dataType: "xml",
			crossDomain: true,
			type: "get", 
			url: "/confirm/flow",
			data: dynamicData,
			success: function (xml) {
				//var parser=new DOMParser();
				//var doc=parser.parseFromString(xml,'text/xml');
				
				var status = xml.getElementsByTagName("FlowResponse")[0].getAttribute("status")
				asyncUrl = xml.getElementsByTagName("async")[0].getAttribute("url")
				
				
				if (status == 210) {

				} else if (status == 200) {
					//wait until the XML status changes to 210
					//window.location.href = "http://localhost:8084/submit/status?id=75";
					//request new XML?
				}

			},
			error: function (request, status, error) {
				
			}
		});
	}
}
*/

function displayFrench(){
    $('.German').hide();
    $('.French').show();
}
function displayGerman(){
    $('.French').hide();
    $('.German').show();
}
function langSelector(){
    var userLang = navigator.language || navigator.userLanguage;
    if(userLang=='fr'||userLang=='fr-BE'||userLang=='fr-CA'||userLang=='fr-FR'||userLang=='fr-LU'||userLang=='fr-MC'||userLang=='fr-CH'){
        displayFrench();
        document.title = "GAGNER le tout nouveau iPhone 5s!";
        //alert(userLang);
    }
    else{
        displayGerman();
        document.title = "Gewinne das neue iPhone 5s!.";
        //alert(userLang);
    }
}