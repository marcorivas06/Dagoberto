import { useRef, useState } from "react";

const paragraphs = [
`Olga y Quiquito, los padres y abuelos maternos que han estado al tanto de sus dos hijos, sus cuatro nietos y seis bisnietos desde el día Uno. Olga la abuela complaciente y ocupada con su creche, pendiente, compartidora de lo que tiene con gesto familiar y natural, propio de su crianza sencilla, parte de la que pude conocer y disfrutar en ambiente inigualable con los criollos y naturales, Macho y Celestina.`,
`De Avelino y Emelina, otro tanto se puede decir, ambos disfrutaron sus nietos y en menor tiempo sus tres bisnietas y su bisnieto varón, por el que la vieja, como le decaímos a Emelina, sentía particular apego, muestra de ello fue su ocupación cada vez que él niño tuvo alguna dolencia. Sus pláticas eran animadas, cariñosas de total armonía, pues él era muy engañador y con pasteles por medio, mucho más.`,
`A Olga todos sus nietos la adoran y se prestan de manera espontánea a atenderla y complacerla y aunque la primogénita tiene su silla, en ella se sientan los demás también. Dagmelys y Lester, siendo los primeros, pesan, pero; Lien y Liliana con los bisnietos llenan un importante espacio. Esa cría es maravillosa, saca a cualquiera del stres. Atentos a la celebración de cada cumpleaños, la llamada telefónica seria y menos seria en la que Lien se ha hecho experta, aprovechando la carencia auditiva del abuelo. `,
`Amelita, sin abandonar su condición de surda, es su brazo derecho, su consultora, su médico y enfermera y aunque la envoltura es parte del paquete, lo fundamental es el envuelto y de eso doy fe. Su sinceridad es temible e irreversible.  Olga puede sentirse ayudada y atendida por sus hijos y nietos. `,
`Quiquito, quien aparentemente parece operado de los nervios, tiene el mismo reconocimiento de sus hijos, nietos y esposa y pasa además por el abuelo relajado, flemático, que asegura poder desarmar y armar el motor de una locomotora con una pinza, asegurándole a los pasajeros que vayan montando que en breve va a salir, aunque haya que esperar un mes. Estilo hiperoptimizoide. `,
`Persona accesible, jocoso, buen interlocutor, con tema de conversación para varios asuntos, con menos y más razón, reiteración por medio, recurre a los puntos de vista otrora formados. Consejero familiar, por mayoría de edad, Amelita su obsesión.  `,
`Me obligo una opinión más, como traje a la medida: Hace un tiempo Mely y Dagmelis se registran como muy exigentes por la salud y otros asuntos de la familia, actitud que debiera extenderse en evitación de males mayores, aunque se gasten algunas discrepancias. Siempre será mejor hacer el cuento de un exceso que la anécdota triste por el defecto de querer ser complaciente. (Opinión personal por derecho de autor) `,
  
]

export const Olgayquiquito = () => {
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