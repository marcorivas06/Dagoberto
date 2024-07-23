import { useRef, useState } from "react";

const paragraphs = [
  `El 5 de octubre de 2012, llegaba una nueva alegría a la familia: Nacía Vera. La lejanía nos consternaba, pero los detalles que con frecuencia nos hacía llegar su papá, nos acercaban a los hechos y así como es junio mes de seis celebraciones de nacimientos, octubre lo es para tres: Dago, Vera y Luna.`,
  `Muy pronto las fotos y los videos nos actualizaban. Es el caso de una toma que hiciera Lester junto a Damarys cuando la niña estaba de meses y empezaba a gorjear, momento en el que él le dice vamos a darle un grito a los abuelos, y como si lo hubiera entendido gritó como para que la oyéramos. Nos reímos mucho y, sobre todo, le dimos chucho a Gabi y Marcos, con lo que hizo su prima. `,
  `Cumplidos los dos años, nos visitaron durante una semana. Fueron días inolvidables. Cuando llegaron yo cargué a Vera y entré a la casa. Era admirable como intentaba ubicarse, mirándolo todo. Enseguida Marcos y Gabi se encargaron de ella.`,
  `Esa noche, un poco tarde ya, le propusimos acostarnos, pues los padres salieron a hacer visitas. Mientras la mimábamos y hablábamos, nos pidió: “Our de tataito”. Se lo tradujimos a idiomas insospechados y no dábamos con lo que quería. Cada vez la solicitud se hacía más seguida y fuerte. Qué hacemos, habrá que localizar a Lester; de pronto Mely tuvo uno de sus momentos lúcidos (…) claro; lo que quiere es Yougur de Platanito que ellos trajeron. ¡Ñoooo!`,
  `Una noche, intentábamos dormir más temprano y al oír los ladridos de un perro, hubo que salir con ella para la calle. Triste escena: Dos viejos y una niña, a esa hora, detrás de un animalito que nunca dejó que nos acercáramos. No sé qué habrá pensado, pero suponiéndome en su caso, yo hubiera hecho lo mismo. “¿Qué coño hacen estos dos viejos con una niña detrás de mí?” “Nicomedes”? Era tal su obsesión por los perros que le puso nombres a dos, (Coni y Zuqui) uno de la bisabuela y otro de Yudanis.`,
  `Una de las noches cuando nos acostamos ella jugaba con la famosa “Gatica digital” que su abuela le había copiado en el teléfono quien nos tuvo hasta la madrugada despiertos. Nos recordó a Marcos con el conejito Tin. Era admirable su desvelo y sobre todo el despertar temprano sin límites para el juego y el ejercicio constante, lo que supusimos era fruto del momento y el cambio de lugar. En nuestro primer viaje a su casa no dimos cuenta de que no era circunstancial. ¡Pal cara…”`,
  `Durante su estancia, estuvimos en varios lugares, uno de ellos con una parte de la familia en Coliseo. Fue un encuentro especial con mi hermana, a y los suyos. Verita se comportó muy bien sin extrañar a nadie. Parecía que había visto a todos siempre. Marcos y Gabi fueron muy cariñosos con ella y Yuliana, la niña de Yuniel que estaba más chica.`,
  `Varadero fue sitio ideal para una reunión familiar. Todo muy bien, todos juntos. Muchas fotos. Habiendo recibido la consideración de Lester de cargarla porque ella no ponía los pies en el piso nos la llevamos para la playa; tremenda gozadera en la arena. A la salida un abuelo por cada mano, pies descalzos por arena y yerba hasta la casa donde el padre atendía a unos amigos. Mely, que siempre ha sido muy fuerte con él, le dijo: Mírala ahí, ¿Qué te parece?`,
  `El día de su regreso, nostalgia por medio, se despidió, quizás, como dice su abuela que es “Medium” un poco retraída porque se iba, a mí me pareció cansada, pues un par de horas antes ya había empezado el dale que dale, cada quien la cargaba, le decía algo, en fin, estaba cansada antes de iniciar el viaje. Fueron días para recordar.`,
  `En la primera ocasión que los visitamos en Miami, Verita estaba un poquito más crecidita, pero igual de simpática y vivaz. Las entradas y salidas a los elevares era un Show, sobre todo al regreso cuando por el pasillo yo competía con ella a ver quién llegaba primero a la puerta. Sabiéndola prima de la Gabi, no se me ocurrió ganarle nunca.`,
  `Justamente durante esta visita comenzó la gracia de salir del baño desnuda corriendo por toda la casa y gritando, papi mira, ¡encurusa! para terminar en el sofá donde la secaban y vestían. De ahí las escenas que se repetían en visitas posteriores, incluidas maldades atrevidas.`,
  `Por las noches decía que dormiría con nosotros, costumbre que mantuvo hasta mucho tiempo después, de hecho, no era dormir lo que quería. Más de una vez el padre llegó tarde, pasadas la 1:00 y 2:00 AM y nos supuso dormidos. La abuela y yo como pescado en tarima, ella el pescador. TV y table encendidos. `,
  `Como los abuelos maternos vivían relativamente cerca, varias veces la llevábamos hasta allá en el velocípedo. Parque infantil por medio y prima de Marcos, ya ustedes saben: Parquecito, parquecito. Para sacarla de ese ambiente después, era de muy señor mío y más pa’ lante. `,
  `Su abuela y yo, la observábamos en sus relaciones con otros menores, veíamos satisfechos su forma de ser. Era algo que la distinguía, enseguida hacía amistad. No pongo en dudas los genes de la mamá, pero respondo por los del padre, el rey de las relaciones y las buenas migas con todo el mundo. `,
  `Ya viviendo en la nueva casa, hay un espacio mayor para correr, lo que aprovechamos su abuela y yo para entretenerla y disfrutarla, enseñándole varias formas de pasar un rato. El chucho escondido, el conteo hasta 10 para escondernos, el gato y el ratón, obras simulando su búsqueda y sus escondidas en una caja de juguetes, entre otros juegos.`,
  `La abuela paterna, que ha sido calificada por Lester como la   embutidora de comida a los muchachos, tratando de que comiera con mayor apetito, empezó a engañarla con el “Helado Bonito”, nada especial, varios tipos de helados con todo lo que se le podía poner encima, así fue logrando que comiera una y otra cosa, aunque, a decir verdad, ella siempre ha comido bien, solo que un poco lento. No obstante, la abuela está oronda por su iniciativa. `,
  `El jueguito de salir desnuda a la hora de bañarse, ocasión en la que yo fingía que la retrataría, para que papá la viera, fue cogiendo altura, tanto que me vigiló cuando yo entré al baño y empujando suavemente la puerta, me retrató de espaldas. Lo demás imagínenselo. Me salvó la honra su papá a quien de inmediato le mostró la foto, sin saber que recibiría regaño y le borraría la obra. Yo “callao” y ella brava por varias horas. `,
  `En otra oportunidad jugando a los escondidos, se le ocurrió esconderse en el baño del cuarto de los padres, al que entró corriendo sin percatarse que allí estaba su abuelo Jorge, bañándose. (…..)  Dice Amelita que ella venia por el pasillo cuando Vera Salió del cuarto como perro que tumbó la lata y le decía ven mami que me voy a esconder en otro lugar. (Después explicó)`,
  `De las visitas, tenemos un sin número de vivencias que recordamos con agrado, entre otras, la fiesta de su cumpleaños, las visitas a su círculo, la prueba de natación, las vistas a su escuela, sus juegos en el parquecito de la escuela, los encuentros en la casa de la tía, nuestra participación en el acto de reconocimiento por sus resultados docentes, así como, las visitas a diferentes restaurantes.`,
  `En los momentos de redactar este recuento, (Pandemia) hace ya más de un año que solo la vemos por videos, cada vez más linda y grande y aunque intentamos hablar con ella con mayor frecuencia, (La abuela, sobre todo) no siempre tenemos suerte pues hay veces que la conexión está mala y otras veces la conexión no está buena, dice ella.`,
  
]

export const Vera = () => {
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