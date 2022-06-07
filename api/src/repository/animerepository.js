import { con } from './connection.js'

export async function listarAnimes(nome){
    const comando = 
    `insert into tb_anime(nm_anime)
     values(?);`

    const [animes] = await con.query(comando, [nome.nome])
    return animes.affectedRows;
}

export async function animes(anime)
{
    const comando = 
    `select  ID_ANIME,
    NM_ANIME	 nome
    from  TB_ANIME`
     
    const [animer] = await con.query(comando)
    return animer;
}


