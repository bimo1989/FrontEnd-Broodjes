
$(document).ready(function(){
    let dropdown = $('#students');
    dropdown.empty();
    dropdown.append('<option selected="true" disabled>-maak keuze-</option>');
    dropdown.prop('selectedIndex', 0);
    const urlStudent = 'https://mocki.io/v1/88471c08-9aca-4993-a204-3c561a48235e';

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


        const Url ='https://localhost:8080/api/v1/bestelling';
        let today = new Date().toISOString().slice(0, 10)
                const data={
                    "bestelId": 9,
                    "broodjeId": 1,
                    "studentId": 1,
                     "bestelling": "1982-09-10",
                    "prijs": 1.5,
                     "betaald": true,
                    "leverdatum": "1982-09-10"
                }
        
                $('.btn').click(function(){
                    $.post(Url,data,function(data,status){
                        console.log('${data} and status is ${status}')
                    });
                })      

        
    });

function selectedSubjectName() {
    var array = $('#students').val().split('|');
    $('#klas').val(array[1]);
}




