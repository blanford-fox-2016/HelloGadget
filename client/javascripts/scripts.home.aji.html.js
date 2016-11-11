

$(document).ready(function(){
$.ajax({
  url     :"http://localhost:3000/api/smartphones",
  method  :"get",
  contentType : 'application/x-www-form-urlencoded',
  data    :{},
  success :function (data) {

    var result = "";

    for (var i = 0; i < data.length; i++) {

      result+= `  <div class="col-md-3 col-sm-4" data-id="" style="padding: 15px;">
                      <div class="circle-avatar smartphone-image" style="background-image:url(${data[i].image})"></div>
                      <h4 class="smartphone-name">${data[i].name}</h4>
                      <p class="smartphone-price">${data[i].price}</p>
                      <p class="smartphone-vendor">${data[i].vendor}</p>
                      <a href="single.html?id=${data[i]._id}" class="btn btn-md btn-default" data-id="" onclick="showData(this)"><span class="fa fa-eye"></span> View Details</a>
                  </div>
                `
    }

    $("#smartphone-list").append(result)
  }

  })

})




//
//
