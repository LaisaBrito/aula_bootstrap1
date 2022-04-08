# aula_bootstrap1
Utilizando o bootstrap minha primeira experiencia!! :)
    <!DOCTYPE html>
    <html lang="pt br">
        <head>
            <title>Minha Página</title>
            <meta charset="utf-8">
            <link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.min.css">
            <link rel="stylesheet" type="text/css" href="css/Style.css">  
        </head>
        <body>
            <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="#">
                     <img src="bootstrap/logolaisa.png" width="160" height="160">
                </a>
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" href="#quemsomos">Quem Somos</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" href="#parceiros">Parceiros</a>
                        </li>
                    </ul>   
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" href="#contato">Contato</a>
                        </li>
                    </ul>      
                 </div>
            </nav>   
            <section id="quemsomos">
                <div class="container-fluid text-center quemsomos margin">
                    <h3>Quem Somos</h3>
                    <img src="bootstrap/pngwing.com (2).png" width="100" height="100">
                </div>
             </section>  

             <section id="parceiros">
                 <div class="container-fluid text-center margin parceiros">
                     <h3>Parceiros</h3>
                     <div class="container">
                         <div class="row">
                             <div class=" col lg 4">
                                 <img src="bootstrap/logolaisa.png" width="200" height="200">
                                 <p>É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário de "Conteúdo aqui, conteúdo aqui", fazendo com que ele tenha uma aparência similar a de um texto legível.</p>
                             </div>
                             <div class=" col lg 4">
                                <img src="bootstrap/logolaisa.png" width="200" height="200">
                                <p>É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário de "Conteúdo aqui, conteúdo aqui", fazendo com que ele tenha uma aparência similar a de um texto legível.</p>
                            </div>
                            <div class=" col lg 4">
                                <img src="bootstrap/logolaisa.png" width="200" height="200">
                                <p>É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário de "Conteúdo aqui, conteúdo aqui", fazendo com que ele tenha uma aparência similar a de um texto legível.</p>
                            </div>
                         </div>

                     </div>

                 </div>
             </section>
             <section id="contato">
                <div class="container-fluid text-center margin contato">
                    <h3>Contato</h3>
                    <div class="container">
                        <div class="row">
                            <div class=" col lg 6">
                                <img src="bootstrap/logolaisa.png" width="100%">
                                <p>Fale com um de nossos consultores através do número 71 98630-4412</p>
                            </div>
                            <div class=" col lg 6">
                               <img src="bootstrap/logolaisa.png" width="100%">
                               <p>Acesse nosso linkedin</p>
                           </div>
                        </div>

                    </div>

                </div>
            </section>
            <footer class="container-fluid bg-footer margin text-center">
                <p>Desenvolvodo por Laisa Brito. Todos os direitos reservardos</p>
            </footer>
             
        </body>
    </html>
