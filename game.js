class game{

constructor(){

}

getState(){
    var db = database.ref('gameState')
    db.on("value",function(data){
        GS=data.val()
    })
}
update(ud){
    database.ref('/').update({gameState:ud})

}

start(){
    if(GS==0){
player=new player();
player.getCount();
form=new form();
form.display();

    }
}





}