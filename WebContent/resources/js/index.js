var inicio = new Vue({
	el:"#inicio",
    data: {
    	  id: '',
	      nome: '',
	      setor: '',
	      salario: '',
	      email: '',
	      idade: '',
    	mensagem:'',
    	emEdicao: false,
    	listando: false,
    	editando: false,
        listaFuncionarios: [],
       
    },
    created: function(){
        let vm =  this;
        this.buscaFuncionario();   
    },
    methods:{
    	buscaFuncionario(){
    		const vm = this;
    		axios.get("http://localhost:8080/funcionarios/webapp/funcionarios/listarFuncionarios").then(res=>{
    			vm.listaFuncionarios = res.data
    			console.log(vm.listaFuncionario)
    			vm.listando = !vm.listando
    		}).catch(err=>{
    			console.log(err)
    		})
    	},
    	deletar(id){    		
    		const vm = this;
    		axios.delete("http://localhost:8080/funcionarios/webapp/funcionarios/deletarFuncionarios/"+id).then(res=>{
    			console.log(res)
    			this.buscaFuncionario()
    		}).catch(err=>{
    			console.log(err)
    		})
    	},
    	salvarEdicao(){
    		const vm = this;
    		axios.put("http://localhost:8080/funcionarios/webapp/funcionarios/atualizarFuncionario/" + this.id,
    				{ nome: this.nome, setor: {id: '1', nome: 'TI'}, salario: this.salario, email: this.email, idade: this.idade })
    		  .then(function(response){
    			  console.log(response)
    			  vm.mensagem = "usuario atualizado"
    			  vm.buscaFuncionario();   
    			  vm.emEdicao = !vm.emEdicao
    			  
    		  })  
    	},
    	editar(id){
    		const vm = this;
    		this.emEdicao = !this.emEdicao
    	    		var funcionario = this.listaFuncionarios.find(item => {if (item.id == id) {
    			return item	
    		}})
    		
    		this.id = funcionario.id
    		this.nome = funcionario.nome
    		this.setor = funcionario.setor.nome
    		this.salario = funcionario.salario
    		this.email = funcionario.email
    		this.idade = funcionario.idade
    		this.editando = !this.editando
    		
    		
    	},
    	criar() {
    		const vm = this;
  	        axios.post("http://localhost:8080/funcionarios/webapp/funcionarios/adicionarFuncionario/", {	       
  	        nome: this.nome,
  	        setor: {id: 1, nome: this.setor},
  	        salario: this.salario,
  	        email: this.email,
  	        idade: this.idade,      
  	      	      }).then(response => {	
  	      	    	vm.mensagem = "usuario cadastrado"
  	      	    	this.buscaFuncionario()
  	      })	      
  	    },
  	    
  	  
    	
    	
    	
    	
        /*
         * buscaProdutos: function(){
			const vm = this;
			axios.get("http://localhost:8080/funcionarios/webapp/funcionarios/listarFuncionarios")
			.then(
					response => {
						console.log(response)
						vm.listaProdutos = response.data;
					})
				.catch(function (error) {
				vm.mostraAlertaErro("Erro interno", "Não foi listar natureza de serviços");
			}).finally(function() {
			});
		},*/
    }
});


