import axios from 'axios';

// ?acao=redacao_temas&inicio=1
// ?acao=redacao_tema_envios&tema=11830&inicio=1

const api = axios.create({
    baseURL: 'https://app.estuda.com/apps/api/',
});

export default api;