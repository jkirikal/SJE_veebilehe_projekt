window.onload = function() {


    let elements
        fetch('data/recipes.json')
            .then((response) => response.json())
            .then(json => {
                let main_div = document.getElementById("main")
                for(i=0;i<json.length;i++){
                    let item = json[i]
                    let divfood = document.createElement('div');

                    let divbasic = document.createElement('div');


                    let namespan = document.createElement('span');
                    let nameh3 = document.createElement('h3');
                    nameh3.innerText = item.name;
                    namespan.appendChild(nameh3);

                    let basicspan = document.createElement('span');
                    let basich4 = document.createElement('h4');
                    let basiclist = document.createElement('ul');
                    for(a=0;a<item.basicData.length;a++){
                        let singlebasic = item.basicData[a];
                        console.log(singlebasic)
                    
                        let basicdata = document.createElement('li');
                        basicdata.innerText = singlebasic;
                        basiclist.appendChild(basicdata)
                    }
                    basich4.appendChild(basiclist);
                    basicspan.appendChild(basich4);
                    basicspan.className = "food_basic";

                    divbasic.appendChild(namespan);
                    divbasic.appendChild(basicspan);
                    divbasic.className="basic_inf"





                    let divinstruct = document.createElement('div');
                    let spanitems = document.createElement('span');
                    let itemslist = document.createElement('ul');
                    for(a=0;a<item.items.lenght;a++){
                        let singleitem = item.items[a];
                        let singledata = document.createElement('li');
                        singledata.innerText = singleitem;
                        itemslist.appendChild(singledata)
                    }
                    spanitems.appendChild(itemslist);


                    let spaninstruct = document.createElement('span');
                    let instructp = document.createElement('p');
                    instructp.innerText = item.instruction;
                    spaninstruct.appendChild(instructp);
                    
                    divinstruct.appendChild(spanitems);
                    divinstruct.appendChild(spaninstruct);
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
            .finally( () => {
                let footer = document.createElement('footer');
                date = new Date().toLocaleString()
                footer.innerText = date;
                document.body.appendChild(footer);
            })
        
        
    
    
    }