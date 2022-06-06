import { con } from "./connection.js"

export async function listarAnimes(nome){
    const comando = 
    `INSERT INTO tb_anime
     WHERE id_anime = ?
     AND nm_anime = ?`

    const [animes] = await con.query(comando, [nome])
    return animes[0];
}

export async function animes(anime)
{
    const comando = 
    `INSERT INTO tb_anime
     WHERE id_anime = 1
     AND nm_anime = Naruto`

    const animer = await con.query(comando, [anime])
    return animer;

}


