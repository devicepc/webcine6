 function pdfexport(){
  document.getElementById("pdfexport").addEventListener("click", ()=>{
    const invoice = this.document.getElementById("entradas");
    quitarbtnDescaCRes();
    Functionretraso();
    console.log(invoice);
    console.log(window);
    var opt ={
      margin: 1,
      filename: 'entradasCinejlasf.pdf',
      image: { type:'jpeg', quality: 0.98},
      jsPDF: {unit:'in', format: 'letter', orientation:'portrait'}
    };
    html2pdf().from(invoice).set(opt).save();
  })
  
}


// boton pagar sin resreva 
window.onload = function(){
  document.getElementById("pdfexport1").addEventListener("click", ()=>{
    quitarbtnDesca();
    Functionretraso();
    const invoice = this.document.getElementById("entradas");
    console.log(invoice);
    console.log(window);
    var opt ={
      margin: 1,
      filename: 'entradasCinejlasf.pdf',
      image: { type:'jpeg', quality: 0.98},
      jsPDF: {unit:'in', format: 'letter', orientation:'portrait'}
    };
    html2pdf().from(invoice).set(opt).save();
  })
}

// quitar y agregar para generar pdf sin reservas
function quitarbtnDesca(){
  document.getElementById("pdfexport1").style.display="none";
  document.getElementById("pagarsinreserva").style.display="none";
  document.getElementById("elejasientos").style.display="none";
  document.getElementById("qrvacio").style.display="block";
  document.getElementById("container").style.display="none";
  document.getElementById("h3pdf").style.display="none";
  document.getElementById("h3titleselectasientos").style.display="none";
  document.getElementById("slect1asiento").style.display="none";
  document.getElementById("btndosEntradas").style.display="none";
  //  document.getElementById("InfoSalas4").style.display="none";
  createaleatNumer2();
  FechaFactura();
 


}

// quitar y agregar para generar pdf con reservas
function quitarbtnDescaCRes(){
  document.getElementById("pdfexport1").style.display="none";
  document.getElementById("pagarsinreserva").style.display="none";
  document.getElementById("elejasientos").style.display="none";
  document.getElementById("qrvacio").style.display="block";
  document.getElementById("container").style.display="none";
  document.getElementById("h3pdf").style.display="none";
  // document.getElementById("InfoSalas4").style.display="none";
  createaleatNumer2();
  FechaFactura();
  
  
}

// brorar luego de compara entradas

function Functionretraso() {
  retrzomp4 = setTimeout(borarUserSelection, 6000 );
  console.log("borarEntradas");
}
function borarUserSelection(){
  document.getElementById("entradas").style.display ="none"; 
}


// crear numero de factura

function createaleatNumer2(){

var NumTicket = Math.round(Math.random()*100)

document.getElementById("IdFactura").innerHTML = "Factura N° : "+NumTicket;
console.log(NumTicket);

}
// fecha para imprimir
 // fecha actual
 var d = new Date();
 function FechaFactura(){
   console.log('Fecha: '+d.getDate(),'<br>Dia de la semana: '+d.getDay(),'<br>Mes (0 al 11): '+d.getMonth(),'<br>Año: '+d.getFullYear());
   // document.write('Fecha: '+d.getDate(),'<br>Dia de la semana: '+d.getDay(),'<br>Mes (0 al 11): '+d.getMonth(),'<br>Año: '+d.getFullYear());
   document.getElementById("fechaticket").innerHTML = ('Fecha de emision: '+d.getDate() + "/ " +(d.getMonth() +1) +"/ " +d.getFullYear());
 }

