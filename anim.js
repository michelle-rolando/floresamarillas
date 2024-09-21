// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "¿Cómo comenzamos? Yo no lo sé.", time: 17 },
  { text: "La historia que no tiene fin.", time: 19 },                  ///2
  { text: "Ni ¿cómo llegaste a ser la mujer", time: 26 },               ///7
  { text: "que toda la vida pedí?", time: 27 },                         //1
  { text: "Contigo hace falta pasión", time: 34 },                      //7      
  { text: "y un toque de poesía, y sabiduría, pues yo", time: 40 },     //6
  { text: "trabajo con fantasías.", time: 48 },                         //8
  { text: "¿Recuerdas el día que te canté?", time: 49 },                //1    
  { text: "Fue un súbito escalofrío", time: 56 },                       //7
  { text: "Por si no lo sabes te lo diré", time: 59 },                  //4
  { text: "Yo nunca dejé de sentirlo.", time: 65 },                     //6 
  { text: "Contigo hace falta pasión.", time: 69 },                     //4  
  { text: "No debe fallar jamás.", time: 72 },                          //3
  { text: "También maestría pues yo", time: 75 },                       //3 
  { text: "trabajo con el corazón.", time: 83 },                        //8
  { text: "Cantar al amor ya no bastará.", time: 84 },                  //1  ++++++++
  { text: "Es poco para mí.", time: 91 },                               //7  
  { text: "Si quiero decirte que nunca habrá", time: 95 },              //4  
  { text: "cosa más bella que tú", time: 101 },                         //6  
  { text: "Cosa más linda que tú", time: 105 },                         //4  
  { text: "única como eres", time: 108 },                               //3  
  { text: "inmensa cuando quieres", time: 111 },                        //3  
  { text: "¡Gracias por existir!", time: 119 },                         //8 ++++++++++ 
  { text: "¿Cómo comenzamos? Yo no lo sé.", time: 125 },                //6 xxxxxxxxxxxxx     
  { text: "La historia que toca su fin", time: 127 },                   //2  
  { text: "¿Qué es ese misterio que no se fue?", time: 134 },           //7
  { text: "Lo llevo aquí dentro de mí.", time: 136 },                    //2        
  { text: "Serán los recuerdos que no", time: 143 },                    //7  
  { text: "no dejan pasar la edad", time: 146 },                         //3
  { text: "Serán las palabras pues yo", time: 149 },                    //3
  { text: "sabrás mi trabajo es la voz", time: 157 },                    //8      
  { text: "Cantar con amor ya no bastará", time: 158 },                 //1    
  { text: "Es poco para mí.", time: 165 },                               //7 ------ 
  { text: "Si quiero decirte que nunca habrá", time: 169 },              //4  
  { text: "cosa más bella que tú", time: 175 },                         //6  
  { text: "Cosa más linda que tú", time: 179 },                         //4  
  { text: "única como eres", time: 182 },                               //3  
  { text: "inmensa cuando quieres", time: 185 },                        //3  
  { text: "¡Gracias por existir!", time: 193 },                         //8 ++++++++++
  { text: "Cosa más bella que tú", time: 210 },                         //10+4+3  
  { text: "Cosa más linda que tú", time: 214 },                         //4  
  { text: "única como eres", time: 217 },                               //3  
  { text: "inmensa cuando quieres", time: 220 },                        //3  
  { text: "¡Gracias por existir!", time: 228 },                         //8 ++++++++++
  { text: "¡Gracias por existir!", time: 236 },                         //8
  { text: "Cosa más bella que tú", time: 244 },                         //8+2
  { text: "¡Gracias por existir!", time: 248 },                         //8+4
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);