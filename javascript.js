console.log('Hola');

const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('click');

    var datos = new FormData(formulario);
    console.log(datos);
    console.log(datos.get('id'));
    console.log(datos.get('num_1'));
    console.log(datos.get('num_2'));

    fetch('http://localhost/js/doc.php',{
        method:'POST',
        body:datos
    })
    .then(datos => datos.json())
    .then(datosformulario => {
        console.log(datosformulario);
    })
})
/*
    function proceso(){
        var id = $('#id').val();
        var num_1 = $('#num_1').val();
        var num_2 = $('#num_2').val();

        $.post('http://localhost/EJERCICIOAPI/js/doc.php',{id:id,num_1:num_1,num_2:num_2}, function(data){
        if(data!=null){
            alert("se envio");
        }
        else{
            alert("no se envio");
        }
            
    });
}
*/
    




