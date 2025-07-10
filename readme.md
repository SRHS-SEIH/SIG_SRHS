<p align="center">
  <img src="css/images/SRHS-bighorilogo.png" alt="SRHS Logo">
</p>

# Visão Geral - SIG SRHS [![Versão](https://img.shields.io/badge/Vers%C3%A3o-1.1.3-blue.svg)](https://srhs-seih.github.io/SIG_SRHS/)

[![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML) [![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS) [![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) [![Leaflet](https://img.shields.io/badge/Leaflet-1C2F3C?style=flat&logo=leaflet&logoColor=25A454)](https://leafletjs.com) [![QGIS](https://img.shields.io/badge/QGIS-3.x-green?logo=qgis&logoColor=white)](https://qgis.org)

O **SIG SRHS** é uma plataforma web desenvolvida pela **Secretaria de Recursos Hídricos e Saneamento (SRHS)** do Estado de Pernambuco, concebida para oferecer visualização e análise espacial interativa de dados geográficos relacionados à gestão de recursos hídricos no território pernambucano. A plataforma foi desenvolvida utilizando QGIS como ambiente de preparação de dados espaciais e o plugin `qgis2web` para geração da estrutura base da aplicação web. Esta abordagem garante a integração eficiente entre o ambiente de geoprocessamento desktop e a interface web interativa.

---

## Funcionalidades Principais

O SIG SRHS oferece um conjunto robusto de funcionalidades para garantir uma experiência de visualização e consulta interativa completa:

### Visualização e Navegação

- Controle de Camadas: Gerenciamento hierárquico de camadas vetoriais com controle de visibilidade
- Mapas Base: Alternância entre múltiplos provedores de mapas base (híbrido, satélite, OpenStreetMap)
- Navegação Interativa: Zoom, pan e controles de escala para exploração espacial
- Vizualização prática: Feições importantes são destacados no mapa facilitando a interação e identificação

### Consulta e Análise

- Informações Interativas: Pop-ups informativos com atributos detalhados mediante clique em feições
- Ferramenta de busca: Ferramenta de busca por nomes e atributos de elementos geográficos
- Medições: Ferramentas para cálculo de distâncias e áreas diretamente no mapa

---

## Estrutura de Dados

As informações do SIG SRHS são organizadas de forma intuitiva em camadas GeoJSON, garantindo flexibilidade e interoperabilidade. Essas camadas incluem dados geoespaciais cruciais para a gestão hídrica em Pernambuco e podem ser acessadas e consultadas no diretório `.../data/` tais como:

- Municípios e unidades de planejamento: Delimitações e informações administrativas que servem como base para o planejamento regional.
- Sistemas integrados de abastecimento: Detalhes sobre as redes que garantem o fornecimento de água.
- Infraestrutura hídrica: Localização e status de adutoras e barragens (em operação, construção, planejamento e recuperação), essenciais para o monitoramento da disponibilidade hídrica.
- Comunidades rurais beneficiadas: Identificação das áreas atendidas por projetos e infraestruturas.
- Hidrografia e divisões administrativas: Mapeamento de rios e outras divisões administrativas importantes para a compreensão do contexto geográfico.

---

## Tecnologias Utilizadas

O SIG SRHS foi construído com uma base tecnológica moderna e leve, garantindo flexibilidade e um alto nível de interatividade:

### Desenvolvimento Web

A interface do usuário é desenvolvida utilizando as linguagens padrão da web:

- HTML5: Estruturação semântica do conteúdo
- CSS3: Estilização responsiva e design adaptativo
- JavaScript: Lógica de aplicação e interatividade

### Geração e Visualização de Mapas

A criação e a exibição dos dados geográficos contam com ferramentas especializadas:

- QGIS: Um Sistema de Informação Geográfica (SIG) de código aberto e amplamente reconhecido, utilizado para a preparação e organização dos dados espaciais.
- Qgis2web: Essencial para transformar os projetos do QGIS em aplicações web interativas, facilitando a exportação dos dados e a configuração do ambiente de mapa online.
- Leaflet.js: O coração da visualização interativa no navegador. Esta biblioteca JavaScript leve e de alta performance é responsável por renderizar os mapas, gerenciar as camadas geográficas e possibilitar as funcionalidades de consulta e navegação que o usuário experimenta.

---
