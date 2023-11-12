class People{
    constructor(saudacao)
    {
        this.saudacao = saudacao;
    }
    shoMensagem(){
        return `${this.saudacao}`
    }
}

export default People;