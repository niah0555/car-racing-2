class form{
    constructor(){

    }

    display(){
        var title= createElement('h2');
        title.position(250, 200);
        title.html("4 Player Car Racing Game");
        var input=createInput('Enter Your Name');
        input.position(200, 300);
        var button = createButton('Done');
        button.position( 200, 400);
        var greeting = createElement('h4');
        button.mousePressed(function(){
        input.hide();
        button.hide();
        var name = input.value();
        PC++;
        player.update(name);
        player.updateCount(PC);
        greeting.html("Hello"+ name );
        greeting.position(400, 300);
        
        })
    }
}