//onsole.log("Any string");

let pronouns = ['the', 'our'];
let adjs = ['great', 'big'];
let nouns = ['jogger', 'racoon'];

pronouns.forEach(pronoun => {
    adjs.forEach(adj => {
        nouns.forEach(noun => {
            let myString = pronoun + adj + noun + ".com";
            console.log(myString);

        });


    });
});

