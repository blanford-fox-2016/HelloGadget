$('document').ready(function(){

  processAddData()
})

function processAddData (pointer, e) {
  e.preventDefault()

  $.post({
    url : 'http://localhost:3000/api/smartphones',
    data : {
        name : $('input[name="name"]').val().toLowerCase(),
        camera : $('input[name="camera"]').val(),
        os : $('input[name="os"]').val(),
        ram : $('input[name="ram"]').val(),
        image : $('input[name="image"]').val(),
        externalMemory : $('input[name="externalMemory"]').val(),
        internalMemory : $('input[name="internalMemory"]').val(),
        price : $('input[name="price"]').val(),
        vendor : $('input[name="vendor"]').val()
    },
    success : function(new_data){
      console.log(new_data)

      let appendHTML = `
        <div class="col-md-3 col-sm-4" data-id="" style="padding: 15px;">
            <div class="circle-avatar smartphone-image" style="background-image:url(${new_data.image})"></div>
            <h4 class="smartphone-name">${new_data.name}</h4>
            <p class="smartphone-price">Rp. ${new_data.price}</p>
            <p class="smartphone-vendor">${new_data.vendor}</p>
            <a href="single.html" class="btn btn-md btn-default" data-id="" onclick="showData(${new_data._id})"><span class="fa fa-eye"></span> View Details</a>
        </div>
      `
      $('#alert-message').empty()
      $('#alert-message').append(`
        <div class="alert alert-success">
              Data is inserted.
        </div>`)
      $('#smartphone-list').append(appendHTML)
      $('#add-smartphone-form')[0].reset()
      $('#addData').modal("hide")
    }
  })
}
