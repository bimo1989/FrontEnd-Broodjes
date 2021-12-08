
$(document).ready(function(){

    const Url ='localhost:8080/api/v1/bestelling';
        let today = new Date().toISOString().slice(0, 10); 
                const dataBestelling={
                    "broodjeId": 1,
                    "studentId": 1,
                    "bestelling": "1987-09-10",
                    "prijs": 9,
                    "betaald": true,
                    "leverdatum": "1987-09-10"
                }

    console.log("test");
    $('#btn').click(function(){
        console.log("button clicked");
        $.post(Url,data,function(dataBestelling,status){
            console.log('${dataBestelling} and status is ${status}')
        });
        
    })      

    let dropdown = $('#students');
    dropdown.empty();
    dropdown.append('<option selected="true" disabled>-maak keuze-</option>');
    dropdown.prop('selectedIndex', 0);
    const urlStudent = 'http://localhost:8080/api/v1/student';

        $.getJSON(urlStudent, function (data) {
            $.each(data, function (key, entry) {
                dropdown.append($('<option></option>').attr('value',entry.StudentID+"|"+entry.Klas ).text(entry.Naam + " " + entry.Voornaam) );
            })
        });
    
    
    let dropdown2 = $('#broodje');
    dropdown2.empty();
    dropdown2.append('<option selected="true" disabled>-maak keuze-</option>');
    dropdown2.prop('selectedIndex', 0);
    const urlBroodje = 'https://mocki.io/v1/29f64c5c-d3c8-4575-986d-20291ce1c415';

        $.getJSON(urlBroodje, function (data) {
            $.each(data, function (key, entry) {
                dropdown2.append($('<option></option>').attr('value',entry.broodjeId ).text(entry.broodjeNaam + " (" + entry.prijs +" euro)") );
            })
        });
        
    });

function selectedSubjectName() {
    var array = $('#students').val().split('|');
    $('#klas').val(array[1]);
}




