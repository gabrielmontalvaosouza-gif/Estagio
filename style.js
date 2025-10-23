document.addEventListener('DOMContentLoaded', () => {
  const logo = document.getElementById('logo-small');
  setTimeout(() => { if (logo) logo.classList.add('animado'); }, 300);

  const btn = document.querySelector('.Iniciar');
  const imgInicial = document.getElementById('imagem-inicial');
  const mapContainer = document.getElementById('map-container');
  const mapImg = document.getElementById('map-img');
  const popup = document.getElementById('info-popup');

  const cidades = [    {
      nome: 'Goiânia',
      top: 35,
      left: 75,
      imagem: 'imagens/GOIANIA.jpg',
      pontosInternos: [
        {
          nome: 'Parque Vaca Braba',
          top: 55,
          left: 20,
          info: 'Parque Vaca Braba - espaço recreativo.',
          imagem: 'conteudo/goiania/vacabrava.JPG',
          descricao: 'O Parque Vaca Braba é um dos cartões-postais de Goiânia, com lago, pistas de caminhada e ampla área verde no coração da cidade.'
        },
        {
          nome: 'Parque Areião',
          top: 45,
          left: 84,
          info: 'Parque Areião',
          imagem: 'conteudo/goiania/parqueareiao.JPG',
          descricao: 'O Parque Areião é conhecido por suas trilhas sombreadas, diversidade de aves e contato direto com a natureza urbana.'
        }
      ]
    },
    {
      nome: 'Anápolis',
      top: 20,
      left: 70,
      imagem: 'imagens/Anapolis.jpg',
      pontosInternos: [
        {
          nome: 'Jardim Botânico de Anápolis',
          top: 35,
          left: 79,
          info: 'Jardim Botânico de Anápolis',
          imagem: 'conteudo/Anápolis/jardim-b.JPG',
          descricao: 'O Jardim Botânico de Anápolis é uma área dedicada à conservação da flora regional e à educação ambiental.'
        },
        {
          nome: 'Parque Ipiranga',
          top: 78,
          left: 18,
          info: 'Parque Ipiranga',
          imagem: 'conteudo/Anápolis/ipiranga.JPG',
          descricao: 'O Parque Ipiranga é um dos principais pontos de lazer de Anápolis, com pistas de cooper e espaços de convivência ao ar livre.'
        }
      ]
    },
    {
      nome: 'Aparecida de Goiania',
      top: 41,
      left: 57,
      imagem: 'imagens/Aparecida.jpg',
      pontosInternos: [
        {
          nome: 'Serra da Areia',
          top: 62,
          left: 17,
          info: 'Serra da Areia',
          imagem: 'conteudo/Aparecida de Goiânia/serra.JPG',
          descricao: 'A Serra da Areia é uma das maiores reservas de cerrado urbano do Brasil, abrigando fauna e flora nativas.'
        },
        {
          nome: 'Viveiro Cerrado',
          top: 62,
          left: 76,
          info: 'Viveiro Cerrado',
          imagem: 'conteudo/Aparecida de Goiânia/viveiro.JPG',
          descricao: 'O Viveiro Cerrado é um espaço voltado à produção de mudas nativas e à conscientização ambiental da população.'
        }
      ]
    },
    {
      nome: 'Inhumas',
      top: 49,
      left: 66,
      imagem: 'imagens/Inhumas.jpg',
      pontosInternos: [
        {
          nome: 'Programa Cerrado em Pé',
          top: 40,
          left: 70,
          info: 'Programa Cerrado em Pé',
          imagem: 'conteudo/Inhumas/empe.JPG',
          descricao: 'O programa Cerrado em Pé atua na preservação de nascentes e matas ciliares na região de Inhumas.'
        },
        {
          nome: 'Área de Proteção Ambiental',
          top: 36,
          left: 19,
          info: 'Área de Proteção Ambiental',
          imagem: 'conteudo/Inhumas/Inhumas.JPG',
          descricao: 'Área de preservação que protege ecossistemas locais e incentiva práticas sustentáveis na comunidade.'
        }
      ]
    },
    {
      nome: 'Cidade de Goias',
      top: 61,
      left: 86,
      imagem: 'imagens/GoiasVelho.jpg',
      pontosInternos: [
        {
          nome: 'Parque Estadual da Serra Dourada',
          top: 42,
          left: 20,
          info: 'Parque Estadual da Serra Dourada',
          imagem: 'conteudo/Goias/cerradourada.JPG',
          descricao: 'O Parque da Serra Dourada encanta com mirantes, trilhas e formações rochosas únicas do cerrado goiano.'
        },
        {
          nome: 'Reserva Particular',
          top: 19,
          left: 70,
          info: 'Reserva Particular',
          imagem: 'conteudo/Goias/topozios.JPG',
          descricao: 'Uma reserva ecológica mantida por iniciativa privada para proteger espécies nativas do bioma cerrado.'
        }
      ]
    },
    {
      nome: 'Senador Canedo',
      top: 62,
      left: 47,
      imagem: 'imagens/Canedo.jpg',
      pontosInternos: [
        {
          nome: 'Área de Preservação',
          top: 53,
          left: 23,
          info: 'Área de Preservação',
          imagem: 'conteudo/Senador Canedo/preservação de flor ip.JPG',
          descricao: 'Zona de proteção natural com reflorestamento de espécies do cerrado e trilhas ecológicas.'
        },
        {
          nome: 'Captação Bonsucesso',
          top: 53,
          left: 73,
          info: 'Captação Bonsucesso',
          imagem: 'conteudo/Senador Canedo/captação bonsucesso.JPG',
          descricao: 'Local de captação de água natural, importante para o abastecimento e conservação ambiental de Canedo.'
        }
      ]
    },
    {
      nome: 'Formosa',
      top: 93,
      left: 36,
      imagem: 'imagens/Formosa.jpg',
      pontosInternos: [
        {
          nome: 'Parque Ecológico Bocaina',
          top: 33,
          left: 18,
          info: 'Parque Ecológico Bocaina',
          imagem: 'conteudo/Formosa/magos ecobocaina.JPG',
          descricao: 'O Parque Bocaina abriga belas paisagens, nascentes e quedas d’água típicas do cerrado goiano.'
        },
        {
          nome: 'Reserva Vale do Paranã',
          top: 55,
          left: 65,
          info: 'Reserva Vale do Paranã',
          imagem: 'conteudo/Formosa/vale do parana formosa.JPG',
          descricao: 'Reserva natural destinada à pesquisa e à proteção de espécies ameaçadas da fauna e flora do cerrado.'
        }
      ]
    },
    {
      nome: 'Itumbiara',
      top: 39,
      left: 22,
      imagem: 'imagens/Itumbiara.jpg',
      pontosInternos: [
        {
          nome: 'Fazenda Carlota',
          top: 63,
          left: 18,
          info: 'Fazenda Carlota',
          imagem: 'conteudo/Itumbiara/a Fazenda Carlota.JPG',
          descricao: 'A Fazenda Carlota é exemplo de agricultura sustentável integrada à conservação ambiental.'
        },
        {
          nome: 'Marina do Cerrado',
          top: 79,
          left: 66,
          info: 'Marina do Cerrado',
          imagem: 'conteudo/Itumbiara/A Marina do Cerrado.JPG',
          descricao: 'Espaço turístico à beira do Rio Paranaíba, com atividades náuticas e vista privilegiada da natureza.'
        }
      ]
    },
    {
      nome: 'Jataí',
      top: 24,
      left: 34,
      imagem: 'imagens/Jatai.jpg',
      pontosInternos: [
        {
          nome: 'Parque Diacuí',
          top: 21,
          left: 25,
          info: 'Parque Diacuí',
          imagem: 'conteudo/Jataí/reserva diaicui.JPG',
          descricao: 'Área verde dedicada ao lazer, educação ambiental e preservação das nascentes locais.'
        },
        {
          nome: 'Nascentes do Rio Doce',
          top: 27,
          left: 83,
          info: 'Nascentes do Rio Doce',
          imagem: 'conteudo/Jataí/rio doce jatai.JPG',
          descricao: 'Importante área de preservação que protege nascentes e cursos d’água da região sudoeste goiana.'
        }
      ]
    },
    {
      nome: 'Uruaçu',
      top: 22,
      left: 20,
      imagem: 'imagens/Uruacu.jpg',
      pontosInternos: [
        {
          nome: 'Microbacia Passa-Três',
          top: 55,
          left: 23,
          info: 'Microbacia Passa-Três',
          imagem: 'conteudo/Uruaçu/A microbacia do Córrego Passa-Três.JPG',
          descricao: 'Área de microbacia responsável pela conservação hídrica e equilíbrio ambiental da região.'
        },
        {
          nome: 'Fazenda Titara',
          top: 60,
          left: 75,
          info: 'Fazenda Titara',
          imagem: 'conteudo/Uruaçu/fazenda.JPG',
          descricao: 'Propriedade rural modelo em práticas de preservação e manejo sustentável do cerrado.'
        }
      ]
    },
    {
      nome: 'Valparaíso',
      top: 95,
      left: 66,
      imagem: 'imagens/Valparaiso.jpg',
      pontosInternos: [
        {
          nome: 'Parque Ecológico Valparaíso',
          top: 46,
          left: 20,
          info: 'Parque Ecológico',
          imagem: 'conteudo/Val/parque eco.JPG',
          descricao: 'O Parque Ecológico Valparaíso promove educação ambiental e preserva áreas de vegetação nativa.'
        }
      ]
    },
    {
      nome: 'Águas Lindas',
      top: 92,
      left: 10,
      imagem: 'imagens/Agualinda.jpg',
      pontosInternos: [
        {
          nome: 'Parque Estadual Águas Lindas',
          top: 38,
          left: 70,
          info: 'Parque Estadual',
          imagem: 'conteudo/Aguas/parque estadual de agua linda.JPG',
          descricao: 'Área protegida que abriga diversas nascentes e espécies endêmicas do bioma cerrado.'
        }
      ]
    },
    {
      nome: 'Luziânia',
      top: 83,
      left: 89,
      imagem: 'imagens/Luziania.jpg',
      pontosInternos: [
        {
          nome: 'Parque Municipal Toninho Roriz',
          top: 39,
          left: 16,
          info: 'Parque Municipal',
          imagem: 'conteudo/Luziânia/Parque Municipal toninho Roriz.JPG',
          descricao: 'Espaço urbano com trilhas e lago, voltado ao lazer e à preservação da vegetação nativa.'
        },
        {
          nome: 'Parque Cerrado a Fundo',
          top: 29,
          left: 79,
          info: 'Parque Cerrado a Fundo',
          imagem: 'conteudo/Luziânia/Cerrado Fundo.JPG',
          descricao: 'Iniciativa local de conservação e educação ambiental que valoriza o cerrado goiano.'
        }
      ]
    },
    {
      nome: 'Goiânia Oeste',
      top: 27,
      left: 88,
      imagem: 'imagens/GoianiaOeste.jpg',
      pontosInternos: [
        {
          nome: 'Jardim Botânico de Goiânia',
          top: 30,
          left: 19,
          info: 'Jardim Botânico',
          imagem: 'conteudo/Goiânia Oeste/Jardim.JPG',
          descricao: 'O Jardim Botânico é uma das maiores áreas verdes urbanas do país, com espécies raras e projetos de reflorestamento.'
        },
        {
          nome: 'Parque Flamboyant',
          top: 45,
          left: 85,
          info: 'Flamboyant',
          imagem: 'conteudo/Goiânia Oeste/Parque Flamboyant Lourival Louza.JPG',
          descricao: 'Parque moderno e bem estruturado, com lagos artificiais e áreas de convivência cercadas por natureza.'
        }
      ]
    }];

  let pontosPrincipais = [];
  let pontosInternos = [];
  let cidadeAtiva = null;
  let subContainerAtivo = null;

  function criarPonto(topPercent, leftPercent, container, isSub = false, delay = 0) {
    const ponto = document.createElement('div');
    ponto.classList.add('click-point');
    if (isSub) ponto.classList.add('sub');
    container.appendChild(ponto);

    // animacao inicial com delay
    ponto.style.transition = `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`;
    ponto.style.opacity = 0;
    ponto.style.transform = 'scale(0.7)';
    setTimeout(() => {
      ponto.classList.add('mostrar');
      ponto.style.opacity = 1;
      ponto.style.transform = 'scale(1)';
    }, 50);

    function atualizar() {
      const rect = mapImg.getBoundingClientRect();
      ponto.style.left = rect.left + (leftPercent * rect.width) / 100 - ponto.offsetWidth / 2 + 'px';
      ponto.style.top = rect.top + (topPercent * rect.height) / 100 - ponto.offsetHeight / 2 + 'px';
    }
    atualizar();
    window.addEventListener('resize', atualizar);
    return ponto;
  }

  function mostrarPopup(texto) {
    if (!popup) return;
    popup.textContent = texto;
    popup.classList.add('mostrar');
    setTimeout(() => popup.classList.remove('mostrar'), 2500);
  }

  btn.addEventListener('click', () => {
    btn.classList.add('esconder');
    setTimeout(() => btn.style.display = 'none', 500);
    if (imgInicial) imgInicial.classList.add('esconder');

    setTimeout(() => {
      mapContainer.style.display = 'block';
      setTimeout(() => mapContainer.style.opacity = '1', 50);

      cidades.forEach((cidade, index) => {
        const ponto = criarPonto(cidade.top, cidade.left, mapContainer, false, index * 100);
        pontosPrincipais.push(ponto);

        ponto.addEventListener('click', () => {
          mostrarPopup(cidade.nome);

          // limpa pontos internos e containers ativos
          pontosInternos.forEach(pt => pt.remove());
          pontosInternos = [];
          if (cidadeAtiva) cidadeAtiva.remove();

          const cidadeContainer = document.createElement('div');
          cidadeContainer.classList.add('cidade-container');
          Object.assign(cidadeContainer.style, { position:'absolute', top:0, left:0, width:'100%', height:'100%', zIndex:1000 });
          mapContainer.appendChild(cidadeContainer);
          cidadeAtiva = cidadeContainer;
          setTimeout(() => cidadeContainer.classList.add('mostrar'), 50);

          // imagem cidade com zoom + fade
          const imgCidade = document.createElement('img');
          imgCidade.src = cidade.imagem;
          imgCidade.classList.add('img-transicao');
          imgCidade.style.width = '100%';
          imgCidade.style.height = 'auto';
          cidadeContainer.appendChild(imgCidade);
          setTimeout(() => imgCidade.classList.add('mostrar'), 50);

          // botão voltar
          const voltarBtn = document.createElement('button');
          voltarBtn.textContent = 'Voltar';
          voltarBtn.classList.add('voltar');
          cidadeContainer.appendChild(voltarBtn);
          setTimeout(() => voltarBtn.classList.add('mostrar'), 50);
          voltarBtn.addEventListener('click', () => {
            if (subContainerAtivo) {
              subContainerAtivo.remove();
              subContainerAtivo = null;
            } else {
              imgCidade.classList.add('sair');
              cidadeContainer.classList.add('sair');
              setTimeout(() => { cidadeContainer.remove(); cidadeAtiva = null; }, 600);
            }
          });

          // subpontos com staggered animation
          cidade.pontosInternos.forEach((sub, indexSub) => {
            const subPonto = criarPonto(sub.top, sub.left, cidadeContainer, true, indexSub * 150);
            pontosInternos.push(subPonto);

            subPonto.addEventListener('click', () => {
              if (subContainerAtivo) subContainerAtivo.remove();

              const subContainer = document.createElement('div');
              subContainer.classList.add('sub-container');
              Object.assign(subContainer.style, { position:'absolute', top:0, left:0, width:'100%', height:'100%', zIndex:1200 });
              cidadeContainer.appendChild(subContainer);
              subContainerAtivo = subContainer;
              setTimeout(() => subContainer.classList.add('mostrar'), 50);

              const imgSub = document.createElement('img');
              imgSub.src = sub.imagem;
              imgSub.classList.add('img-transicao');
              imgSub.style.width = '100%';
              imgSub.style.height = 'auto';
              subContainer.appendChild(imgSub);
              setTimeout(() => imgSub.classList.add('mostrar'), 50);

              // botão voltar subponto
              const voltarSubBtn = document.createElement('button');
              voltarSubBtn.textContent = 'Voltar';
              voltarSubBtn.classList.add('voltar');
              subContainer.appendChild(voltarSubBtn);
              setTimeout(() => voltarSubBtn.classList.add('mostrar'), 50);
              voltarSubBtn.addEventListener('click', () => {
                imgSub.classList.add('sair');
                subContainer.classList.add('sair');
                setTimeout(() => { subContainer.remove(); subContainerAtivo = null; }, 600);
              });

              // botão sobre com fade + scale
              const sobreBtn = document.createElement('button');
              sobreBtn.innerHTML = 'ℹ️ Sobre';
              sobreBtn.classList.add('sobre');
              subContainer.appendChild(sobreBtn);
              setTimeout(() => sobreBtn.classList.add('mostrar'), 50);
              

              const sobrePopup = document.createElement('div');
              sobrePopup.classList.add('sobre-popup');
              sobrePopup.innerHTML = `<h2>${sub.nome}</h2><p>${sub.descricao || ''}</p><button class="fechar-sobre">Fechar</button>`;
              subContainer.appendChild(sobrePopup);

              sobreBtn.addEventListener('click', () => sobrePopup.classList.add('mostrar'));
              const fecharBtn = sobrePopup.querySelector('.fechar-sobre');
              if (fecharBtn) fecharBtn.addEventListener('click', () => sobrePopup.classList.remove('mostrar'));
            });
          });
        });
      });
    }, 700);
  });
});
