var Warenkorb = [];
var ausgabe = " <b>Ihr WarenKorb</b><ul>";
var WarenkorbSumm = [];
i = 0;
i2 = 0;
var vWarenkorbSumme = 0;
var SummAusgabe = "";

var Headsetpreis = 100.00;
var Headset = "Logitech G Pro X Wireless Headset";

function HeadsetF(){
  Warenkorb.push(Headset);
  while(i < Warenkorb.length){
  ausgabe = ausgabe + "<li>" + Warenkorb[i] + "</li>";
  i++;
  }
  WarenkorbSumm.push(Headsetpreis);
  while(i2 < WarenkorbSumm.length){
    vWarenkorbSumme = vWarenkorbSumme + WarenkorbSumm[i2];
    i2++;
  }
  SummAusgabe = vWarenkorbSumme.toFixed(2);
  document.getElementById("idAusgabeSumm").innerHTML = SummAusgabe;

  ausgabe = ausgabe + "</ul>";
  ausgabe = document.getElementById("idAusgabe").innerHTML = ausgabe;

  var vWarenkorbStück = "Warenkorb " + "<b>" + Warenkorb.length + "</b>";
  vWarenkorbStück = document.getElementById("idWarenkorb").innerHTML = vWarenkorbStück;
}

var Mauspreis = 110.00;
var Maus = "Logitech G Pro Wireless Maus";

function MausF(){
  Warenkorb.push(Maus);
  while(i < Warenkorb.length){
  ausgabe = ausgabe + "<li>" + Warenkorb[i] + "</li>";
  i++;
  }
  WarenkorbSumm.push(Mauspreis);
  while(i2 < WarenkorbSumm.length){
    vWarenkorbSumme = vWarenkorbSumme + WarenkorbSumm[i2];
    i2++;
  }
  SummAusgabe = vWarenkorbSumme;
  document.getElementById("idAusgabeSumm").innerHTML = SummAusgabe;
  ausgabe = ausgabe + "</ul>"
  ausgabe = document.getElementById("idAusgabe").innerHTML = ausgabe;

  var vWarenkorbStück = "Warenkorb " + "<b>" + Warenkorb.length + "</b>";
  vWarenkorbStück = document.getElementById("idWarenkorb").innerHTML = vWarenkorbStück;
}

var Monitorpreis = 300.00;
var Monitor = "Samsung Odyseey Gaming Monitor 30 Zoll";

function MonitorF(){
  Warenkorb.push(Monitor);
  while(i < Warenkorb.length){
  ausgabe = ausgabe + "<li>" + Warenkorb[i] + "</li>";
  i++;
  }
  
  ausgabe = ausgabe + "</ul>"
  ausgabe = document.getElementById("idAusgabe").innerHTML = ausgabe;

  var vWarenkorbStück = "Warenkorb " + "<b>" + Warenkorb.length + "</b>";
  vWarenkorbStück = document.getElementById("idWarenkorb").innerHTML = vWarenkorbStück;
}

var Scufpreis = "200,00€";
var Scuf = "Playstation 5 Scuf Controller " + Scufpreis;

function ScufF(){
  Warenkorb.push(Scuf);
  while(i < Warenkorb.length){
  ausgabe = ausgabe + "<li>" + Warenkorb[i] + "</li>";
  i++;
  }
  ausgabe = ausgabe + "</ul>"
  ausgabe = document.getElementById("idAusgabe").innerHTML = ausgabe;

  var vWarenkorbStück = "Warenkorb " + "<b>" + Warenkorb.length + "</b>";
  vWarenkorbStück = document.getElementById("idWarenkorb").innerHTML = vWarenkorbStück;
}

var TastaturPreis = "100,00€";
var Tastatur = "Logitech G Pro TKL Mechanical Gaming Tastatur " + TastaturPreis;

function TastaturF(){
  Warenkorb.push(Tastatur);
  while(i < Warenkorb.length){
  ausgabe = ausgabe + "<li>" + Warenkorb[i] + "</li>";
  i++;
  }
  ausgabe = ausgabe + "</ul>"
  ausgabe = document.getElementById("idAusgabe").innerHTML = ausgabe;

  var vWarenkorbStück = "Warenkorb " + "<b>" + Warenkorb.length + "</b>";
  vWarenkorbStück = document.getElementById("idWarenkorb").innerHTML = vWarenkorbStück;
}

var MousepadPreis = "29,00€";
var Mousepad = "Titanwolf Gaming Mousepad 120x60cm, Wasserabweisend " + MousepadPreis;

function MousepadF(){
  Warenkorb.push(Mousepad);
  while(i < Warenkorb.length){
  ausgabe = ausgabe + "<li>" + Warenkorb[i] + "</li>";
  i++;
  }
  ausgabe = ausgabe + "</ul>"
  ausgabe = document.getElementById("idAusgabe").innerHTML = ausgabe;

  var vWarenkorbStück = "Warenkorb " + "<b>" + Warenkorb.length + "</b>";
  vWarenkorbStück = document.getElementById("idWarenkorb").innerHTML = vWarenkorbStück;
}












