La página apoyo.astro está construida con htmx. Cuando se hace click en un botón de país se despliega el archivo de ese país respectivo sin salir de la página.
La estructura de cada país será la siguiente:

- Dos columnas de 30% / 70% aprox. separadas con un espacio de 20 px aprox.

Ejemplo de estructura de página apoyo.astro con México:

- Columna izquierda: 
  <div data-layer="Apoyo Estatal en:" class="ApoyoEstatalEn w-48 h-4 text-center justify-center text-stone-600 text-xl font-black font-['Geologica'] leading-6">Apoyo Estatal en:</div>
<div data-layer="México" class="MXico w-96 h-24 justify-start text-amber-600 text-7xl font-black font-['Geologica'] uppercase leading-[77.49px]">México</div>
  <div data-layer="Mecanismos de" class="MecanismosDe w-96 h-14 justify-start text-stone-600 text-2xl font-medium font-['Geologica'] leading-7">Mecanismos de</div>
  <div data-layer="protección" class="ProtecciN text-center justify-start text-stone-500 text-4xl font-extrabold font-['Geologica'] uppercase leading-10">protección</div>
  <div data-layer="Favorite" class="Favorite size-9 relative">
    <div data-layer="Vector 15" class="Vector15 w-8 h-7 left-[1.46px] top-[1.46px] absolute outline outline-[3.17px] outline-offset-[-1.58px] outline-stone-500"></div><div data-layer="Personas defensoras de derechos humanos" class="PersonasDefensorasDeDerechosHumanos w-60 h-16 justify-start text-stone-500 text-lg font-bold font-['Geologica'] leading-6">Personas defensoras de derechos humanos</div>
    </div>
    <div data-layer="Favorite" class="Favorite size-9 relative">
    <div data-layer="Vector 15" class="Vector15 w-8 h-7 left-[1.46px] top-[1.46px] absolute outline outline-[3.17px] outline-offset-[-1.58px] outline-stone-500"></div><div data-layer="Periodistas" class="Periodistas w-36 h-7 justify-start text-stone-500 text-lg font-bold font-['Geologica'] leading-6">Periodistas</div>
</div>
  <div data-layer="¿Cómo activar el" class="CMoActivarEl w-96 h-14 justify-start text-stone-600 text-2xl font-medium font-['Geologica'] leading-7">¿Cómo activar el</div>
  <div data-layer="mecanismo?" class="Mecanismo text-center justify-start text-stone-500 text-4xl font-extrabold font-['Geologica'] uppercase leading-10">mecanismo?</div>
  <div data-layer="Texto explicativo o de bajada a la pregunta que complemente." class="TextoExplicativoODeBajadaALaPreguntaQueComplemente w-72 justify-start text-stone-600 text-lg font-normal font-['Geologica'] leading-6">Texto explicativo o de bajada a la pregunta que complemente.</div>

- Columna derecha:
<div data-layer="Texto explicativo que presente estos datos de teléfono, correo y dirección." class="TextoExplicativoQuePresenteEstosDatosDeTelFonoCorreoYDirecciN w-[786px] justify-start text-stone-600 text-lg font-black font-['Geologica'] leading-6">Texto explicativo  que presente estos datos de teléfono, correo y dirección.</div>
  <div data-layer="Teléfono: 01 800 800 40 50 llamada sin costo 01 55 5209 88 00 ext. 30863" class="TelFono018008004050LlamadaSinCosto015552098800Ext30863 w-96 h-20 justify-start"><span class="text-amber-600 text-lg font-black font-['Geologica'] leading-6">Teléfono: <br/></span><span class="text-stone-600 text-lg font-normal font-['Geologica'] leading-6">01 800 800 40 50 llamada sin costo<br/>01 55 5209 88 00 ext. 30863</span></div>
  <div data-layer="Correo: mecanismo@segob.gob.mx" class="CorreoMecanismoSegobGobMx w-96 h-11 justify-start"><span class="text-amber-600 text-lg font-black font-['Geologica'] leading-6">Correo:</span><span class="text-amber-600 text-lg font-normal font-['Geologica'] leading-6"> <br/></span><span class="text-stone-600 text-lg font-normal font-['Geologica'] underline leading-6">mecanismo@segob.gob.mx</span></div>
  <div data-layer="Dirección: Calle Dinamarca número 84, piso 7, colonia Juárez, Delegación Cuauhtémoc, Ciudad de México. C. P. 06600." class="DirecciNCalleDinamarcaNMero84Piso7ColoniaJuRezDelegaciNCuauhtMocCiudadDeMXicoCP06600 w-[784px] h-20 justify-start"><span class="text-amber-600 text-lg font-black font-['Geologica'] leading-6">Dirección:<br/></span><span class="text-stone-600 text-lg font-normal font-['Geologica'] leading-6">Calle Dinamarca número 84, piso 7, colonia Juárez, Delegación Cuauhtémoc, Ciudad de México. C. P. 06600.</span></div>
  <img data-layer="mapa 1" class="Mapa1 w-[783px] h-80" src="https://placehold.co/783x352" />



