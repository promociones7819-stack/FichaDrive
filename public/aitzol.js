// Transcripción del documento aportado Fitxa-Aitzol.pdf. El apartado 10 está vacío.
const AITZOL_GROUPS=[
['1. Comprobaciones previas',[['1.1','Generales'],['1.2','Específicas']]],
['2. Instalación en el vehículo',[['2.1','Asiento'],['2.2','Espejos'],['2.3','Cinturón'],['2.4','Casco'],['2.5','Tacógrafo'],['2.6','Otros']]],
['3. Incorporación a la circulación',[['3.1','Observación'],['3.2','Señalización'],['3.3','Ejecución']]],
['4. Progresión normal',[['4.1','Carril adecuado'],['4.2','Separación frontal'],['4.3','Separación lateral'],['4.4','Velocidad adaptada tráfico/vía'],['4.5','Velocidades máximas'],['4.6','Observación']]],
['5. Desplazamiento lateral',[['5.1','Observación'],['5.2','Señalización'],['5.3','Ejecución']]],
['6. Adelantamiento',[['6.1','Posición con el vehículo precedente'],['6.2','Velocidad'],['6.3','Observación y valoración'],['6.4.1','Desplazamiento lateral · Observación'],['6.4.2','Desplazamiento lateral · Señalización'],['6.4.3','Desplazamiento lateral · Ejecución'],['6.5','Permitir el adelantamiento'],['6.6','Adelantar por la derecha']]],
['7. Intersecciones',[['7.1','Observaciones'],['7.2','Señalización'],['7.3','Posición'],['7.4','Velocidad'],['7.5','Detención'],['7.6','Reanudación']]],
['8. Cambio de sentido',[['8.1','Observación y valoración'],['8.2','Señalización'],['8.3','Selección del lugar'],['8.4','Ejecución']]],
['9. Paradas y estacionamientos',[['9.1','Observación'],['9.2','Señalización'],['9.3','Selección del lugar'],['9.4','Ejecución']]],
['11. Obediencia de las señales',[['11.1','Agentes'],['11.2','Balizamiento'],['11.3','Semáforos'],['11.4','Verticales'],['11.5.1','Marcas viales · Marcas blancas longitudinales'],['11.5.2','Marcas viales · Marcas blancas transversales'],['11.5.3','Marcas viales · Señales horizontales de circulación'],['11.5.4','Marcas viales · Otras marcas e inscripciones de color blanco'],['11.5.5','Marcas viales · Marcas de otros colores']]],
['12. Utilización de las luces',[['12.1','Utilización mandos'],['12.2','Posición'],['12.3','Cruce'],['12.4','Carretera (luces largas)'],['12.5','Antiniebla'],['12.6','Emergencia']]],
['13. Manejo de mandos',[['13.1.1','Operaciones simples · Puesta en marcha'],['13.1.2','Operaciones simples · Embrague'],['13.1.3','Operaciones simples · Freno de servicio'],['13.1.4','Operaciones simples · Acelerador'],['13.1.5','Operaciones simples · Caja de velocidades'],['13.1.6','Operaciones simples · Freno de estacionamiento'],['13.1.7','Operaciones simples · Volante'],['13.2.1','Operaciones combinadas · Embrague/freno'],['13.2.2','Operaciones combinadas · Embrague/acelerador'],['13.2.3','Operaciones combinadas · Embrague/caja de velocidades'],['13.2.4','Operaciones combinadas · Embrague/dirección'],['13.2.5','Operaciones combinadas · Freno/dirección'],['13.2.6','Operaciones combinadas · Acelerador/caja de velocidades']]],
['14. Otros mandos y accesorios',[['14.1','Limpia/lavaparabrisas'],['14.2','Señales acústicas'],['14.3','Relacionados con la seguridad'],['14.4','Relacionados con la visibilidad']]],
['15. Durante el desarrollo de la prueba',[['15.1','No poner en peligro la integridad física propia o la de los demás conductores o usuarios'],['15.1.1','Accidente'],['15.1.2','Maniobra o actuación evasiva'],['15.1.3','Falta de visibilidad'],['15.1.4','Pérdida de dominio'],['15.1.5','Caída de la motocicleta'],['15.1.6','Intervención del profesor'],['15.2','Bordillo'],['15.3','No seguir las indicaciones del examinador']]]
];
const AITZOL_BLOCKS=AITZOL_GROUPS.flatMap(([group,items])=>items.map(([code,label])=>[`${code} ${label}`,group]));
