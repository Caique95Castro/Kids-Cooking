<template>
  <section class="box-section-contato">
    <div class="box-content-contato">
      <h1>Cadastre-se para receber novas receitas</h1>
      <div class="box-formulario-contato">
        <form @submit.prevent="handleSubmit">
          <input type="text" id="nome" v-model="form.nome" placeholder="Nome" />
          <span v-if="errors.nome" class="error">{{ errors.nome }}</span>

          <input
            type="text"
            id="phone"
            v-model="form.phone"
            placeholder="Telefone"
          />
          <span v-if="errors.phone" class="error">{{ errors.phone }}</span>

          <input
            type="email"
            id="email"
            v-model="form.email"
            placeholder="E-mail"
          />
          <span v-if="errors.email" class="error">{{ errors.email }}</span>

          <input
            type="text"
            id="cep"
            v-model="form.cep"
            placeholder="CEP"
            @blur="fetchAddress"
          />
          <span v-if="errors.cep" class="error">{{ errors.cep }}</span>

          <input
            type="text"
            id="logradouro"
            v-model="form.logradouro"
            placeholder="Logradouro"
          />
          <span v-if="errors.logradouro" class="error">{{
            errors.logradouro
          }}</span>

          <input
            type="text"
            id="numero"
            v-model="form.numero"
            placeholder="Número"
          />
          <span v-if="errors.numero" class="error">{{ errors.numero }}</span>

          <input
            type="text"
            id="bairro"
            v-model="form.bairro"
            placeholder="Bairro"
          />
          <span v-if="errors.bairro" class="error">{{ errors.bairro }}</span>
          <input
            type="text"
            id="cidade"
            v-model="form.cidade"
            placeholder="Cidade"
          />
          <span v-if="errors.cidade" class="error">{{ errors.cidade }}</span>
          <input
            type="text"
            id="estado"
            v-model="form.estado"
            placeholder="Estado"
          />
          <span v-if="errors.estado" class="error">{{ errors.estado }}</span>

          <button class="btn-cont" type="submit">Enviar</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script src="./js/ContatoComponent.js"></script>
<style src="./css/ContatoComponent.css"></style>
