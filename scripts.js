<div class="container">
            <h2>Minutos:</h2>
            <select id="minutos" name="minutos"></select>

            <h2>Segundos:</h2>
            <select id="segundos" name="minutos"></select>

            <br/>
            <br/>
            <button id="comecar">Começar!</button>

                <div id="display">
                    <h3></h3>
                </div>
        
        </div>
        
            let display = document.getElementById('display');
            let minutos = document.getElementById('minutos');
            let segundos = document.getElementById('segundos');
            let comecar = document.getElementById('comecar');

            let cronometroSeg;

            let minutoAtual;
            let segundoAtual;

            var intervalo;

            for(let i = 0; i <= 60; i++){
                minutos.innerHTML+= '<option value="'+i+'">'+i+'</option>';
            }

            for(let i = 1; i <= 60; i++){
                segundos.innerHTML+= '<option value="'+i+'">'+i+'</option>';
            }

            comecar.addEventListener('click' ,function(){
                minutoAtual = minutos.value;
                segundoAtual = segundos.value;

                display.childNodes[1].innerHTML = minutoAtual + ":" + segundoAtual;

                interval = setInterval(function(){
                    segundoAtual --;
                    if(segundoAtual <= 0){
                        if(minutoAtual > 0){
                            minutoAtual--;
                            segundoAtual = 59;
                        }else{
                            alert("Acabou!")
                            document.getElementById("sound").play();
                            clearInterval(interval);
                        }
                    }

                    display.childNodes[1].innerHTML = minutoAtual + ":" + segundoAtual;
                },1000);

            })