
$(document).ready(function(){

    $.ajax({
        url:"data.json",
        type:"get",
        success:function(data){
            let x="";
            let mod="";
            $.each(data,function(index,value){
                x+=`

                <div class="col-lg-3">
      
      <div class="card">
          <img src="${value.image}" class="card-img-top" alt="...">
          <div class="card-body">
              <h5 class="card-title">${value.name}</h5>
              <p class="card-text">${value.model}</p>
              <p class="card-text"><small class="text-muted">${value.price}</small></p>
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal${value.id}">
detail
  </button>
          </div>
      </div>
     
    
      </div>
                `

            })
            $("#demo").html(x);
            $("#inp").on("input",function(){
                let userinp=$("#inp").val().toLowerCase();
                let y="";
                let filterdata = data.filter(function(products){
                    return products.name.toLowerCase().indexOf(userinp)> -1;
     

})
// console.log(filterdata);
$.each(filterdata,function(key,elem){
    y+=`

<div class="col-lg-3">
<div class="card">
<img src="${elem.image}" class="card-img-top" alt="...">
<div class="card-body">
<h5 class="card-title">${elem.name}</h5>
<p class="card-text">${elem.model}</p>
<p class="card-text"><small class="text-muted">${elem.price}</small></p>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal${elem.id}">
detail
  </button>

</div>
</div>
</div>
`
})
$("#demo").html(y)

            })
            $.each(data,function(modindex,moddetail){
mod+=`
<div class="modal fade" id="exampleModal${moddetail.id}" data-bs-backdrop="static"  tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">${moddetail.name}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <p class="card-text">${moddetail.model}</p>
            <p class="card-text">${moddetail.des}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>

`
            })
            $("#mod").html(mod);
       
        }
    })
})

