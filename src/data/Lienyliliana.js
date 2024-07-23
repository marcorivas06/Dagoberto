import { useRef, useState } from "react";

const paragraphs = [
  `Entre 1984 y 1986, nacían Lien y Liliana. El 25 de marzo 1984 una linda chinita de pelo lacio risueña y tierna, querida por todos y no muy distante en fecha del 25 de enero de 1986, una hermosa niña con cara de muñeca, apetito para regalar y carácter relajado desde pequeña, razón por la que su abuelo paterno la nombrara su heredera. (Por lo menos una gorra le debe tocar) `,
  `La infancia de ambas es recordada con cariño. Su tía las adora y disfrutó como nadie atenderlas muchas veces en asuntos de baños y comida, en las que también intervino Dagmelys. Con agrado Mely cuenta cómo al bañar a Liliana y seguidamente darle el almuerzo, la niña metía las manos en el plato, se las limpiaba en la barriga, venga la otra cucharada y luego, al baño de nuevo.`,
  `Graciosa fue la ocasión en que, Liliana, siendo pequeña, un día a media mañana, las tripitas se le movieron y le reclamó a su abuela Olga, algo de comer.  La abuela en tono de complacencia le dijo: Hay mamita, qué te doy; SOS como respuesta: “Aunque sea sal”. `,
  `La etapa de sus estudios fue muy seguida por su mamá, quien docente reconocida al fin, insistió siempre en la preparación de ambas. El paso por la primaria reserva anécdotas imposibles de redactar aquí, pero; que siempre nos ha gustado oír, sobre todo por la influencia que ejerció su dulce y chévere mamá psicóloga. `,
  `El carácter de las dos niñas, (genes maternos por supuesto) es muy agradable, apenas empezaron a hablar, yo fui su tío, hasta el día que Liliana me presentó a un grupo de amiguitas como su tío político. No se me olvida. Como no se me olvida, el día que ambas vinieron a la casa de la abuela y al preguntar por mí, fueron a verme a la casa que estaba en construcción, justo cuando me encontraba dando pico en lo que sería la fosa.`,
  `Quise salir para saludarlas y les tiré una soga que debían sujetar para yo subir. Lo intentamos varias veces y cada vez que estaba llegando, a ellas les daba risa soltaban la soga y yo volvía hacia abajo. Definitivamente solté la soga y salí como pude, después a todo reír, querían aguantar la soga para que yo bajara: ¡Ni loco!`,
  `El tiempo pasó, crecieron, vinieron los novios, los matrimonios y los hijos. Hoy, cada una tiene una linda familia. De Lien, Víctor y Vanesa y su servicial esposo Yudenis. De Liliana, Lisbrenda y Jon y Yoenir su esposo magnifico joven muy familiar. Todos son divinos, cariñosos y muy vivos. Víctor y Lisbrenda, un tanto serios. Vanesa muy simpática y engañadora con algunos repuntes de la tía abuela. Jon, un personaje, inteligente y desenfadado. `,
  `El día que nació Víctor, nos reunimos en maternidad varios familiares, sobre todo de Yudenis y mientras esperábamos noticias, una de sus primas, le daba chucho, con picardía incluida, al preguntarle: Yude, cómo le vas a decir al niño, ¡Vitico! Todos nos reíamos, él, intentando no dejarse provocar, solo la miraba.`,
]

export const Lienyliliana = () => {
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