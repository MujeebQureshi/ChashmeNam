
var storage = window.localStorage;
var DomainURL =  "https://chashmenumapi.cloudapp.net/"; //"https://192.168.10.5.xip.io:44357/"; //
var showingLoader;

//iziToast configuration:
iziToast.settings({
    timeout: 6000,
    // closeOnEscape: true,
    close: true,
    progressBar: true,
    progressBarEasing: 'ease',
    // pauseOnHover: false,
    zindex: 900,
    // maxWidth: 400,
    // rtl: true,
    // layout: 2,
    // resetOnHover: true,
    // imageWidth: 50,
    // balloon: true,
    // target: '.target',
    // icon: 'material-icons',
    // iconText: 'face',
    // animateInside: false,
    // transitionIn: 'flipInX',
    // transitionOut: 'fadeOutLeft',
    // rtl: true
    // titleSize: 20,
    // titleLineHeight: 20,
    // messageSize: 20,
    // messageLineHeight: 20,
});
//


function getAppToken(){
	var ret = storage.getItem("AppToken");
	if(ret){
		return ret;
	}
	
	return null;
}

function ReplaceAppToken(newAppToken){
	storage.setItem("AppToken", newAppToken);
}

//CreateRequest args: (functionName(API URL), requestType, jsonObject, headerArray, execFuncOnSuccess, execFuncOnFailure, showToast)
function CreateRequest(functionName, requestType, jsonObject, headerArray, execFuncOnSuccess, execFuncOnFailure, showToast){
	
	$.ajax({
		url: DomainURL+functionName, // api/TestAuth
		method: requestType, //POST or GET...
		beforeSend: function( xhr ) {
			jQuery.map( headerArray, function( header, i ) {
				xhr.setRequestHeader(header.name, header.value);
			});
		},
		data: JSON.stringify(jsonObject)
	})
	.done(function( data, textStatus, response ) {
		if(data["token"]){
			ReplaceAppToken(data["token"]);
		}
		
		if(execFuncOnSuccess != null){
			window[execFuncOnSuccess](data);
		}
		
	})
	.fail(function( data, textStatus, response ) {
		if(data.status == 0){
			if(showToast){
				//displayIziToast("WARNING", "", "Network Connection Unavailable");
				displayOnsenToast("Network Connection Unavailable");
			}
		}
		else if(data.status == 400){
			if(showToast){
				//displayIziToast("WARNING", "", data.responseJSON.Message);
				displayOnsenToast(data.responseJSON.Message);
			}
			
			if(execFuncOnFailure != null){
				window[execFuncOnFailure](data);
			}
		}
		else{
			
			
		}
		
	})
	.always(function( data, textStatus, response ) {
		if(showingLoader){
			$("#"+showingLoader).hide();
			showingLoader = "";
		}
	});
}

function CreateJsonObject(formSerializeArr){
	var jsonObj = {};
	jQuery.map( formSerializeArr, function( n, i ) {
		jsonObj[n.name] = n.value;
	});

	return jsonObj;
}

function getAppTokenHeaderObject(){
	var objHeaderToken = {};
	if(getAppToken() != null){
		objHeaderToken.name = "Authorization";
		objHeaderToken.value = "Bearer "+ getAppToken();
		return objHeaderToken;
	}
	
	return null; //place null check first after calling this function
}

function displayOnsenToast(messageContent){
	ons.notification.toast({message: messageContent, timeout: 2000, buttonLabel : "DISMISS", callback : function(event){
			
		}
	});
}

function displayIziToast(msgtype, messageTitle, messageContent){
	
	if(msgtype == "WARNING"){
		iziToast.warning({
			id: 'warning',
			title: messageTitle,
			message: messageContent,
			position: 'bottomCenter',
			// close: false,
			transitionIn: 'flipInX',
			transitionOut: 'flipOutX'
		});
	}
	else if(msgtype == "INFORMATION"){
		iziToast.info({
			id: 'info',
			title: messageTitle,
			message: messageContent,
			// imageWidth: 70,
			position: 'bottomCenter',
			transitionIn: 'flipInX',
			transitionOut: 'flipOutX'
			// rtl: true,
			// iconText: 'star',
			/*,onOpening: function(instance, toast){
				console.info('Opening');
			},
			onOpened: function(instance, toast){
				console.info('Opened');
			},
			onClosing: function(instance, toast, closedBy){
				console.info('Closing | closedBy: ' + closedBy);
			},
			onClosed: function(instance, toast, closedBy){
				console.info('Closed | closedBy: ' + closedBy);
			}
			buttons: [
				['<button><b>YES</b></button>', function (instance, toast) {

					instance.hide({ transitionOut: 'fadeOut' }, toast);

				}, true],
				['<button>NO</button>', function (instance, toast) {

					instance.hide({ transitionOut: 'fadeOut' }, toast);

				}]
			],*/
		});
		
	}
	else if(msgtype == "DANGER"){
		iziToast.error({
			id: 'error',
			title: messageTitle,
			message: messageContent,
			position: 'bottomCenter',
			// close: false,
			transitionIn: 'flipInX',
			transitionOut: 'flipOutX'
		});		
	}
	else if(msgtype == "SUCCESS"){
		iziToast.success({
			id: 'success',
			title: messageTitle,
			message: messageContent,
			position: 'bottomCenter',
			// close: false,
			transitionIn: 'flipInX',
			transitionOut: 'flipOutX'// iconText: 'star',
			/*onOpened: function(instance, toast){
				// console.info(instance)
			},
			onClosed: function(instance, toast, closedBy){
				console.info('closedBy: ' + closedBy);
			}*/
		});		
	}
	else{
		
		
	}
}