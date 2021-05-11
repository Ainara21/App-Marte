/** Función para pintar la lista de usuarios */
function renderUsers(){
    let db = new PouchDB('cosas');
    let lista = document.querySelector(".save_container");
    
    //Retrieving all the documents in PouchDB
    db.allDocs({include_docs: true}, function(err, docs) {
        if (err) {
        return console.log(err);
        } else {                
            users = docs.rows;
            users.forEach(element => {
                let user = `
                <div class="date">
                ${element.doc.time}

                </div>
                <div class="date">
                ${element.doc.name} 

            </div>
            <div class="temp">
               

            </div>`;
                lista.innerHTML += user;
            });
            
        }
    });
}
renderUsers();