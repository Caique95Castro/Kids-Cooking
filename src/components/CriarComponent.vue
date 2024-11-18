<template>
  <div class="container-geral-criar">
    <section class="box-content-geral-criar">
      <div
        class="box-textos-criar"
        style="display: flex; justify-content: flex-start; text-align: left"
      >
        <p>
          Cozinhar é uma ótima atividade para desenvolver diferentes habilidades
          nas crianças. A culinária infantil é super divertida e educativa. Com
          receitas simples, você estimula o desenvolvimento em matemática uma
          vez que elas precisam prestar atenção à medida de cada ingrediente,
          faz com que elas conheçam novos alimentos e temperos, além de ensinar
          a importância da organização.
        </p>
        <p>
          Com tudo isso, você ainda ganha um ajudante pra lá de especial! E aí,
          já pensou em se aventurar na cozinha com o seu pequeno? Então confira
          abaixo algumas receitas simples para crianças fazerem em casa.
        </p>
      </div>
      <div class="box-titulo-criar">
        <h1>Receitas para crianças.</h1>
        <h2>Opções simples e divertidas</h2>
      </div>
    </section>
    <section class="box-content-receitas">
      <div class="box-geral-receitas">
        <div class="box-ped-cod">
          <div class="content-itens">
            <div class="box-1">
              <div class="box-pedidos">
                <h1>
                  <strong>Muffins de banana com gotas de chocolate</strong>
                </h1>
              </div>
            </div>
          </div>
          <div class="botao-evento-1">
            <button @click="toggleDetalhesCriar">
              {{ detalhesVisiveisCriar ? "FECHAR" : "ABRIR" }}
            </button>
          </div>
          <div class="box-detalhes-1" v-if="detalhesVisiveisCriar">
            <div class="content-geral-detalhes">
              <div class="produtos">
                <div class="titulo-produtos">
                  <h2>Ingredientes</h2>
                  <p>- 2 colheres (sopa) de óleo vegetal</p>
                  <p>
                    - 200 g de bananas descascadas e picadas em pedaços grandes
                  </p>
                  <p>- 1 ovo inteiro mais 2 claras</p>
                  <p>- 250 ml de leite desnatado</p>
                  <p>- 400 g de farinha com fermento</p>
                  <p>- 150 g de açúcar ou de açúcar-mascavo</p>
                  <p>- ½ colher (chá) de bicarbonato de sódio</p>
                  <p>- 2 colheres (chá) de raspas de casca de laranja</p>
                  <p>
                    - 50 g de chocolate amargo, com 70% de cacau, bem picado
                  </p>
                </div>
                <div class="titulo-produtos">
                  <h2>Modo de preparo</h2>
                  <p>
                    1- Aqueça o forno a 190ºC. Pincele com 1 colher (sopa) de
                    óleo uma forma de muffins em que cada espaço meça 6 cm de
                    diâmetro.
                  </p>
                  <p>
                    2- Use o processador de alimentos ou o mixer para misturar
                    as bananas com 1 colher (sopa) de óleo, o ovo inteiro e as
                    claras e o leite, até obter a consistência de purê.
                  </p>
                  <p>
                    3- Peneire a farinha, o açúcar e o bicarbonato de sódio
                    sobre uma tigela grande e acrescente as raspas de laranja e
                    o chocolate. Junte a mistura de banana até ficar homogêneo –
                    não bata demais, se não os muffins ficarão pesados. Não há
                    problema se um pouco da farinha não for incorporada.
                  </p>
                  <p>
                    4- Distribua a mistura na fôrma já preparada, enchendo cada
                    buraco até cerca de dois terços de altura. Asse por 25
                    minutos, ou até que os muffins tenham crescido e estejam
                    levemente dourados.
                  </p>
                  <p>
                    5- Retire do forno e desenforme os muffins. Sirva-os quentes
                    ou à temperatura ambiente, de preferência no mesmo dia em
                    que forem feitos.
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
                <h1>
                  <strong>Geladinho, sacolé, chup chup ou juju</strong>
                </h1>
              </div>
            </div>
          </div>
          <div class="botao-evento-1">
            <button @click="toggleDetalhesCriar1">
              {{ detalhesVisiveisCriar1 ? "FECHAR" : "ABRIR" }}
            </button>
          </div>
          <div class="box-detalhes-1" v-if="detalhesVisiveisCriar1">
            <div class="content-geral-detalhes">
              <div class="produtos">
                <div class="titulo-produtos">
                  <h2>Geladinho de coco:</h2>
                  <p>- 1/2 lata de leite condensado</p>
                  <p>- 200 ml de leite de coco</p>
                  <p>
                    - 200 ml de leite da sua preferência (integral, desnatado,
                    de amêndoas, castanha etc.)
                  </p>
                </div>
                <div class="titulo-produtos">
                  <h2>Geladinho de chocolate</h2>
                  <p>- 1/2 lata de leite condensado</p>
                  <p>
                    - 250 ml de leite da sua preferência (integral, desnatado,
                    de amêndoas, castanha etc.)
                  </p>
                  <p>- 1/2 lata de creme de leite</p>
                  <p>- 3 colheres de sopa de achocolatado em pó</p>
                </div>
                <div class="titulo-produtos">
                  <h2>Geladinho de morango</h2>
                  <p>- 300 g de morango</p>
                  <p>- 1/2 lata de leite condensado</p>
                  <p>
                    - 200 ml de leite da sua preferência (integral, desnatado,
                    de amêndoas, castanha etc.)
                  </p>
                </div>
                <div class="titulo-produtos">
                  <h2>Modo de preparo</h2>
                  <p>
                    1- Junte todos os ingredientes no liquidificador e bata até
                    tudo se misturar.
                  </p>
                  <p>
                    2- Coloque em saquinhos para sacolés, deixando 3 dedos para
                    poder dar o nó.
                  </p>
                  <p>
                    3- Coloque no congelador por 12 horas e pronto! Já podem
                    atacar.
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
                <h1>
                  <strong> Minibolo de cenoura com calda de chocolate</strong>
                </h1>
              </div>
            </div>
          </div>
          <div class="botao-evento-1">
            <button @click="toggleDetalhesCriar2">
              {{ detalhesVisiveisCriar2 ? "FECHAR" : "ABRIR" }}
            </button>
          </div>
          <div class="box-detalhes-1" v-if="detalhesVisiveisCriar2">
            <div class="content-geral-detalhes">
              <div class="produtos">
                <div class="titulo-produtos">
                  <h2>Ingredientes</h2>
                  <p>- 3 cenouras picadas</p>
                  <p>- 3 ovos</p>
                  <p>- 1 xícara (chá) de óleo</p>
                  <p>- 1/3 de xícara (chá) de leite</p>
                  <p>- 2 xícaras (chá) de açúcar</p>
                  <p>- 3 xícaras (chá) de farinha de trigo</p>
                  <p>- 1 colher (sopa) de fermento em pó</p>
                  <p>- Óleo e farinha de trigo para untar</p>
                  <p>- 250g de chocolate meio amargo picado</p>
                  <p>- 1 caixa de creme de leite</p>
                  <p>- Chocolate granulado a gosto</p>
                </div>
                <div class="titulo-produtos">
                  <h2>Modo de preparo</h2>
                  <p>
                    1- No liquidificador, bata a cenoura, os ovos, o óleo, o
                    leite e o açúcar até ficar homogêneo.
                  </p>
                  <p>
                    2- Transfira para uma tigela, adicione a farinha e o
                    fermento. Misture com uma colher.
                  </p>
                  <p>
                    3- Despeje a massa em forminhas individuais com um buraco no
                    meio untadas e enfarinhadas e coloque uma ao lado da outra
                    em uma fôrma grande.
                  </p>
                  <p>
                    4- Leve ao forno médio, preaquecido, por 20 minutos ou até
                    dourar levemente.
                  </p>
                  <p>5- Retire, deixe amornar e desenforme.</p>
                  <p>
                    6- Derreta o chocolate meio amargo em banho-maria e misture
                    com o creme de leite. Espalhe a calda sobre os bolinhos,
                    decore com chocolate granulado à vontade e sirva.
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
                <h1>
                  <strong>Pizza de frigideira</strong>
                </h1>
              </div>
            </div>
          </div>
          <div class="botao-evento-1">
            <button @click="toggleDetalhesCriar3">
              {{ detalhesVisiveisCriar3 ? "FECHAR" : "ABRIR" }}
            </button>
          </div>
          <div class="box-detalhes-1" v-if="detalhesVisiveisCriar3">
            <div class="content-geral-detalhes">
              <div class="produtos">
                <div class="titulo-produtos">
                  <h2>Ingredientes para a massa</h2>
                  <p>- 2 e 1/2 xícaras de farinha de trigo</p>
                  <p>- 1 colher de manteiga</p>
                  <p>- 1 colher pequena de sal</p>
                  <p>- 1 copo de leite morno</p>
                </div>
                <div class="titulo-produtos">
                  <h2>Modo de preparo</h2>
                  <p>
                    1- Misture tudo em uma travessa com as mãos. Caso não
                    encontre o ponto certo, adicione mais farinha até desgrudar
                    a massa das mãos.
                  </p>
                  <p>
                    2- Separe 4 bolinhas de massa e abra-as separadamente na
                    frigideira.
                  </p>
                  <p>
                    3- Asse somente um lado até o ponto desejado. Vire a massa e
                    desligue o fogo.
                  </p>
                  <p>
                    4- Por fim recheie com molho de tomate. Cubra o molho com
                    mussarela, rodelas de tomate e orégano.
                  </p>
                  <p>
                    5- Asse agora o outro lado e tampe para que o queijo
                    derreta.
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
                <h1>
                  <strong>Pão de queijo simples</strong>
                </h1>
              </div>
            </div>
          </div>
          <div class="botao-evento-1">
            <button @click="toggleDetalhesCriar4">
              {{ detalhesVisiveisCriar4 ? "FECHAR" : "ABRIR" }}
            </button>
          </div>
          <div class="box-detalhes-1" v-if="detalhesVisiveisCriar4">
            <div class="content-geral-detalhes">
              <div class="produtos">
                <div class="titulo-produtos">
                  <h2>Ingredientes</h2>
                  <p>- 400g de polvilho doce</p>
                  <p>- 400g de queijo parmesão ralado</p>
                  <p>- 2 caixas de creme de leite (400g) (aproximadamente)</p>
                  <p>- Óleo para untar</p>
                </div>
                <div class="titulo-produtos">
                  <h2>Modo de preparo</h2>
                  <p>
                    1- Em uma vasilha, junte o polvilho doce, o parmesão e
                    misture. Adicione o creme de leite, aos poucos, misturando
                    com as mãos até formar uma massa homogênea e firme. É
                    necessário que o creme de leite seja adicionado aos poucos,
                    para não perder o ponto da massa.
                  </p>
                  <p>2- Retire porções pequenas da massa e modele bolinhas.</p>
                  <p>
                    3- Coloque uma ao lado da outra, em uma fôrma grande untada
                    e leve ao forno alto, preaquecido, por 15 minutos ou até
                    dourar. Retire e sirva em seguida.
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
                <h1>
                  <strong>Danoninho caseiro</strong>
                </h1>
              </div>
            </div>
          </div>
          <div class="botao-evento-1">
            <button @click="toggleDetalhesCriar5">
              {{ detalhesVisiveisCriar5 ? "FECHAR" : "ABRIR" }}
            </button>
          </div>
          <div class="box-detalhes-1" v-if="detalhesVisiveisCriar5">
            <div class="content-geral-detalhes">
              <div class="produtos">
                <div class="titulo-produtos">
                  <h2>Ingredientes</h2>
                  <p>- 10 morangos</p>
                  <p>- 1 pacote de gelatina incolor</p>
                  <p>- 1 colher (sopa) de biomassa de banana verde</p>
                  <p>- 1 pote de iogurte natura</p>
                  <p>- 1 colher (sopa) de mel</p>
                </div>
                <div class="titulo-produtos">
                  <h2>Modo de preparo</h2>
                  <p>
                    1- Higienize os morangos e bata-os no liquidificador com o
                    iogurte, a biomassa de banana verde e o mel. Reserve.
                  </p>
                  <p>
                    2- Hidrate a gelatina conforme instruções da embalagem e
                    bata no liquidificador junto com os demais ingredientes.
                  </p>
                  <p>
                    3- Distribua em pequenas fôrmas e leve para geladeira por,
                    no mínimo, 3 horas.
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
                <h1>
                  <strong>Brigadeiro sem fogão</strong>
                </h1>
              </div>
            </div>
          </div>
          <div class="botao-evento-1">
            <button @click="toggleDetalhesCriar6">
              {{ detalhesVisiveisCriar6 ? "FECHAR" : "ABRIR" }}
            </button>
          </div>
          <div class="box-detalhes-1" v-if="detalhesVisiveisCriar6">
            <div class="content-geral-detalhes">
              <div class="produtos">
                <div class="titulo-produtos">
                  <h2>Ingredientes</h2>
                  <p>- 2 colheres cheias de chocolate em pó</p>
                  <p>- 1/2 lata de leite condensado</p>
                  <p>- granulado preto/colorido (opcional)</p>
                </div>
                <div class="titulo-produtos">
                  <h2>Modo de preparo</h2>
                  <p>
                    1- Misture bem o leite condensado com o chocolate em pó e
                    coloque no copo.
                  </p>
                  <p>2- Coloque na geladeira por 30 minutos.</p>
                  <p>3- Retire do copo e enrole como uma bolinha.</p>
                  <p>4- Coloque o granulado.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="box-ped-cod">
          <div class="content-itens">
            <div class="box-1">
              <div class="box-pedidos">
                <h1>
                  <strong>Biscoito maravilha</strong>
                </h1>
              </div>
            </div>
          </div>
          <div class="botao-evento-1">
            <button @click="toggleDetalhesCriar7">
              {{ detalhesVisiveisCriar7 ? "FECHAR" : "ABRIR" }}
            </button>
          </div>
          <div class="box-detalhes-1" v-if="detalhesVisiveisCriar7">
            <div class="content-geral-detalhes">
              <div class="produtos">
                <div class="titulo-produtos">
                  <h2>Ingredientes</h2>
                  <p>- 1 copo de farinha</p>
                  <p>- 100 g de manteiga</p>
                  <p>- 2 ovos</p>
                  <p>- 50 g de açúcar</p>
                  <p>- Sal</p>
                  <p>- 1 copo de água</p>
                </div>
                <div class="titulo-produtos">
                  <h2>Modo de preparo</h2>
                  <p>
                    1- Misture os ingredientes até formar uma massa homogênea.
                  </p>
                  <p>
                    2- Depois, faça uma bola e guarde na geladeira por 1 hora.
                  </p>
                  <p>
                    3- Em seguida, tire a massa e amasse com um rolo até ficar
                    lisa e com 1cm de espessura. Lembre de colocar
                  </p>
                  <p>
                    4- farinha no lugar você vai amassar a massa para evitar que
                    ela grude.
                  </p>
                  <p>5- Faça a forma de biscoito que mais preferir.</p>
                  <p>
                    6- Depois, coloque em uma assadeira coberta com papel
                    manteiga.
                  </p>
                  <p>
                    7- Pincele cada biscoito com ovo e asse por 15 minutos
                    aproximadamente na temperatura de 200 graus.
                  </p>
                  <p>8- Quando esfriar retire do forno e saboreie.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style src="./css/CriarComponent.css"></style>
<script src="./js/CriarComponent.js"></script>
