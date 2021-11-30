$(window).load(function(){
    $.ajax({
        url: 'http://localhost:3000/table-data',
        method: 'GET',
        contentType: 'application/json',
        dataType: 'json',
    }).done(function(response){
        const users = response;
       const tableBody = document.getElementsByClassName("table-body")[0];
       const rows = [];
       for(let i = 0; i < users.length; i++) {
           const row = document.createElement('tr');
           Object.keys(users[i]).forEach(o => {
               const td = document.createElement('td');
               td.colSpan= 4;
               td.textContent = users[i][o];
               row.appendChild(td);
           })
           tableBody.appendChild(row)
       }
    })
})