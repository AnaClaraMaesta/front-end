class usuario {

    cadastrar({ nome = null, profissao = null }){
        try{
            if(!nome || !profissao){
                return{ erro: true, msg: "Informe os dados completos!"};
            }

            //add localStorage

            return{ erro: false, msg: "Usuário adicionado com sucesso!"};
        } catch (error) {
            return { erro: true, msg: error.menssage };
        }
    }
}