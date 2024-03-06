var Warenkorb = [];
var ausgabe = "";
var ausgabe1 ="";
var WarenkorbSumm = [];
var WarenkorbPreis = [];
var i = 0;
var i2 = 0;
var vWarenkorbSumme = 0;
var SummAusgabe = "";

var Headsetpreis = 100.00;
var Headset = "Logitech G Pro X Wireless Headset";



function HeadsetF(){
  Warenkorb.push(Headset);
        WarenkorbPreis.push(Headsetpreis);
        while(i < Warenkorb.length){
        ausgabe = ausgabe + Warenkorb[i] + "</br>";
        ausgabe1 = ausgabe1 + WarenkorbPreis[i] + ",00€</br>";
        i++;
        }
  document.getElementById("idAusgabe").innerHTML = ausgabe;
  document.getElementById("idAusgabe1").innerHTML = ausgabe1;
  
  

  var vWarenkorbStück = "Zum Warenkorb " + "<b>" + Warenkorb.length + "</b>";
 document.getElementById("idWarenkorb").innerHTML = vWarenkorbStück;
}

var Mauspreis = 110.00;
var Maus = "Logitech G Pro Wireless Maus";


    function MausF(){
        Warenkorb.push(Maus);
        WarenkorbPreis.push(Mauspreis);
        while(i < Warenkorb.length){
        ausgabe = ausgabe + Warenkorb[i] + "</br>";
        ausgabe1 = ausgabe1 + WarenkorbPreis[i] + ",00€</br>";
        i++;
        }
        document.getElementById("idAusgabe").innerHTML = ausgabe;
        document.getElementById("idAusgabe1").innerHTML = ausgabe1;
        
      
        var vWarenkorbStück = "Zum Warenkorb " + "<b>" + Warenkorb.length + "</b>";
        vWarenkorbStück = document.getElementById("idWarenkorb").innerHTML = vWarenkorbStück;
      }

var Monitorpreis = 300.00;
var Monitor = "Samsung Odyseey Gaming Monitor 30 Zoll";


    function MonitorF(){
        Warenkorb.push(Monitor);
        WarenkorbPreis.push(Monitorpreis);
        while(i < Warenkorb.length){
        ausgabe = ausgabe + Warenkorb[i] + "</br>";
        ausgabe1 = ausgabe1 + WarenkorbPreis[i] + ",00€</br>";
        i++;
        }
        ausgabe = document.getElementById("idAusgabe").innerHTML = ausgabe;
        ausgabe1 = document.getElementById("idAusgabe1").innerHTML = ausgabe1;
        
      
        var vWarenkorbStück = "Zum Warenkorb " + "<b>" + Warenkorb.length + "</b>";
        vWarenkorbStück = document.getElementById("idWarenkorb").innerHTML = vWarenkorbStück;
      }

var Scufpreis = 200.00;
var Scuf = "Playstation 5 Scuf Controller";


    function ScufF(){
        Warenkorb.push(Scuf);
        WarenkorbPreis.push(Scufpreis);
        while(i < Warenkorb.length){
        ausgabe = ausgabe + Warenkorb[i] + "</br>";
        ausgabe1 = ausgabe1 + WarenkorbPreis[i] + ",00€</br>";
        i++;
        }
        ausgabe = document.getElementById("idAusgabe").innerHTML = ausgabe;
        ausgabe1 = document.getElementById("idAusgabe1").innerHTML = ausgabe1;
       
      
        var vWarenkorbStück = "Zum Warenkorb " + "<b>" + Warenkorb.length + "</b>";
        vWarenkorbStück = document.getElementById("idWarenkorb").innerHTML = vWarenkorbStück;
      }

var TastaturPreis = 100.00;
var Tastatur = "Logitech G Pro TKL Mechanical Gaming Tastatur";

    function TastaturF(){
        Warenkorb.push(Tastatur);
        WarenkorbPreis.push(TastaturPreis);
        while(i < Warenkorb.length){
        ausgabe = ausgabe + Warenkorb[i] + "</br>";
        ausgabe1 = ausgabe1 + WarenkorbPreis[i] + ",00€</br>";
        i++;
        }
        ausgabe = document.getElementById("idAusgabe").innerHTML = ausgabe;
        ausgabe1 = document.getElementById("idAusgabe1").innerHTML = ausgabe1;
      
        var vWarenkorbStück = "Zum Warenkorb " + "<b>" + Warenkorb.length + "</b>";
        vWarenkorbStück = document.getElementById("idWarenkorb").innerHTML = vWarenkorbStück;
      }

var MousepadPreis = 29.00;
var Mousepad = "Titanwolf Gaming Mousepad 120x60cm, Wasserabweisend";


    function MousepadF(){
        Warenkorb.push(Mousepad);
        WarenkorbPreis.push(MousepadPreis);
        while(i < Warenkorb.length){
        ausgabe = ausgabe + Warenkorb[i] + "</br>";
        ausgabe1 = ausgabe1 + WarenkorbPreis[i] + ",00€</br>";
        i++;
        }
        ausgabe = document.getElementById("idAusgabe").innerHTML = ausgabe;
        ausgabe1 = document.getElementById("idAusgabe1").innerHTML = ausgabe1;
      
        var vWarenkorbStück = "Zum Warenkorb " + "<b>" + Warenkorb.length + "</b>";
        vWarenkorbStück = document.getElementById("idWarenkorb").innerHTML = vWarenkorbStück;
      }

var MouseAnsPreis = 30.00;
var MouseAns = "Logitech G305 LIGHTSPEED kabellose Gaming-Maus";


    function AnsMouse(){
        Warenkorb.push(MouseAns);
        WarenkorbPreis.push(MouseAnsPreis);
        while(i < Warenkorb.length){
        ausgabe = ausgabe + Warenkorb[i] + "</br>";
        ausgabe1 = ausgabe1 + WarenkorbPreis[i] + ",00€</br>";
        i++;
        }
        ausgabe = document.getElementById("idAusgabe").innerHTML = ausgabe;
        ausgabe1 = document.getElementById("idAusgabe1").innerHTML = ausgabe1;
      
        var vWarenkorbStück = "Zum Warenkorb " + "<b>" + Warenkorb.length + "</b>";
        vWarenkorbStück = document.getElementById("idWarenkorb").innerHTML = vWarenkorbStück;
      }

var AnsTastPreis = 120.00;
var AnsTast = "Razer Huntsman Tournament Edition";

function AnsTastF(){
    Warenkorb.push(AnsTast);
    WarenkorbPreis.push(AnsTastPreis);
    while(i < Warenkorb.length){
    ausgabe = ausgabe + Warenkorb[i] + "</br>";
    ausgabe1 = ausgabe1 + WarenkorbPreis[i] + ",00€</br>";
    i++;
    }
    ausgabe = document.getElementById("idAusgabe").innerHTML = ausgabe;
    ausgabe1 = document.getElementById("idAusgabe1").innerHTML = ausgabe1;
  
    var vWarenkorbStück = "Zum Warenkorb " + "<b>" + Warenkorb.length + "</b>";
    vWarenkorbStück = document.getElementById("idWarenkorb").innerHTML = vWarenkorbStück;
  }

var AnsMousPreis = 25.00;
var AnsMous = "ZOWIE G-SR Gaming Mauspad";

function AnsMousF(){
    Warenkorb.push(AnsMous);
    WarenkorbPreis.push(AnsMousPreis);
    while(i < Warenkorb.length){
    ausgabe = ausgabe + Warenkorb[i] + "</br>";
    ausgabe1 = ausgabe1 + WarenkorbPreis[i] + ",00€</br>";
    i++;
    }
    ausgabe = document.getElementById("idAusgabe").innerHTML = ausgabe;
    ausgabe1 = document.getElementById("idAusgabe1").innerHTML = ausgabe1;

    var vWarenkorbStück = "Zum Warenkorb " + "<b>" + Warenkorb.length + "</b>";
    vWarenkorbStück = document.getElementById("idWarenkorb").innerHTML = vWarenkorbStück;
  }

var RezonMousPreis = 90.00;
var RezonMous = "Logitech G PRO X SUPERLIGHT kabellose Gaming-Maus";

function RezonMousF(){
    Warenkorb.push(RezonMous);
    WarenkorbPreis.push(RezonMousPreis);
    while(i < Warenkorb.length){
    ausgabe = ausgabe + Warenkorb[i] + "</br>";
    ausgabe1 = ausgabe1 + WarenkorbPreis[i] + ",00€</br>";
    i++;
    }
    ausgabe = document.getElementById("idAusgabe").innerHTML = ausgabe;
    ausgabe1 = document.getElementById("idAusgabe1").innerHTML = ausgabe1;
  
    var vWarenkorbStück = "Zum Warenkorb " + "<b>" + Warenkorb.length + "</b>";
    vWarenkorbStück = document.getElementById("idWarenkorb").innerHTML = vWarenkorbStück;
  }

var RezonTastPreis = 170.00;
var RezonTast = "Strayfe Mechanische Tastatur Rezon x Drexler";

function RezonTastF(){
    Warenkorb.push(RezonTast);
    WarenkorbPreis.push(RezonTastPreis);
    while(i < Warenkorb.length){
    ausgabe = ausgabe + Warenkorb[i] + "</br>";
    ausgabe1 = ausgabe1 + WarenkorbPreis[i] + ",00€</br>";
    i++;
    }
    ausgabe = document.getElementById("idAusgabe").innerHTML = ausgabe;
    ausgabe1 = document.getElementById("idAusgabe1").innerHTML = ausgabe1;
  
    var vWarenkorbStück = "Zum Warenkorb " + "<b>" + Warenkorb.length + "</b>";
    vWarenkorbStück = document.getElementById("idWarenkorb").innerHTML = vWarenkorbStück;
  }

var RezonHeadPreis = 75.00;
var RezonHead = "JBL Quantum 400 Over-Ear Gaming Headset";

function RezonHeadF(){
    Warenkorb.push(RezonHead);
    WarenkorbPreis.push(RezonHeadPreis);
    while(i < Warenkorb.length){
    ausgabe = ausgabe + Warenkorb[i] + "</br>";
    ausgabe1 = ausgabe1 + WarenkorbPreis[i] + ",00€</br>";
    i++;
    }
    ausgabe = document.getElementById("idAusgabe").innerHTML = ausgabe;
    ausgabe1 = document.getElementById("idAusgabe1").innerHTML = ausgabe1;
  
    var vWarenkorbStück = "Zum Warenkorb " + "<b>" + Warenkorb.length + "</b>";
    vWarenkorbStück = document.getElementById("idWarenkorb").innerHTML = vWarenkorbStück;
  }



const scrollingElement = (document.scrollingElement || document.body);

const scrollToBottom = () => {
   scrollingElement.scrollTop = scrollingElement.scrollHeight;
}

const scrollToTop = () => {
   scrollingElement.scrollTop = 0;
}

// Require jQuery
const scrollSmoothToBottom = () => {
   $(scrollingElement).animate({
      scrollTop: document.body.scrollHeight,
   }, 500);
}

