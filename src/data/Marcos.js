import { useRef, useState } from "react";

const paragraphs = [
  `El 18 de junio de 1999, se producía un hecho, comparable solo con los ocurridos el 23 de junio de 1975 y 1979. Nacía un tremendo chiquillo que nos alegró a todos y aunque estuvo varios días sin nombre, (…) luego sería Marcos, por suerte. Otro Ulises, ni pensarlo es bueno.`,
  `La etapa de postparto, reportaba a Dagmelys de cuidado lo que nos mantuvo tensos varios días. Fueron momentos de gran preocupación y aun cuando el recién nacido gozaba de total salud la alegría era incompleta. Luego del alta médica, ya en la casa, (Nuestra casa) tuvo la atención de todos, en especial de su mamá y abuela, así como, de la vecina, amiga y ginecóloga Grisel, quien le dio seguimiento hasta su total recuperación.`,
  `Ulises, repleto de alegría por el advenimiento, y la mejoría de Dagmelis, esperaba la fecha en que celebraríamos el nacimiento de Marcos, obviamente sería un día feliz por todo y de particular tendría, los chicharrones y la yuca con mojo.  `,
  `Aproximadamente a los tres meses, ya estabilizada Dagmelys, regresaron a su casa en Peñas Altas. En la práctica, no hubo lejanía, cada vez que había un huequito, para allá salíamos, incluidos los bisabuelos maternos, casualmente.`,
  `Desde su nacimiento, Marcos ha sido alegría perenne en la familia, hasta sus malcriadeces han sido soportables. Cuando se hace memoria de su carácter como niño, adolescente y joven se ve a alguien alegre muy familiar, estudioso, preocupado por casi todo, incluyendo salud y comportamiento de algunos mayores.`,
  `Desde que se le celebró el primer año y se le enseñó a apagar la velita y cantar felicidades, no hubo panetela, pastel, polvorón, o matahambre que se le escapara. No siempre con velas, daba igual un fosforo que un tarugo de papel encendido, el asunto era ponérselo al dulce y cantar las felicidades. La infantil conducta, muy linda, por cierto, tuvo sus costos.  `,
  `De su niñez hay para contar un rato. El contexto y la época eran escenarios de novedosos entretenimientos electrónicos y digitales como la Computación, el Vidio, el DVD, el Nintendo, entre otros. Marcos tuvo de todos y los dominó siempre. Empezando por la computadora que aun sin saber leer, utilizaba su teclado. `,
  `Con apenas dos años, su abuela y yo, nos lo llevamos una para Varadero durante una semana al hotel “Mar del Sur”. La habitación que ocupamos tenía varios equipos electrónicos. Le advertimos no tocar y pareció convencido. Al otro día, de pronto un escándalo inusual se escuchaba en la sala. Salimos del cuarto y estaba el susodicho, encuero a la pelota con todos los equipos encendidos. `,
  `Aquella semana da para escribir. En el restaurant, un espectáculo diario era su solicitud de lagartijas, (así llamaba a las habichuelas) y mientras comía, daba con la cuchara en la mesa y repetía: “El coño e su mae”. Como no era difícil entender, algunos se reían y a otros le traducíamos cualquier cosa, de todas maneras (…).`,
  `Uno de los primeros días, lo llevamos a un parquecito dentro del hotel. ¡Error! Al salir de la habitación o regresar a ella, hacíamos recorridos extraños porque si veía el parquecito, “ya tu sabes”: Parquecito, parquecito, parquecito, repetía sin punto ni coma y solo se callaba cuando percibía que íbamos hacia allá. Luego allí, a correr, subir y bajar y nosotros a correr detrás de él.`,
  `Al año siguiente fuimos a Girón y Marcos, ya con tres años había cambiado, ahora era peor. Toda la semana estuvo tratando de coger un Macao. Le expliqué, el peligro, así evité en algo su interés por el “caracol”. Al regreso entramos al criadero de cocodrilos y fuimos directo al Show que ofrecía Chacón un viejo conocido. Hay por ahí una foto de él con un cocodrilito en los hombros. Cuando aquello era guapo, después de ese gesto, ni lagartija.`,
  `El video conocido como “Pimpón es un muñeco”, lo vio un millar de veces, así como la película del Hombre Araña. Esta última lo puso a soñar con el vuelo y no paro, hasta que le enviaran un tarje de imitación. Cuando lo vimos encima de la cama, vestido de rojo y en pose de salto, ahora mismo no sé cuántas cosas pensé. A la madre le dije: Ojo con él, porque el asunto no es dónde se va subir para tirarse, es cuando se tire.`,
  `Durante sus tres primeros años de edad, nos veíamos con frecuencia casi diaria. Recuerdo cuando allá por el mes de mayo de 2001, yo estaba en Santiago de Cuba y embarque de inmediato pues lo iban a operar de la garganta. Fui de la terminal directamente para el pediátrico, de hecho, tuve que llevarlo hasta la puerta del salón. Su abuela en esos meses estaba para Costa Rica.`,
  `Marcos eligió el nombre de su hermana, lo recuerdo como si fuera ahora mismo. Íbamos él, su mamá, su abuela y yo, camino a su casa, cuando le pregunté: Papi, que nombre le vas a poner a tu hermanita y rápidamente me respondió; Gabriela, y ese nombre porqué, le pregunté, ah, porque me gusta, respondió.`,
  `Haciéndome el escritor para entretenerlo cuando llegaba la hora de dormiros, elaboré la fábula de “El conejito Tin”, entonces al acostarnos se la tenía que repetir, no sé cuántas veces, pues al concluir él decía: “Ota vez”. En ocasiones medio dormido yo cambiaba algún personaje, entonces se incorporaba en la cama, me cogía la cara y me decía: Te equivocaste ese no va ahí.`,
  `Para variar elaboré otra fábula, “La Chiva”, ésta con algunos matices de suspenso y pasajes no tan nobles como el Conejito, algunos representativos de una chiva mala al narrarlos, él empezaba a empujarme y casi terminaba debajo de mí. Un día toqué la cabecera de la cama y abriendo los ojos me preguntó, ¿Qué fue eso? La Chiva, le respondí, pero estate tranquilo que ella vino a ver si tú te duermes; Ojos cerrados al palo. `,
  `Yo no podía aguantar la risa al verlo estirado a mi lado y dándole a los piecitos. Pensé, quizá se duerma, de pronto se incorporó en la cama, y con los ojos cerrados aun, me dijo al oído: Mira a ver si la chiva ya se fue. Supuestamente pasé la mano por debajo de la cama y le dije, ya, te vio con los ojos cerrados y pensó que te habías dormido. Los ojos no se abrieron más hasta el otro día.`,
  `De nuevo al otro día la misma función.  Le pregunté si llamaba al conejito o a la Chiva y me dijo bajito: Al conejito y que no te oiga la Chiva. Yo no podía aguantar la risa. Tratando de parar aquello, toqué el respaldo de la cama de manera que él me viera y enseguida le dije: Yo no fui, mira mis manos aquí. Sucedió lo que yo buscaba. Cogió la seña, entonces era él quien tocaba la cama y me decía; yo no fui, mira mis manos aquí.`,
  `Al cumplir sus cuatro años y el primero de su hermana, se hizo una fiesta de cumpleaños muy bonita, con payazo incluido y entre los números del artista estaba el de equilibrio, para el que pidió a Ulises que lo acompañara. Increíble. Cuando Marcos vio aquello, salió como en las películas, de pronto y con el pie tumbó las piezas que “Pata larga”, el payazo, había preparado. No quiso que su papá pasara por aquella prueba. El payazo lo entendió y muy rápido cambió el número. Yo lo saque del escenario, estaba serio.`,
  `Por estos tiempos, Marcos lograba un alto poder de concentración en lo que hacía, da fe de ello, la ocasión en que su mamá le pidió que le alcanzara el pomo de leche de la hermana que estaba en el cuarto, disciplinadamente fue hasta el lugar y regresó con la lámpara de noche, que casi pesaba como él.`,
  `La visita de Marcos a Los Mangos siempre incluía compra de chucherías. Había que regularle la entrega para darle varias veces y un buen día me cogió sin menudo y le di veinte pesos para comprar helados a dos pesos el barquillo. Al regreso le reclamé el vuelto y me dijo: no me sobró nada; pero ven acá, le dije, cuántos helados compraste, no, no había helados y llevé a mis amigos a donde hay un viejito que vende varias cosas y le compré algo a cada uno. Sin palabras. Con su corazón nadie compite. `,
  `En septiembre de 2004 Marcos iniciaba los estudios primarios en escuela cercana a su casa. Con suerte similar a la de su mamá y su tío Lester, tuvo muy buenas maestras, Aida entre otras. Fue una linda etapa y Marcos la aprovechó. En este tiempo su papá lo matriculó en Karate. Tengo la certeza que de haber continuado hubiera sido uno de los mejores ajedrecistas de la provincia. `,
  `Los resultados docentes durante los estudios primarios fueron de los mejores, reconocido así durante la graduación de sexto grado a lo que es justo agregar sus buenas relaciones con alumnos y maestros. Y aunque vivía en Penas Altas, en los Mangos tenía muy buenos amigos (Osmani Alejandro, Pablo Ernesto, Brian y Débora, entre otros.`,
  `Por su empeño en el futbol y resultados en la escuela, integró un equipo que viajó varios días a Jagüey Grande, Hasta allá fuimos mamá, la hermana el bisabuelo y yo. Tribulaciones mediante, llegamos al fin, todo bien como si estuviera en la casa. Nos atendió brevemente pues estaban en juego. Habiéndole advertido que cuidara sus pertenencias, guardaba la toalla mojada debajo del colchón:  ya tu sabes, otra toalla. Regresamos más tranquilos.   `,
  `Su paso por la secundaria básica, etapa en la que niñez y adolescencia se mezclan y no resulta fácil separar, fue muy buena. Con conocimiento de causa hoy le recuerdo sus chistes y zorrerías en los repasos de Química, a veces para hacer reír a los demás, pero en general bien. En esta etapa tuvo una noviecita a quien le regaló un tremendo perfume en un gesto de caballero medieval. (Y sus abuelos con un pomo de jaque, (Le sumba)`,
  `Ya en noveno grado todos los sábados yo iba temprano a buscarlo para el repaso de matemática, al concluir iba para la casa donde la abuela lo esperaba con merienda y almuerzo, más tarde yo lo devolvía. pasado un tiempo el regresaba solo. El problema se concentraba en llegar temprano, por eso había que ir a buscarlo. `,
  `Un día, a media mañana su abuela y yo pasamos por su casa y el ambiente estaba en efervescencia, no recuerdo por qué. Ulises y Dagmelys estaban molestos como pocas veces los vi. Le dije a Mely: Así no lo podemos dejar. Intervenimos con mucho cuidado y propusimos que nos acompañara hasta Varadero, nuestro destino en aquel momento, aprobado. En el camino no habló.  `,
  `Ya el hotel donde nos esperaban, se fue relajando tiró fotos hablamos nos reímos, merendó y cuando concluimos el trabajo nos invitaron a almorzar como era costumbre. Él no almorzó. Él le entró al buffet que asustaba y según comía y tomaba, el rostro le mejoraba. ¡Qué bueno!, el problema había sido una ola de hambre mal interpretada: Besos a todos, risas y la invitación a que lo volviéramos a invitar, Ella, sonriente exclamó, ah sí, la próxima pataleta me toca a mí.`,
  `Concluida la etapa de los estudios secundarios, buenos resultados docentes válidos para entrar en la “Vocacional Carlos Marx”, centro escolar que le hizo exigencias superiores a la secundaria y a las que él se ajustó muy rápido para bien. `,
  `El baile y algunas obras teatrales, sin descuidar los estudios fueron actividades en las que se destacó. Anda por ahí un video tomado en el teatro “Atenas” de la ciudad, donde hizo derroche de baile con ovación incluida. Claro, yo tuve que ver con esas potencialidades, pues cuando repasaba Química con Omar, yo le preparaba un almuerzo cinco estrellas: Una tortilla tornasol (De diferentes colores) que disfrutaba, sin otra opción.`,
  `Es un momento oportuno para reconocer su nobleza y el cariño demostrado por su abuelo Rivas e Isabel, quienes lo vieron crecer. Desde temprano la personalidad de su abuelo lo atrajo, motivo por el que siempre lo ha querido de manera especial, sin desdorar a los demás, claro, en tal sentido, se atrajeron mutuamente. A Rivas nunca le tembló la mano para ocuparse de un asunto de marquito, como siempre le ha dicho, y a Marcos no ha habido que inculcarle su cariño por el abuelo, actitud que a todos nos complace y en lo particular admiro.`,
  `De su nuevo derrotero, no hablo por ahora. Tendríamos que sentarnos a conversar. Lo que si aseguro es que la bondad de su corazón crece a diario como sus resultados de estudio e interés por lo que quiere. Su bisabuelo Quiquito, aun distante lo destaca ante cualquier oportunidad y no olvida el regalo de su reloj. `,
  `Para variar, me cuentan que su concentración se multiplica por días, Amalia mediante, pues recientemente le pidieron hacer un breve viaje urgente para llevar unas llaves que se habían quedado en la casa, presto cumplió con el encargo, dio el viaje, pero no llevó las llaves, fao. `,
  
]

export const Marcos = () => {
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