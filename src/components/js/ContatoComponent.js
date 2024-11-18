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
      if (!this.form.cep) {
        this.errors.cep = "O CEP é obrigatório.";
      }

      return Object.keys(this.errors).length === 0;
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
        cep: "",
      };
    },
  },
};