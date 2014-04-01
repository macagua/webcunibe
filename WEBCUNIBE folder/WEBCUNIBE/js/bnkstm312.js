/*
// CARRERAS
function administraciondeempresas()
{
  open('carreras/administraciondeempresas.html','_blank','width=650,height=500,scrollbars=yes,location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=no');  
}

function contaduria()
{
  open('carreras/contaduria.html','_blank','width=650,height=500,scrollbars=yes,location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=no');
}

function disenografico()
{
  open('carreras/disenografico.html','_blank','width=650,height=500,scrollbars=yes,location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=no');
}

function electronica()
{
  open('carreras/electronica.html','_blank','width=650,height=500,scrollbars=yes,location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=no');
}

function informatica()
{
  open('carreras/informatica.html','_blank','width=650,height=500,scrollbars=yes,location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=no');
}

function mantenimientoindustrial()
{
  open('carreras/mantenimientoindustrial.html','_blank','width=650,height=500,scrollbars=yes,location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=no');
}

function mercadeo()
{
  open('carreras/mercadeo.html','_blank','width=650,height=500,scrollbars=yes,location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=no');
}

function preescolar()
{
  open('carreras/preescolar.html','_blank','width=650,height=500,scrollbars=yes,location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=no');
}

function relacionesindustriales()
{
  open('carreras/relacionesindustriales.html','_blank','width=650,height=500,scrollbars=yes,location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=no');
}

function turismo()
{
  open('carreras/turismo.html','_blank','width=650,height=500,scrollbars=yes,location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=no');
}
*/
/*// HORARIOS
function horarios()
{
  open('horarios/consultas.html','_blank','width=750,height=500,scrollbars=yes,location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=no');
}


// BANCOS
function bancos()
{
  open('bancos.html','_blank','width=650,height=500,scrollbars=yes,location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=no,close=no');
}


// DPTO. CECI
function ceci()
{
  open('ceci/index.html','_blank','scrollbars=yes,location=yes,directories=yes,status=yes,menubar=yes,toolbar=yes,resizable=yes');
  //open('ceci/index.html','_blank','width=650,height=500,scrollbars=yes,location=yes,directories=yes,status=yes,menubar=yes,toolbar=yes,resizable=yes');  
}

// LIBRO DE VISITAS
function guestbook()
{
  open('http://gbooks.melodysoft.com/WEBCUNIBE/','_blank','width=800,height=600,scrollbars=yes,location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=no');
}

// SERVICIOS DE INTERNET
function serviciodeinternet()
{
  open('serviciodeinternet.html','_blank','width=580,height=400,scrollbars=no,location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=no');
}

// SERVICIOS MÉDICOS
function serviciosmedicos()
{
  open('serviciosmedicos.html','_blank','width=580,height=430,scrollbars=no,location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=no');
}

// COORDINACION DE CULTURA
function coordinaciondecultura()
{
  open('coordinaciondecultura.html','_blank','width=580,height=430,scrollbars=no,location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=no');
}

// TELENOTAS
function telenotas()
{
  open('telenotas.html','_blank','width=580,height=430,scrollbars=no,location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=no');
}*/

// POPUP WIN
function openAWindow(pageToLoad, winName, width, height, center)
{
 xposition=0;
 yposition=0;
 scrollbars=0;
 
 if ((parseInt(navigator.appVersion) >= 4 ) && (center))
  {
   xposition = 20;
   yposition = 20;
  }

 if (winName =='admiemp')
    scrollbars = 1;
     
 if (winName =='contad')
     scrollbars = 1;
      
 if (winName =='mercad')
     scrollbars = 1;
     
 if (winName =='relacindu')
     scrollbars = 1; 
      
 if (winName =='prescol')
     scrollbars = 1; 
      
 if (winName =='turismo')
      scrollbars = 1;
      
 if (winName =='disegraf')
      scrollbars = 1;
      
 if (winName =='electron')
      scrollbars = 1;
      
 if (winName =='informa')
      scrollbars = 1;
      
 if (winName =='mantinsdus')
      scrollbars = 1;
      
 if (winName =='bancos')
      scrollbars = 1;      

 if (winName =='internet')
      scrollbars = 0;      

 if (winName =='servmedicos')
      scrollbars = 0;            

 if (winName =='coorddecultura')
      scrollbars = 0;            
            
 if (winName =='telenotas')
      scrollbars = 0;                  

 if (winName =='horarios')
      scrollbars = 1;        

  args = "width=" + width + ","
  + "height=" + height + ","
  + "location=0,"
  + "menubar=0,"
  + "resizable=0,"
  + "scrollbars=" + scrollbars + ","
  + "status=0,"
  + "titlebar=0,"
  + "toolbar=0,"
  + "hotkeys=0,"
  + "screenx=" + xposition + ","  //NN Only
  + "screeny=" + yposition + ","  //NN Only
  + "left=" + xposition + ","     //IE Only
  + "top=" + yposition;           //IE Only
  window.open(pageToLoad,winName,args);
}

// PRE CARGA IMAGENES
function precargaimg()
{
 imagen1=new Image()
 imagen1.src="http://www.cunibe.org/imagenes/actualizarout.gif"
 imagen2=new Image()
 imagen2.src="http://www.cunibe.org/imagenes/actualizarover.gif"
 imagen3=new Image()
 imagen3.src="http://www.cunibe.org/imagenes/btninicioout.gif"
 imagen4=new Image()
 imagen4.src="http://www.cunibe.org/imagenes/btninicioover.gif"
 imagen5=new Image()
 imagen5.src="http://www.cunibe.org/imagenes/barrasuperiorguestbook.gif"
/* imagen6=new Image()
 imagen6.src="http://www.cunibe.org/imagenes/background.gif"
 imagen7=new Image()
 imagen7.src="http://www.cunibe.org/imagenes/logomedicina.gif"  */
}

/*
// MAPA DEL SITIO
function OpenTOC()
{
newwin = window.open("mapadelsitio.html","MAPA","toolbar=0,location=0,directories=0,status=1,menubar=0,resizable=1,scrollbars=1,width=440,height=440");
newwin.creator = self;
}

function doIt(new_location)
{
var newwin = window.opener

if (window.opener == null)
        newwin = window.open(new_location, "", "toolbar=1,location=1,directories =1,status=1,menubar=1,resizable=1 scrollbars=1,width=880,height=440");
else {
        if (opener.closed)
                newwin = window.open(new_location, "", "toolbar=1,location=1,dir ectories=1,status=1,menubar=1,resizable=1,scrollbars=1,width=880,height=440");
        else
                newwin.location.href = new_location;
        }
}
*/



