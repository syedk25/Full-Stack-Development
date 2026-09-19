var cards = [
    {
        serial: "Card 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quisquam omnis eaque possimus nemo dolorem soluta eum numquam! Harum sunt beatae sapiente voluptas neque alias veniam officia culpa excepturi exercitationem?"
    },
    {
        serial: "Card 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quisquam omnis eaque possimus nemo dolorem soluta eum numquam! Harum sunt beatae sapiente voluptas neque alias veniam officia culpa excepturi exercitationem?"
    },
    {
        serial: "Card 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quisquam omnis eaque possimus nemo dolorem soluta eum numquam! Harum sunt beatae sapiente voluptas neque alias veniam officia culpa excepturi exercitationem?"
    },
    {
        serial: "Card 4",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quisquam omnis eaque possimus nemo dolorem soluta eum numquam! Harum sunt beatae sapiente voluptas neque alias veniam officia culpa excepturi exercitationem?"
    },
    {
        serial: "Card 5",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quisquam omnis eaque possimus nemo dolorem soluta eum numquam! Harum sunt beatae sapiente voluptas neque alias veniam officia culpa excepturi exercitationem?"
    },
    {
        serial: "Card 6",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quisquam omnis eaque possimus nemo dolorem soluta eum numquam! Harum sunt beatae sapiente voluptas neque alias veniam officia culpa excepturi exercitationem?"
    }
    ,
    {
        serial: "Card 7",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quisquam omnis eaque possimus nemo dolorem soluta eum numquam! Harum sunt beatae sapiente voluptas neque alias veniam officia culpa excepturi exercitationem?"
    }
];



function generateCards(){

    var row = document.querySelector(".my-row");
    cards.forEach( card => {
        var colDiv = document.createElement("div");
        colDiv.classList.add("col");

        var cardDiv = document.createElement("div");
        cardDiv.classList.add("card");

        var cardBodyDiv = document.createElement("div");
        cardBodyDiv.classList.add("card-body");

        var h6 = document.createElement("h6");
        var heading = document.createTextNode(card.serial);

        var p = document.createElement("p");
        p.classList.add("card-text");
        var description = document.createTextNode(card.description);
        
       
        h6.appendChild(heading);
        cardBodyDiv.appendChild(h6);
        p.appendChild(description);
        cardBodyDiv.appendChild(p);
        cardDiv.appendChild(cardBodyDiv);
        colDiv.appendChild(cardDiv);
        row.appendChild(colDiv);


    });
}

generateCards();