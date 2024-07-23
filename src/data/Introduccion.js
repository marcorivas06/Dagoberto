import { useRef, useState } from "react";

const paragraphs = [
  `Introducción:`,
  `No es un hecho único, pero bien puede ser evaluado de muy interesante que el mes de junio haya reservado para una familia, cinco de sus días para seis nacimientos de sus miembros: 1, 18, 20, 23 y 25, a lo que se suma que el día 23 de los años 1975 y 1979 nacieran dos hermanos, considerados por eso y algo más, los personajes principales de este recuento. Dagmelys y Lester. `,
  `Ella, la primogénita hija y nieta, cuya sencillez, simpatía y vivacidad han sido su carta de presentación desde niña, llegaba a la vida ese día sobre las 3:00 PM para marcar una nueva etapa en la vida familiar y aunque pudiera parecer una evaluación muy paternal, siempre supimos que su presencia nos alegraría a todos. `,
  `La crianza y educación diaria, han sido de las acciones que con más denuedo ha llevado a cabo su familia. Se trata de una persona especial por eso, nunca estuvo presente la idea de vencerla ni convencerla a ultranza. Buena oyente y observadora, ha evaluado, analizado y decidido, bien y menos bien, pero desde sus perspectivas. `,
  `Reafirma lo anterior, la actitud que asumía cuando con apenas dos años, aprendiendo a hablar, pronunciaba una retahíla de términos incoherentes, al parecer la riposta por lo que le hicieron o dijeron, lo que a algunos nos dio por pensar que pudiera ser un “Don”. Sia pa’ lla’ cara’. `,
  `Luego, salvando las diferencias entre niñez, adolescencia, juventud y adultez-joven, ha sido obediente, responsable, cuidadosa, organizada, muy estudiosa y en los últimos tiempos muy ocupada, razón para no desaprovechar la oportunidad de sugerirle una actuación que la libere de las tensiones que la persiguen insistentemente. `,
  `Siempre hizo uso de los argumentos, a veces auxiliados en las moralejas, –que, mal de familia- le facilitan brevedad en las explicaciones, pues le gusta hablar y como sabe hacerlo es escuchada, virtud que cuida tanto con la familia como con otras personas.`,
  `Para ella, la familia, lo más importante en su vida: Hijos, esposo, hermano, sobrina, padres y abuelos, sin desconocer el cariño por sus tíos y primos y la atención a otros parientes y amistades, muestra de sus bondadosas relaciones. `,
  `Su vida profesional, repleta de retos, se ha hecho acompañar de esfuerzos, rodeados de afectos sinceros. Sus proyectos de vida a corto, mediano y largo plazo, le han proporcionado presente y futuro, a partir de decisiones oportunas, sin desconocer algunos “atasques”, en la intención de querer resolverlo todo de una sola vez.  `,
  `Situación similar ha experimentado la familia con la llegada de Lester, la otra mitad, a quien todos le vimos crecer cariñoso, noble y engañador, cualidad esta última que creció con él, tanto o más que él; pero con la que nos ha llenado a todos de felicidad. `,
  `A mi papá, su abuelo paterno, (Ñoño) le gustaba oír los cuentos sobre sus maldades, sobre todo aquellas que narraban su deambular por el barrio, entonces decía “a Lester, Matanzas le queda chiquita”.`,
  `Ocurrente, relajado, asimiló cada llamada de atención de manera respetuosa. Entendió cada regaño, los que se fueron transformando en reclamos mezclados con exhortaciones, fuertemente suave, hablándole, preguntándole qué no entendía, qué no comprendía, pero; él, todo lo entendía por lo que su compromiso nunca faltó, aunque el hechizo no rebasara un tercio del día. `,
  `Sus ratos de mayor tranquilidad: Frente al televisor. Desde temprano fue manifiesto su interés por los filmes de cualquier tipo. No miento cuando digo que vio películas, que muchos, apagaron el televisor para no verlas. Su pasión, los muñes. `,
  `No obstante, su reconocida independencia temprana, recibió de su hermana una especial ayuda en los primeros años escolares y el apego y simpatía de sus maestras, Lila, Marina, Lourdes y Zenaida, la directora de la escuela.`,
  `Sus grandes virtudes: `,
  `-Las relaciones interpersonales desde pequeño, su cariño por la familia, hijos, esposa, hermana, sobrinos, madre, padre, abuelos, tíos, primos y otras personas. `,
  `-La alegría que contagia, la comunicación con los demás, los conocimientos para hacer, los argumentos para explicar, su persistencia por lo que quiere. `,
  `Defiende sus opiniones desde el “prólogo hasta el epílogo”, actitud que merece elogios, sobre todo cuando hace uso de puntos de vista sobre asuntos bien interesantes que ponen a pensar, pero; no habría que asombrarse si hace un giro y lanza una broma para relajar.`,
  `Con la llegada de ambos, la familia creció, resultado que produjo agradable satisfacción, muy difícil de explicar con palabras y siendo el caso del nacimiento de hijos, nietos, sobrinos o primos, mucho más, pues ellos son esa extensión familiar, razón para la felicidad.`,
  `La afirmación anterior no debe crear expectativas relacionadas con la pretensión de explicar los detalles, solo se trata, en este caso, de homenajear con todo cariño a un grupo de personas que nos hacen felices cada día. `,
  `Aparecen en este trabajo, con menos historia que contar por su edad, tres figuras muy importantes. Marcos, Gabi y Vera, así como sus primos Yuniel, Lien y Liliana, muy queridos por todos, de igual forma se citan a padres, abuelos, bisabuelos y tíos, personajes básicos, pero en papeles secundarios.`,
  `La idea original para este breve recuento, siempre apuntó a la necesidad de dejar constancia de un decir cotidiano, que no por repetido se conserva en la memoria. De ahí que se pensara inicialmente en un “Anecdotario” que luego alcanzaría una dimensión mayor pues lo integran varias personas que no deben quedar fuera y porque, además, a las anécdotas se le agregan valoraciones. `,
  `El estilo literario utilizado, nada tiene de original y mucho menos de profesional, es puramente espontáneo, apoyado en el amor de familia, narrado con la mayor coherencia posible, de manera que caracterice de muy breve forma a los personajes más importantes que haya tenido jamás obra literaria cubana, incluyendo “Espejo de paciencia”. `,
  `Obviamente, estará sujeto a la crítica de expertos cuya misión es esa, la de criticar lo que hacen otros. Estoy preparado para escucharlo todo, es más, me hace falta, por lo tanto, desde ahora espero ansioso por la opinión de todos los entendidos que, en la familia, son varios.`,
  `En su desarrollo, el trabajo intenta recorrer tres etapas en la vida de sus principales personajes: El nacimiento, los estudios y la vida en general con sus matices sociales y laborales hasta la actualidad, lo que, partiendo de su carácter familiar, no será difícil reconocer la verdad relacionada con cada quien.  `,
  `El autor.`,
]

export const Introduccion = () => {
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