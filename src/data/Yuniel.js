import { useRef, useState } from "react";

const paragraphs = [
`El 1ero de junio de 1976, casi a un año de nacida su prima Dagmelys o “Mimi”, como él le ha dicho siempre, nacía Yuniel. (Yunielito, Yuni) Rápidamente ambos lograron relaciones de primos, las que se hicieron más profundas con la llegada del otro. `,
`Hay varias anécdotas que ilustran como gozan los tres cuando se juntan, dando chucho y haciendo maldades, sanas por supuesto, casi siempre a cuenta de algún familiar cercano. Papi y mima no escaparon, ni yo tampoco. `,
`Ya pasado el tiempo, Yuniel matriculó en la escuela Ernest Tahelman y nos visitaba con cierta frecuencia comía y dormía en la casa. Esas veces hubo de todo. Evitando que el relajo llegara a otra parte de la casa, muchas veces los cinco dormíamos en un cuarto que tenía aire acondicionado y a Yuniel le tocaba acostarse en un colchoncito de cuna del que se le salían los pies o la cabeza. He ahí la primera razón para el bonche.`,
`Un día me dijo: Tío, enséñame a bailar; ¿a mí con eso? Los tres empezamos a hacernos los bailadores. (Ensayar hasta el cansancio el ritmo con el un, dos, tres) Yuniel llegaba y me decía, tío, tío, mira, dime como estoy y parado frente a mí: Botas grandes, Pantalón estrecho, Pullover abotonado hasta el cuello (Pepe el de Moya) y peinado de moda, decía: un, dos, tres, a la vez que se movía hacia ambos lados. Para reírse. Así aprendieron Dagmelys y Yuni.  Lester nació sabiendo.`,
`No fueron los estudios el fuerte de Yuni. Un día en que lo aconsejaba, medio en broma y medio en serio me dijo: Tío, mi abuelo “Putumayo”, aprendió a sacar cuentas y con eso lo ha hecho todo, tú lo sabes. Conociendo parte de la historia, no me quedó de otra, me tuve que reír y, no es que tuviera toda la razón, pero lo copio casi al papel carbón. `,
`Hoy Yuni tiene una linda familia con dos hijos: Marcos Evian, un jovencito que desde niño identificó a su abuela paterna como algo especial en su vida y viceversa. Criado en el amor de familia, junto a su hermana Yuliana de quien hay que hacer historia aparte por viva y leguleya, cariñosa y linda. Yuniel ha tenido una gran suerte con su esposa Naibel, joven cariñosa y sencilla de familia afable.`,
`Entre las cosas bonitas que ha hecho Yuni, está la conservación y renovación de la casa de sus abuelos maternos y la atención a su mamá, la que se ha mantenido junto a él en las buenas y las malas. Cuando nos reunimos, hay anécdotas que no por repetidas cansan, es más, se le incorporan nuevos argumentos, máxime cuando el personaje toma la palabra y le pone su sello, es una obra de arte; Lo disfruto.`,
  
]

export const Yuniel = () => {
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