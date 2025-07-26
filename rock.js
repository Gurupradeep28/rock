
                let resultai='';
                my='';
                let score=JSON.parse(localStorage.getItem('score')) || {
                    win:0,
                    lose:0,
                    tie:0
                };


                function calling(){
                    
                    let aimove=Math.random();
                
                
                    if(aimove>0&&aimove<1/3){
                            resultai="rock";
                        }
                    else if(aimove>1/3&&aimove<2/3){
                            resultai="paper";
                        }
                    else{
                            resultai="scissor";
                    }
                    
                
                }
                
                function myclic(){
                    calling()
                    
                    if(my==="rock"){
                        if(resultai==="rock"){
                            result='tie';
                        }
                        else if(resultai==='paper'){
                            result='lose';

                        }
                        else{
                            result='win';


                        }
                    }
                    if(my==="scissor"){
                        if(resultai==="rock"){
                            result='lose';
                            }
                        else if(resultai==='paper'){
                             result='win';

                            }
                         else{
                             result='tie';


                            }
                        }
                    if(my==="paper"){
                        if(resultai==="rock"){
                            result='win'
                        }
                        else if(resultai==='scissor'){
                            result='lose';

                        }
                        else{
                            result='tie'


                        }
                
                        
                    
                            
                        }
                if(result==='win'){
                        score.win+=1;
                    }
                else if(result==='lose'){
                        score.lose+=1;
                    }
                else if(result==='tie'){
                        score.tie+=1;
                    }
                
            
                card();
                document.querySelector(".wlr").innerHTML=`Result:${result}`;
                

                document.querySelector(".emo").innerHTML=`You <img src=image/${my}.png class="imageStyle"> <img src="image/${resultai}.png"class="imageStyle"> Computer  ` 
                
                
                localStorage.setItem("score",JSON.stringify(score))
                
                
                

                    
                    
                    

                    }
                
                function card(){
                    document.querySelector(".card").innerHTML=`Win:${score.win} Lose:${score.lose} Tie:${score.tie}`


                }
                

                
                
                    
                
