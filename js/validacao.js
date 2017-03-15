 
	/*Função para Validar Formulário*/
	function validaDadosP() {
	var endereço = document.getElementById("endereço");
		if(endereço.value==""){
			alert("Endereço é obrigatório!");
			endereço.focus();
			return false;
		}
		
	var cep = document.getElementById("cep");
		if(cep.value ==""){
		alert("CEP é obrigatório!");
		cep.focus();
		return false;

		}

	var email = document.getElementById("email");
		if(email.value ==""){
		alert("E-mail é obrigatório!");
		email.focus();
		return false;

		}
	
	var Telefone = document.getElementById("telefone");
		if(telefone.value ==""){
		alert("Telefone é obrigatório!");
		Telefone.focus();
		return false;
		

		}
		return true;
		}

	
		function validaComprovanteM(){
		var aluno = document.getElementById("aluno");
		if(aluno.value==""){
			alert("Aluno é obrigatório!");
			aluno.focus();
			return false;
		}	
		
		var cpf = document.getElementById("cpf");
		if(cpf.value ==""){
		alert("CPF é obrigatório!");
		cpf.focus();
		return false;

		}
		var semestre = document.getElementById("semestre");
		if(semestre.value==""){
			alert("Semestre é obrigatório!");
			semestre.focus();
			return false;
		}
		
		var tipo = document.getElementsByName("tipo");
		if(tipo[0].checked ==false && tipo[1].checked==false){
		alert("Emissão é obrigatório!");
		tipo[0].focus();
		return false;
		}



		return true;
	}


		
		function validaNotasFaltas(){
			var aluno = document.getElementById("aluno");
			if(aluno.value==""){
			alert("Aluno é obrigatório!");
			aluno.focus();
			return false;
		}	
		var disciplina = document.getElementById("disciplina");
		if(disciplina.value==""){
			alert("Disciplina é obrigatório!");
			disciplina.focus();
			return false;
		}



		return true;
	}

	
		function validaProjetoP(){
		var nome = document.getElementById("professor");
		if(professor.value==""){
			alert("Professor é obrigatório!");
			professor.focus();
			return false;
		}	
		var titulo = document.getElementById("tituloprojeto");
		if(tituloprojeto.value==""){
			alert("Titulo do Projeto é obrigatório!");
			tituloprojeto.focus();
			return false;
		}
		
		var text = document.getElementById("text");
		if(text.value==""){
			alert("Descricão é obrigatório!!");
			text.focus();
			return false;
		}



		return true;
	}

	
		function validaRnotas(){
		var aluno = document.getElementById("aluno");
		if(aluno.value==""){
			alert("Aluno é obrigatório!");
			aluno.focus();
			return false;
		}	
		var disciplina = document.getElementById("disciplina");
		if(disciplina.value==""){
			alert("Disciplina é obrigatório!");
			disciplina.focus();
			return false;
		}
		var unidade = document.getElementsByName("unidade");
		if(unidade[0].checked ==false && unidade[1].checked==false){
		alert("Unidade é obrigatório!");
		unidade[0].focus();
		return false;
		}
		var notas = document.getElementById("notas");
		if(notas.value==""){
			alert("Notas é obrigatório!");
			notas.focus();
			return false;
		}
		
		var matricula = document.getElementById("matricula");
		if(matricula.value==""){
			alert("Matricula é obrigatório!");
			matricula.focus();
			return false;
		}



		return true;
	}
	
	
		function validaRfaltas(){
		var aluno = document.getElementById("aluno");
		if(aluno.value==""){
			alert("Aluno é obrigatório!");
			aluno.focus();
			return false;
		}	
		var disciplina = document.getElementById("disciplina");
		if(disciplina.value==""){
			alert("Disciplina é obrigatório!");
			disciplina.focus();
			return false;
		}
		var matricula = document.getElementById("matricula");
		if(matricula.value==""){
			alert("Matricula é obrigatório!");
			matricula.focus();
			return false;
		}
		
		var faltas = document.getElementById("faltas");
		if(faltas.value==""){
			alert("Número de faltas é obrigatório!");
			faltas.focus();
			return false;
		}



		return true;
	}



		function validaRmatriculas(){
		
		var aluno = document.getElementById("aluno");
		if(aluno.value==""){
			alert("Aluno é obrigatório!");
			aluno.focus();
			return false;
		}
		
		var cpf = document.getElementById("cpf");
		if(cpf.value ==""){
		alert("CPF é obrigatório!");
		cpf.focus();
		return false;

		}
		
		var curso = document.getElementById("curso");
		if(curso.value==""){
			alert("Curso é obrigatório!");
			curso.focus();
			return false;
	
	}
		var turno = document.getElementsByName("turno");
		if(turno[0].checked==false && turno[1].checked==false){
			alert("Turno é obrigatório!!");
			turno[0].focus();
			return false;
	
	}
	
	var semestre = document.getElementById("semestre");
		if(semestre.value==""){
			alert("Semestre é obrigatório!");
			semestre.focus();
			return false;
	
	}
	
	var disciplina = document.getElementById("disciplina");
		if(disciplina.value==""){
			alert("Disciplina é obrigatório!!");
			disciplina.focus();
			return false;
	
	}
	
	
			return true;
	
	}	
		
		
		
	  function validaEmitirH(){
		
		var aluno = document.getElementById("aluno");
		if(aluno.value==""){
			alert("Aluno é obrigatório!");
			aluno.focus();
			return false;
		}	
		var matricula = document.getElementById("matricula");
		if(matricula.value ==""){
		alert("Matricula é obrigatório!");
		matricula.focus();
		return false;

		}
			return true;
	
	}
		
		 
	
	function validaCadastroP() {
	var nome = document.getElementById("nome");
		if(nome.value==""){
			alert("Nome é obrigatório!");
			nome.focus();
			return false;
		}

	var cpf = document.getElementById("cpf");
		if(cpf.value ==""){
		alert("CPF é obrigatório!");
		cpf.focus();
		return false;

		}

	var matricula = document.getElementById("matricula");
		if(matricula.value ==""){
		alert("Matricula é obrigatório!");
		matricula.focus();
		return false;

		}
		
		var data = document.getElementById("data");
		if(data.value ==""){
		alert("Data de Nasciment é obrigatório!");
		data.focus();
		return false;

		}

	var sexo = document.getElementById("sexo");
		if(sexo.value==""){
		alert("Sexo é obrigatório!");
		sexo.focus();
		return false;

		}
		
		var endereço = document.getElementById("endereço");
		if(endereço.value==""){
			alert("Endereço é obrigatório!");
			endereço.focus();
			return false;
		}
		
	var cep = document.getElementById("cep");
		if(cep.value ==""){
		alert("CEP é obrigatório!");
		cep.focus();
		return false;

		}

	var email = document.getElementById("email");
		if(email.value ==""){
		alert("E-mail é obrigatório!");
		email.focus();
		return false;

		}
	
	var Telefone = document.getElementById("telefone");
		if(telefone.value ==""){
		alert("Telefone é obrigatório!");
		Telefone.focus();
		return false;
		}
		return true;
		}

	
		
