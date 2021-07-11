class Player{
    constructor(){
this.name=null;
this.distance=0;
this.index=null;
    }
getCount(){
    var playerCountref=database.ref("playerCount");
    playerCountref.on("value",function(data){
        playerCount=data.val();
    })
}
updateCount(count){
    database.ref('/').update({
        playerCount : count
    });
}
update(name1){
    var playerIndex="player"+playerCount;
    database.ref(playerIndex).set({
        name:name1
    });
}

}