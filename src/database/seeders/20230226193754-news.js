"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "news",
      [
        {
          title: "Tragédia do litoral de SPueite",
          description:
            "Encontro do último corpo aconteceu na tarde deste domingo (26), justamente uma semana depois do temporal histórico. Com as buscas encerradas, foco agora é identificar as vítimas localizadas.",
          link: "https://g1.globo.com/sp/vale-do-paraiba-regiao/noticia/2023/02/26/tragedia-do-litoral-de-sp-corpo-do-ultimo-desaparecido-e-encontrado-e-numero-de-mortes-sobe-para-65.ghtml",
        },
        {
          title:
            "Agenda ambiental deve estar no centro das discussões sobre investimentos entre Brasil e EUA",
          description:
            "O presidente americano Joe Biden anunciou a intenção de investir cerca de US$ 50 milhões no Fundo Amazônia durante visita de Lula aos Estados Unidos. Investimentos ligados à sustentabilidade devem nortear as relações econômicas dos dois países.",
          link: "O presidente americano Joe Biden anunciou a intenção de investir cerca de US$ 50 milhões no Fundo Amazônia durante visita de Lula aos Estados Unidos. Investimentos ligados à sustentabilidade devem nortear as relações econômicas dos dois países.",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("news", null, {});
  },
};
