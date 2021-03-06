function estrato() {
    var estrato=document.getElementById('txtestrato').value;
    var resultado=parseInt(estrato);


    if(estrato==1){
        document.getElementById('respuesta').innerHTML="El valor total de su matrícula y seguro es: $13.000"
    }else if(estrato==2){
        document.getElementById('respuesta').innerHTML="El valor total de su matrícula y seguro es: $20.000"
    }else if(estrato==3){
        document.getElementById('respuesta').innerHTML="El valor total de su matrícula y seguro es: $34.999"
    }else if(estrato==4){
        document.getElementById('respuesta').innerHTML="El valor total de su matrícula y seguro es: $35.999"
    }else if(estrato==5){
        document.getElementById('respuesta').innerHTML="El valor total de su matrícula y seguro es: $39.999"
    }else if(estrato==6){
        document.getElementById('respuesta').innerHTML="El valor total de su matrícula y seguro es: $39.999"
    }

    if(estrato<1 || estrato>6){
        document.getElementById('respuesta').innerHTML="Estrato no válido (Indique estrato del 1 al 6)"
    }
    
}