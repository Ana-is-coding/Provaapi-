use tb_anime;

insert into tb_anime(nm_anime)
values('Naruto');

select * from tb_anime
where id_anime = 1
and nm_anime = 'Naruto'
