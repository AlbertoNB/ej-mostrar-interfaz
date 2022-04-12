/*=======================PARTE DEL SIDEBAR=========================*/
$('.sidebarCollapse').on('click', function () {
	$('.sidebar-left').toggleClass('active-sid');
	$('.sidebar-right').toggleClass('active-sid');
	$('.content-left').toggleClass('active-con');
	$('.content-right').toggleClass('active-con');
	$('.bt-sidebar-left').toggleClass('active-bt');
	$('.bt-sidebar-right').toggleClass('active-bt');
});

/*=======================BOTÓN/SWITCH BLACK WHITE==============================*/
const btnSwitch = document.querySelector('.switch');
btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');

//Guardar el modo en localstorage
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('dark-mode', 'true');
    } else {
        localStorage.setItem('dark-mode', 'false');
    }

});
// Obtener el modo actual.
if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark');
    btnSwitch.classList.add('active');

} else {
    document.body.classList.remove('dark');
    btnSwitch.classList.remove('active');
}

/*============================CURSOR MÁS GRANDE============================*/
const BigCursor = document.querySelector('.bt-big-cursor');
BigCursor.addEventListener('click', () => {
    document.body.classList.toggle('big-cursor');

    //Guardar el modo en localstorage
    if (document.body.classList.contains('big-cursor')) {
        localStorage.setItem('cursor-mode', 'true');
    } else {
        localStorage.setItem('cursor-mode', 'false');
    }
});

// Obtener el modo actual.
if (localStorage.getItem('cursor-mode') === 'true') {
    document.body.classList.add('big-cursor');
} else {
    document.body.classList.remove('big-cursor');
}

/*===================TIPOGRAFÍA PARA DISLÉXICOS=======================*/
const DyslexicFont = document.querySelector('.bt-dyslexic-font');
DyslexicFont.addEventListener('click', () => {
    document.body.classList.toggle('open-dyslexic');

    //Guardar el modo en localstorage
    if (document.body.classList.contains('open-dyslexic')) {
        localStorage.setItem('dyslexic-mode', 'true');
    } else {
        localStorage.setItem('dyslexic-mode', 'false');
    }
});

// Obtener el modo actual.
if (localStorage.getItem('dyslexic-mode') === 'true') {
    document.body.classList.add('open-dyslexic');
} else {
    document.body.classList.remove('open-dyslexic');
}

/*=====================INTERFAZ EN BLANCO Y NEGRO (ESCALA DE GRISES)===================*/
const pGrayScale = document.querySelector('.bt-grayscale');
pGrayScale.addEventListener('click', () => {
    document.body.classList.toggle('grayscale');

    //Guardar el modo en localstorage
    if (document.body.classList.contains('grayscale')) {
        localStorage.setItem('grayscale-mode', 'true');
    } else {
        localStorage.setItem('grayscale-mode', 'false');
    }
});

// Obtener el modo actual.
if (localStorage.getItem('grayscale-mode') === 'true') {
    document.body.classList.add('grayscale');
} else {
    document.body.classList.remove('grayscale');
}

/*==================CONTROL DE TAMAÑO DE TIPOGRAFÍA=====================*/
// Función para disminuir el tamaño del texto (fuente)
$(".disminuir").on("click", function () {
    if (document.body.classList.contains('text-la-sm')) {
      $("h1, h2, h3, h4, h5, h6, p, label, input, textarea, a, button, small").css("font-size", "-=2");
    } else {
      $(".la-sm").css("font-size", "-=2");
    }
  });
  
  // Función para aumentar el tamaño del texto (fuente) 
  $(".aumentar").on("click", function () {
    if (document.body.classList.contains('text-la-sm')) {
      $("h1, h2, h3, h4, h5, h6, p, label, input, textarea, a, button, small").css("font-size", "+=2");
    } else {
      $(".la-sm").css("font-size", "+=2");
    }
  });
  
  // Función para restablecer el tamaño del texto (fuente) al tamaño inicial 
  $(".restablecer").on("click", function () {
    $("h1, .h1").css("font-size", "2.5rem");
    $("h2, .h2").css("font-size", "2rem");
    $("h3, .h3").css("font-size", "1.75rem");
    $("h4, .h4").css("font-size", "1.5rem");
    $("h5, .h5").css("font-size", "1.25rem");
    $("h6, .h6").css("font-size", "1rem");
    $("p, label, input, textarea, a, button").css("font-size", "16px");
    $(".btn-sm").css("font-size", "0.875rem");
    $("small, .small, .blockquote-footer").css("font-size", "80%");
    $(".bt-sidebar-right, .bt-sidebar-left").css("font-size", "3.5rem");
  });

/*===================RECONOCIMIENTO DE VOZ Y LECTURA AUTOMÁTICA DE TEXTO=================*/
//(respaldo/hablar5.js)
var texto = document.querySelector('.es-txt');
var btnEscribir = document.querySelector('.bt-escr');
var btnNoEscribir = document.querySelector('.bt-nescr');
var btnEscOnOff = document.querySelector('.besc-on-off')
var btnPlay = document.querySelector('.b-play');
var btnPause = document.querySelector('.b-pause');
var btnStop = document.querySelector('.b-stop');
var flag = false;

////////////////////////////////////////////////////////////////////////////
                        /*Reconocimiento de voz*/
////////////////////////////////////////////////////////////////////////////
let recognition = new webkitSpeechRecognition();
/*lang: idioma en formato locale, ya que tiene importancia el acento 
del locutor, que puede ser distinto dependiendo del país o región */
recognition.lang = 'es-MX';
/*continuous: indica si el reconocimiento se hace de forma continuada o no. Es decir, 
si se detiene cuando el usuario deje de hablar. Por defecto, su valor es false, 
de forma que si deseamos que el reconocimiento se haga continuado, debemos inicializarla a true. */
recognition.continuous = true;
/*interimResults: valor booleano que señala si se desean mostrar los valores provisionales
 o no sobre el texto reconocido. Hay que tener en cuenta, que el resultado puede cambiar. */
recognition.interimResults = false;

recognition.onresult = (event) => {
    var results = event.results;
    var frase = results[results.length - 1][0].transcript;
    texto.value += frase;
}
recognition.onend = (event) => {
    console.log('El micrófono dejo de escuchar');
}
recognition.onerror = (event) => {
    console.log(event.error);
}
/*descomentar las funciones "btnEscribir, btnNoEscribir" si pretende que un boton prenda y otro boton apagar el microfono(dos botones). codigo refenencia: 7711*/
/* se prende con un boton */
/*btnEscribir.addEventListener('click', () => {
    if (!('webkitSpeechRecognition' in window)) {
        alert("No se puede usar el reconocimiento de voz en este navegador");
    } else {
        recognition.start();
    }
});*/
/*se apaga con un boton */
/*btnNoEscribir.addEventListener('click', () => {
    recognition.stop();
    alert("He dejado de escucharte")
});*/

/*comentar las dos funcones "btnEscOnOff" si pretende que un boton prenda y otro boton apagar el microfono(dos botones). codigo refenencia: 7711*/
/*se prende y apaga con un solo boton*/
btnEscOnOff.addEventListener('mousedown', () => { 
    if (!('webkitSpeechRecognition' in window)) {
        alert("No se puede usar el reconocimiento de voz en este navegador");
    } else {
        recognition.start();
    }
});

btnEscOnOff.addEventListener('mouseup', () => { 
    recognition.stop();
});

////////////////////////////////////////////////////////////////////////////
                        /*Lectura de textos*/
////////////////////////////////////////////////////////////////////////////

window.onload = function () {
    if ('speechSynthesis' in window) with (speechSynthesis) {
        /*var synth = window.speechSynthesis;*/
        function onClickPlay() {

            if (!('speechSynthesis' in window)) {
                alert("No se puede reproducir la lectura en este navegador");
            } else {
                if (!flag) {
                    flag = true;
                    recognition = new SpeechSynthesisUtterance(texto.value);
                    recognition.lang = 'es-MX';
                    recognition.volume = 1;
                    recognition.pitch = 1;
                    recognition.rate = 1;

                    recognition.voice = getVoices()[0];
                    recognition.onend = function () {
                        flag = false; btnPlay.className = btnPause.className = ''; btnStop.className = 'stopped';
                    };
                    btnPlay.className = 'played';
                    btnStop.className = '';
                    speak(recognition);

                }
                if (paused) { /* unpause/resume narration */
                    btnPlay.className = 'played';
                    btnPause.className = '';
                    resume();
                }
            }
        }

        function onClickPause() {
            if (speaking && !paused) { /* pause narration */
                btnPause.className = 'paused';
                btnPlay.className = '';
                pause();
            }
        }

        function onClickStop() {
            if (speaking) { /* stop narration */
                /* for safari */
                btnStop.className = 'stopped';
                btnPlay.className = btnPause.className = '';
                flag = false;
                cancel();

            }
        }
        btnPlay.addEventListener('click', onClickPlay);
        btnPause.addEventListener('click', onClickPause);
        btnStop.addEventListener('click', onClickStop);
    }
}