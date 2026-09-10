class player {
    constructor(game,captain){
      this.game = game;
      this.captain = captain;

    }
}
 class cricket extends player {
   constructor(game,captain,country){
    super(game,captain)
    this.country = country
   }
    }
    

    const cric = new cricket ('cricket','Virat-Kohli','India')
    console.log(cric);