<?php

// CONEXAO // 
    include 'php/conexao.php';
//FIM CONEXAO //



//PEGO OS CAMPOS //
    $nome          = addslashes($_POST["nome"]);
    $ddd_celular   = addslashes($_POST["ddd_celular"]);
    $celular       = addslashes($_POST["celular"]);
    $email         = addslashes($_POST["email"]);
    $profissao     = addslashes($_POST["profissao"]);
    $ddd_telefone  = addslashes($_POST["ddd_telefone"]);
    $telefone      = addslashes($_POST["telefone"]);
    $cidade        = addslashes($_POST["cidade"]);
    $estado        = addslashes($_POST["estado"]);
    $ddd_cep       = addslashes($_POST["ddd_cep"]);  
    $interrogacao  = addslashes($_POST["interrogacao"]);
    $necessidade   = addslashes($_POST["necessidade"]);
    $mensagem      = addslashes($_POST["mensagem"]);
//PEGO OS CAMPOS //



//INSERIR//
    $busca  = $pdo->prepare("INSERT INTO leads(nome,ddd_celular,celular,email,profissao,ddd_telefone,telefone,cidade,estado,ddd_cep,interrogacao,necessidade,mensagem)VALUES(:nome, :ddd_celular, :celular, :email, :profissao, :ddd_telefone, :telefone, :cidade, :estado, :ddd_cep, :interrogacao, :necessidade, :mensagem)");
    $busca->bindValeu(":nome",$nome);
    $busca->bindValeu(":ddd_celular", $ddd_celular);
    $busca->bindValeu(":celular", $celular);
    $busca->bindValeu(":email", $email);
    $busca->bindValeu(":profissao", $profissao);
    $busca->bindValeu(":ddd_telefone", $ddd_telefone);
    $busca->bindValeu(":telefone", $telefone);
    $busca->bindValeu(":cidade", $cidade);
    $busca->bindValeu(":estado", $estado);
    $busca->bindValeu(":ddd_cep", $ddd_cep);
    $busca->bindValeu(":interrogacao", $interrogacao);
    $busca->bindValeu(":necessidade", $necessidade);
    $busca->bindValeu(":mensagem", $mensagem);
    $busca->execute();
//INSERIR//



//SESSAO//
session_start();
  $_SESSION['nome ']         = $nome;
  $_SESSION['ddd_celular']   = $ddd_celular;
  $_SESSION['celular']       = $celular;
  $_SESSION['email']         = $email;
  $_SESSION['profissao']     = $profissao;
  $_SESSION['ddd_telefone']  = $ddd_telefone;
  $_SESSION['telefone']      = $telefone;
  $_SESSION['cidade']        = $cidade;
  $_SESSION['estado']        = $estado;
  $_SESSION['ddd_cep']       = $ddd_cep;
  $_SESSION['interrogacao']  = $interrogacao;
  $_SESSION['necessidade']   = $necessidade;
  $_SESSION['mensagem']      = $mensagem;
//SESSAO//



// CONTAR REGISTROS//
    echo "Leads cadastrados.:".$busca->rowCount();
// CONTAR REGISTROS//

?>