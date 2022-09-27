const cardBody = document.querySelectorAll(".card-body")[1];

cardBody.addEventListener("click",run);
function run(e){
    if(e.target.className==="form-control"){
        console.log("Todo Arama işlemi");
    };

    if(e.target.className==="fa fa-remove"){
        console.log("Todo Silme İşlemi");
    };

    if(e.target.id==="clear-todos"){
        console.log("Tüm Taskları silme İşlemi");
    }
}




































