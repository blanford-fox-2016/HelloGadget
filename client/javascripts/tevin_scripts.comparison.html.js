function searchSmartPhone1(){
	var name = $('input#smartphone-1-input').val().toLowerCase()

	$.ajax({
            url: `http://localhost:3000/api/smartphones/${name}`,
            type: "GET",
            dataType: "json"
        })
        .done(function(data) {
        	$('#smartphone-1-view').append('\
				<h1>'+ data.name +'</h1>\
                <div style="margin-top: 10px;">\
                    <div class="col-md-6 col-md-offset-3">\
                        <div class="circle-avatar smartphone-image" style="background-image:url('+ data.image +')"></div>\
                        <div>\
                            <h2>Specifications</h2>\
                            <h4 class="smartphone-os">OS: '+ data.os +'</h4>\
                            <h4 class="smartphone-internal-memory">Internal Memory: '+ data.internalMemory +'</h4>\
                            <h4 class="smartphone-external-memory">External Memory: '+ data.externalMemory +'</h4>\
                            <h4 class="smartphone-ram">RAM: '+ data.ram +'</h4>\
                            <h4 class="smartphone-camera">Camera: '+ data.camera +'</h4>\
                            <hr>\
                            <h2>Price Details</h2>\
                            <h4 class="smartphone-vendor">Vendor: '+ data.vendor +'</h4>\
                            <h4 class="smartphone-price">Price: Rp. '+ data.price +'</h4>\
                        </div>\
                    </div>\
                </div>\
        		')
        })
}

function searchSmartPhone2(){
	var name = $('input#smartphone-2-input').val()

	$.ajax({
            url: `http://localhost:3000/api/smartphones/${name}`,
            type: "GET",
            dataType: "json"
        })
        .done(function(data) {
        	$('#smartphone-2-view').append('\
				<h1>'+ data.name +'</h1>\
                <div style="margin-top: 10px;">\
                    <div class="col-md-6 col-md-offset-3">\
                        <div class="circle-avatar smartphone-image" style="background-image:url('+ data.image +')"></div>\
                        <div>\
                            <h2>Specifications</h2>\
                            <h4 class="smartphone-os">OS: '+ data.os +'</h4>\
                            <h4 class="smartphone-internal-memory">Internal Memory: '+ data.internalMemory +'</h4>\
                            <h4 class="smartphone-external-memory">External Memory: '+ data.externalMemory +'</h4>\
                            <h4 class="smartphone-ram">RAM: '+ data.ram +'</h4>\
                            <h4 class="smartphone-camera">Camera: '+ data.camera +'</h4>\
                            <hr>\
                            <h2>Price Details</h2>\
                            <h4 class="smartphone-vendor">Vendor: '+ data.vendor +'</h4>\
                            <h4 class="smartphone-price">Price: Rp. '+ data.price +'</h4>\
                        </div>\
                    </div>\
                </div>\
        		')
        })
}

function clearSmartPhone1(){
	$('#smartphone-1-view').empty()
}

function clearSmartPhone2(){
	$('#smartphone-2-view').empty()
}

$(function() {
	hideData()
})