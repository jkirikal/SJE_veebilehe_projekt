window.onload = function() {


    let elements
        fetch('data/recipes.json')
            .then((response) => response.json())
            .then(json => {
                let main_div = document.getElementById("main")
                for(i=0;i<json.length;i++){
                    let item = json[i];
                    let divfood = document.createElement('div');

                    let divbasic = document.createElement('div');


                    let namespan = document.createElement('span');
                    let nameh3 = document.createElement('h3');
                    nameh3.innerText = item.name;
                    namespan.appendChild(nameh3);

                    let basicspan = document.createElement('span');
                    let basich4 = document.createElement('h4');
                    let basiclist = document.createElement('ul');
                    for(var a in item.basicData){
                        let singlebasic = a + ": " + item.basicData[a].toString();
                        let basicdata = document.createElement('li');
                        basicdata.innerText = singlebasic;
                        basiclist.appendChild(basicdata);   
                    }
                    basich4.appendChild(basiclist);
                    basicspan.appendChild(basich4);
                    basicspan.className = "food_basic";

                    divbasic.appendChild(namespan);
                    divbasic.appendChild(basicspan);
                    divbasic.className="basic_inf"

                    let divinstruct = document.createElement('div');
                    let divitems = document.createElement('div');
                    let itemslist = document.createElement('ul');
                    for(a=0;a<item.items.length;a++){
                        let singleitem = item.items[a];
                        let singledata = document.createElement('li');
                        singledata.innerText = singleitem;
                        itemslist.appendChild(singledata)
                    }
                    divitems.appendChild(itemslist);
                    divitems.className = "foodIngredients"


                    let textdiv = document.createElement('div');
                    textdiv.className = "itemInstructions";
                    let instructp = document.createElement('p');
                    instructp.innerText = item.instruction;
                    textdiv.appendChild(instructp);
                    
                    divinstruct.appendChild(divitems);
                    divinstruct.appendChild(textdiv);
                    divinstruct.className="instructions"

                    divfood.appendChild(divbasic);
                    divfood.appendChild(divinstruct);
                    divfood.className="food";
                   
                    main_div.appendChild(divfood);
                    
                }
    
            })
            .catch(err => {
                let errDiv = document.createElement('div');
                errDiv.className = 'post';
                errDiv.innerText = err;
                document.body.appendChild(errDiv);
            })
        
        
    
    
    }