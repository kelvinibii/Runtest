gdjs.Level_32run_32testCode = {};


gdjs.Level_32run_32testCode.GDtile_95platformObjects1= [];
gdjs.Level_32run_32testCode.GDtile_95platformObjects2= [];
gdjs.Level_32run_32testCode.GDplayerObjects1= [];
gdjs.Level_32run_32testCode.GDplayerObjects2= [];
gdjs.Level_32run_32testCode.GDplayer_95lookObjects1= [];
gdjs.Level_32run_32testCode.GDplayer_95lookObjects2= [];
gdjs.Level_32run_32testCode.GDlevel_95outObjects1= [];
gdjs.Level_32run_32testCode.GDlevel_95outObjects2= [];
gdjs.Level_32run_32testCode.GDcoinObjects1= [];
gdjs.Level_32run_32testCode.GDcoinObjects2= [];
gdjs.Level_32run_32testCode.GDscoreObjects1= [];
gdjs.Level_32run_32testCode.GDscoreObjects2= [];

gdjs.Level_32run_32testCode.conditionTrue_0 = {val:false};
gdjs.Level_32run_32testCode.condition0IsTrue_0 = {val:false};
gdjs.Level_32run_32testCode.condition1IsTrue_0 = {val:false};
gdjs.Level_32run_32testCode.condition2IsTrue_0 = {val:false};

gdjs.Level_32run_32testCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.Level_32run_32testCode.GDtile_95platformObjects1.length = 0;
gdjs.Level_32run_32testCode.GDtile_95platformObjects2.length = 0;
gdjs.Level_32run_32testCode.GDplayerObjects1.length = 0;
gdjs.Level_32run_32testCode.GDplayerObjects2.length = 0;
gdjs.Level_32run_32testCode.GDplayer_95lookObjects1.length = 0;
gdjs.Level_32run_32testCode.GDplayer_95lookObjects2.length = 0;
gdjs.Level_32run_32testCode.GDlevel_95outObjects1.length = 0;
gdjs.Level_32run_32testCode.GDlevel_95outObjects2.length = 0;
gdjs.Level_32run_32testCode.GDcoinObjects1.length = 0;
gdjs.Level_32run_32testCode.GDcoinObjects2.length = 0;
gdjs.Level_32run_32testCode.GDscoreObjects1.length = 0;
gdjs.Level_32run_32testCode.GDscoreObjects2.length = 0;


{

gdjs.Level_32run_32testCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.Level_32run_32testCode.condition0IsTrue_0.val = false;
{
gdjs.Level_32run_32testCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level_32run_32testCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Level_32run_32testCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Level_32run_32testCode.GDplayerObjects1[i].hide();
}
}}

}


{

gdjs.Level_32run_32testCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
gdjs.Level_32run_32testCode.GDplayer_95lookObjects1.createFrom(runtimeScene.getObjects("player_look"));

{for(var i = 0, len = gdjs.Level_32run_32testCode.GDplayer_95lookObjects1.length ;i < len;++i) {
    gdjs.Level_32run_32testCode.GDplayer_95lookObjects1[i].setPosition((( gdjs.Level_32run_32testCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.Level_32run_32testCode.GDplayerObjects1[0].getPointX(""))-13,(( gdjs.Level_32run_32testCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.Level_32run_32testCode.GDplayerObjects1[0].getPointY("")));
}
}{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.Level_32run_32testCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.Level_32run_32testCode.GDplayerObjects1[0].getPointX("")), "", 0);
}
}


{



}


{

gdjs.Level_32run_32testCode.GDcoinObjects1.createFrom(runtimeScene.getObjects("coin"));
gdjs.Level_32run_32testCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.Level_32run_32testCode.condition0IsTrue_0.val = false;
gdjs.Level_32run_32testCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_32run_32testCode.GDcoinObjects1.length;i<l;++i) {
    if ( gdjs.Level_32run_32testCode.GDcoinObjects1[i].getOpacity() == 255 ) {
        gdjs.Level_32run_32testCode.condition0IsTrue_0.val = true;
        gdjs.Level_32run_32testCode.GDcoinObjects1[k] = gdjs.Level_32run_32testCode.GDcoinObjects1[i];
        ++k;
    }
}
gdjs.Level_32run_32testCode.GDcoinObjects1.length = k;}if ( gdjs.Level_32run_32testCode.condition0IsTrue_0.val ) {
{
gdjs.Level_32run_32testCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(context.clearEventsObjectsMap().addObjectsToEventsMap("player", gdjs.Level_32run_32testCode.GDplayerObjects1).getEventsObjectsMap(), context.clearEventsObjectsMap().addObjectsToEventsMap("coin", gdjs.Level_32run_32testCode.GDcoinObjects1).getEventsObjectsMap(), false, runtimeScene);
}}
if (gdjs.Level_32run_32testCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Pickup_Coin10.wav", false, 100, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.Level_32run_32testCode.GDcoinObjects1.length ;i < len;++i) {
    gdjs.Level_32run_32testCode.GDcoinObjects1[i].setOpacity(0);
}
}}

}


{

gdjs.Level_32run_32testCode.GDcoinObjects1.createFrom(runtimeScene.getObjects("coin"));

gdjs.Level_32run_32testCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_32run_32testCode.GDcoinObjects1.length;i<l;++i) {
    if ( gdjs.Level_32run_32testCode.GDcoinObjects1[i].getOpacity() == 0 ) {
        gdjs.Level_32run_32testCode.condition0IsTrue_0.val = true;
        gdjs.Level_32run_32testCode.GDcoinObjects1[k] = gdjs.Level_32run_32testCode.GDcoinObjects1[i];
        ++k;
    }
}
gdjs.Level_32run_32testCode.GDcoinObjects1.length = k;}if (gdjs.Level_32run_32testCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Level_32run_32testCode.GDcoinObjects1.length ;i < len;++i) {
    gdjs.Level_32run_32testCode.GDcoinObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{

gdjs.Level_32run_32testCode.GDscoreObjects1.createFrom(runtimeScene.getObjects("score"));

{for(var i = 0, len = gdjs.Level_32run_32testCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Level_32run_32testCode.GDscoreObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0))+" x");
}
}
}


{

gdjs.Level_32run_32testCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
gdjs.Level_32run_32testCode.GDplayer_95lookObjects1.createFrom(runtimeScene.getObjects("player_look"));

gdjs.Level_32run_32testCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_32run_32testCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_32run_32testCode.GDplayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Level_32run_32testCode.condition0IsTrue_0.val = true;
        gdjs.Level_32run_32testCode.GDplayerObjects1[k] = gdjs.Level_32run_32testCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.Level_32run_32testCode.GDplayerObjects1.length = k;}if (gdjs.Level_32run_32testCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Level_32run_32testCode.GDplayer_95lookObjects1.length ;i < len;++i) {
    gdjs.Level_32run_32testCode.GDplayer_95lookObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.Level_32run_32testCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
gdjs.Level_32run_32testCode.GDplayer_95lookObjects1.createFrom(runtimeScene.getObjects("player_look"));

gdjs.Level_32run_32testCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_32run_32testCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_32run_32testCode.GDplayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Level_32run_32testCode.condition0IsTrue_0.val = true;
        gdjs.Level_32run_32testCode.GDplayerObjects1[k] = gdjs.Level_32run_32testCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.Level_32run_32testCode.GDplayerObjects1.length = k;}if (gdjs.Level_32run_32testCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Level_32run_32testCode.GDplayer_95lookObjects1.length ;i < len;++i) {
    gdjs.Level_32run_32testCode.GDplayer_95lookObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.Level_32run_32testCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.Level_32run_32testCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_32run_32testCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_32run_32testCode.GDplayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Level_32run_32testCode.condition0IsTrue_0.val = true;
        gdjs.Level_32run_32testCode.GDplayerObjects1[k] = gdjs.Level_32run_32testCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.Level_32run_32testCode.GDplayerObjects1.length = k;}if (gdjs.Level_32run_32testCode.condition0IsTrue_0.val) {

{ //Subevents

{

gdjs.Level_32run_32testCode.GDplayerObjects2.createFrom(gdjs.Level_32run_32testCode.GDplayerObjects1);
gdjs.Level_32run_32testCode.GDplayer_95lookObjects2.createFrom(runtimeScene.getObjects("player_look"));

gdjs.Level_32run_32testCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_32run_32testCode.GDplayerObjects2.length;i<l;++i) {
    if ( !(gdjs.Level_32run_32testCode.GDplayerObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.Level_32run_32testCode.condition0IsTrue_0.val = true;
        gdjs.Level_32run_32testCode.GDplayerObjects2[k] = gdjs.Level_32run_32testCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.Level_32run_32testCode.GDplayerObjects2.length = k;}if (gdjs.Level_32run_32testCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Level_32run_32testCode.GDplayer_95lookObjects2.length ;i < len;++i) {
    gdjs.Level_32run_32testCode.GDplayer_95lookObjects2[i].setAnimation(0);
}
}}

}


{

gdjs.Level_32run_32testCode.GDplayerObjects2.createFrom(gdjs.Level_32run_32testCode.GDplayerObjects1);
gdjs.Level_32run_32testCode.GDplayer_95lookObjects2.createFrom(runtimeScene.getObjects("player_look"));

gdjs.Level_32run_32testCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_32run_32testCode.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.Level_32run_32testCode.GDplayerObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.Level_32run_32testCode.condition0IsTrue_0.val = true;
        gdjs.Level_32run_32testCode.GDplayerObjects2[k] = gdjs.Level_32run_32testCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.Level_32run_32testCode.GDplayerObjects2.length = k;}if (gdjs.Level_32run_32testCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Level_32run_32testCode.GDplayer_95lookObjects2.length ;i < len;++i) {
    gdjs.Level_32run_32testCode.GDplayer_95lookObjects2[i].setAnimation(2);
}
}}

}

} //End of subevents
}

}


{

gdjs.Level_32run_32testCode.GDplayer_95lookObjects1.createFrom(runtimeScene.getObjects("player_look"));

gdjs.Level_32run_32testCode.condition0IsTrue_0.val = false;
{
gdjs.Level_32run_32testCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Level_32run_32testCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Level_32run_32testCode.GDplayer_95lookObjects1.length ;i < len;++i) {
    gdjs.Level_32run_32testCode.GDplayer_95lookObjects1[i].flipX(true);
}
}}

}


{

gdjs.Level_32run_32testCode.GDplayer_95lookObjects1.createFrom(runtimeScene.getObjects("player_look"));

gdjs.Level_32run_32testCode.condition0IsTrue_0.val = false;
{
gdjs.Level_32run_32testCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Level_32run_32testCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Level_32run_32testCode.GDplayer_95lookObjects1.length ;i < len;++i) {
    gdjs.Level_32run_32testCode.GDplayer_95lookObjects1[i].flipX(false);
}
}}

}


{

gdjs.Level_32run_32testCode.GDlevel_95outObjects1.createFrom(runtimeScene.getObjects("level_out"));
gdjs.Level_32run_32testCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.Level_32run_32testCode.condition0IsTrue_0.val = false;
{
gdjs.Level_32run_32testCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(context.clearEventsObjectsMap().addObjectsToEventsMap("player", gdjs.Level_32run_32testCode.GDplayerObjects1).getEventsObjectsMap(), context.clearEventsObjectsMap().addObjectsToEventsMap("level_out", gdjs.Level_32run_32testCode.GDlevel_95outObjects1).getEventsObjectsMap(), false, runtimeScene);
}if (gdjs.Level_32run_32testCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level out", false);
}}

}

return;
}
gdjs['Level_32run_32testCode']= gdjs.Level_32run_32testCode;
