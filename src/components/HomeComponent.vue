<template>
  <div class="container-geral-home">
    <section class="box-section-banner">
      <div class="box-text-section-1">
        <h1>Bem-vindos ao Mundo Mágico da Culinária Infantil!</h1>
        <p>
          Prepare-se para um universo cheio de sabores, cores e muita diversão!
          Aqui, cada receita é uma aventura mágica esperando por você.
        </p>
        <p>
          Descubra receitas gostosas e fáceis de fazer com toda a família, é
          hora de colocar a mão na massa e criar pratos incríveis! Prepare-se
          para sabores únicos com a ajuda de quem você ama.
        </p>
      </div>
      <div class="box-image-section-1">
        <img src="../assets/home/image-banner.png" alt="" />
      </div>
    </section>
    <section class="box-section-meio-1">
      <div class="box-content-meio-1">
        <h2>Receitas</h2>
        <div class="box-items-meio-1">
          <div class="box-receitas">
            <img src="../assets/home/Muffins.png" alt="" />
            <a href="/sobre"
              ><h3>Muffins de banana com gotas de chocolate</h3></a
            >
          </div>
          <div class="box-receitas-1">
            <img src="../assets/home/geladinho.png" alt="" />
            <a href="/sobre"><h3>Geladinho, sacolé, chup chup ou juju</h3></a>
          </div>
          <div class="box-receitas">
            <img src="../assets/home/bolo.png" alt="" />
            <a href="/sobre"
              ><h3>Minibolo de cenoura com calda de chocolate</h3></a
            >
          </div>
          <div class="box-receitas-1">
            <img src="../assets/home/pizza.png" alt="" />
            <a href="/sobre"><h3>Pizza de frigideira</h3></a>
          </div>
          <div class="box-receitas">
            <img src="../assets/home/pao-queijo.png" alt="" />
            <a href="/sobre"><h3>Pão de queijo simples</h3></a>
          </div>
          <div class="box-receitas-1">
            <img src="../assets/home/danone.png" alt="" />
            <a href="/sobre"><h3>Danoninho caseiro</h3></a>
          </div>
          <div class="box-receitas">
            <img src="../assets/home/brigadeiro.png" alt="" />
            <a href="/sobre"><h3>Brigadeiro sem fogão</h3></a>
          </div>
          <div class="box-receitas-1">
            <img src="../assets/home/biscoito.png" alt="" />
            <a href="/sobre"><h3>Biscoito maravilha</h3></a>
          </div>
        </div>
      </div>
    </section>
    <section class="box-section-meio-2">
      <img class="imagem-top" src="../assets/home/banner-1.png" alt="" />
      <div class="box-geral-content-analytics">
        <div class="box-text-section-2">
          <h1>Bem-vindo ao Kid's Cooking!</h1>
          <p>
            Criamos este espaço para incentivar pais e crianças a explorar o
            mundo delicioso e divertido da culinária juntos. Aqui, pequenos
            chefs aprendem receitas fáceis, desenvolvem habilidades culinárias e
            descobrem a magia de preparar pratos deliciosos com a família. Vamos
            cozinhar e se divertir?
          </p>
          <router-link to="/sobre">saiba mais</router-link>
        </div>
        <div class="box-image-section-2">
          <img src="../assets/home/kids-cooking.png" alt="" />
        </div>
      </div>
      <img class="imagem-top-1" src="../assets/home/banner-1-1.png" alt="" />
    </section>
    <section class="box-section-destaques">
      <div class="box-content-destaques">
        <h2>Destaques do nosso site</h2>
        <div class="box-destaques-site">
          <div class="box-destaques" style="border-radius: 20px 20px 0 0">
            <div class="box-image-des">
              <img
                class="imagem-des"
                src="../assets/home/brigadeiro-des.webp"
                alt=""
                style="border-radius: 20px 20px 20px 0"
              />
            </div>
            <div class="box-text-des">
              <h1>Brigadeiro sem fogão</h1>
              <p>
                Essa é uma boa receita para crianças fazerem sozinhas, afinal
                esse doce não precisa ser preparado no fogão, o preparo é
                somente na geladeira. E quem não ama um bom brigadeiro né?
              </p>
              <router-link to="/criar">Vamos Fazer ?</router-link>
            </div>
          </div>
          <div class="box-destaques">
            <div class="box-text-des">
              <h1>Biscoito maravilha</h1>
              <p>
                Se você está procurando uma receita de biscoito para fazer com
                os filhos, pode apostar nessa opção. Esse biscoito só leva 6
                ingredientes e é uma ideia simples para o seu dia de culinária
                com as crianças.
              </p>
              <router-link to="/criar">Vamos Fazer ?</router-link>
            </div>
            <div class="box-image-des">
              <img
                class="imagem-des"
                src="../assets/home/biscoito-des.jpg"
                alt=""
                style="border-radius: 20px 0 0 20px"
              />
            </div>
          </div>

          <div class="box-destaques" style="border-radius: 0 0 20px 20px">
            <div class="box-image-des">
              <img
                class="imagem-des"
                src="../assets/home/muffins-des.webp"
                alt=""
                style="border-radius: 0 20px 20px 20px"
              />
            </div>
            <div class="box-text-des">
              <h1>Muffins de banana com gotas de chocolate</h1>
              <p>
                Essa é uma receita simples para crianças, que agrada a todos por
                ter um sabor doce irresistível, além de ser uma opção mais
                saudável para toda a família. Vamos lá?
              </p>
              <router-link to="/criar">Vamos Fazer ?</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="box-section-caixas-1">
      <div class="box-content-caixas-section">
        <div class="box-content-caixa-1" style="background-color: #9ecbe1">
          <div class="conteudo-caixa">
            <div class="box-titulo-caixa-1">
              <h2>Danoninho caseiro</h2>
              <p>
                O danoninho caseiro é uma das nossas receitas saudáveis para
                crianças fazerem sozinhas, ela leva apenas 5 ingredientes super
                naturais, tem a consistência de uma mousse e a criançada adora
                tomar a qualquer hora do dia.
              </p>
              <router-link to="/criar">Criar</router-link>
            </div>
            <div class="box-image-caixa-1">
              <img
                class="image-danone"
                src="../assets/home/danone-caixa.png"
                alt="caixa-1"
              />
            </div>
          </div>
        </div>
        <div class="box-content-caixa-2" style="background-color: #f0a3bd">
          <div class="conteudo-caixa">
            <div class="box-titulo-caixa-2">
              <h2>Pizza de frigideira</h2>
              <p>
                pizza fininha para vocês saborearem a qualquer hora do dia não
                pode ficar de fora. Super rápida e simples de ser feita, ela
                precisa somente de alguns ingredientes que provavelmente você já
                tem em casa.
              </p>
              <router-link to="/criar">Criar</router-link>
            </div>
            <div class="box-image-caixa-2">
              <img
                class="image-danone"
                src="../assets/home/pizza-caixa.png"
                alt="caixa-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <ContatoComponent />
    </section>
  </div>
</template>
<style src="./css/HomeComponent.css" scoped></style>
<script src="./js/HomeComponent.js" />
