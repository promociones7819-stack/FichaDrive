# FichaDrive · En ruta

Web: https://fichadrive.promociones7819.workers.dev

Repositorio: https://github.com/promociones7819-stack/FichaDrive

Cloudflare Worker: `fichadrive`. Publicar desde este repositorio con `npm ci` y `npm run deploy` (requiere iniciar sesión en Cloudflare).

El repositorio contiene la app y la configuración de despliegue. Los cambios en GitHub no activan despliegues automáticos por sí solos.

Para traer alumnos desde ficha-alumno-simple.promociones7819.workers.dev, exportar allí una copia JSON y recuperarla en esta nueva dirección. El almacenamiento del navegador es independiente para cada dominio.

## Ficha de alumno sencilla

Versión independiente basada en los ocho bloques de `reduced.js` del ZIP FichaAutoescuela-main 2. Se simplifica la valoración a tres niveles y se elimina la ficha extensa y el encadenamiento de ampliaciones del original.

## Uso

1. Crea un alumno: nombre, permiso y tipo de vehículo.
2. Activa Modo rápido para dejar solo las nueve valoraciones con botones grandes. En cada clase, marca los aspectos trabajados: Con ayuda / Mejorando / Autónomo. Otro toque desmarca. Lo no trabajado queda sin evaluar.
3. Añade apuntes predefinidos y objetivos para la siguiente clase. Escribir es opcional.
4. Finaliza la clase para pasarla al historial. Los borradores se guardan automáticamente.
5. Consulta Evolución o revisa clases anteriores. En Informe / PDF puedes revisar, imprimir y descargar una ficha simplificada.

Diseñada para el instructor acompañante. Si eres quien conduce, rellena con el vehículo detenido.

## Guardado y copias

Los datos personales se guardan exclusivamente en este navegador/dispositivo, mediante localStorage. Cloudflare aloja los archivos de la aplicación, no almacena fichas de alumnos. No hay cuenta ni sincronización automática. No uses navegación privada. Borrar datos del navegador elimina las fichas locales.

Guarda copias JSON periódicas en Archivos/iCloud Drive. Recuperar una copia sustituye los datos actuales tras confirmación. Se valida el formato antes de importar. Las copias de esta app no son compatibles con el formato del ejemplo original; no se han migrado alumnos existentes.

La app funciona sin conexión tras su primera carga completa. En Safari para iPad: Compartir → Añadir a pantalla de inicio. Usa siempre la misma instalación para evitar almacenar datos en contextos diferentes.

## PDF

Informe propio, no cuadernillo oficial DGT. Incluye datos básicos del alumno, fechas, duración, entorno, las nueve valoraciones, apuntes, notas y objetivos. Se puede exportar una clase o el historial completo. El PDF se genera localmente, sin transmitir datos personales. Para revisar o corregir una valoración, modifica la clase desde Historial y vuelve a exportar. No se editan PDFs externos.

## Desarrollo y Cloudflare

Requiere Node.js. `npm ci`, `npm run dev` y `npm run deploy`.
La configuración de `wrangler.jsonc` sirve la carpeta `public` como Static Assets en Cloudflare Workers. Referencia: https://developers.cloudflare.com/workers/static-assets/

El generador PDF está incluido en `public/jspdf.umd.min.js`, sin dependencias de red en ejecución. Al actualizar jspdf, copiar `node_modules/jspdf/dist/jspdf.umd.min.js` a `public` e incrementar la versión de caché en `public/sw.js`.

## Verificación

Con servidor local en puerto 8800: `npx playwright install chromium` y `npm test`.
Pruebas de creación de alumno, borrador tras recarga, marcar/desmarcar/deshacer, finalizar, editar, evolución, descarga PDF, copia y recuperación, sin conexión y ausencia de desbordamiento en 1024, 768 y 390 píxeles. No sustituye una prueba física en Safari/iPad.


## Objetivos conectados (v2)

Aparcamiento es el noveno aspecto; no cambia el orden ni el significado de las ocho valoraciones guardadas anteriormente. Las fichas y copias v1 se actualizan automáticamente, dejando Aparcamiento sin trabajar.

«Para la próxima clase» se convierte en «Objetivo del día» en la siguiente sesión del alumno. En un borrador, el enlace se mantiene activo con la clase anterior; al finalizar se conserva la selección de objetivos de esa sesión. Se pueden añadir o quitar objetivos del día con un toque.

Las valoraciones actualizan el resultado de cada objetivo: sin valorar = pendiente; con ayuda = reforzar; mejorando = en progreso; autónomo = logrado. Se proponen para la próxima clase todos los aspectos valorados con ayuda o mejorando y los objetivos pendientes. Una selección manual prevalece hasta pulsar «Usar sugerencias automáticas».

Evolución incluye el resultado de los objetivos por sesión y los cambios del borrador actual; los informes y PDF incluyen los objetivos y sus resultados.


## Idiomas

Selector Euskara / Castellano, con euskera por defecto. La preferencia se conserva en el dispositivo y funciona sin conexión. Interfaz, formularios, avisos, informes impresos y PDF usan el idioma elegido. Los nombres, las notas libres y los valores guardados de las fichas no se traducen ni se modifican.
