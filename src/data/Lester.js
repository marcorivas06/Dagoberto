import { useRef, useState } from "react";

const paragraphs = [
`El 23 de junio de 1979, fue día de gran alegría. Nació el niño y aunque él se tira para el montón, (Táctica psicomanipuladora) sabe que devino equilibrio necesario. Como ya se ha dicho, llegó en igual fecha que la hermana, cuatro años después, e hizo que recorriéramos los mismos espacios e hiciéramos similares comentarios que cuatro años antes. Mi alegría fue doble pues  mi papá estuvo presente ese día, lo que no pudo hacer cuando nació su hermana.`,
`Con él, se repetían los “mimos” y cuidados que recibió su hermana desde la cuna y un detalle resultaba gracioso cuando nos percatamos de la diferencia entre ambos a la hora de despertarse: Como ya se dijo, a ella, había que prepararle el recibimiento mañanero, atendiendo con rapidez su refunfuño, que concluía con el pomo de leche. Él, se despertaba recibiéndose a sí mismo, con risas, pese a que durante la noche se hubiera “mojado” hasta la cabeza.`,
`En su formación inicial los círculos infantiles, de “Tacita de Oro” y “Faro de América”, tuvieron incidencia directa, en ambos logró muy buenas relaciones con sus condiscípulos y tías. Sus evaluaciones, fueron MB desde el comportamiento y el aprendizaje; solo una nota llamaba la atención: “El niño generalmente no ingiere los alimentos”. Causa. No le gustaba la comida y así lo hacía saber a las tías cuando les decía: “Yo quiero arroz, frijoles, puerca y puerco, que es lo que me da mi abuela”.`,
`Entre el primer y segundo año de vida, con cierta frecuencia se convertía en centro de mesa cuando Carlos su tío, Zuni, Canito y el “Toro” estudiaban la carrera de Agronomía y su mamá, previo ajuste se los dejaba. Lo mismo él se entretenía con ellos, que ellos se entretenían con él. A todos les pudo apodo, intentando decir sus nombres. Ahora mismo recuerdo que Zunildo era “Mo”.`,
`Un poco porque vino en su naturaleza y otro porque siempre estaba entre personas que lo enseñaban, aprendió a hablar rápido y bien, lo entendía todo, desenfadado, siempre alegre. Temprano incorporó el idioma callejero al que pronto matizo con el chucho y el cuento. Sus maldades, aunque sin consecuencias alarmantes, muchas trajeron sustos momentáneos; fue el caso del brinco por encima de Yanisbel, una niña de meses, hija de unos amigos que visitaban la casa y dormía sobre una manta en el piso de la sala, bajo vigilia de todos.`,
`Sin darnos cuenta apareció “el saltador”, llamó la atención, balanceó los brazos, contó hasta tres y saltó. Habiéndolo logrado, miró a todos y aplaudió. Por unos instantes, nadie habló, solo lo miramos y el reía.`,
`En la época, un secreto a voces en el barrio, era la invitación a tomar un trago de alcohol preparado artesanalmente. El brindis sonaba así: ¿Quieres un trago de alcohol? Alberto García, un vecino y destacado músico, vivía contiguo a nosotros y más de una vez la invitación fue mutua.`,
`Un día le vimos echando agua a un jarrito y por la ventana del comedor, invitando a Niño, como le decíamos a Alberto, para un trago lo cual sonaba de esta manera: “Coco, tu quie cohol”, a la vez que se empinaba el agua que contenía la vasijita. `,
`El chiste, fue muy reído, ello bastó para que se repitiera y comentara como una de las gracias del niño, que habiendo logrado la teoría (…) un domingo en la mañana pasó a la casa del frente para jugar con Yenni, una amiguita de la infancia. Allí, familiares reunidos, comían y tomaban. `,
`Al llamado de la madre, regresó y su entrada se mostró un tanto dispersa, Mely enseguida lo revisó: ¡Que peste a Ron tiene! Nada; Yenni y él, iban pasando por los vasos, metían el dedo y chupaban, la suma del ejercicio, fue la causa del mareo. De inmediato me lo llevé a dar una vuelta en la moto de mi papá que estaba en casa ese día, para que refrescara, supuse.`,
`Las frecuencias de sus travesuras no establecieron record, pero lograron buen averaje. A veces pienso que fueron causa de nuestra complicidad en general y algunas broncas en particular. Ahora mismo recuerdo que con tres años lo llevé un día al politécnico donde yo trabajaba y se me perdió: ¡Alarma!, en breves minutos alguien lo divisó por el pelo en una manigua detrás de una gallina sacada, tratando de coger un pollito. No sabía a que se arriesgaba. `,
`De las andadas conmigo tengo los más dulces recuerdos. Visitó y conoció personas y lugares que frecuenté con él. Siempre tuve la esperanza de que fuera vivo en sus actuaciones y fuera bienvenido donde quiera que llegara, en eso sobrepasó mis expectativas. Durante mucho tiempo en el barrio y más allá, muchos no me identificaban como Dagoberto, sino como el papá de Lester. `,
`En un recorrido por los museos de la provincia llegamos a Girón, le expliqué y al poco rato uno de los veladores me dijo: él niño se ha montado en todas las piezas expuestas, llámelo que me van a requerir. Sin problemas. Él siempre entendía, pasó a dentro de la instalación mirándolo todo, al rato unos gritos, no podía ser otro; se le trabó un pie en una butaca de la sala de cine donde se había parado, no se sabe para qué. `,
`Según cuenta su mamá, un buen día la abuela, le pidió que despertara a su abuelo; obedientemente fue hasta la cama y lo llamó más de una vez, al ver que éste seguía durmiendo, cogió una macetica de madera con la que a veces jugaba, le destapó la cabeza y le dio por la frente. El abuelo se despertó, pero; hasta hoy, no le ha visto el chiste.`,
`En septiembre de 1983, al cumplir cuatro años, matriculaba en la primaria bajo la misma fórmula que la hermana. Iniciaba sus estudios en pre-escolar hasta graduarse de sexto grado en julio de 1990, etapa que le fue muy bien, pues tuvo la atención de los maestros, fruto de su carisma y resultados docentes. `,
`Lila, vecina nuestra y maestra de la escuela en la que él estaba matriculado, lo llevaba hasta su aula donde estaba Lourdes, la maestra del ciclo, quien, aun hoy se acuerda de él con cariño y en su memoria lo cuenta como uno de sus mejores alumnos, a la vez que destaca sus habilidades.`,
`El acostumbrado estilo de algunos maestros de enviar alumnos a la dirección, por algunas indisciplinas, no fue con él muy funcional, las veces que lo hicieron la sanción terminaba con brindis de caramelos. Con un trato maternal, casi de abuela, Zenaida la directora, bien respetada, por cierto, no consideró graves sus majaderías.`,
`Desinhibido, como siempre ha sido, durante un acto matutino en su escuela, al recitar una poesía frente a más de cien alumnos y trabajadores, un eructo mañanero, lo interrumpió. Ni corto ni perezoso, pidió disculpas, reinició su declamación, hasta concluirla. La hermana se moría de pena, a él, le resbaló. `,
`Una de las veces que lo llevé a mi escuela, lo dejé en la biblioteca con algunos libros de muñequitos y fui a visitar una clase, cuando de pronto lo veo entrar al aula y dirigirse hacia mí que me hallaba sentado al fondo y sin más aclaración me dijo a viva voz: ¡Oye come… me dejaste solo en el bibliocario!; al menos la mitad del aula lo oyó. Tuve que mirar fijo a varios que se reían.`,
`Aun en pre-escolar lo llevé a un acto conmemorativo con otros niños, incluyendo la hermana, allí, declamó su poesía. En minutos lo busqué pues se había separado de los demás y lo encontré parado en una silla y ésta encima de una mesa, concluyendo un texto “poético” que, según él, le había enseñado su tío Willy.`,
`En el local, varias personas (trabajadores del centro) le pedían otra, a lo que respondió: De esas no sé más ninguna. Entonces le pedían que la repitiera, así lo hizo. ¿El texto? “Una yegua y un caballo, / de manguito a Calimete, / si la yegua no se apura, / el Caballo…” `,
`Según me comentó después Balladares, persona con gran sentido del humor, él lo vio tan desenfadado que le preguntó si se sabía otra poesía y él le recitó la de su tío Willy, de ahí que Balladares armara el “circo”. Fue una etapa muy simpática, entre otros números tenía montado el baile de Michael Jakson, luego no bailó más.`,
`Lo que cuento no es exclusivo, pero si curioso. En la sala, uno de los sillones era su trono, frente al televisor, sitio para comer. Conociéndolo, para que no se le enfriara la comida, alguien le ahorraba la pérdida de tiempo que significaba para él, llevar la cuchara al plato y luego a la boca, por eso otro asumía la acción, de manera que, a él, solo le tocaba masticar, tragar y mirar la TV.`,
`El tiempo que durara el programa, él estaba ausente del mundo real. Nada respondía, nada pedía, a nadie veía. Sus gestos eran solo abrir la boca, masticar, tragar y volver abrir la boca. Si intencional o no, te demorabas en llevarle la nueva cucharada a la boca, no importaba, él esperaba, si el apetito era mucho abría la boca antes que llenar la cuchara. Varias veces me he dicho: Si como dicen los entendidos, “la concentración es básica para el aprendizaje”, a mi hijo lo que le faltó para ser un genio, fueron unas horas.`,
`Un día de junio de 1986, yo debía estar en una graduación de estudiantes, prevista para las 4:00 PM, ya contra reloj, sobre las 3:00 PM, antes de salir de casa, lo busqué para despedirme, pues él se quedaría con la abuela. ¡En ese momento empezó a complicarse la graduación!`,
`En la casa no estaba. Caminé varias cuadras sin éxito en la búsqueda, regresé a la casa y decidí entonces llamar y pedir un breve retraso de la actividad; cuando sentí detrás de mí el sonido de una bisagra o algo así, me volví y… Se había escondido tras la puerta de la cocina y cada vez que la abuela o yo pasábamos, él abría un poquito la puerta y supuestamente nos disparaba. Según nos contó después, nos mató varias veces.`,
`A pesar de su hiperactividad, leer fue uno de sus “fuertes”, aprendió a hacerlo muy pronto, ello le sirvió para enterarse del contenido de un libro que le regaló su tía Chicha a su hermana con la recomendación de que se lo mostraran a él un tiempo más adelante. El libro (Mamá, papá y yo) bien didáctico sobre la procreación humana, se ajustaba al grado y edad de la hermana.`,
`La recomendación fue puesta en práctica. Cuando la niña lo leyó, se guardó. (Supusimos que a buen resguardo) Pasadas unas semanas, libro en mano se paró frente a la madre y le dijo: Toma, ya lo leí. Lo único que no entendí es eso del cordón umbilical.`,
`Así como jamás hubo que preocuparse por las tareas y otros deberes escolares de su hermana, ella se ocupaba de los de su hermano. Sus materiales, escolares, su llegada a la escuela, su regreso a la casa, además de estar al tanto de cualquier situación dentro de la Escuela. Le exigió, le mostró, le enseñó, hasta donde pudo o, mejor dicho, hasta cuando no pudo más. Él siempre se lo ha “agradecido”.`,
`Ya más crecidito me lo llevaba para la Escuela de la CTC, allí entre guayabas y mangos, echó buenos rato. Un buen día supo que aquel caballo “Moro” que él miraba con ganas de montar, de Luis, un trabajador, había estado en las filmaciones de unas aventuras en Pinar del Rio. En breve ya se lo habían ensillado y aquel noble animal por poco le dice, está bueno ya, la escena se repitió varias veces. El mayor problema era que cuando se bajaba para descansar, montar de nuevo era un lio, finalmente le sugerí y resolvió, feliz.`,
`Más de una vez fuimos a Coliseo él y o yo y de regreso en una ocasión, en el poblado de Guanábana montamos la ruta Diez. En ella venia un personaje que ambos conocíamos y no nos conocía a nosotros. En su conversación con un amigo salió a relucir su hijo, a lo que respondería: Ah, Salió hecho una fiera, un león.  Ahí está en Matanzas con la madre. Por casualidad era en el barrio, bailarín y lo que le cuelga. `,
`Ahí mismo empezó Lester, bajito entre nos: “Ah, es una fiera, un tigre, la pantera de los Mangos. Dicho así, nada cuenta, pero agréguele sus chuchos y animaciones. Me tuve que ir de su lado, pues la risa me iba a descubrir, después de ese día, siempre le llamamos “la patera”.`,
`Entre los ejercicios que nos hacían intimar, estaba el boxeo en el cuarto, cuando nos forrábamos las manos con toallas y yo sentado en la cama emparejaba el tamaño. Siempre dijimos que golpes para marcar y buscar posiciones. Él se entusiasmaba y tiraba sus golpes duros, yo atenuaba, pero me obligaba a subir la parada, como las toallas ayudaban, había veces que lo apretaba. Todo iba bien hasta que llegaba, la tercera figura del Rin, quien con métodos muy “pedagógicos” explicaba el peligro de los golpes y él, apoyado en el cuento decía: “Yo sabía que cuando llegara el León sordo, se judía el concierto.    `,
`En la cuadra donde vivíamos, todos eran amigos, aunque no faltaba que alguno más grande le gustara coger mangos bajitos, fue el caso del que, mayor que él en edad y tamaño, al parecer algo le hizo, pues entró a la casa con el rostro extraño, le insistí y algo me dijo, lo instruí, me paré en el portal y lo mandé a que regresara y sin hablar mucho, se desquitara y viniera rápidamente. Yo lo seguí con la vista.`,
`Miró para mí, lo vi pararse frente al rival y empatar. Ya está, dije para mí. De inmediato regresó hasta donde yo estaba aparentemente ajeno, para evitar cualquier represalia. Todo quedó bien. Le advertí: Nadie puede darte, ni tú darle a nadie sin razón y menos si es menor que tú. Tuve que hacerlo, el barrio no era fácil, pero él siempre anduvo sin problemas y se juntó con malos, menos malos y buenos.`,
`Según fue creciendo, esta etapa de sus primeros estudios, la alternaba con las competencias de chivichana por las calles Salamanca, Capricho y Velarde abajo. Era una feliz diversión, para esa edad y una molestia a los vecinos con el ruido que hacían los rodamientos faltos de grasa sobre el asfalto, a lo que se agregaba que las “pastillas de frenos” de aquellos artefactos era el talón de los tenis. En breves días, ya no había talones.`,
`Como se ha dicho antes, los abuelos han sido especiales en las vidas de ambos. Por encargo de su mamá, en una ocasión Quiquito fue a buscarlo a la escuela para llevarlo a un turno médico, al identificarse, el maestro de Educación Física le dijo: “Así que Ud. es el abuelo, pues mire debo decirle que: (…) La reacción no se hizo esperar. (Padre de la otra al fin) Si ya se porta así, puede ir solo al médico y viró sus espaldas.`,
`Con frecuencia no sabíamos dónde estaba, pero siempre alguien nos decía con quiénes estaba, a qué jugaba, qué calle frecuentaba. Su trato cariñoso, simpático y respetuoso, lo convertía en amigo de muchos. Era la suerte, siempre alguien nos decía dónde encontrarlo. De todas formas, siempre estuvo al doblar, por eso cuando llegaba, “del doblar” al preguntarle dónde había estado, señalaba con las dos manos estiradas para cualquier punto cardinal, coincidente o no con el “doblar”.`,
`Al pasar los años, he pensado que él nunca llegó tarde, sino, llegó después de la hora del baño, de la hora de la comida o de la salida que haríamos y por casualidad, el día de la boda de la hermana, le sucedió lo mismo.`,
`Como cualquier niño cubano, jugaba pelota, pero; ésta nunca fue su fuerte, de hecho, cogía a la surda y tiraba a la surda, (Yin Abo) Un buen día, que los dos pasábamos por el parque “De la Libertad”, un grupo de niños contemporáneos con él, algunos conocidos, jugaban pelota y de inmediato le invitaron a participar, yo en jarana dije: Además de estar de prisa, si Lester batea se acaba el juego porque pierde la pelota; insistieron porque al menos bateara una vez.`,
`Mientras, pensé: Ay mi madre, si se poncha, donde me meto, vamos a esperar: 1er strike, segundo strike. El Home estaba por la calle Milanés frente al Hotel Louvre, estatua de Mart’i por medio y el Hotel Velazco en la calle Contreras. Los presentes me miraron y él también. Ya había que seguir y solo faltaba un lanzamiento: Se impulsa, lanza, el Swing. Le pegó, se eleva, se va, se va, se fue. Cayó en la acera del Hotel Velazco. Qué palo. Ni corto ni perezoso, entregó el bate y seguimos camino, lo miré, se reía.  `,
`En una ocasión, su bisabuela paterna que lo adoraba, le trajo de regaló una caja con 100 bolas. Le advertimos que era para jugar sin interés, o como se dice en el argot callejero, “no jugar a la verdad”. Parece que entendió lo contrario, pues a los pocos días sin exagerar, había triplicado la cifra, pero él no sabía cómo, según explicaba. `,
`La otra parte del cuento es que se perdía con el jueguito, causa de llegadas tardes, llamadas de atención, juramentos de la última vez, etc. Tanto fue así que perdí la tabla y le advertí que, en la próxima, las bolas irían a la fosa, a mi pesar, las bolas fueron a la fosa, todos los que se quejaban de Lester, me acusaron de injusto, la fosa se tupio y en breves días ya había recuperado una cifra similar a la anterior.`,
`Por ésta época y durante dos años seguidos, en las vacaciones fuimos una vez a la Habana y la otra Santa Clara. Yuniel fue con nosotros. Recuerdo ahora mismo las advertencias que les hicimos. Todo bien, llegamos a la Habana, tomamos el ómnibus que nos llevaría hasta Miramar. (Motel donde estaríamos una semana)`,
`Inevitablemente el majestuoso Foxa llamó la atención, “ño”, que clase de edificio, dijo él, a lo que agregó su primo, no, y como tiene aires acondicionados. La hermana lo pellizcó y de inmediato la clásica respuesta: ¡Chica!, porqué me pellizcas. Nada, cosas de muchachos sanos, tan sanos que, al entrar a la Casa-Hotel, Yuniel vio en el piso un peso y le preguntó al portero: Señor ese peso es suyo. “Si mijo”. A tal pregunta, tal respuesta.`,
`Durante esa semana los acontecimientos dan para un libro, pero solo citare dos: Los tres se bañaban en las dos piscinas, una con profundidad de metro y medio para mayores y otra de la misma profundidad, pero con menos agua, para niños. En ésta última, Yuniel dejó una marca en el fondo, pues con el agua a la altura de las rodillas nadaba doblado en forma de “L”. Sin dudas era un peje.`,
`Una tarde pasé por el bar de las piscinas para como siempre, pagar los gastos del día, que, sacada la cuenta no serían tantos por mis cálculos. La cifra del vale me alarmó y como ya teníamos cierta confianza con “el Chino” (Dependiente) le dije: Chino, nosotros merendamos solo por la mañana. A lo que éste respondió, ustedes sí, pero aquellos dos, cada media hora me piden un bocadito y un refresco y en eso se han pasado la tarde.`,
`Al año siguiente, fuimos por igual tiempo a Santa Clara. Al otro día de la llegada, visitamos los Caneyes, un bonito sitio con comidas, piscina y otros atractivos. Como buen cubano, fui de inmediato a comprar comida y Mely se quedó ordenando las cosas. “Conociendo el paño”, se acercó a la piscina y le preguntó a Yuniel: ¿Y tu primo?, míralo ahí, nadando al perrito, respondió. ¡Por favor!, alguien que saque el niño que se ahoga!  Un joven que estaba cercano lo rescató.  Se había tirado donde no daba pie.`,
`Por este tiempo, él y su hermana querían un perrito y apareció una bella perrita “Pudi” a la que llamaron “Chula” y con la que se divertían y se ocupaban también, pues era un poco intranquila, corría, saltaba y no siempre hacia caso. Una noche salió a la calle en una de sus carreras y un carro la atropelló. El golpe fue mortal. `,
`Los dos llegaron corriendo envueltos en llanto, con la desagradable noticia, hasta donde estábamos Mely y yo cuadra más abajo. Junto al llanto, exigían que la enterráramos. Su abuelo Quiquito se la llevó lejos y al regreso les explicó donde la había dejado. Esa noche lloraron mucho y él pintó la cabeza de Chula, increíblemente exacta. Al otro día salí a buscar otra, por suerte apareció una hermana de Chula, de un nuevo parto, la recogí en breves días y la nombraron “Yeti”.`,
`Yeti, que además tenía un gran parecido físico a su hermana Chula, llegó oportuna. Muy pronto se conectaron con ella y la hicieron su mascota. Era esa edad en la que hacen falta, a lo que se unía, la pérdida que ya comentamos. Por otra parte, empezaron a correr los tiempos de los breves cambios de intereses, motivados entre otras razones por las relaciones escolares. `,
`En septiembre de 1990, matriculaba en la secundaria, un periodo de fácil recorrido y buenos resultados docentes, sin desconocer la insistencia de su mamá. A decir, lo más grave estuvo en su problema para escribir, según él, porque el pupitre era para derechos y él es surdo. Razón suficiente para que no lograra tener actualizadas sus libretas e incluso las llevara algunas veces en el bolsillo.`,
`Justo es lo justo, siempre asistió a clase, le gustaba su escuela y tenía muy buenas relaciones con sus condiscípulos y profesores. La escuela al campo, llegó a ser su fuerte. (Terapia ocupacional) Logró el record de los tres años sin salir ni una sola vez, a pesar de que su mamá lo hacía con frecuencia como maestra. Era la oportunidad que él tenía para relajar y hacer algunas breves fechorías.`,
`No fueron pocas las veces que, llegado el domingo, día en el que la madre se incorporaba del pase, y le llevaba su almuerzo, él ya había almorzado, y para verlo y hablar un rato, apúrate, porque tenía que jugar. Era normal ver en la puerta del campamento varios muchachos esperando la familia, a él, siempre hubo que buscarlo.`,
`En una ocasión fui a verlo entre semana a un campamento que estaba por La Isabel en Jovellanos. Yo tenía entonces una moto “Jupiter” con saicar. Me pidió manejar. Me dejé convencer, le di instrucciones. (yo detrás) El patio del campamento estaba lleno de muchachos caminando corriendo, jugando. `,
`Al salir, se trabó el acelerador y en fracciones de segundo la muchedumbre corría de un lugar para el otro y la gritería era horrible, propia de esa edad ante cualquier suceso. Al momento el saicar le entraba a un poste de cemento y el que venía detrás del chofer voló y cayó de espaldas sobre el terraplén.`,
`Cuando me puse de pie, él estaba todavía encima del motor que, por supuesto se había apagado. Asustado me preguntó: ¿Papi te golpeaste? y como vio que hablé y creo que le dije que no, se rio y me dijo: ¡yo vi cuando me pasaste por arriba volando!`,
`En sus relaciones con los demás, siempre mostró inteligencia, se comportaba con naturalidad, sin coger “fiao” a cuenta de la madre, actitud que a ambos les quedó bien. Su independencia era notable, de ahí que profesores y condiscípulos lo consideraran uno más, estatus que a esa edad es muy importante para el ego personal.`,
`Tanto fue así, que según cuenta su mamá, que tiene un diplomado en “curas de caballos”, en una ocasión en que uno de los alumnos “fuertecitos” tuvo desavenencias con él, ella, previendo otro altercado, sabiendo que habían quedado restos del primer problema, llamó a ambos al laboratorio de Química y les dijo: Si va a haber problemas, que sea aquí y ahora, después no.`,
`Luego me dijo que la bronca había estado fea, pero él había resistido y echó pa’ lante hasta el final y que ella marcó el final con una conversación y el compromiso de ambos de no volver a lo mismo y aunque supo que no quedaron como amigos, (cosa que podía verse después) la situación se resolvió. El veredicto aún se desconoce. Habrá que esperar que Mely escriba sus memorias o él desclasifique los hechos.`,
`Otros tres años los estuvo en sus estudios de Química Industrial en la Escuela Ernest Tahelman, etapa de septiembre de 1992 hasta julio de 1995. “Inolvidable”, para él y nosotros. A mi memoria vienen algunas de las veces que fui a hablar con los profesores, entre los que siempre estuvo Margarita, profesora de Física, quien, aun cuando reconocía sus resultados docentes, se quejaba de su relajada actitud, siempre hablando y haciendo cuentos, lo que entorpecía sus clases.`,
`Por este tiempo, me vendieron una bicicleta que en breve la tomó para él y para mi sorpresa, que me preciaba de mantenerla con todas las fanfarrias que trajo, como hicieron otros que la compraron conmigo, un buen día la vi y dije: Como Lester cambió la bicicleta, a la pregunta, mejor respuesta; no la cambie, solo le quité lo que no era “necesario”. La miré bien y tenía lo “necesario”: Asiento, timón, dos ruedas y un freno.`,
`No se me olvida las veces que medio en broma y medio en serio le reclamaba a su mamá por el estilo de llamarlo por las mañanas, previendo que llegara temprano a la escuela, pero, sobre todo, la preparación del desayuno en coordinación con el clima, y no era represalia, ella sería incapaz, pero sucedía que si había frio le preparaba limonada bien fría y si había calor, leche bien caliente. En sendos momentos él salía congelado y sudando. `,
`Al fin terminó sus estudios, se graduó en junio de 1995, pleno periodo especial, momento en que desarrolló su práctica pre-profesional en El ECIL de Matanzas y posteriormente entrar en el SMO. Otro escenario bien interesante, etapa en la que recorrió tres unidades militares, por cambios del mando. Monserrate una de ellas y como quedaba cerca de la casa, varias veces podíamos llevarlo cuando venía a comer o simplemente venia. `,
`En este tiempo varias veces estuvo conmigo y sin mí, ayudando a su abuelo en labores agrícolas, su mayor compromiso no era exactamente hacer en el campo, era, sobre todo, contribuir con su primo Yuniel para que papi no estuviera solo y además aliviarlo en algunas acciones. Lo que hizo, lo hizo con voluntad, sin dejar de reconocer que la fórmula de primos juntos, era difícil de despejar.`,
`Cuando los dos se juntaban el que estuviera ausente, pagaba las consecuencias y si al dúo le añadías un tercero; Leonardo, ya tu sabes, la crítica era triple. Por casualidad era yo casi siempre el criticado toda vez que en ocasiones lo dejé ayudando a papi cuando tuve que seguir a hacer otras cosas, luego al regreso no faltaban las burlitas y yo pensaba: Cómo habrá sido la cosa en mi ausencia. Pero bueno, estuvieron con papi y lo ayudaron, lo más importante.`,
`En una oportunidad en que esperábamos por un equipo para recoger arroz, muchachos al fin, empezaron a jugar y se les ocurrió batear piedras de la línea férrea con un machete: Dos hechos inéditos. Uno, batear con machete y dos, partir un machete a lo largo. De regreso a la casa de papi, él me llamó y me contó. Enseguida llamé a mi papá, le expliqué y mostré la prueba del delito, estaba evitándole un disgusto. `,
`Mi papá se dio cuenta y casi se le fue cuando dijo: ¡Qué clase de empin…! me has evitado. Aproveché y le argumenté que él había sido sincero y no quiso irse sin decir lo que sucedió, papi lo entendió, aunque miraba su machete a la vez que movía la cabeza como el que no cree lo que ve. `,
`Mi papá buena persona, cierto día presto cien libras de arroz a un tipo mala paga, confiado de que se lo devolvería. El susodicho le empezó a dar plazos y papi salió a buscarlo molesto y alterado, por lo que mi hermana me llamó y me puso al corriente, le dije: vamos a resolver un problema de tu abuelo, te explico por el camino. En la gestión incorporé a Yuiniel y los tres encontramos al tipo, le advertimos y dice mi hermana que no habíamos recorrido un kilómetro de regreso cuando pagó la deuda. Bárbaro por los tres.`,
`Concluida la etapa del SMO, trabajó en la academia de ciencias y luego en Geocuba. En cada lugar hizo buenas relaciones. Sus maldades y jaranas cuentan entre los comentarios que muchos de esas personas, por casualidad al encontrarse con nosotros, hacen con agrado. `,
`En este tiempo simultaneó con estudios para fotografía, e idioma, así como pretendió estudiar historia del arte en la universidad. De hecho, fue uno de los dos alumnos que aprobaron la primera prueba de los más de cien que se presentaron, solo que no continuó. La profesora lo apreció capaz y me pedía que lo convenciera para que regresara.`,
`El peaje fue su otro centro de trabajo, en él estuvo el mayor tiempo. A nosotros han llegado por diferentes razones, anécdotas que destacan sus relaciones con personas que trabajan allí y le reconocen su sentido de la amistad, haciendo alusión a sus visitas al lugar luego de no estar en Cuba y su breve atención con Guere, al parecer un joven con pocas posibilidades.`,
`Más de una vez nos han comentado el cariño con que la mayoría lo recuerdan. Como lo conozco, pues estuvimos en la misma tarjeta de abastecimiento, sé que lleva en venas el síndrome de la contradicción o quizás la necesidad de que se le convenza con argumentos.`,
`De todas maneras, en esta breve caracterización falta explicar la interrogante de, cómo puede alguien haber salido para el centro de trabajo, estar dos veces en él y terminar en el punto de partida inicial sin saber que estuvo en su trabajo en dos ocasiones. Sé que parece un trabalenguas, pero fue así. Él sabe explicarlo.`,
`Por llegar estaba la fecha en que iniciaría una nueva etapa. Era un secreto a voces que planificaba su salida del país, hecho que no por esperado dejó de sorprendernos, sobre todo la manera en que sucedió aquel cuatro de junio de 2007, que, para hacerlo más dramático, en esos días yo viajaría a China y fue estando allá, que recibí la noticia sobre su llegada a EU, luego de varios días en México y un largo recorrido. Lo demás, es más conocido y refleja su esfuerzo personal.`,
`Unos renglones más hacen justicia, pues su mamá y yo hemos compartido el criterio de que el inicio de sus relaciones con Damarys, su esposa, Sebasti’an y por extensión con sus suegros Isabel, Jorge, su cuñado Jorgito, Lourdes, Albita y Joel, entre otros, fue muy oportuna y sobre todo muy entendida por todos. A partir de entonces hubo planes que cumplieron y sobrepasaron las expectativas, la llegada de Vera entre otras. El presente es ese futuro que previeron. Nos alegra mucho que lo hayan logrado. `,
]

export const Lester = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  const scrollToNextParagraph = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % paragraphs.length;
      // Scroll to the paragraph element at nextIndex
      scrollRef.current.childNodes[nextIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
      });
      return nextIndex;
    });
  };

  return (
    <>
      <div ref={scrollRef} style={{ display: 'flex', overflowX: 'auto', alignItems:'center' }}>
        {paragraphs.map((paragraph, index) => (
          <div key={index} style={{ minWidth: '100%' }}>
            <p className="home-about-body">{paragraph}</p>
          </div>
        ))}
      </div>
      <button className="pill-button" onClick={scrollToNextParagraph}>Next Paragraph</button>
    </>
  );
};