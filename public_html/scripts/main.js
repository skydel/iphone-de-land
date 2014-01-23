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
			alert("Wprowadź swój numer telefonu");
		}
	else if($('#operator').val() == "0"){
				alert("Wybierz swojego operatora");
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
}

function level3()
{
	if($('#pin').val() == ""){
		alert("Wprowadź swój PIN");
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
	
	$('#quest').hide();
	$('#resp').show();
}