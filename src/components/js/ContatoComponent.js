export default {
  data() {
    return {
      form: {
        nome: "",
        phone: "",
        email: "",
        logradouro: "",
        numero: "",
        bairro: "",
        cidade: "",
        estado: "",
        cep: "",
      },
      errors: {},
    };
  },
  methods: {
    validateForm() {
      this.errors = {};
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const regexPhone = /^[0-9]{10,11}$/;

      if (!this.form.nome) {
        this.errors.nome = "O nome é obrigatório.";
      }
      if (!this.form.phone || !regexPhone.test(this.form.phone)) {
        this.errors.phone = "Digite um telefone válido.";
      }
      if (!this.form.email || !regexEmail.test(this.form.email)) {
        this.errors.email = "Digite um e-mail válido.";
      }
      if (!this.form.logradouro) {
        this.errors.logradouro = "O logradouro é obrigatório.";
      }
      if (!this.form.numero) {
        this.errors.numero = "O número é obrigatório.";
      }
      if (!this.form.bairro) {
        this.errors.bairro = "O bairro é obrigatório.";
      }
      if (!this.form.cidade) {
        this.errors.cidade = "A cidade é obrigatória.";
      }
      if (!this.form.estado) {
        this.errors.estado = "O estado é obrigatório.";
      }
      if (!this.form.cep) {
        this.errors.cep = "O CEP é obrigatório.";
      }

      return Object.keys(this.errors).length === 0;
    },
    async fetchAddress() {
      if (!this.form.cep) {
        this.errors.cep = "O CEP é obrigatório.";
        return;
      }

      const cep = this.form.cep.replace(/\D/g, ""); // Remove caracteres não numéricos

      if (cep.length !== 8) {
        this.errors.cep = "Digite um CEP válido com 8 dígitos.";
        return;
      }

      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if (data.erro) {
          this.errors.cep = "CEP não encontrado.";
          return;
        }

        // Preenche os campos do endereço com os dados da API
        this.form.logradouro = data.logradouro || "";
        this.form.bairro = data.bairro || "";
        this.form.cidade = data.localidade || "";
        this.form.estado = data.uf || "";
        this.errors.cep = ""; // Limpa erro do CEP se houver
      } catch (error) {
        this.errors.cep = "Erro ao buscar o CEP. Tente novamente.";
      }
    },
    handleSubmit() {
      if (this.validateForm()) {
        localStorage.setItem("userForm", JSON.stringify(this.form));
        alert("Formulário enviado com sucesso!");
        this.resetForm();
      }
    },
    resetForm() {
      this.form = {
        nome: "",
        phone: "",
        email: "",
        logradouro: "",
        numero: "",
        bairro: "",
        cidade: "",
        estado: "",
        cep: "",
      };
    },
  },
};


