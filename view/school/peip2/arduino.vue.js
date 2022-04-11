let Arduino = {
  template: gridTemplate,
  data() {
    return {
      title: 'Arduino',
      contents: [
        {
          title: 'TD n°1 : Entrées Analogique et LED',
          subContents: [
            {
              title: "Exercise 1-2 : Réalisation d'un voltmètre",
              link: './peip2/arduino/TD1/exo-1-2-1.html'
            },
            {
              title: "Exercise 1-3 : Indicateur de tension à fenêtre",
              link: './peip2/arduino/TD1/exo-1-3-1.html'
            },
            {
              title: "Exercise 1-4 : Seuil de basculement d’une I/O",
              link: './peip2/arduino/TD1/exo-1-4.html'
            },
          ],
        },
        {
          title: 'TD n°2 : Ecran LCD',
          subContents: [
            {
              title: "Exercise 2-3: Smiley",
              link: './peip2/arduino/TD2/smiley.html'
            },
          ],
        },
        {
          title: 'TD n°3 : PWM',
          subContents: [
            {
              title: "Exercise 3-3: Obtention d'une tension analogique (filtre)",
              link: './peip2/arduino/TD3/exo-3-3.html'
            },
          ],
        },
        {
          title: 'Programme divers :',
          subContents: [
            {
              title: "Clignotement d'une Led",
              link: './peip2/arduino/divers/clignotement_led.html'
            },
            {
              title: "Feu Tricolore",
              link: './peip2/arduino/divers/feu_tricolore.html'
            },
            {
              title: "Lecture d'un potentiomètre",
              link: './peip2/arduino/divers/potentiometre.html'
            },
            {
              title: "Lit la distance en centimètre grâce à un capteur",
              link: './peip2/arduino/divers/distance.html'
            },
          ],
        },
      ],
    };
  },
};
