//title,year,description, genre
$(document).ready(function() {
    var movies = [
        {
            value: "the-conjuring", 
            label: "The Conjuring",
            genre: "horror",
            year: 2013,
            desc: "Rod and Carolyn find their pet dog dead under mysterious circumstances and experience a spirit that harms their daughter Andrea. They finally call investigators who can help them get out of the mess."
        },
        {
            value: "hereditary", 
            label: "Hereditary",
            genre: "horror",
            year: 2018,
            desc:"After her mother passes away, Annie and the rest of the family are grief-stricken. Soon, strange things start occurring and the horrifying truth about Annie's ancestry begins to come to light."
        },
        {
            value: "call", 
            label: "The Call",
            genre: "horror",
            year: 2020,
            desc:"Connected by phone in the same home but 20 years apart, a serial killer puts another woman's past -- and life -- on the line to change her own fate."
        },
        {
            value: "scream",
            label: "Scream",
            genre: "horror",
            year: 1996,
            desc: "A year after the murder of her mother, a teenage girl is terrorized by a masked killer who targets her and her friends by using scary movies as part of a deadly game."
        },
        {
            value: "psycho",
            label: "Psycho",
            genre: "horror",
            year: 1960,
            desc: "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run and checks into a remote motel run by a young man under the domination of his mother."
        },
        {
            value: "the-shining",
            label: "The shining",
            genre: "horror",
            year: 1980,
            desc: "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future."
        },
        {
            value: "hellraiser",
            label: "Hellraiser",
            genre: "horror",
            year: 1987,
            desc: "A horrifying story of a shaman's inheritance in the Isan region of Thailand. What could be possessing a family member might not be the Goddess they make it out to be."
        },
        {
            value: "the-medium", 
            label: "The Medium",
            genre: "horror",
            year: 2020,
            desc:"A shaman's family learn that their goddess is supposedly controlling one of them. However, their lives take a frightening turn when they realise the goddess has nothing to do with the possession."
        },
        {
            value: "pulp-fiction",
            label: "Pulp Fiction",
            genre: "action",
            year: 1994,
            desc: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
        },
        {
            value: "matrix",
            label: "Matrix",
            genre: "action",
            year: 1999,
            desc: "Neo, a computer programmer and hacker, has always questioned the reality of the world around him. His suspicions are confirmed when Morpheus, a rebel leader, contacts him and reveals the truth to him."
        },
        {
            value: "dunkirk",
            label: "Dunkirk",
            genre: "action",
            year: 2017,
            desc: "Allied soldiers from Belgium, the British Commonwealth and Empire, and France are surrounded by the German Army and evacuated during a fierce battle in World War II."
        },
        {
            value: "skyfall",
            label: "Skyfall",
            genre: "action",
            year: 2012,
            desc: "James Bond's loyalty to M is tested when her past comes back to haunt her. When MI6 comes under attack, 007 must track down and destroy the threat, no matter how personal the cost."
        },
        {
            value: "top-gun",
            label: "Top Gun",
            genre: "action",
            year: 1986,
            desc: "As students at the United States Navy's elite fighter weapons school compete to be best in the class, one daring young pilot learns a few things from a civilian instructor that are not taught in the classroom."
        },
        {
            value: "jaws",
            label: "Jaws",
            genre: "action",
            year: 1975,
            desc: "When a killer shark unleashes chaos on a beach community off Cape Cod, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down."
        },
        {
            value: "pretty-woman",
            label: "Pretty woman",
            genre: "romance",
            year: 1990,
            desc: "Edward, a rich entrepreneur, hires Vivian, a prostitute, to accompany him to a few social events. Trouble ensues when he falls in love with her and they try to bridge the gap between their worlds."
        },
        {
            value: "pride-and-prejudice",
            label: "Pride and Prejudice",
            genre: "romance",
            year: 2005,
            desc: "Elizabeth Bennett is a strong-willed yet sensible young woman. At a local ball, she encounters a wealthy young man, Mr Fitzwilliam Darcy, who is arrogant, and they develop an unusual relationship."
        },
        {
            value: "casablanca",
            label: "Casablanca",
            genre: "romance",
            year: 1942,
            desc: "A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis in French Morocco."
        },
        {
            value: "romeo-and-juliet",
            label: "Romeo and Juliet",
            genre: "romance",
            year: 1996,
            desc: "The rivalry between Verona's two well-established families, the Capulets and the Montagues, affects the relationship of their children Romeo and Juliet."
        },
        {
            value: "titanic",
            label: "Titanic",
            genre: "romance",
            year: 1997,
            desc:"A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic."
        },
        {
            value: "la-la-land",
            label: "La La Land",
            genre: "romance",
            year: 2016,
            desc:"When Sebastian, a pianist, and Mia, an actress, follow their passion and achieve success in their respective fields, they find themselves torn between their love for each other and their careers."
        },
        {
            value: "hot-fuzz",
            label: "Hot Fuzz",
            genre: "comedy",
            year: 2007,
            desc:"An overachieving London police sergeant is transferred to a village where the easygoing officers object to his fervor for regulations, all while a string of grisly murders strikes the town."
        },
        {
            value: "shaun-of-the-dead",
            label: "Shaun of the Dead",
            genre: "comedy",
            year: 2004,
            desc:"The uneventful, aimless lives of a London electronics salesman and his layabout roommate are disrupted by the zombie apocalypse."
        },
        {
            value: "step-brothers",
            label: "Step Brothers",
            genre: "comedy",
            year: 2008,
            desc:"Two aimless middle-aged losers still living at home are forced against their will to become roommates when their parents marry."
        },
        {
            value: "21-jump-street",
            label: "21 Jump Street",
            genre: "comedy",
            year: 2012,
            desc:"A pair of underachieving cops are sent back to a local high school to blend in and bring down a synthetic drug ring."
        },
        {
            value: "american-pie",
            label: "American Pie",
            genre: "comedy",
            year: 1999,
            desc:"Four teenage boys enter a pact to lose their virginity by prom night."
        },
        {
            value: "bridesmaids",
            label: "Bridesmaids",
            genre: "comedy",
            year: 2011,
            desc:"Competition between the maid of honor and a bridesmaid, over who is the bride's best friend, threatens to upend the life of an out-of-work pastry chef."
        },
        {
            value: "howls-moving-castle",
            label: "Howl's Moving Castle",
            genre: "animation",
            year: 2004,
            desc:"Jealous of Sophie's closeness to Howl, a wizard, the Witch of Waste transforms her into an old lady. Sophie must find a way to break the spell with the help of Howl's friends, Calcifer and Markl."
        },
        {
            value: "mononoke",
            label: "Princess Mononoke",
            genre: "animation",
            year: 1997,
            desc:"On a journey to find the cure for a Tatarigami's curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony. In this quest he also meets San, the Mononoke Hime."
        },
        {
            value: "spirited-away",
            label: "Spirited Away",
            genre: "animation",
            year: 2001,
            desc:"During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches and spirits, and where humans are changed into beasts."
        },
        {
            value: "whisper-of-the-heart",
            label: "Whisper of the Heart",
            genre: "animation",
            year: 1995,
            desc:"A love story between a girl who loves reading books, and a boy who has previously checked out all of the library books she chooses."
        },
        {
            value: "boy-and-the-heron",
            label: "The Boy and the Heron",
            genre: "animation",
            year: 2023,
            desc:"In the wake of his mother's death and his father's remarriage, a headstrong boy named Mahito ventures into a dreamlike world shared by both the living and the dead."
        },
    ];

});
    


console.log("cover");