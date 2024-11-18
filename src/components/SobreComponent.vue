<template>
  <div class="container-geral-sobre">
    <section class="box-inicio-sobre">
      <div class="box-content-inicio-sobre">
        <div class="box-titulo-sobre">
          <h1>Seja bem vindo(a) a Kid's Cooking</h1>
          <p>
            Aqui, pequenos chefs aprendem receitas fáceis, desenvolvem
            habilidades culinárias e descobrem a magia de preparar pratos
            deliciosos com a família.
          </p>
          <!-- <router-link to="/contato">Entrar em Contato</router-link> -->
        </div>
        <div class="box-image-sobre">
          <img src="../assets/sobre/biscoito.png" alt="" />
        </div>
      </div>
    </section>
    <section class="box-meio-sobre">
      <div class="box-text-image-sobre">
        <h1>Sobre o Kid's Cooking</h1>
        <div class="box-geral-titulo-img">
          <div class="box-image-sobre">
            <img src="../assets/sobre/imag-kids.jpg" alt="" />
          </div>
          <div class="box-titulo-sobre">
            <h2>Nossa História</h2>
            <p>
              O Kid's Cooking nasceu do desejo de trazer as famílias para a
              cozinha e tornar o ato de cozinhar uma experiência alegre,
              educativa e compartilhada. A ideia surgiu quando percebemos o
              quanto a cozinha pode ser um espaço incrível para incentivar a
              criatividade das crianças, fortalecer laços familiares e ensinar
              sobre alimentação saudável de maneira leve e divertida. Queremos
              que o Kid's Cooking seja um portal onde pais e filhos, ou mesmo
              pequenos chefs independentes, possam explorar o mundo da culinária
              juntos, descobrindo sabores, texturas e o prazer de preparar as
              próprias receitas.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="box-fim-sobre">
      <div class="box-missao-valores">
        <div class="box-mesclado">
          <h3>Missão</h3>
          <p>
            Nossa missão é simples: ensinar e divertir! No Kid's Cooking,
            acreditamos que aprender a cozinhar desde cedo não só desenvolve
            habilidades para a vida, mas também ajuda a construir hábitos
            alimentares mais saudáveis. Queremos transformar a cozinha em um
            espaço de aprendizado e diversão, onde as crianças possam explorar
            sua criatividade e descobrir a magia de preparar pratos deliciosos
            com a família.
          </p>
        </div>
        <div class="box-mesclado">
          <h3>Valores</h3>
          <p>
            Criatividade: Incentivamos as crianças a usarem a imaginação para
            criar pratos únicos e se expressarem na cozinha. Trabalho em Equipe:
            Acreditamos que cozinhar juntos fortalece laços e promove a
            colaboração entre pais, filhos e amigos. Experimentação: Vemos a
            cozinha como um laboratório divertido onde erros são aprendizados e
            cada receita é uma nova descoberta. Acessibilidade: Buscamos
            oferecer receitas simples e ingredientes fáceis de encontrar,
            garantindo que todos possam participar dessa aventura culinária.
            Autonomia: Incentivamos as crianças a se sentirem confiantes e
            independentes ao aprenderem habilidades úteis e prazerosas.
          </p>
        </div>
        <div class="box-mesclado">
          <h3>Visão</h3>
          <p>
            Nossa visão para o futuro é crescer junto com a comunidade de
            pequenos chefs e suas famílias. Planejamos expandir o Kid's Cooking
            com: Vídeos tutoriais para facilitar o aprendizado; Colaborações com
            nutricionistas e chefs especializados em alimentação infantil;
            Desafios culinários interativos para estimular a criatividade; Uma
            plataforma ainda mais completa, com conteúdos que inspirem, eduquem
            e unam pessoas através da cozinha.
          </p>
        </div>
      </div>
    </section>

    <section class="box-sobre-final">
      <div class="box-ped-cod">
        <div class="content-itens">
          <div class="box-1">
            <div class="box-pedidos">
              <p><strong>Nossa Equipe</strong></p>
            </div>
          </div>
        </div>
        <div class="botao-evento-1">
          <button @click="toggleDetalhes">
            {{ detalhesVisiveis ? "FECHAR" : "ABRIR" }}
          </button>
        </div>
        <div class="box-detalhes-1" v-if="detalhesVisiveis">
          <div class="content-geral-detalhes">
            <div class="produtos">
              <div class="titulo-produtos">
                <p>
                  O Kid's Cooking é uma iniciativa criada por [Seu Nome] (ou uma
                  breve descrição da equipe, se aplicável), um entusiasta da
                  culinária e educador que acredita no poder que a cozinha tem
                  de inspirar e ensinar. A cada receita e conteúdo publicado,
                  buscamos oferecer uma abordagem divertida e educativa, com
                  todo o cuidado para que a experiência seja prática, segura e
                  prazerosa para crianças e adultos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="box-ped-cod">
        <div class="content-itens">
          <div class="box-1">
            <div class="box-pedidos">
              <p><strong>Visão para o Futuro</strong></p>
            </div>
          </div>
        </div>
        <div class="botao-evento-1">
          <button @click="toggleDetalhes1">
            {{ detalhesVisiveis1 ? "FECHAR" : "ABRIR" }}
          </button>
        </div>
        <div class="box-detalhes-1" v-if="detalhesVisiveis1">
          <div class="content-geral-detalhes">
            <div class="produtos">
              <div class="titulo-produtos">
                <p>
                  Estamos constantemente pensando em novas formas de tornar o
                  Kid's Cooking ainda mais inspirador. No futuro, planejamos
                  incluir vídeos tutoriais, colaborações com nutricionistas e
                  chefs especializados em alimentação infantil, e até mesmo
                  desafios culinários para estimular a curiosidade e a
                  imaginação dos nossos pequenos chefs. Nossa visão é crescer
                  junto com a comunidade, oferecendo conteúdos que encantem,
                  eduquem e incentivem as famílias a cozinhar e se divertir
                  ainda mais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="box-ped-cod">
        <div class="content-itens">
          <div class="box-1">
            <div class="box-pedidos">
              <p><strong>Junte-se a Nós!</strong></p>
            </div>
          </div>
        </div>
        <div class="botao-evento-1">
          <button @click="toggleDetalhes2">
            {{ detalhesVisiveis2 ? "FECHAR" : "ABRIR" }}
          </button>
        </div>
        <div class="box-detalhes-1" v-if="detalhesVisiveis2">
          <div class="content-geral-detalhes">
            <div class="produtos">
              <div class="titulo-produtos">
                <p>
                  Esperamos que o Kid's Cooking se torne o seu espaço preferido
                  para explorar receitas, aprender novas técnicas e,
                  principalmente, se divertir! Vamos cozinhar juntos e criar
                  memórias deliciosas que vão muito além dos pratos preparados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style src="./css/SobreComponent.css"></style>
<script src="./js/SobreComponent.js"></script>
