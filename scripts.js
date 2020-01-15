                
                var txtdice = document.getElementById("dice");
                var turn = 0; 
                var level = 1;
                var clickplace=0;
                var tasktime=60;
                var sndtaskend = new Audio("sounds\\taskend.wav");
                
            

                
                var player = [
                    {name:"", position:0, color:"pink"},
                    {name:"", position:0, color:"#6464f6"}
                ];
                
                var womanTask = [
                    {text:""},
                    
                    {text:"Take off <b style=\"color:"+player[0].color+"\">WOMAN</b>'s top and give her a sensual massage!"},
                    {text:"Take off <b style=\"color:"+player[0].color+"\">WOMAN</b>'s bra with only one hand!"},
                    {text:"Take off <b style=\"color:"+player[0].color+"\">WOMAN</b>'s top with your teeth!"},
                    {text:"Both drink!"},
                    {text:"Sit in front of <b style=\"color:"+player[0].color+"\">WOMAN</b> and kiss her!"},
                    {text:"Sit behind <b style=\"color:"+player[0].color+"\">WOMAN</b> and kiss gently her ears and neck!"},
                    {text:"Excite gently <b style=\"color:"+player[0].color+"\">WOMAN</b>'s upper body and breasts with your hands!"},
                    {text:"Both drink!"},
                    {text:"Kiss gently <b style=\"color:"+player[0].color+"\">WOMAN</b>'s neck and shoulders!"},
                    {text:"Excite gently <b style=\"color:"+player[0].color+"\">WOMAN</b> with your hand through her panties or skirt!"},
                    {text:"Sit in front of <b style=\"color:"+player[0].color+"\">WOMAN</b> and kiss her!"},
                    {text:"Both drink!"},
                    {text:"<b style=\"color:"+player[0].color+"\">WOMAN</b> sits with her legs open and <b style=\"color:"+player[1].color+"\">MAN</b> gently bites her tights!"},
                    {text:"Both stand up while <b style=\"color:"+player[1].color+"\">MAN</b> grabs <b style=\"color:"+player[0].color+"\">WOMAN</b>'s butt!"},
                    {text:"<b style=\"color:"+player[0].color+"\">WOMAN</b> lies on her back while <b style=\"color:"+player[1].color+"\">MAN</b> massages her legs!"},
                    {text:"Both drink!"},
                    {text:"<b style=\"color:"+player[0].color+"\">WOMAN</b> lies on her belly, <b style=\"color:"+player[1].color+"\">MAN</b> gently grabs and kisses her buttcheeks!"},
                    {text:"Take off <b style=\"color:"+player[0].color+"\">WOMAN</b>'s panties with your mouth!"},
                    {text:"<b style=\"color:"+player[1].color+"\">MAN</b> shall take the rest of his clothes in a slow and sexy way!"},
                                        
                    {text:"Congratulations <b style=\"color:"+player[1].color+"\">MAN</b> you finished the first level!<br/> <b style=\"color:"+player[0].color+"\">WOMAN</b> shall give you a lower back massage!"}
		];
                               
                var manTask = [
                    {text:""},
                    
                    {text:"Take off <b style=\"color:"+player[1].color+"\">MAN</b>'s top and give him a sensual massage!"},
                    {text:"Unbutton <b style=\"color:"+player[1].color+"\">MAN</b>'s pants with only one hand!"},
                    {text:"Take off <b style=\"color:"+player[1].color+"\">MAN</b>'s top with your teeth!"},
                    {text:"Both drink!"},
                    {text:"Sit behind <b style=\"color:"+player[1].color+"\">MAN</b> and kiss gently his ears and neck!"},
                    {text:"Take off <b style=\"color:"+player[1].color+"\">MAN</b>'s top and excite gently his upper body with your mouth!"},
                    {text:"Slip your hand in <b style=\"color:"+player[1].color+"\">MAN</b>'s pants or underpants and excite him gently!"},
                    {text:"Both drink!"},
                    {text:"Kiss gently <b style=\"color:"+player[1].color+"\">MAN</b>'s chest! Take off is shirt if still on!"},
                    {text:"Excite gently <b style=\"color:"+player[1].color+"\">MAN</b> with your hand through his underpants or pants!"},
                    {text:"Sit in front of <b style=\"color:"+player[1].color+"\">MAN</b> and kiss him!"},
                    {text:"Both drink!"},
                    {text:"Kiss gently <b style=\"color:"+player[1].color+"\">MAN</b>'s neck and shoulder with your tongue!"},
                    {text:"Both stand up while <b style=\"color:"+player[0].color+"\">WOMAN</b> grabs <b style=\"color:"+player[1].color+"\">MAN</b>'s butt!"},
                    {text:"Take off <b style=\"color:"+player[1].color+"\">MAN</b>'s panties with your mouth!"},
                    {text:"Both drink!"},
                    {text:"<b style=\"color:"+player[1].color+"\">MAN</b> sits with his legs open and <b style=\"color:"+player[0].color+"\">WOMAN</b> gently bites his tights!"},
                    {text:"<b style=\"color:"+player[1].color+"\">MAN</b> lay on his back while <b style=\"color:"+player[0].color+"\">WOMAN</b> massages his legs!"},
                    {text:"<b style=\"color:"+player[0].color+"\">WOMAN</b> shall take the rest of her clothes in a slow and sexy way!"},
                    
                    {text:"Congratulations <b style=\"color:"+player[0].color+"\">WOMAN</b> you finished the first level!<br/> <b style=\"color:"+player[1].color+"\">MAN</b> shall give you a lower back massage!"}
                ];
                
                var manTask2 = [
                    {text:""},
                    
                    {text:"<b style=\"color:"+player[1].color+"\">MAN</b> lies in his back. Sit on top and excite his upper body with your mouth!"},
                    {text:"<b style=\"color:"+player[0].color+"\">WOMAN</b> sit down in front of <b style=\"color:"+player[1].color+"\">MAN</b> and play herself to show what she loves! It is possible to penetrate with fingers!"},
                    {text:"<b style=\"color:"+player[1].color+"\">MAN</b> lies on his back. Gently take his underpants and excite him with your mouth and hand!"},
                    {text:"Both drink!"},
                    {text:"<b style=\"color:"+player[1].color+"\">MAN</b> stand in front of <b style=\"color:"+player[0].color+"\">WOMAN</b> while she sitting and allow her to excite him gently with her mouth and hand!"},
                    {text:"<b style=\"color:"+player[1].color+"\">MAN</b> sits down. <b style=\"color:"+player[0].color+"\">WOMAN</b> lying on his knees. <b style=\"color:"+player[1].color+"\">MAN</b> spanks <b style=\"color:"+player[0].color+"\">WOMAN</b> gently or excite her with his hand!"},
                    {text:"<b style=\"color:"+player[1].color+"\">MAN</b> lies on his back. Massage his full body! Concentrate on the sensitive parts!"},
                    {text:"Both drink!"},
                    {text:"<b style=\"color:"+player[1].color+"\">MAN</b> lies on his back. sit on top and excite him with movements of your hip!"},
                    {text:"Sit behind <b style=\"color:"+player[1].color+"\">MAN</b> , slip in your hand under his underpants and excite him while kissing his neck!"},
                    {text:"While kissing excite gently each other with hands! you can go under the pants or panties!"},
                    {text:"Both drink!"},
                    {text:"<b style=\"color:"+player[1].color+"\">MAN</b> lies down and <b style=\"color:"+player[0].color+"\">WOMAN</b> sits on his lap and rubs herself on <b style=\"color:"+player[1].color+"\">MAN</b>!"},
                    {text:"<b style=\"color:"+player[1].color+"\">MAN</b> stands and <b style=\"color:"+player[0].color+"\">WOMAN</b> plays with his balls!"},
                    {text:"<b style=\"color:"+player[1].color+"\">MAN</b> lies sidewards. Massage his butt!"},
                    {text:"Both drink!"},
                    {text:"<b style=\"color:"+player[1].color+"\">MAN</b> sits down, <b style=\"color:"+player[0].color+"\">WOMAN</b> gets in front on her knees and rubs her breasts on his dick!"},//trocar
                    {text:"<b style=\"color:"+player[0].color+"\">WOMAN</b> sit down in front of <b style=\"color:"+player[1].color+"\">MAN</b> and play herself!"},//trocar
                    {text:"<b style=\"color:"+player[1].color+"\">MAN</b> sits down and <b style=\"color:"+player[0].color+"\">WOMAN</b> stands with her back on him and rubs her butt on <b style=\"color:"+player[1].color+"\">MAN</b>'s dick!"},
                    
                    {text:"Congratulations <b style=\"color:"+player[0].color+"\">WOMAN</b> you finished the second level!<br/>Has reward <b style=\"color:"+player[1].color+"\">MAN</b> will go down on you! ;)"}
                ];
                var womanTask2 = [
                    {text:""},
                    
                    {text:"<b style=\"color:"+player[0].color+"\">WOMAN</b> lies on her back. Excite her lower body with your mouth and hand! Concentrate on the sensitive parts!"},
                    {text:"While kissing excite gently each other with hands! you can go under the pants or panties!"},
                    {text:"<b style=\"color:"+player[0].color+"\">WOMAN</b> lies on her belly. Excite her lower body with your mouth and hand! concentrate on the sensitive parts!"},
                    {text:"Both drink!"},
                    {text:"<b style=\"color:"+player[0].color+"\">WOMAN</b> sits and allows <b style=\"color:"+player[1].color+"\">MAN</b> to excite her gently with his mouth and hand!"},
                    {text:"<b style=\"color:"+player[0].color+"\">WOMAN</b> lies on her back gently excite her with your mouth and hand!"},
                    {text:"<b style=\"color:"+player[0].color+"\">WOMAN</b> lies on her back. Massage her full body! Concentrate on the sensitive parts!"},
                    {text:"Both drink!"},
                    {text:"<b style=\"color:"+player[0].color+"\">WOMAN</b> lies her back on a table. <b style=\"color:"+player[1].color+"\">MAN</b> excite her gently with your mouth and hand!"},
                    {text:"Sit behind <b style=\"color:"+player[0].color+"\">WOMAN</b>, slip in your hand under her panties and excite her while kissing her neck!"},
                    {text:"<b style=\"color:"+player[0].color+"\">WOMAN</b> lies on her belly. Excite her lower body with your mouth and hand!"},//trocar
                    {text:"Both drink!"},
                    {text:"<b style=\"color:"+player[0].color+"\">WOMAN</b> sits and <b style=\"color:"+player[1].color+"\">MAN</b> grabs her breasts and gently bites her nipples!"},
                    {text:"<b style=\"color:"+player[1].color+"\">MAN</b> lies on his back and <b style=\"color:"+player[0].color+"\">WOMAN</b> sits on his face while he licks her!"},
                    {text:"While kissing excite gently each other with hands! you can go under the pants or panties!"},
                    {text:"Both drink!"},
                    {text:"<b style=\"color:"+player[0].color+"\">WOMAN</b> lies sidewards. Massage her butthole!"},
                    {text:"<b style=\"color:"+player[1].color+"\">MAN</b> puts one finger inside <b style=\"color:"+player[0].color+"\">WOMAN</b>!"},
                    {text:"<b style=\"color:"+player[1].color+"\">MAN</b> sit down in front of <b style=\"color:"+player[0].color+"\">WOMAN</b> and play himself!"},
                    
                    {text:"Congratulations <b style=\"color:"+player[1].color+"\">MAN</b> you finished the second level!<br/>Has reward <b style=\"color:"+player[0].color+"\">WOMAN</b> will go down on you! ;)"}
                ];
                
                var level3task = new Array();
                for(i = 1; i < 20; i++){
                    level3task[i]= "img\\poses\\" + Math.floor((Math.random()*20)+1).toString()+".png";
                    for(j = 0; j < i; j++){
                        if(level3task[i]===level3task[j]){i--;break;}
                    }
                }
                
                                
		function rollDice(){
                                        
                    var x = Math.floor((Math.random()*6)+1);
//                    document.getElementById("dice").innerHTML = x;
                    document.getElementById("dado").src = "img\\dices\\"+x+".png";
                    document.getElementById("divCard").style.display = 'none';
                    
                    if(turn === 0){
                        document.getElementById(player[0].position).style.backgroundColor = '#FFFFFF';
                        document.getElementById(player[1].position).style.backgroundColor = player[1].color;
                            player[0].position += x;
                        if(player[0].position >= 20){
                            //document.getElementById("roll").disabled = true;
                            level3task[20] = "Congratulations <b style=\"color:"+player[0].color+"\">"+player[0].name+"</b> you finished the final level!<br/> Choose a position you want to do and <b style=\"color:"+player[1].color+"\">"+player[1].name+"</b> has to satisfy you till the end ;)";
                            player[0].position = 20;
                            console.log("WINNER LEVEL: "+ level +"PLAYER: "+player[0].name);                            
                        }
                        document.getElementById(player[0].position).style.backgroundColor = player[0].color;
                        blockDice();
                        showPlayTask(turn, level);
                        clickplace = player[0].position;
                        waitForClick(clickplace);
                        turn = 1;
                        if(player[0].position >= 20) level = nextLevel(level);
                    }else {
                        document.getElementById(player[1].position).style.backgroundColor = '#FFFFFF';
                        document.getElementById(player[0].position).style.backgroundColor = player[0].color;
                        player[1].position += x;
                        if(player[1].position >= 20){
                            //document.getElementById("roll").disabled = true;
                            level3task[20] = "Congratulations <b style=\"color:"+player[1].color+"\">"+player[1].name+"</b> you finished the final level!<br/> Choose a position you want to do and <b style=\"color:"+player[0].color+"\">"+player[0].name+"</b> has to satisfy you till the end ;)";
                            player[1].position = 20;
                            console.log("WINNER LEVEL: "+ level +"PLAYER: "+player[1].name);
                            //nextLevel(level);
                        }                        
                        document.getElementById(player[1].position).style.backgroundColor = player[1].color;
                        blockDice();
                        showPlayTask(turn, level);
                        clickplace = player[1].position;
                        waitForClick(clickplace);
                        turn = 0;
                        if(player[1].position >= 20) level = nextLevel(level);
                    }                    
                    document.getElementById("divCard").style.display = 'inline';
                    //blockDice();
        	    //showPlayTask(turn, level);
                }
                
                function nextLevel(level){
                    var newLevel = ++level;
                    for(i=0;i<=20;i++){
                        document.getElementById(i).style.backgroundColor = '#FFFFFF';
                    }
                    player[0].position = 0;
                    player[1].position = 0;
                    if(level > 3){
                        blockDice();
                        $("#btnReset").show();
                    }
                    
                    return newLevel;
                }
                
                function checkTurn(){
                    if(turn === 0){
                        document.getElementById("player").innerHTML = player[0].name+"'s turn";
                        $("#player").css('color',player[0].color);
                    }else{
                        document.getElementById("player").innerHTML = player[1].name+"'s turn";
                        $("#player").css('color',player[1].color);
                    }
                }    
                
                function submitClick(){                    
                    var name1 = document.getElementById("name1").value;
                    var name2 = document.getElementById("name2").value;                    
                
                    player[0].name = (name1.length >= 1?name1:"Lady");
                    player[1].name = (name2.length >= 1?name2:"Gentleman");

                    document.getElementById("roll").disabled = false;
                    
                    document.getElementById("loginDiv").style.display = 'none';
                    document.getElementById("divDice").style.display = 'inline';
                    document.getElementById("divBoard").style.display = 'inline';
			        checkTurn();                    
                }
                
                function blockDice(){
                    document.getElementById("roll").disabled = true; 
                }
                
                function countDownTimer(){
                    $("#skipHeader").show();
                    var viewTimer = document.getElementById("timer");
                    viewTimer.innerHTML = "TIME";
                    var btnTimer = document.getElementById("btnMission");
                    viewTimer.style.display = "inline";
                    btnTimer.style.display = "none";
                    var secStart = tasktime;
                    var secEnd  = 0 ;
                    var interval;
                    
                    interval = setInterval(function(){
                        $("#skipBtn").on('click',function(){
                            secStart=0;
                        });
                        viewTimer.firstChild.data = (secStart - secEnd)+"s";
                        if(secEnd>=secStart){
                            document.getElementById("roll").disabled = false;
                            document.getElementById("divCard").style.display = 'none';
                            clearInterval(interval);
                            viewTimer.style.display = "none";
                            btnTimer.style.display = "inline";
                            secStart = 2;
                            checkTurn();
//                            document.getElementById("dice").innerHTML = "Dice";
                            sndtaskend.play();
                            $('#modalexp').modal('hide');
                            removeClick(clickplace);
                        }
                        secEnd++;
                    },1000);
                }
                                
                function showPlayTask(turn, level) {
                    var b = Math.floor((Math.random()*7)+1);
                    b = clickplace;
                    var text;
                    var textOut;
                    //var drink = "Both drink!";
                    
                    if(turn === 1 ){
                        if(level===1){
                                text = womanTask[player[1].position].text;
                                textOut = text.replace(/WOMAN/g , player[0].name);
                                textOut = textOut.replace(/MAN/g , player[1].name);
                                document.getElementById("imgMission").style.display = "none";
                                document.getElementById("textMisson").innerHTML = textOut;                  
                        }else if(level === 2){
                                text = womanTask2[player[1].position].text;
                                textOut = text.replace(/WOMAN/g , player[0].name);
                                textOut = textOut.replace(/MAN/g , player[1].name);
                                document.getElementById("imgMission").style.display = "none";
                                document.getElementById("textMisson").innerHTML = textOut;
                        }else if(level === 3){
                            if(player[1].position<20){
                                document.getElementById("textMisson").innerHTML = "";
                                document.getElementById("imgMission").style.display = "";
                                document.getElementById("imgMission").src = level3task[player[1].position];
                            }else if(player[1].position===20){
                                document.getElementById("imgMission").style.display = "none";
                                document.getElementById("textMisson").innerHTML = level3task[20];
                            }
                        }                        
                    }else{
                        if(level===1){
                                text = manTask[player[0].position].text;
                                textOut = text.replace(/WOMAN/g , player[0].name);
                                textOut = textOut.replace(/MAN/g , player[1].name);
                                document.getElementById("imgMission").style.display = "none";
                                document.getElementById("textMisson").innerHTML = textOut;
                        }else if(level === 2){
                                text = manTask2[player[0].position].text;
                                textOut = text.replace(/WOMAN/g , player[0].name);
                                textOut = textOut.replace(/MAN/g , player[1].name); 
                                document.getElementById("textMisson").innerHTML = textOut;
                        }else if(level === 3){
                            if(player[0].position<20){
                                document.getElementById("textMisson").innerHTML = "";
                                document.getElementById("imgMission").style.display = "";
                                document.getElementById("imgMission").src = level3task[player[0].position];
                            }else if(player[0].position===20){
                                document.getElementById("imgMission").style.display = "none";
                                document.getElementById("textMisson").innerHTML = level3task[20];
                            }
                        }
                    }
                    
                }		         
                
            function waitForClick(pos){
                var id = '#'+pos;//clickplace;
                var hide = ""+id+" > .TileText";
                        var show = ""+id+" > .presswt"; 
                        $(show).addClass("fa fa-spinner fa-pulse fa-3x");
                        $(hide).hide();
                        $(id).css('cursor','pointer');
                $('#modalexp').modal('show');
                $("#skipHeader").hide();
                $(id).on('click',function(){                    
                        $('#modalexp').modal('show');
                    });
            };
            
            function removeClick(pos){
                var id = '#'+pos;//clickplace;
                var show = id+" > .TileText";
                            var hide = id+" > .presswt"; 
                            $(hide).removeClass("fa fa-spinner fa-pulse fa-3x");
                            $(show).show();
                            $(id).css('cursor','default');
                            $(id).off('click');
            };
            
            function saveSettings(){
                var timeSttg = document.getElementById("timeSttg").value;
                if(timeSttg==""){
                    
                }else{
                    tasktime = timeSttg;
                }
                
                $('#modalsettings').modal('hide');
            };
            
            function rollingDice(){                
                var interval = setInterval(function(){
                    document.getElementById("dado").src = "img\\dices\\"+Math.floor((Math.random()*6)+1)+".png";
                },100);
                  
                setTimeout(function(){
                    clearInterval(interval);
                    rollDice();
                },'1000');
                
            };
