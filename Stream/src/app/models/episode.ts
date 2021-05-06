export interface Episode {
    id: string;
    title: string;
    description: string;
    number: string;
    cover: string;
    season: string;
}

export class Episode {
    id: string = '';
    title: string = 'The One Where Monica Gets a Roommate';
    description: string = `After leaving her fiancé, Barry, at the altar. 
    Rachel finds herself in Central Perk Café, soaking wet in her wedding dress, 
    looking for her old friend Monica. Rachel ends up moving into Monicas New York apartment. 
    Chandler and Joey, who live across the hall from Monica, console Ross after his wife Carol, 
    has just left him for another woman. Monica, a chef, falls for "Paul the Wine Guy"
    only to be crushed that their night of passion was merely a one-night stand. The gang urge Rachel 
    to be more independent by cutting up her fathers credit cards. Rachel, who has never worked before, 
    is offered a waitress job at Central Perk coffee shop. Ross, who has had a crush on Rachel since high school, 
    asks if he can ask her out sometime`;
    number: string = '1';
    cover: string = '';
    season: string = '';
}