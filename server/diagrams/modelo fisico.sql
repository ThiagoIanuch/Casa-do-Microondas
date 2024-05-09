create DATABASE casamicroondas;
use casamicroondas;

create table Ordemservico(
id_ordem_servico INT NOT NULL primary key auto_increment,
id_tipo_atendimento_Ordemservico INT NOT NULL,
id_filial INT NOT NULL,
id_produto_reparo INT NOT NULL,
id_funcinario INT NOT NULL,
id_cliente INT NOT NULL,
id_plano_pagamento INT NOT NULL,
data_abertura DATE NOT NULL,
data_saida DATE NULL,
descricao_problema VARCHAR(1000) NOT NULL
);

create table TipoAtendimento(
id_tipo_atendimento INT NOT NULL primary key auto_increment,
tipo_atendimento VARCHAR(100) NOT NULL
);

create table AcessorioOrdemServico(
id_acessorio_ordem_servico INT NOT NULL primary key auto_increment,
id_ordem_servico INT NOT NULL,
id_acessorio INT NOT NULL
);

create table Acessorio(
	id_acessorio INT NOT NULL primary key auto_increment,
    descricao_acessorio VARCHAR(100) NOT NULL
);

create table ProdutoReparo(
id_produto_reparo INT NOT NULL primary key auto_increment,
id_modelo INT NOT NULL
);

create table Modelo(
id_modelo INT NOT NULL primary key auto_increment,
id_marca INT NOT NULL,
id_categaria INT NOT NULL,
id_tipo INT NOT NULL,
modelo VARCHAR(100) NOT NULL
);

create table Marca(
id_marca INT NOT NULL primary key auto_increment,
marca VARCHAR(100) NOT NULL
);

create table Categoria(
id_categoria INT NOT NULL primary key auto_increment,
categoria VARCHAR(100) NOT NULL
);

create table Tipo(
id_tipo INT NOT NULL primary key auto_increment,
tipo VARCHAR(100) NOT NULL
);

create table PlanoPagamento(
id_plano_pagamento INT NOT NULL primary key auto_increment,
id_forma_pagamento INT NOT NULL,
descricao VARCHAR(100) NOT NULL,
parcelas INT NOT NULL
);

create table FormaPagamento(
id_forma_pagamento INT NOT NULL primary key auto_increment,
descricao VARCHAR(100) NOT NULL
);

create table Pagamento(
id_pagamento INT NOT NULL primary key auto_increment,
id_forma_pagamento_Pagamento INT NOT NULL,
id_pedido INT NOT NULL,
valor FLOAT NOT NULL
);

create table Pedido(
id_pedido INT NOT NULL primary key auto_increment,
id_cliente INT NOT NULL,
valor FLOAT NOT NULL
);

create table ProdutoPedido(
id_produto_pedido INT NOT NULL primary key auto_increment,
id_produto_venda INT NOT NULL,
id_pedido_ProdutoPedido INT NOT NULL
);

create table ProdutoVenda(
id_produto_venda INT NOT NULL primary key auto_increment,
id_modelo_ProdutoVenda INT NOT NULL,
descricao VARCHAR(300) NOT NULL,
preco_custo FLOAT NOT NULL,
preco_venda FLOAT NOT NULL,
quantidade_estoque INT NOT NULL,
quantidade_minima INT NOT NULL
);

create table PecaSolicitada(
id_peca_solicitada INT NOT NULL primary key auto_increment,
id_ordem_servico_PecaSolicitada INT NOT NULL,
id_peca_fornecedor INT NOT NULL
);

create table PecaFornecedor(
id_peca_fornecedor INT NOT NULL primary key auto_increment,
id_peca INT NOT NULL,
id_fornecedor INT NOT NULL,
preco FLOAT NOT NULL
);

create table Peca(
id_peca INT NOT NULL primary key auto_increment,
descricao_peca VARCHAR(200) NOT NULL
);

create table Fornecedor(
id_fornecedor INT NOT NULL primary key auto_increment,
fornecedor VARCHAR(100) NOT NULL
);

create table Funcionario(
id_funcinario INT NOT NULL primary key auto_increment,
id_filial INT NOT NULL,
id_departamento INT NOT NULL,
id_funcao INT NOT NULL,
nome VARCHAR(100) NOT NULL,
data_admissao DATE NOT NULL,
data_demissao DATE NULL,
senha VARCHAR(30) NOT NULL
);

create table Funcao(
id_funcao INT NOT NULL primary key auto_increment,
funcao VARCHAR(100) NOT NULL
);

create table Departamento(
id_departamento INT NOT NULL primary key auto_increment,
departamento VARCHAR(100) NOT NULL
);

create table Cliente(
id_cliente INT NOT NULL primary key auto_increment,
nome_cliente VARCHAR(100) NOT NULL,
cpf CHAR(14) NOT NULL,
cnpj CHAR(18) NULL,
data_cadastro DATE NOT NULL,
data_atualizacao DATE NULL
);

create table Email(
id_email INT NOT NULL primary key auto_increment,
id_cliente_Email INT NOT NULL,
id_tipo_email_Email INT NOT NULL,
email VARCHAR(100) NOT NULL
);


create table TipoEmail(
id_tipo_email INT NOT NULL primary key auto_increment,
tipo_email VARCHAR(50) NOT NULL
);

create table Filial(
id_filial INT NOT NULL primary key,
id_estado INT NOT NULL,
nome VARCHAR(100) NOT NULL,
bairro VARCHAR(50) NOT NULL,
cidade VARCHAR(50) NOT NULL,
fone VARCHAR(20) NOT NULL,
celular VARCHAR(20) NOT NULL,
cnpj CHAR(18) NOT NULL
);

create table FilialCliente(
id_filial_cliente INT NOT NULL primary key auto_increment,
id_cliente_FilialCliente INT NOT NULL,
id_filial_FilialCliente INT NOT NULL
);

create table Endereco(
id_endereco INT NOT NULL primary key auto_increment,
id_cliente_Endereco INT NOT NULL,
id_tipo_endereco INT NOT NULL,
id_estado_Endereco INT NOT NULL,
bairro VARCHAR(50) NOT NULL,
cidade VARCHAR(50) NOT NULL,
cep CHAR(10) NOT NULL,
numero INT NOT NULL,
complemento VARCHAR(100) NULL,
observacao VARCHAR(100) NULL
);

create table Estado(
id_estado INT NOT NULL primary key auto_increment,
estado CHAR(2) NOT NULL
);

create table TipoEndereco(
id_tipo_endereco INT NOT NULL primary key auto_increment,
tipo_endereco VARCHAR(50) NOT NULL
);

create table Fone(
id_fone INT NOT NULL primary key auto_increment,
id_cliente_Fone INT NOT NULL,
id_tipo_fone INT NOT NULL,
numero VARCHAR(20) NOT NULL
);

create table TipoFone(
id_tipo_fone INT NOT NULL primary key auto_increment,
tipo_fone VARCHAR(50) NOT NULL
);

ALTER TABLE Ordemservico ADD CONSTRAINT id_tipo_atendimento_Ordemservico
	FOREIGN KEY (id_tipo_atendimento_Ordemservico) REFERENCES TipoAtendimento(id_tipo_atendimento);
    
ALTER TABLE Ordemservico ADD CONSTRAINT id_filial
	FOREIGN KEY (id_filial) REFERENCES Filial(id_filial);
    
ALTER TABLE Ordemservico ADD CONSTRAINT id_produto_reparo
	FOREIGN KEY (id_produto_reparo) REFERENCES ProdutoReparo(id_produto_reparo);
    
ALTER TABLE Ordemservico ADD CONSTRAINT id_funcinario
	FOREIGN KEY (id_funcinario) REFERENCES Funcionario(id_funcinario);
    
ALTER TABLE Ordemservico ADD CONSTRAINT id_cliente
	FOREIGN KEY (id_cliente) REFERENCES Cliente(id_cliente);
    
ALTER TABLE Ordemservico ADD CONSTRAINT id_plano_pagamento
	FOREIGN KEY (id_plano_pagamento) REFERENCES PlanoPagamento(id_plano_pagamento);
    
ALTER TABLE ProdutoReparo ADD CONSTRAINT id_modelo
	FOREIGN KEY (id_modelo) REFERENCES Modelo(id_modelo);
    
ALTER TABLE Modelo ADD CONSTRAINT id_marca
	FOREIGN KEY (id_marca) REFERENCES Marca(id_marca);

ALTER TABLE Modelo ADD CONSTRAINT id_categaria
	FOREIGN KEY (id_categaria) REFERENCES Categoria(id_categaria);
    
ALTER TABLE Modelo ADD CONSTRAINT id_tipo
	FOREIGN KEY (id_tipo) REFERENCES Tipo(id_tipo);
    
ALTER TABLE AcessorioOrdemServico ADD CONSTRAINT id_ordem_servico
	FOREIGN KEY (id_ordem_servico) REFERENCES Ordemservico(id_ordem_servico);
    
ALTER TABLE AcessorioOrdemServico ADD CONSTRAINT id_acessorio
	FOREIGN KEY (id_acessorio) REFERENCES Acessorio(id_acessorio);
    
ALTER TABLE PecaSolicitada ADD CONSTRAINT id_ordem_servico
	FOREIGN KEY (id_ordem_servico) REFERENCES Ordemservico(id_ordem_servico);
    
ALTER TABLE PecaSolicitada ADD CONSTRAINT id_ordem_servico_PecaSolicitada
	FOREIGN KEY (id_ordem_servico_PecaSolicitada) REFERENCES PecaFornecedor(id_peca_fornecedor);
    
ALTER TABLE PecaFornecedor ADD CONSTRAINT id_peca
	FOREIGN KEY (id_peca) REFERENCES Peca(id_peca);
    
ALTER TABLE PecaFornecedor ADD CONSTRAINT id_fornecedor
	FOREIGN KEY (id_fornecedor) REFERENCES Fornecedor(id_fornecedor);
    
ALTER TABLE PlanoPagamento ADD CONSTRAINT id_forma_pagamento
	FOREIGN KEY (id_forma_pagamento) REFERENCES FormaPagamento(id_forma_pagamento);
    
ALTER TABLE Pagamento ADD CONSTRAINT id_forma_pagamento_Pagamento
	FOREIGN KEY (id_forma_pagamento_Pagamento) REFERENCES FormaPagamento(id_forma_pagamento);
    
ALTER TABLE Pagamento ADD CONSTRAINT id_pedido
	FOREIGN KEY (id_pedido) REFERENCES Pedido(id_pedido);
    
ALTER TABLE Pedido ADD CONSTRAINT id_cliente
	FOREIGN KEY (id_cliente) REFERENCES Cliente(id_cliente);
    
ALTER TABLE ProdutoPedido ADD CONSTRAINT id_produto_venda
	FOREIGN KEY (id_produto_venda) REFERENCES ProdutoVenda(id_produto_venda);
    
ALTER TABLE ProdutoPedido ADD CONSTRAINT id_pedido_ProdutoPedido
	FOREIGN KEY (id_pedido_ProdutoPedido) REFERENCES Pedido(id_pedido);
    
ALTER TABLE ProdutoVenda ADD CONSTRAINT id_modelo_ProdutoVenda
	FOREIGN KEY (id_modelo_ProdutoVenda) REFERENCES Modelo(id_modelo);
    
ALTER TABLE Funcionario ADD CONSTRAINT id_filial_funcionario
	FOREIGN KEY (id_filial_funcionario) REFERENCES Filial(id_filial);
    
ALTER TABLE Funcionario ADD CONSTRAINT id_departamento_Funcionario
	FOREIGN KEY (id_departamento_Funcionario) REFERENCES Departamento(id_departamento);
    
ALTER TABLE Funcionario ADD CONSTRAINT id_funcao
	FOREIGN KEY (id_funcao) REFERENCES Funcao(id_funcao);
    
ALTER TABLE Filial ADD CONSTRAINT id_estado
	FOREIGN KEY (id_estado) REFERENCES Estado(id_estado);
    
ALTER TABLE FilialCliente ADD CONSTRAINT id_cliente_FilialCliente
	FOREIGN KEY (id_cliente_FilialCliente) REFERENCES Cliente(id_cliente);
    
ALTER TABLE FilialCliente ADD CONSTRAINT id_filial_FilialCliente
	FOREIGN KEY (id_filial_FilialCliente) REFERENCES Filial(id_filial);
    
ALTER TABLE Fone ADD CONSTRAINT id_cliente_Fone
	FOREIGN KEY (id_cliente_Fone) REFERENCES Cliente(id_cliente);
    
ALTER TABLE Fone ADD CONSTRAINT id_tipo_fone
	FOREIGN KEY (id_tipo_fone) REFERENCES TipoFone(id_tipo_fone);
    
ALTER TABLE Email ADD CONSTRAINT id_cliente_Email
	FOREIGN KEY (id_cliente_Email) REFERENCES Cliente(id_cliente);
    
ALTER TABLE Email ADD CONSTRAINT id_tipo_email_Email
	FOREIGN KEY (id_tipo_email_Email) REFERENCES TipoEmail(id_tipo_email);
    
ALTER TABLE Endereco ADD CONSTRAINT id_cliente_Endereco
	FOREIGN KEY (id_cliente_Endereco) REFERENCES Cliente(id_cliente);
    
ALTER TABLE Endereco ADD CONSTRAINT id_tipo_endereco
	FOREIGN KEY (id_tipo_endereco) REFERENCES TipoEndereco(id_tipo_endereco);
    
ALTER TABLE Endereco ADD CONSTRAINT id_estado_Endereco
	FOREIGN KEY (id_estado_Endereco) REFERENCES Estado(id_estado);
