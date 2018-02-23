$(document).ready(function(){
	


// PROGRAMAÇÃO REFERENTE AOS COMPORTAMENTOS DO OBJETO DE HOVER DE IMAGENS E TEXTOS 

	$("#quemtemdireito").click(function(){
		
		$("#sobre").attr("src","imgs/oquefazemos.jpg").css("height","750px");
		$("#titulo").html("QUEM TEM </span> <br> <strong> DIREITO </strong>");
		$("#paragrafo").html("VEJA QUEM PODE TER DIREITO ÁS ISENÇÕES <br>E DESCUBRA SE VOCÊ É UM DELES");
		$("#quemtemdireito").toggleClass( "ativado" );
		$("#isencoes_tributarias").removeClass( "ativado_isencao_tributaria" );
		$("#habilitacao_especial").removeClass( "ativado_habilitacao_especial" );
		$("#defesa_pontuacao").removeClass( "ativado_defesa_pontuacao" );	
		$("#laudo_medico").removeClass( "ativado_laudo_medico" );
		$("#venda_usado").removeClass( "ativado_venda_usado" );
		$("#cartao_defis").removeClass( "ativado_cartao_defis" );
		$("#avaliacao_gratuita").removeClass( "ativado_avaliacao_gratuita" );
		$("#adaptacao_veiculos").removeClass( "ativado_adaptacao_veiculos" );
		$("#empresa").removeClass( "ativado_empresa" );
		$("#concessionarias").removeClass( "ativado_concessionarias" );
	});
	
	
	
	
	$("#isencoes_tributarias").click(function(){
		
		$("#sobre").attr("src","imgs/oq-fazemos-bg_isencoes-tributarias.jpg").css("height","750px");
		$("#titulo").html("ISENÇÕES <br> <strong>TRIBUTÁRIAS</strong>");
		$("#paragrafo").html("ISENÇÕES DE IPI, ICMS, IPVA E RODÍZIO");
		$("#isencoes_tributarias").toggleClass( "ativado_isencao_tributaria" );
		$("#quemtemdireito").removeClass( "ativado" );
		$("#nao_condutores").removeClass( "ativado_nao_condutores" );
		$("#habilitacao_especial").removeClass( "ativado_habilitacao_especial" );
		$("#defesa_pontuacao").removeClass( "ativado_defesa_pontuacao" );
		$("#laudo_medico").removeClass( "ativado_laudo_medico" );
		$("#venda_usado").removeClass( "ativado_venda_usado" );
		$("#cartao_defis").removeClass( "ativado_cartao_defis" );
		$("#avaliacao_gratuita").removeClass( "ativado_avaliacao_gratuita" );
		$("#adaptacao_veiculos").removeClass( "ativado_adaptacao_veiculos" );
		$("#empresa").removeClass( "ativado_empresa" );
		$("#concessionarias").removeClass( "ativado_concessionarias" );
 
		
	});
	
	
	
	
	$("#nao_condutores").click(function(){
		
		$("#sobre").attr("src","imgs/oq-fazemos-bg_nao-condutores.jpg").css("height","750px");
		$("#titulo").html("NÃO <br> <strong>CONDUTORES</strong>");
		$("#paragrafo").html("VOCÊ TAMBÉM TEM DIREITO AS ISENÇÕES");
		$("#nao_condutores").toggleClass( "ativado_nao_condutores" );
		$("#quemtemdireito").removeClass( "ativado" );
		$("#isencoes_tributarias").removeClass( "ativado_isencao_tributaria" );
		$("#habilitacao_especial").removeClass( "ativado_habilitacao_especial" );
		$("#defesa_pontuacao").removeClass( "ativado_defesa_pontuacao" );
		$("#laudo_medico").removeClass( "ativado_laudo_medico" );
		$("#venda_usado").removeClass( "ativado_venda_usado" );
		$("#cartao_defis").removeClass( "ativado_cartao_defis" );
		$("#avaliacao_gratuita").removeClass( "ativado_avaliacao_gratuita" );
		$("#adaptacao_veiculos").removeClass( "ativado_adaptacao_veiculos" );
		$("#empresa").removeClass( "ativado_empresa" );
		$("#concessionarias").removeClass( "ativado_concessionarias" );
	});
	
	
	
	
	$("#habilitacao_especial").click(function(){
		
		$("#sobre").attr("src","imgs/oq-fazemos-bg_habilitacao-especial.jpg").css("height","750px");
		$("#titulo").html("HABILITAÇÃO <br> <strong> ESPECIAL </strong>");
		$("#paragrafo").html("TIRE SUA HABILITAÇÃO ESPECIAL COM A MEGA");
		$("#habilitacao_especial").toggleClass( "ativado_habilitacao_especial" );
		$("#quemtemdireito").removeClass( "ativado" );
		$("#isencoes_tributarias").removeClass( "ativado_isencao_tributaria" );
		$("#nao_condutores").removeClass( "ativado_nao_condutores" );
		$("#defesa_pontuacao").removeClass( "ativado_defesa_pontuacao" );
		$("#laudo_medico").removeClass( "ativado_laudo_medico" );
		$("#venda_usado").removeClass( "ativado_venda_usado" );
		$("#cartao_defis").removeClass( "ativado_cartao_defis" );
		$("#avaliacao_gratuita").removeClass( "ativado_avaliacao_gratuita" );
		$("#adaptacao_veiculos").removeClass( "ativado_adaptacao_veiculos" );
		$("#empresa").removeClass( "ativado_empresa" );
		$("#concessionarias").removeClass( "ativado_concessionarias" );
	});
	
	
	
	$("#defesa_pontuacao").click(function(){
		
		$("#sobre").attr("src","imgs/oq-fazemos-bg_defesa-pontuacao.jpg").css("height","750px");
		$("#titulo").html("DEFESA DE <br> <strong> PONTUAÇÃO </strong>");
		$("#paragrafo").html("FOI NOTIFICADO PELO DETRAN? <br> SAIBA COMO SE DEFENDER.");
		$("#defesa_pontuacao").toggleClass( "ativado_defesa_pontuacao" );
		$("#quemtemdireito").removeClass( "ativado" );
		$("#isencoes_tributarias").removeClass( "ativado_isencao_tributaria" );
		$("#nao_condutores").removeClass( "ativado_nao_condutores" );
		$("#habilitacao_especial").removeClass( "ativado_habilitacao_especial" );
		$("#laudo_medico").removeClass( "ativado_laudo_medico" );
		$("#venda_usado").removeClass( "ativado_venda_usado" );
		$("#cartao_defis").removeClass( "ativado_cartao_defis" );
		$("#avaliacao_gratuita").removeClass( "ativado_avaliacao_gratuita" );
		$("#adaptacao_veiculos").removeClass( "ativado_adaptacao_veiculos" );
		$("#empresa").removeClass( "ativado_empresa" );
		$("#concessionarias").removeClass( "ativado_concessionarias" );
	});
	
	
	
	$("#laudo_medico").click(function(){
		
		$("#sobre").attr("src","imgs/oq-fazemos-bg_laudo-medico.jpg").css("height","750px");
		$("#titulo").html("LAUDO<br> <strong> MÉDICO </strong>");
		$("#paragrafo").html("EMISSÃO DO LAUDO MÉDICO PARA COMPRA <br> DO VEICULO COM OS BENEFÍCIOS FISCAIS");
		$("#laudo_medico").toggleClass( "ativado_laudo_medico" );
		$("#quemtemdireito").removeClass( "ativado" );
		$("#isencoes_tributarias").removeClass( "ativado_isencao_tributaria" );
		$("#nao_condutores").removeClass( "ativado_nao_condutores" );
		$("#habilitacao_especial").removeClass( "ativado_habilitacao_especial" );
		$("#defesa_pontuacao").removeClass( "ativado_defesa_pontuacao" );
		$("#venda_usado").removeClass( "ativado_venda_usado" );
		$("#cartao_defis").removeClass( "ativado_cartao_defis" );
		$("#avaliacao_gratuita").removeClass( "ativado_avaliacao_gratuita" );
		$("#adaptacao_veiculos").removeClass( "ativado_adaptacao_veiculos" );
		$("#empresa").removeClass( "ativado_empresa" );
		$("#concessionarias").removeClass( "ativado_concessionarias" );
	});
	
	


     $("#venda_usado").click(function(){
		
		$("#sobre").attr("src","imgs/oq-fazemos-bg_venda-seu-usado.jpg").css("height","750px");
		$("#titulo").html("VENDA SEU <br> <strong> USADO </strong>");
		$("#paragrafo").html("TODA ASSESSORIA NECESSÁRIAS PARA <br> VOCÊ VENDER SEU USADO");
		$("#venda_usado").toggleClass( "ativado_venda_usado" );
		$("#laudo_medico").removeClass( "ativado_laudo_medico" );
		$("#quemtemdireito").removeClass( "ativado" );
		$("#isencoes_tributarias").removeClass( "ativado_isencao_tributaria" );
		$("#nao_condutores").removeClass( "ativado_nao_condutores" );
		$("#habilitacao_especial").removeClass( "ativado_habilitacao_especial" );
		$("#defesa_pontuacao").removeClass( "ativado_defesa_pontuacao" );
		$("#cartao_defis").removeClass( "ativado_cartao_defis" );
		$("#avaliacao_gratuita").removeClass( "ativado_avaliacao_gratuita" );
		$("#adaptacao_veiculos").removeClass( "ativado_adaptacao_veiculos" );
		$("#empresa").removeClass( "ativado_empresa" );
		$("#concessionarias").removeClass( "ativado_concessionarias" );
	});
	
	
	
	
	 $("#cartao_defis").click(function(){
		
		$("#sobre").attr("src","imgs/oq-fazemos-bg_cartao-defis.jpg").css("height","750px");
		$("#titulo").html("CARTÃO <br> <strong> DEFIS </strong>");
		$("#paragrafo").html("NÓS AJUDAMOS VOCÊ A TIRAR O SEU.");
		$("#cartao_defis").toggleClass( "ativado_cartao_defis" );
		$("#laudo_medico").removeClass( "ativado_laudo_medico" );
		$("#quemtemdireito").removeClass( "ativado" );
		$("#isencoes_tributarias").removeClass( "ativado_isencao_tributaria" );
		$("#nao_condutores").removeClass( "ativado_nao_condutores" );
		$("#habilitacao_especial").removeClass( "ativado_habilitacao_especial" );
		$("#defesa_pontuacao").removeClass( "ativado_defesa_pontuacao" );
		$("#venda_usado").removeClass( "ativado_venda_usado" );
		$("#avaliacao_gratuita").removeClass( "ativado_avaliacao_gratuita" );
	    $("#adaptacao_veiculos").removeClass( "ativado_adaptacao_veiculos" );
		$("#empresa").removeClass( "ativado_empresa" );
		$("#concessionarias").removeClass( "ativado_concessionarias" );
	});
	
	
	
	
	
	$("#avaliacao_gratuita").click(function(){
		
		$("#sobre").attr("src","imgs/oq-fazemos-bg_avaliacao-gratuita.jpg").css("height","750px");$("#cartao_defis").toggleClass( "ativado_cartao_defis" );
		$("#titulo").html("AVALIAÇÃO <br> <strong> GRATUITA </strong>");
		$("#paragrafo").html("FAÇA UMA AVALIAÇÃO GRATUITA COM <br> UM DE NOSSOS MÉDICOS.");
		$("#avaliacao_gratuita").toggleClass( "ativado_avaliacao_gratuita" );
		$("#laudo_medico").removeClass( "ativado_laudo_medico" );
		$("#quemtemdireito").removeClass( "ativado" );
		$("#isencoes_tributarias").removeClass( "ativado_isencao_tributaria" );
		$("#nao_condutores").removeClass( "ativado_nao_condutores" );
		$("#habilitacao_especial").removeClass( "ativado_habilitacao_especial" );
		$("#defesa_pontuacao").removeClass( "ativado_defesa_pontuacao" );
		$("#venda_usado").removeClass( "ativado_venda_usado" );
		$("#cartao_defis").removeClass( "ativado_cartao_defis" );
		$("#adaptacao_veiculos").removeClass( "ativado_adaptacao_veiculos" );
		$("#empresa").removeClass( "ativado_empresa" );
		$("#concessionarias").removeClass( "ativado_concessionarias" );
		
	});
	
	
	
	
	
	$("#adaptacao_veiculos").click(function(){
		
		$("#sobre").attr("src","imgs/oq-fazemos-bg_adaptacao-veiculo.jpg").css("height","750px");
		$("#titulo").html("ADAPTAÇÃO <br> <strong> DE VEÍCULOS </strong>");
		$("#paragrafo").html("VEJA QUEM PODE TER DIREITO ÁS ISENÇÕES <br> E DESCUBRA SE VOCÊ É UM DELES.");
		$("#adaptacao_veiculos").toggleClass( "ativado_adaptacao_veiculos" );
		$("#laudo_medico").removeClass( "ativado_laudo_medico" );
		$("#quemtemdireito").removeClass( "ativado" );
		$("#isencoes_tributarias").removeClass( "ativado_isencao_tributaria" );
		$("#nao_condutores").removeClass( "ativado_nao_condutores" );
		$("#habilitacao_especial").removeClass( "ativado_habilitacao_especial" );
		$("#defesa_pontuacao").removeClass( "ativado_defesa_pontuacao" );
		$("#venda_usado").removeClass( "ativado_venda_usado" );
		$("#cartao_defis").removeClass( "ativado_cartao_defis" );
		$("#avaliacao_gratuita").removeClass( "ativado_avaliacao_gratuita" );
		$("#empresa").removeClass( "ativado_empresa" );
		$("#concessionarias").removeClass( "ativado_concessionarias" );
		
	});
	
	
	
	
	$("#empresa").click(function(){
		
		$("#sobre").attr("src","imgs/oq-fazemos-bg_empresas-conveniadas.jpg").css("height","750px");
		$("#titulo").html("EMPRESAS <br> <strong> CONVENIADAS </strong>");
		$("#paragrafo").html("SEJA UM CONVENIADO DA MEGA .");
		$("#empresa").toggleClass( "ativado_empresa" );
		$("#laudo_medico").removeClass( "ativado_laudo_medico" );
		$("#quemtemdireito").removeClass( "ativado" );
		$("#isencoes_tributarias").removeClass( "ativado_isencao_tributaria" );
		$("#nao_condutores").removeClass( "ativado_nao_condutores" );
		$("#habilitacao_especial").removeClass( "ativado_habilitacao_especial" );
		$("#defesa_pontuacao").removeClass( "ativado_defesa_pontuacao" );
		$("#venda_usado").removeClass( "ativado_venda_usado" );
		$("#cartao_defis").removeClass( "ativado_cartao_defis" );
		$("#avaliacao_gratuita").removeClass( "ativado_avaliacao_gratuita" );
		$("#adaptacao_veiculos").removeClass( "ativado_adaptacao_veiculos" );
		$("#concessionarias").removeClass( "ativado_concessionarias" );
		
	});


	
	$("#concessionarias").click(function(){
		
		$("#sobre").attr("src","imgs/oq-fazemos-bg_concessionarias.jpg").css("height","750px");
		$("#titulo").html("<strong> CONCESSIONÁRIAS </strong>");
		$("#paragrafo").html("CONHEÇA AS CONCESSIONÁRIAS PARCEIRAS<br> DA MEGA.");
		$("#concessionarias").toggleClass( "ativado_concessionarias" );
		$("#laudo_medico").removeClass( "ativado_laudo_medico" );
		$("#quemtemdireito").removeClass( "ativado" );
		$("#isencoes_tributarias").removeClass( "ativado_isencao_tributaria" );
		$("#nao_condutores").removeClass( "ativado_nao_condutores" );
		$("#habilitacao_especial").removeClass( "ativado_habilitacao_especial" );
		$("#defesa_pontuacao").removeClass( "ativado_defesa_pontuacao" );
		$("#venda_usado").removeClass( "ativado_venda_usado" );
		$("#cartao_defis").removeClass( "ativado_cartao_defis" );
		$("#avaliacao_gratuita").removeClass( "ativado_avaliacao_gratuita" );
		$("#adaptacao_veiculos").removeClass( "ativado_adaptacao_veiculos" );
		$("#empresa").removeClass( "ativado_empresa" );
	});
	
	
	
// PROGRAMAÇÃO REFERENTE AOS COMPORTAMENTOS DO OBJETO DE HOVER DE IMAGENS E TEXTOS 
	
});