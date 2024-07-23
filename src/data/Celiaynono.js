import { useRef, useState } from "react";

const paragraphs = [
 "Las breves líneas que dedico a Mima y a Papi, como abuelos paternos, me permiten recordarlos vivos, pero sobre todo humor por medio, manera de comunicarnos que siempre les agradó. A mima la vida no le alcanzó para conocer a sus bisnietos y Papi no conoció a Verita ni a Yuliana. Sin dudas les hubiera gustado.",
"Siempre admiraron y quisieron mucho y sin fanfarria, a sus nietos. En Dagmelys veían la niña seria y formal, en Lester, el de los cuentos y cariño sincero, el que junto a Yuniel los mortificaba hasta hacerlos reír. ",
"Hoy los veo como esas buenas y sencillas personas que fueron, de carácter afable sin vanagloria ni expresiones torpes de viejos “sabios” como es costumbre en muchos mortales de una edad avanzada. La crianza de ambos fue tan natural como el agua, sin egoísmo y una máxima: “Ser, es mayor verdad que parecer”. ",
"Entre papi y mima acumularon veinte hermanos en medio de condiciones difíciles de vida, vencidas únicamente por la unidad familiar y el amor mutuo. De niño pude aquilatar el valor de las relaciones de la familia más cercana, (Los Tíos Cary, Ñica, Nino Arturo) sin desconocer sus discrepancias, sin adulonería engañosa, con las limitaciones que tiene cualquier grupo humano. ",
"Ambos se sentían satisfacción por su origen campesino y lo hacían saber. No olvido la opinión que Papi se formó de Martel, abuelo de Mely, tan pronto lo conoció, la que, sin coincidir en todo, reconoció sincera, sin fanfarria con orgullo y conducta natural, amor al campo y conocedor de cuanto se necesitaba hacer en él.",
"Mi mamá, más discreta en sus actuaciones y con márgenes en el comportamiento, fruto de su crianza, pero sin esquemas que afectaran el cariño, fue la primogénita de once hermanos que siempre la reconocieron como otra madre, de ahí la consideración que le tuvieron en vida y la memoria que le han dedicado postmorten.",
"Mis hijos, mi hermana y su hijo, aprendimos a quererla desde su personalidad noble y sincera y respeto por medio, nos divertía mortificarla para oír sus expresiones. Fue el caso de la foto de Mely con rasgos afrodescendientes y su asombro al verla, seguido de una interrogante: ¿Papi, ven acá; ella es?  (…)  a lo que respondí, sí, pero la madre es blanca. ¡Jesús Daguito!, exclamó.",
"Todos nos divertíamos con sus cosas. Yuniel, el nieto que casi crio y que nunca se le perdió, le decía que Mimi tenía novio, pero era (…) y ella como siempre, decía: ¡mira!. Yo voy a hablar con Daguito y habló conmigo a lo que respondí: Si, pero ella me dijo que no te lo dijera, Ah sí, yo voy a hablar con ella. No sé si lo habrá hecho, quizás hasta se le olvidó. ",
"Ya un tanto senil, llegábamos a verla y nos recibía con bombos y platillos, sonrisa, besos y cariños y al minuto me llamaba y me preguntaba: ¿Papi y esos niños quiénes son? Esos niños son tus nietos mima.  Le decía yo, y para mi sorpresa, entonces apuntaba, pero como es eso que yo no los conocí. La escena se repitió varias veces.",
`Momento especial fue la vez que le guardó el sostén a su hermana Dora cuando ésta la visitaba con otras dos hermanas, Ilia y Bello. ¿Dónde está el sostén? Preguntó Dora a la hora de irse. Inició la búsqueda, casa abajo, Se va la guagua. ¿Y ellas que buscan Deysi?, preguntaba mima seguidamente. El ajustador de Dora, le respondían. "tú lo has visto, ¡No! ¿Y dónde ella lo puso? Tía Bello se orinaba. Finalmente, Tía Dora llegó a Cárdenas de brazos cruzados. El ajustador apareció un buen día en el doble forro del colchón de su cama.`,
"Mi papá, siendo la otra mitad, era otra cosa. De temperamento sanguíneo de carácter fuerte, de verbo empírico, pero no errático, decidido, innovador literalmente hablando, sencillo, familiar y amistoso. Al morir tenía noventaidos años y solo le falló la mente apenas unos días antes de su día final. ",
"Entre sus virtudes estaba la necesidad de reunirse con la familia con la mayor frecuencia posible. Inventaba fiestas, encuentros. Uno de los momentos mejor vividos era cuando nos tenía a todos a su alrededor, entonces el trago lo acompañaba, sin peligro de borrachera, pues él, habiéndose tomado una cerveza, al destapar la segunda, ya no quería más. ",
"Sin considerarlo genio (Para nada) fue una lástima que solo lograra en su niñez, quizá como él mismo aceptaba, un sexto grado, pues a partir de sus cuarenta años se incorporó de tal manera a diferentes acciones de preparación, que hacía suponer haberlas recibido en la edad adecuada.  ",
"Como quiera que en este recuento no pretendo hacer su biografía, no me pueden faltar algunas consideraciones personales que conozco: Siempre pensó por cabeza propia y ante el error, se hizo responsable, verdad por medio. Predijo resultados de asuntos familiares y sociales y los argumentó hasta el final. "
]

export const Celiaynono = () => {
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