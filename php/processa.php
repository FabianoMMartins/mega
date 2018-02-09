<?php

// CONEXAO // 
    include 'php/conexao.php';
//FIM CONEXAO //



//PEGO OS CAMPOS //
    $nome          = $_POST["nome"];
    $ddd_celular   = $_POST["ddd_celular"];
    $celular       = $_POST["celular"];
    $email         = $_POST["email"];
    $ddd_telefone  = $_POST["ddd_telefone"];
    $telefone      = $_POST["telefone"];
    $cidade        = $_POST["cidade"];
    $estado        = $_POST["estado"];
    $ddd_cep       = $_POST["ddd_cep"];  
    $interrogacao  = $_POST["interrogacao"];
    $necessidade   = $_POST["necessidade"];
    $mensagem      = $_POST["mensagem"];
//PEGO OS CAMPOS //



    
//INSERIR//
    $busca  = $pdo->prepare("INSERT INTO leads(nome)VALUES(:nome)");
    $busca->bindValeu(":nome",$nome);
    $busca->execute();
//INSERIR//




//SESSAO//
session_start();
  $_SESSION['nome ']         = $nome;
  $_SESSION['ddd_celular']   = $ddd_celular;
  $_SESSION['celular']       = $celular;
  $_SESSION['email']         = $email;
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