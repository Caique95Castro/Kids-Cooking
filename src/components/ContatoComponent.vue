<template>
  <section class="box-section-contato">
    <div class="box-content-contato">
      <h1>cadastre-se para receber novas receitas</h1>
      <div class="box-formulario-contato">
        <input type="text" name="nome" id="txtNome" placeholder="Nome" />
        <input type="text" name="phone" id="txtPhone" placeholder="Telefone" />
        <input type="email" name="email" id="txtEmail" placeholder="E-mail" />
        <input
          type="text"
          name="logradouro"
          id="txtRua"
          placeholder="Logradouro"
        />
        <input type="text" name="numero" id="txtNumero" placeholder="Numero" />
        <input type="text" name="bairro" id="txtBairro" placeholder="Bairro" />
        <input type="text" name="cep" id="txtCEP" placeholder="CEP" />
        <button class="btn-cont" type="submit">Enviar</button>
      </div>
    </div>
  </section>
</template>
<style src="./css/ContatoComponent.css"></style>
