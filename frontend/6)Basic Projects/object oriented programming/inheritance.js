class player {
  constructor(game,captain){
    this.game = game;
    this.captain = captain;
  }
  properties(){
    console.log(`${this.game} players can run`)
  }
}

class football extends player {
 
req(){
  console.log('they need a ball')
}
}
class cricket extends player {
  constructor(game,captain,country){
    super(game,captain,country)
    
    this.country = country;
  }
  team(){
    console.log('they are 11 players in each team')
  }
}

const foot = new football ('football',);
const cric = new cricket ('cricket','Virat-kohli','india')
foot.properties()
foot.req()
// cric.properties()
// cric.team()
console.log(cric);
