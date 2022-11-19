gdjs.LevelCode = {};
gdjs.LevelCode.GDBackgroundObjects1= [];
gdjs.LevelCode.GDBackgroundObjects2= [];
gdjs.LevelCode.GDBackgroundObjects3= [];
gdjs.LevelCode.GDplayerObjects1= [];
gdjs.LevelCode.GDplayerObjects2= [];
gdjs.LevelCode.GDplayerObjects3= [];
gdjs.LevelCode.GDmachadoObjects1= [];
gdjs.LevelCode.GDmachadoObjects2= [];
gdjs.LevelCode.GDmachadoObjects3= [];
gdjs.LevelCode.GDTextLifeObjects1= [];
gdjs.LevelCode.GDTextLifeObjects2= [];
gdjs.LevelCode.GDTextLifeObjects3= [];
gdjs.LevelCode.GDlife_95barObjects1= [];
gdjs.LevelCode.GDlife_95barObjects2= [];
gdjs.LevelCode.GDlife_95barObjects3= [];
gdjs.LevelCode.GDScoreObjects1= [];
gdjs.LevelCode.GDScoreObjects2= [];
gdjs.LevelCode.GDScoreObjects3= [];
gdjs.LevelCode.GDMunicaoObjects1= [];
gdjs.LevelCode.GDMunicaoObjects2= [];
gdjs.LevelCode.GDMunicaoObjects3= [];
gdjs.LevelCode.GDCoracaoObjects1= [];
gdjs.LevelCode.GDCoracaoObjects2= [];
gdjs.LevelCode.GDCoracaoObjects3= [];
gdjs.LevelCode.GDEnemyObjects1= [];
gdjs.LevelCode.GDEnemyObjects2= [];
gdjs.LevelCode.GDEnemyObjects3= [];
gdjs.LevelCode.GDGameOverObjects1= [];
gdjs.LevelCode.GDGameOverObjects2= [];
gdjs.LevelCode.GDGameOverObjects3= [];
gdjs.LevelCode.GDmachado_95municaoObjects1= [];
gdjs.LevelCode.GDmachado_95municaoObjects2= [];
gdjs.LevelCode.GDmachado_95municaoObjects3= [];
gdjs.LevelCode.GDPowerUP_95varaObjects1= [];
gdjs.LevelCode.GDPowerUP_95varaObjects2= [];
gdjs.LevelCode.GDPowerUP_95varaObjects3= [];
gdjs.LevelCode.GDPowerUP_95giganteObjects1= [];
gdjs.LevelCode.GDPowerUP_95giganteObjects2= [];
gdjs.LevelCode.GDPowerUP_95giganteObjects3= [];
gdjs.LevelCode.GDenter_95to_95restartObjects1= [];
gdjs.LevelCode.GDenter_95to_95restartObjects2= [];
gdjs.LevelCode.GDenter_95to_95restartObjects3= [];

gdjs.LevelCode.conditionTrue_0 = {val:false};
gdjs.LevelCode.condition0IsTrue_0 = {val:false};
gdjs.LevelCode.condition1IsTrue_0 = {val:false};
gdjs.LevelCode.condition2IsTrue_0 = {val:false};
gdjs.LevelCode.condition3IsTrue_0 = {val:false};
gdjs.LevelCode.conditionTrue_1 = {val:false};
gdjs.LevelCode.condition0IsTrue_1 = {val:false};
gdjs.LevelCode.condition1IsTrue_1 = {val:false};
gdjs.LevelCode.condition2IsTrue_1 = {val:false};
gdjs.LevelCode.condition3IsTrue_1 = {val:false};


gdjs.LevelCode.eventsList0x749ffc = function(runtimeScene) {

{


gdjs.LevelCode.condition0IsTrue_0.val = false;
{
gdjs.LevelCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.LevelCode.condition0IsTrue_0.val) {
gdjs.LevelCode.GDGameOverObjects2.createFrom(runtimeScene.getObjects("GameOver"));
gdjs.LevelCode.GDenter_95to_95restartObjects2.createFrom(runtimeScene.getObjects("enter_to_restart"));
{for(var i = 0, len = gdjs.LevelCode.GDGameOverObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDGameOverObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.LevelCode.GDenter_95to_95restartObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDenter_95to_95restartObjects2[i].hide();
}
}}

}


{


{
gdjs.LevelCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
gdjs.LevelCode.GDMunicaoObjects1.createFrom(runtimeScene.getObjects("Municao"));
gdjs.LevelCode.GDPowerUP_95varaObjects1.createFrom(runtimeScene.getObjects("PowerUP_vara"));
gdjs.LevelCode.GDScoreObjects1.createFrom(runtimeScene.getObjects("Score"));
{for(var i = 0, len = gdjs.LevelCode.GDMunicaoObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDMunicaoObjects1[i].setString("Ammunition: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.LevelCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDScoreObjects1[i].setString("Score: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)));
}
}{for(var i = 0, len = gdjs.LevelCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDEnemyObjects1[i].setScale(2);
}
}{for(var i = 0, len = gdjs.LevelCode.GDPowerUP_95varaObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDPowerUP_95varaObjects1[i].setOpacity(125);
}
}}

}


}; //End of gdjs.LevelCode.eventsList0x749ffc
gdjs.LevelCode.eventsList0x765cfc = function(runtimeScene) {

{


{
gdjs.LevelCode.GDplayerObjects2.createFrom(runtimeScene.getObjects("player"));
{gdjs.evtTools.camera.centerCameraWithinLimits(runtimeScene, (gdjs.LevelCode.GDplayerObjects2.length !== 0 ? gdjs.LevelCode.GDplayerObjects2[0] : null), -(859), -(891), 1605, 1573, true, "", 0);
}}

}


{



}


}; //End of gdjs.LevelCode.eventsList0x765cfc
gdjs.LevelCode.eventsList0x764234 = function(runtimeScene) {

{


{
gdjs.LevelCode.GDCoracaoObjects1.createFrom(runtimeScene.getObjects("Coracao"));
gdjs.LevelCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
gdjs.LevelCode.GDPowerUP_95giganteObjects1.createFrom(runtimeScene.getObjects("PowerUP_gigante"));
gdjs.LevelCode.GDPowerUP_95varaObjects1.createFrom(runtimeScene.getObjects("PowerUP_vara"));
gdjs.LevelCode.GDmachadoObjects1.createFrom(runtimeScene.getObjects("machado"));
gdjs.LevelCode.GDmachado_95municaoObjects1.createFrom(runtimeScene.getObjects("machado_municao"));
{for(var i = 0, len = gdjs.LevelCode.GDmachadoObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDmachadoObjects1[i].setZOrder(3);
}
}{for(var i = 0, len = gdjs.LevelCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDEnemyObjects1[i].setZOrder(3);
}
}{for(var i = 0, len = gdjs.LevelCode.GDmachado_95municaoObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDmachado_95municaoObjects1[i].setZOrder(3);
}
}{for(var i = 0, len = gdjs.LevelCode.GDPowerUP_95varaObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDPowerUP_95varaObjects1[i].setZOrder(3);
}
}{for(var i = 0, len = gdjs.LevelCode.GDPowerUP_95giganteObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDPowerUP_95giganteObjects1[i].setZOrder(3);
}
}{for(var i = 0, len = gdjs.LevelCode.GDCoracaoObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDCoracaoObjects1[i].setZOrder(3);
}
}}

}


}; //End of gdjs.LevelCode.eventsList0x764234
gdjs.LevelCode.eventsList0x6b76ec = function(runtimeScene) {

{

gdjs.LevelCode.GDplayerObjects2.createFrom(runtimeScene.getObjects("player"));

gdjs.LevelCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.LevelCode.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.LevelCode.GDplayerObjects2[i].getX() <= -(766) ) {
        gdjs.LevelCode.condition0IsTrue_0.val = true;
        gdjs.LevelCode.GDplayerObjects2[k] = gdjs.LevelCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.LevelCode.GDplayerObjects2.length = k;}if (gdjs.LevelCode.condition0IsTrue_0.val) {
/* Reuse gdjs.LevelCode.GDplayerObjects2 */
{for(var i = 0, len = gdjs.LevelCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDplayerObjects2[i].setX(-(766));
}
}}

}


{

gdjs.LevelCode.GDplayerObjects2.createFrom(runtimeScene.getObjects("player"));

gdjs.LevelCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.LevelCode.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.LevelCode.GDplayerObjects2[i].getX() >= 1474 ) {
        gdjs.LevelCode.condition0IsTrue_0.val = true;
        gdjs.LevelCode.GDplayerObjects2[k] = gdjs.LevelCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.LevelCode.GDplayerObjects2.length = k;}if (gdjs.LevelCode.condition0IsTrue_0.val) {
/* Reuse gdjs.LevelCode.GDplayerObjects2 */
{for(var i = 0, len = gdjs.LevelCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDplayerObjects2[i].setX(1474);
}
}}

}


{

gdjs.LevelCode.GDplayerObjects2.createFrom(runtimeScene.getObjects("player"));

gdjs.LevelCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.LevelCode.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.LevelCode.GDplayerObjects2[i].getY() <= -(715) ) {
        gdjs.LevelCode.condition0IsTrue_0.val = true;
        gdjs.LevelCode.GDplayerObjects2[k] = gdjs.LevelCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.LevelCode.GDplayerObjects2.length = k;}if (gdjs.LevelCode.condition0IsTrue_0.val) {
/* Reuse gdjs.LevelCode.GDplayerObjects2 */
{for(var i = 0, len = gdjs.LevelCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDplayerObjects2[i].setY(-(715));
}
}}

}


{

gdjs.LevelCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.LevelCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.LevelCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.LevelCode.GDplayerObjects1[i].getY() >= 1400 ) {
        gdjs.LevelCode.condition0IsTrue_0.val = true;
        gdjs.LevelCode.GDplayerObjects1[k] = gdjs.LevelCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.LevelCode.GDplayerObjects1.length = k;}if (gdjs.LevelCode.condition0IsTrue_0.val) {
/* Reuse gdjs.LevelCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.LevelCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDplayerObjects1[i].setY(1400);
}
}}

}


}; //End of gdjs.LevelCode.eventsList0x6b76ec
gdjs.LevelCode.eventsList0x6b34ac = function(runtimeScene) {

{


gdjs.LevelCode.condition0IsTrue_0.val = false;
{
{gdjs.LevelCode.conditionTrue_1 = gdjs.LevelCode.condition0IsTrue_0;
gdjs.LevelCode.condition0IsTrue_1.val = false;
gdjs.LevelCode.condition1IsTrue_1.val = false;
{
gdjs.LevelCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if( gdjs.LevelCode.condition0IsTrue_1.val ) {
    gdjs.LevelCode.conditionTrue_1.val = true;
}
}
{
gdjs.LevelCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if( gdjs.LevelCode.condition1IsTrue_1.val ) {
    gdjs.LevelCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.LevelCode.condition0IsTrue_0.val) {
gdjs.LevelCode.GDplayerObjects2.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.LevelCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDplayerObjects2[i].setY(gdjs.LevelCode.GDplayerObjects2[i].getY() - (5));
}
}}

}


{


gdjs.LevelCode.condition0IsTrue_0.val = false;
{
{gdjs.LevelCode.conditionTrue_1 = gdjs.LevelCode.condition0IsTrue_0;
gdjs.LevelCode.condition0IsTrue_1.val = false;
gdjs.LevelCode.condition1IsTrue_1.val = false;
{
gdjs.LevelCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if( gdjs.LevelCode.condition0IsTrue_1.val ) {
    gdjs.LevelCode.conditionTrue_1.val = true;
}
}
{
gdjs.LevelCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if( gdjs.LevelCode.condition1IsTrue_1.val ) {
    gdjs.LevelCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.LevelCode.condition0IsTrue_0.val) {
gdjs.LevelCode.GDplayerObjects2.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.LevelCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDplayerObjects2[i].setY(gdjs.LevelCode.GDplayerObjects2[i].getY() + (5));
}
}}

}


{


gdjs.LevelCode.condition0IsTrue_0.val = false;
{
{gdjs.LevelCode.conditionTrue_1 = gdjs.LevelCode.condition0IsTrue_0;
gdjs.LevelCode.condition0IsTrue_1.val = false;
gdjs.LevelCode.condition1IsTrue_1.val = false;
{
gdjs.LevelCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.LevelCode.condition0IsTrue_1.val ) {
    gdjs.LevelCode.conditionTrue_1.val = true;
}
}
{
gdjs.LevelCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if( gdjs.LevelCode.condition1IsTrue_1.val ) {
    gdjs.LevelCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.LevelCode.condition0IsTrue_0.val) {
gdjs.LevelCode.GDplayerObjects2.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.LevelCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDplayerObjects2[i].setX(gdjs.LevelCode.GDplayerObjects2[i].getX() - (5));
}
}}

}


{


gdjs.LevelCode.condition0IsTrue_0.val = false;
{
{gdjs.LevelCode.conditionTrue_1 = gdjs.LevelCode.condition0IsTrue_0;
gdjs.LevelCode.condition0IsTrue_1.val = false;
gdjs.LevelCode.condition1IsTrue_1.val = false;
{
gdjs.LevelCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.LevelCode.condition0IsTrue_1.val ) {
    gdjs.LevelCode.conditionTrue_1.val = true;
}
}
{
gdjs.LevelCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if( gdjs.LevelCode.condition1IsTrue_1.val ) {
    gdjs.LevelCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.LevelCode.condition0IsTrue_0.val) {
gdjs.LevelCode.GDplayerObjects2.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.LevelCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDplayerObjects2[i].setX(gdjs.LevelCode.GDplayerObjects2[i].getX() + (5));
}
}}

}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Bounds"); }gdjs.LevelCode.eventsList0x6b76ec(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Bounds"); }
}


}; //End of gdjs.LevelCode.eventsList0x6b34ac
gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDmachadoObjects1Objects = Hashtable.newFrom({"machado": gdjs.LevelCode.GDmachadoObjects1});gdjs.LevelCode.eventsList0x763c0c = function(runtimeScene) {

{


gdjs.LevelCode.condition0IsTrue_0.val = false;
gdjs.LevelCode.condition1IsTrue_0.val = false;
gdjs.LevelCode.condition2IsTrue_0.val = false;
{
gdjs.LevelCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.LevelCode.condition0IsTrue_0.val ) {
{
gdjs.LevelCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "cooldown");
}if ( gdjs.LevelCode.condition1IsTrue_0.val ) {
{
gdjs.LevelCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) >= 1;
}}
}
if (gdjs.LevelCode.condition2IsTrue_0.val) {
gdjs.LevelCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
gdjs.LevelCode.GDmachadoObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDmachadoObjects1Objects, (( gdjs.LevelCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.LevelCode.GDplayerObjects1[0].getPointX("Shoot")), (( gdjs.LevelCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.LevelCode.GDplayerObjects1[0].getPointY("Shoot")), "");
}{for(var i = 0, len = gdjs.LevelCode.GDmachadoObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDmachadoObjects1[i].addForceTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "base layer", 1), gdjs.evtTools.input.getMouseY(runtimeScene, "base layer", 1), 400, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "cooldown");
}{runtimeScene.getVariables().getFromIndex(0).sub(1);
}}

}


}; //End of gdjs.LevelCode.eventsList0x763c0c
gdjs.LevelCode.eventsList0x764774 = function(runtimeScene) {

{


gdjs.LevelCode.condition0IsTrue_0.val = false;
{
{gdjs.LevelCode.conditionTrue_1 = gdjs.LevelCode.condition0IsTrue_0;
gdjs.LevelCode.condition0IsTrue_1.val = false;
gdjs.LevelCode.condition1IsTrue_1.val = false;
{
gdjs.LevelCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.LevelCode.condition0IsTrue_1.val ) {
    gdjs.LevelCode.conditionTrue_1.val = true;
}
}
{
gdjs.LevelCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if( gdjs.LevelCode.condition1IsTrue_1.val ) {
    gdjs.LevelCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.LevelCode.condition0IsTrue_0.val) {
gdjs.LevelCode.GDplayerObjects2.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.LevelCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDplayerObjects2[i].flipX(true);
}
}}

}


{


gdjs.LevelCode.condition0IsTrue_0.val = false;
{
{gdjs.LevelCode.conditionTrue_1 = gdjs.LevelCode.condition0IsTrue_0;
gdjs.LevelCode.condition0IsTrue_1.val = false;
gdjs.LevelCode.condition1IsTrue_1.val = false;
{
gdjs.LevelCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.LevelCode.condition0IsTrue_1.val ) {
    gdjs.LevelCode.conditionTrue_1.val = true;
}
}
{
gdjs.LevelCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if( gdjs.LevelCode.condition1IsTrue_1.val ) {
    gdjs.LevelCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.LevelCode.condition0IsTrue_0.val) {
gdjs.LevelCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.LevelCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDplayerObjects1[i].flipX(false);
}
}}

}


}; //End of gdjs.LevelCode.eventsList0x764774
gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.LevelCode.GDEnemyObjects2});gdjs.LevelCode.eventsList0x764d0c = function(runtimeScene) {

{


gdjs.LevelCode.condition0IsTrue_0.val = false;
{
gdjs.LevelCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)), "Enemy_spawn");
}if (gdjs.LevelCode.condition0IsTrue_0.val) {
gdjs.LevelCode.GDEnemyObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDEnemyObjects2Objects, gdjs.randomInRange(-(766), 1474), gdjs.randomInRange(-(715), 1400), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Enemy_spawn");
}}

}


{


{
gdjs.LevelCode.GDEnemyObjects2.createFrom(runtimeScene.getObjects("Enemy"));
gdjs.LevelCode.GDplayerObjects2.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.LevelCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDEnemyObjects2[i].addForceTowardObject((gdjs.LevelCode.GDplayerObjects2.length !== 0 ? gdjs.LevelCode.GDplayerObjects2[0] : null), 150, 0);
}
}}

}


{



}


}; //End of gdjs.LevelCode.eventsList0x764d0c
gdjs.LevelCode.eventsList0x6d3344 = function(runtimeScene) {

{


gdjs.LevelCode.condition0IsTrue_0.val = false;
{
{gdjs.LevelCode.conditionTrue_1 = gdjs.LevelCode.condition0IsTrue_0;
gdjs.LevelCode.condition0IsTrue_1.val = false;
gdjs.LevelCode.condition1IsTrue_1.val = false;
{
gdjs.LevelCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if( gdjs.LevelCode.condition0IsTrue_1.val ) {
    gdjs.LevelCode.conditionTrue_1.val = true;
}
}
{
gdjs.LevelCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
if( gdjs.LevelCode.condition1IsTrue_1.val ) {
    gdjs.LevelCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.LevelCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level", false);
}}

}


}; //End of gdjs.LevelCode.eventsList0x6d3344
gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.LevelCode.GDEnemyObjects1});gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.LevelCode.GDplayerObjects1});gdjs.LevelCode.eventsList0x6b43dc = function(runtimeScene) {

{


gdjs.LevelCode.condition0IsTrue_0.val = false;
{
{gdjs.LevelCode.conditionTrue_1 = gdjs.LevelCode.condition0IsTrue_0;
gdjs.LevelCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7030156);
}
}if (gdjs.LevelCode.condition0IsTrue_0.val) {
gdjs.LevelCode.GDlife_95barObjects1.createFrom(runtimeScene.getObjects("life_bar"));
{for(var i = 0, len = gdjs.LevelCode.GDlife_95barObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDlife_95barObjects1[i].setScaleX(gdjs.LevelCode.GDlife_95barObjects1[i].getScaleX() - (0.1));
}
}{runtimeScene.getVariables().getFromIndex(2).setString("false");
}{runtimeScene.getVariables().getFromIndex(3).setString("false");
}}

}


}; //End of gdjs.LevelCode.eventsList0x6b43dc
gdjs.LevelCode.eventsList0x6d3274 = function(runtimeScene) {

{


gdjs.LevelCode.condition0IsTrue_0.val = false;
{
gdjs.LevelCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(5)) == "true";
}if (gdjs.LevelCode.condition0IsTrue_0.val) {
gdjs.LevelCode.GDGameOverObjects2.createFrom(runtimeScene.getObjects("GameOver"));
gdjs.LevelCode.GDenter_95to_95restartObjects2.createFrom(runtimeScene.getObjects("enter_to_restart"));
gdjs.LevelCode.GDplayerObjects2.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.LevelCode.GDGameOverObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDGameOverObjects2[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}{for(var i = 0, len = gdjs.LevelCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDplayerObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.LevelCode.GDenter_95to_95restartObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDenter_95to_95restartObjects2[i].hide(false);
}
}
{ //Subevents
gdjs.LevelCode.eventsList0x6d3344(runtimeScene);} //End of subevents
}

}


{

gdjs.LevelCode.GDlife_95barObjects2.createFrom(runtimeScene.getObjects("life_bar"));

gdjs.LevelCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.LevelCode.GDlife_95barObjects2.length;i<l;++i) {
    if ( gdjs.LevelCode.GDlife_95barObjects2[i].getScaleX() <= 0.05 ) {
        gdjs.LevelCode.condition0IsTrue_0.val = true;
        gdjs.LevelCode.GDlife_95barObjects2[k] = gdjs.LevelCode.GDlife_95barObjects2[i];
        ++k;
    }
}
gdjs.LevelCode.GDlife_95barObjects2.length = k;}if (gdjs.LevelCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(5).setString("true");
}}

}


{

gdjs.LevelCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
gdjs.LevelCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.LevelCode.condition0IsTrue_0.val = false;
{
gdjs.LevelCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDEnemyObjects1Objects, gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDplayerObjects1Objects, false, runtimeScene, false);
}if (gdjs.LevelCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.LevelCode.eventsList0x6b43dc(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.LevelCode.eventsList0x6d3274
gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDmachadoObjects2Objects = Hashtable.newFrom({"machado": gdjs.LevelCode.GDmachadoObjects2});gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.LevelCode.GDEnemyObjects2});gdjs.LevelCode.eventsList0x6cfe6c = function(runtimeScene) {

{


gdjs.LevelCode.condition0IsTrue_0.val = false;
{
gdjs.LevelCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(2)) == "false";
}if (gdjs.LevelCode.condition0IsTrue_0.val) {
/* Reuse gdjs.LevelCode.GDmachadoObjects2 */
{for(var i = 0, len = gdjs.LevelCode.GDmachadoObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDmachadoObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


}; //End of gdjs.LevelCode.eventsList0x6cfe6c
gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDPowerUP_9595varaObjects2Objects = Hashtable.newFrom({"PowerUP_vara": gdjs.LevelCode.GDPowerUP_95varaObjects2});gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDPowerUP_9595varaObjects2Objects = Hashtable.newFrom({"PowerUP_vara": gdjs.LevelCode.GDPowerUP_95varaObjects2});gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDPowerUP_9595giganteObjects2Objects = Hashtable.newFrom({"PowerUP_gigante": gdjs.LevelCode.GDPowerUP_95giganteObjects2});gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDPowerUP_9595giganteObjects2Objects = Hashtable.newFrom({"PowerUP_gigante": gdjs.LevelCode.GDPowerUP_95giganteObjects2});gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDplayerObjects2Objects = Hashtable.newFrom({"player": gdjs.LevelCode.GDplayerObjects2});gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDPowerUP_9595giganteObjects2Objects = Hashtable.newFrom({"PowerUP_gigante": gdjs.LevelCode.GDPowerUP_95giganteObjects2});gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.LevelCode.GDplayerObjects1});gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDPowerUP_9595varaObjects1Objects = Hashtable.newFrom({"PowerUP_vara": gdjs.LevelCode.GDPowerUP_95varaObjects1});gdjs.LevelCode.eventsList0x6cfd9c = function(runtimeScene) {

{

gdjs.LevelCode.GDEnemyObjects2.createFrom(runtimeScene.getObjects("Enemy"));
gdjs.LevelCode.GDmachadoObjects2.createFrom(runtimeScene.getObjects("machado"));

gdjs.LevelCode.condition0IsTrue_0.val = false;
{
gdjs.LevelCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDmachadoObjects2Objects, gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDEnemyObjects2Objects, false, runtimeScene, false);
}if (gdjs.LevelCode.condition0IsTrue_0.val) {
/* Reuse gdjs.LevelCode.GDEnemyObjects2 */
{for(var i = 0, len = gdjs.LevelCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDEnemyObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(1).add(100);
}
{ //Subevents
gdjs.LevelCode.eventsList0x6cfe6c(runtimeScene);} //End of subevents
}

}


{


gdjs.LevelCode.condition0IsTrue_0.val = false;
{
gdjs.LevelCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(3)) == "true";
}if (gdjs.LevelCode.condition0IsTrue_0.val) {
gdjs.LevelCode.GDmachadoObjects2.createFrom(runtimeScene.getObjects("machado"));
{for(var i = 0, len = gdjs.LevelCode.GDmachadoObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDmachadoObjects2[i].setScale(3);
}
}}

}


{

gdjs.LevelCode.GDPowerUP_95varaObjects2.createFrom(runtimeScene.getObjects("PowerUP_vara"));

gdjs.LevelCode.condition0IsTrue_0.val = false;
gdjs.LevelCode.condition1IsTrue_0.val = false;
gdjs.LevelCode.condition2IsTrue_0.val = false;
{
gdjs.LevelCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 10, "P_UP1");
}if ( gdjs.LevelCode.condition0IsTrue_0.val ) {
{
gdjs.LevelCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(2)) == "false";
}if ( gdjs.LevelCode.condition1IsTrue_0.val ) {
{
gdjs.LevelCode.condition2IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDPowerUP_9595varaObjects2Objects) == 0;
}}
}
if (gdjs.LevelCode.condition2IsTrue_0.val) {
/* Reuse gdjs.LevelCode.GDPowerUP_95varaObjects2 */
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDPowerUP_9595varaObjects2Objects, gdjs.randomInRange(-(766), 1474), gdjs.randomInRange(-(715), 1400), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "P_UP1");
}}

}


{

gdjs.LevelCode.GDPowerUP_95giganteObjects2.createFrom(runtimeScene.getObjects("PowerUP_gigante"));

gdjs.LevelCode.condition0IsTrue_0.val = false;
gdjs.LevelCode.condition1IsTrue_0.val = false;
gdjs.LevelCode.condition2IsTrue_0.val = false;
{
gdjs.LevelCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 10, "P_UP2");
}if ( gdjs.LevelCode.condition0IsTrue_0.val ) {
{
gdjs.LevelCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(3)) == "false";
}if ( gdjs.LevelCode.condition1IsTrue_0.val ) {
{
gdjs.LevelCode.condition2IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDPowerUP_9595giganteObjects2Objects) == 0;
}}
}
if (gdjs.LevelCode.condition2IsTrue_0.val) {
/* Reuse gdjs.LevelCode.GDPowerUP_95giganteObjects2 */
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDPowerUP_9595giganteObjects2Objects, gdjs.randomInRange(-(766), 1474), gdjs.randomInRange(-(715), 1400), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "P_UP2");
}}

}


{

gdjs.LevelCode.GDPowerUP_95giganteObjects2.createFrom(runtimeScene.getObjects("PowerUP_gigante"));
gdjs.LevelCode.GDplayerObjects2.createFrom(runtimeScene.getObjects("player"));

gdjs.LevelCode.condition0IsTrue_0.val = false;
{
gdjs.LevelCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDplayerObjects2Objects, gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDPowerUP_9595giganteObjects2Objects, false, runtimeScene, false);
}if (gdjs.LevelCode.condition0IsTrue_0.val) {
/* Reuse gdjs.LevelCode.GDPowerUP_95giganteObjects2 */
{for(var i = 0, len = gdjs.LevelCode.GDPowerUP_95giganteObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDPowerUP_95giganteObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(3).setString("true");
}}

}


{

gdjs.LevelCode.GDPowerUP_95varaObjects1.createFrom(runtimeScene.getObjects("PowerUP_vara"));
gdjs.LevelCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.LevelCode.condition0IsTrue_0.val = false;
{
gdjs.LevelCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDplayerObjects1Objects, gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDPowerUP_9595varaObjects1Objects, false, runtimeScene, false);
}if (gdjs.LevelCode.condition0IsTrue_0.val) {
/* Reuse gdjs.LevelCode.GDPowerUP_95varaObjects1 */
{for(var i = 0, len = gdjs.LevelCode.GDPowerUP_95varaObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDPowerUP_95varaObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(2).setString("true");
}}

}


}; //End of gdjs.LevelCode.eventsList0x6cfd9c
gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDCoracaoObjects2Objects = Hashtable.newFrom({"Coracao": gdjs.LevelCode.GDCoracaoObjects2});gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDplayerObjects2Objects = Hashtable.newFrom({"player": gdjs.LevelCode.GDplayerObjects2});gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDCoracaoObjects2Objects = Hashtable.newFrom({"Coracao": gdjs.LevelCode.GDCoracaoObjects2});gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDmachado_9595municaoObjects2Objects = Hashtable.newFrom({"machado_municao": gdjs.LevelCode.GDmachado_95municaoObjects2});gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.LevelCode.GDplayerObjects1});gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDmachado_9595municaoObjects1Objects = Hashtable.newFrom({"machado_municao": gdjs.LevelCode.GDmachado_95municaoObjects1});gdjs.LevelCode.eventsList0x766e1c = function(runtimeScene) {

{


gdjs.LevelCode.condition0IsTrue_0.val = false;
{
gdjs.LevelCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 10, "Heart_spawn");
}if (gdjs.LevelCode.condition0IsTrue_0.val) {
gdjs.LevelCode.GDCoracaoObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDCoracaoObjects2Objects, gdjs.randomInRange(-(766), 1474), gdjs.randomInRange(-(715), 1400), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Heart_spawn");
}}

}


{

gdjs.LevelCode.GDCoracaoObjects2.createFrom(runtimeScene.getObjects("Coracao"));
gdjs.LevelCode.GDplayerObjects2.createFrom(runtimeScene.getObjects("player"));

gdjs.LevelCode.condition0IsTrue_0.val = false;
{
gdjs.LevelCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDplayerObjects2Objects, gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDCoracaoObjects2Objects, false, runtimeScene, false);
}if (gdjs.LevelCode.condition0IsTrue_0.val) {
/* Reuse gdjs.LevelCode.GDCoracaoObjects2 */
gdjs.LevelCode.GDlife_95barObjects2.createFrom(runtimeScene.getObjects("life_bar"));
{for(var i = 0, len = gdjs.LevelCode.GDlife_95barObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDlife_95barObjects2[i].setScaleX(gdjs.LevelCode.GDlife_95barObjects2[i].getScaleX() + (0.1));
}
}{runtimeScene.getVariables().getFromIndex(1).add(500);
}{for(var i = 0, len = gdjs.LevelCode.GDCoracaoObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDCoracaoObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.LevelCode.condition0IsTrue_0.val = false;
{
gdjs.LevelCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "Ammo_spawn");
}if (gdjs.LevelCode.condition0IsTrue_0.val) {
gdjs.LevelCode.GDmachado_95municaoObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDmachado_9595municaoObjects2Objects, gdjs.randomInRange(-(766), 1474), gdjs.randomInRange(-(715), 1400), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Ammo_spawn");
}}

}


{

gdjs.LevelCode.GDmachado_95municaoObjects1.createFrom(runtimeScene.getObjects("machado_municao"));
gdjs.LevelCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.LevelCode.condition0IsTrue_0.val = false;
{
gdjs.LevelCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDplayerObjects1Objects, gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDmachado_9595municaoObjects1Objects, false, runtimeScene, false);
}if (gdjs.LevelCode.condition0IsTrue_0.val) {
/* Reuse gdjs.LevelCode.GDmachado_95municaoObjects1 */
{runtimeScene.getVariables().getFromIndex(0).add(1);
}{runtimeScene.getVariables().getFromIndex(1).add(500);
}{for(var i = 0, len = gdjs.LevelCode.GDmachado_95municaoObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDmachado_95municaoObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


}; //End of gdjs.LevelCode.eventsList0x766e1c
gdjs.LevelCode.eventsList0xb4be0 = function(runtimeScene) {

{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Adjusts and HUD"); }gdjs.LevelCode.eventsList0x749ffc(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Adjusts and HUD"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Camera"); }gdjs.LevelCode.eventsList0x765cfc(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Camera"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Z order"); }gdjs.LevelCode.eventsList0x764234(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Z order"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Controls"); }gdjs.LevelCode.eventsList0x6b34ac(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Controls"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Shoot"); }gdjs.LevelCode.eventsList0x763c0c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Shoot"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Animation"); }gdjs.LevelCode.eventsList0x764774(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Animation"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Creating Enemies"); }gdjs.LevelCode.eventsList0x764d0c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Creating Enemies"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Death"); }gdjs.LevelCode.eventsList0x6d3274(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Death"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Damaging Enemies and PowerUPs"); }gdjs.LevelCode.eventsList0x6cfd9c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Damaging Enemies and PowerUPs"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Spawning PowerUPs"); }gdjs.LevelCode.eventsList0x766e1c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Spawning PowerUPs"); }
}


{



}


}; //End of gdjs.LevelCode.eventsList0xb4be0


gdjs.LevelCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LevelCode.GDBackgroundObjects1.length = 0;
gdjs.LevelCode.GDBackgroundObjects2.length = 0;
gdjs.LevelCode.GDBackgroundObjects3.length = 0;
gdjs.LevelCode.GDplayerObjects1.length = 0;
gdjs.LevelCode.GDplayerObjects2.length = 0;
gdjs.LevelCode.GDplayerObjects3.length = 0;
gdjs.LevelCode.GDmachadoObjects1.length = 0;
gdjs.LevelCode.GDmachadoObjects2.length = 0;
gdjs.LevelCode.GDmachadoObjects3.length = 0;
gdjs.LevelCode.GDTextLifeObjects1.length = 0;
gdjs.LevelCode.GDTextLifeObjects2.length = 0;
gdjs.LevelCode.GDTextLifeObjects3.length = 0;
gdjs.LevelCode.GDlife_95barObjects1.length = 0;
gdjs.LevelCode.GDlife_95barObjects2.length = 0;
gdjs.LevelCode.GDlife_95barObjects3.length = 0;
gdjs.LevelCode.GDScoreObjects1.length = 0;
gdjs.LevelCode.GDScoreObjects2.length = 0;
gdjs.LevelCode.GDScoreObjects3.length = 0;
gdjs.LevelCode.GDMunicaoObjects1.length = 0;
gdjs.LevelCode.GDMunicaoObjects2.length = 0;
gdjs.LevelCode.GDMunicaoObjects3.length = 0;
gdjs.LevelCode.GDCoracaoObjects1.length = 0;
gdjs.LevelCode.GDCoracaoObjects2.length = 0;
gdjs.LevelCode.GDCoracaoObjects3.length = 0;
gdjs.LevelCode.GDEnemyObjects1.length = 0;
gdjs.LevelCode.GDEnemyObjects2.length = 0;
gdjs.LevelCode.GDEnemyObjects3.length = 0;
gdjs.LevelCode.GDGameOverObjects1.length = 0;
gdjs.LevelCode.GDGameOverObjects2.length = 0;
gdjs.LevelCode.GDGameOverObjects3.length = 0;
gdjs.LevelCode.GDmachado_95municaoObjects1.length = 0;
gdjs.LevelCode.GDmachado_95municaoObjects2.length = 0;
gdjs.LevelCode.GDmachado_95municaoObjects3.length = 0;
gdjs.LevelCode.GDPowerUP_95varaObjects1.length = 0;
gdjs.LevelCode.GDPowerUP_95varaObjects2.length = 0;
gdjs.LevelCode.GDPowerUP_95varaObjects3.length = 0;
gdjs.LevelCode.GDPowerUP_95giganteObjects1.length = 0;
gdjs.LevelCode.GDPowerUP_95giganteObjects2.length = 0;
gdjs.LevelCode.GDPowerUP_95giganteObjects3.length = 0;
gdjs.LevelCode.GDenter_95to_95restartObjects1.length = 0;
gdjs.LevelCode.GDenter_95to_95restartObjects2.length = 0;
gdjs.LevelCode.GDenter_95to_95restartObjects3.length = 0;

gdjs.LevelCode.eventsList0xb4be0(runtimeScene);
return;

}
gdjs['LevelCode'] = gdjs.LevelCode;
