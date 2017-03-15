CREATE TABLE aluno(
	nome varchar(40),
	endereco varchar(50),
	cep int (8),
	email varchar(15),
	cpf int(11),
	telefone int(11),
	matricula varchar(8)
);

CREATE TABLE professor(

	nome varchar(40),
	nascimento varchar(8),
	cpf int (11),
	matricula varchar (8),
	sexo varchar(2),
	endereco varchar(50),
	cep int (8),
	email varchar(15),
	telefone int(11)


);

CREATE TABLE curso(

	disciplina varchar(25),
	semestre varchar (6),
	turno(5),
	unidade varchar (8),
	projeto varchar(20),
	
	


);

