// kood on Johan Kirikali poolt kirjutatud ning selle eesmärk on luua retseptielemente vastavalt sellele, mis recipes.json failis muutub.
// See on selleks vajalik, et kui tulevikus tahta lihtsamalt retsepte juurde lisada/muuta, siis saab seda teha kõike mugavalt ja loetavalt,
// ning vajadusel saab retseptielementidesse veel automaatikat lisada.

fetch('./data/recipes.json')
    .then((response) => response.json())
    .then(json => {
        let main_div = document.getElementById("main")
        //loob iga retsepti kohta html sektsiooni
        for(i=0;i<json.length;i++){
            let item = json[i];
            let divfood = document.createElement('div');

            let divbasic = document.createElement('div');

            //pealkiri
            let namespan = document.createElement('span');
            let nameh3 = document.createElement('h3');
            nameh3.innerText = item.name;
            namespan.appendChild(nameh3);

            //retsepti kirjeldus
            let basicspan = document.createElement('span');
            let basich4 = document.createElement('h4');
            let basiclist = document.createElement('ul');

            //koostab retsepti kirjeldustest unordered listi
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

            //koostab vajalikest toiduainetest unordered listi
            for(a=0;a<item.items.length;a++){
                let singleitem = item.items[a];
                let singledata = document.createElement('li');
                singledata.innerText = singleitem;
                itemslist.appendChild(singledata)
            }
            divitems.appendChild(itemslist);
            divitems.className = "foodIngredients"

            //toidu valmistamise õpetus
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
        //logib errorid konsooli
        console.log(err)
    })
    