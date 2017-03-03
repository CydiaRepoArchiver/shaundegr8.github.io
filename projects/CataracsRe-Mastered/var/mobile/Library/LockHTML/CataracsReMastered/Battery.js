
var Level = "";

$.ajaxSetup({
cache: false,
headers: {'Cache-Control': 'no-cache'}
});

function init() {
refreshLocationTimer = setTimeout(init,1000);

jQuery.get('file:///private/var/mobile/Library/BatteryStats.txt', function(appdata) {

var myvar = appdata;
var substr = appdata.split('\n');
var Level=substr[0].split(':')[1];
state=substr[1].split(':')[1];
//var Level=90
var top=164-1.64*Level;

$("div.percent").html(Level+"%");

if (groovyAPI.isShowingNotifications() && notification_support){

	       

 $("div.out").animate({

				"top": "10px"

			}, 1000);

 $("div.cap").animate({

				"top": "0px"

			}, 1000);


	}



else{

	       

 $("div.out").css({

				"top": "160px"

			}, 1000);

 $("div.cap").css({

				"top": "153px"

			}, 1000);


	}

if(state[1] == "U"){

$("div.batt").css({

				"background-color": "transparent"

			}, 1000);

$("div.cap").css({

				"background-color": "transparent"

			}, 1000);


$("div.time").css({

				"border": "2px solid transparent"

			}, 1000);


$("div.date").css({

				"left":"6px"

			}, 1000);


$("div.perecent").css({

				"left":"6px"

			}, 1000);

}




else{



$("div.date").css({

				"left":"6px"

			}, 1000);



$("div.percent").css({

				"left":"6px"

			}, 1000);


$("div.batt").css({

				"top": top+"px"

			}, 1000);


$("div.batt").css({

				"background-color": "#888888"

			}, 1000);

$("div.cap").css({

				"background-color": "white"

			}, 1000);




$("div.time").css({

				"border": "2px solid white"

			}, 1000);


}




});

}