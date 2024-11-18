export default {
    data() {
        return {
            detalhesVisiveis: false,
            detalhesVisiveis1: false,
            detalhesVisiveis2: false,
        };
    },
    methods: {
        toggleDetalhes() {
            this.detalhesVisiveis = !this.detalhesVisiveis;
        },
        toggleDetalhes1() {
            this.detalhesVisiveis1 = !this.detalhesVisiveis1;
        },
        toggleDetalhes2() {
            this.detalhesVisiveis2 = !this.detalhesVisiveis2;
        },
    },
};