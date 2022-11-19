gdjs.Willy_32Stage_326Code = {};
gdjs.Willy_32Stage_326Code.GDScoreObjects1= [];
gdjs.Willy_32Stage_326Code.GDScoreObjects2= [];
gdjs.Willy_32Stage_326Code.GDScoreObjects3= [];
gdjs.Willy_32Stage_326Code.GDScoreObjects4= [];
gdjs.Willy_32Stage_326Code.GDbackgroundObjects1= [];
gdjs.Willy_32Stage_326Code.GDbackgroundObjects2= [];
gdjs.Willy_32Stage_326Code.GDbackgroundObjects3= [];
gdjs.Willy_32Stage_326Code.GDbackgroundObjects4= [];
gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects1= [];
gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2= [];
gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects3= [];
gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects4= [];
gdjs.Willy_32Stage_326Code.GDGroundObjects1= [];
gdjs.Willy_32Stage_326Code.GDGroundObjects2= [];
gdjs.Willy_32Stage_326Code.GDGroundObjects3= [];
gdjs.Willy_32Stage_326Code.GDGroundObjects4= [];
gdjs.Willy_32Stage_326Code.GDDoorObjects1= [];
gdjs.Willy_32Stage_326Code.GDDoorObjects2= [];
gdjs.Willy_32Stage_326Code.GDDoorObjects3= [];
gdjs.Willy_32Stage_326Code.GDDoorObjects4= [];
gdjs.Willy_32Stage_326Code.GDEnemyObjects1= [];
gdjs.Willy_32Stage_326Code.GDEnemyObjects2= [];
gdjs.Willy_32Stage_326Code.GDEnemyObjects3= [];
gdjs.Willy_32Stage_326Code.GDEnemyObjects4= [];
gdjs.Willy_32Stage_326Code.GDDropObjects1= [];
gdjs.Willy_32Stage_326Code.GDDropObjects2= [];
gdjs.Willy_32Stage_326Code.GDDropObjects3= [];
gdjs.Willy_32Stage_326Code.GDDropObjects4= [];
gdjs.Willy_32Stage_326Code.GDOBSObjects1= [];
gdjs.Willy_32Stage_326Code.GDOBSObjects2= [];
gdjs.Willy_32Stage_326Code.GDOBSObjects3= [];
gdjs.Willy_32Stage_326Code.GDOBSObjects4= [];
gdjs.Willy_32Stage_326Code.GDscoringObjects1= [];
gdjs.Willy_32Stage_326Code.GDscoringObjects2= [];
gdjs.Willy_32Stage_326Code.GDscoringObjects3= [];
gdjs.Willy_32Stage_326Code.GDscoringObjects4= [];

gdjs.Willy_32Stage_326Code.conditionTrue_0 = {val:false};
gdjs.Willy_32Stage_326Code.condition0IsTrue_0 = {val:false};
gdjs.Willy_32Stage_326Code.condition1IsTrue_0 = {val:false};
gdjs.Willy_32Stage_326Code.condition2IsTrue_0 = {val:false};


gdjs.Willy_32Stage_326Code.eventsList0x95d70c = function(runtimeScene) {

{


gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val = false;
{
gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1.7, "", 0);
}{gdjs.evtTools.camera.setCameraX(runtimeScene, 120, "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, 270, "", 0);
}}

}


{

gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects1.createFrom(runtimeScene.getObjects("Player_MegaMan"));

gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects1.length;i<l;++i) {
    if ( gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects1[i].getX() >= 120 ) {
        gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val = true;
        gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects1[k] = gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects1[i];
        ++k;
    }
}
gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects1.length = k;}if (gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects1 */
{gdjs.evtTools.camera.centerCameraWithinLimits(runtimeScene, (gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects1.length !== 0 ? gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects1[0] : null), 0, 150, 1580, 330, true, "", 0);
}}

}


}; //End of gdjs.Willy_32Stage_326Code.eventsList0x95d70c
gdjs.Willy_32Stage_326Code.eventsList0x92ec5c = function(runtimeScene) {

{

gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects3.createFrom(gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2);


gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects3.length;i<l;++i) {
    if ( gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects3[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val = true;
        gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects3[k] = gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects3[i];
        ++k;
    }
}
gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects3.length = k;}if (gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects3 */
{for(var i = 0, len = gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects3.length ;i < len;++i) {
    gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects3[i].setAnimationName("Running");
}
}}

}


{

/* Reuse gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2 */

gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2.length;i<l;++i) {
    if ( !(gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val = true;
        gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2[k] = gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2[i];
        ++k;
    }
}
gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2.length = k;}if (gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2 */
{for(var i = 0, len = gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2.length ;i < len;++i) {
    gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2[i].setAnimationName("Idle");
}
}}

}


}; //End of gdjs.Willy_32Stage_326Code.eventsList0x92ec5c
gdjs.Willy_32Stage_326Code.mapOfGDgdjs_46Willy_9532Stage_95326Code_46GDDropObjects1Objects = Hashtable.newFrom({"Drop": gdjs.Willy_32Stage_326Code.GDDropObjects1});gdjs.Willy_32Stage_326Code.mapOfGDgdjs_46Willy_9532Stage_95326Code_46GDGroundObjects1Objects = Hashtable.newFrom({"Ground": gdjs.Willy_32Stage_326Code.GDGroundObjects1});gdjs.Willy_32Stage_326Code.eventsList0x9255c4 = function(runtimeScene) {

{

gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2.createFrom(runtimeScene.getObjects("Player_MegaMan"));

gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2.length;i<l;++i) {
    if ( gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val = true;
        gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2[k] = gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2[i];
        ++k;
    }
}
gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2.length = k;}if (gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2 */
{for(var i = 0, len = gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2.length ;i < len;++i) {
    gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2[i].setAnimationName("Jump");
}
}}

}


{

gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2.createFrom(runtimeScene.getObjects("Player_MegaMan"));

gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2.length;i<l;++i) {
    if ( gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val = true;
        gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2[k] = gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2[i];
        ++k;
    }
}
gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2.length = k;}if (gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Willy_32Stage_326Code.eventsList0x92ec5c(runtimeScene);} //End of subevents
}

}


{


gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val = false;
{
gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val) {
gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2.createFrom(runtimeScene.getObjects("Player_MegaMan"));
{for(var i = 0, len = gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2.length ;i < len;++i) {
    gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2[i].flipX(true);
}
}}

}


{


gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val = false;
{
gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val) {
gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2.createFrom(runtimeScene.getObjects("Player_MegaMan"));
{for(var i = 0, len = gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2.length ;i < len;++i) {
    gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2[i].flipX(false);
}
}}

}


{

gdjs.Willy_32Stage_326Code.GDDropObjects1.createFrom(runtimeScene.getObjects("Drop"));
gdjs.Willy_32Stage_326Code.GDGroundObjects1.createFrom(runtimeScene.getObjects("Ground"));

gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val = false;
{
gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Willy_32Stage_326Code.mapOfGDgdjs_46Willy_9532Stage_95326Code_46GDDropObjects1Objects, gdjs.Willy_32Stage_326Code.mapOfGDgdjs_46Willy_9532Stage_95326Code_46GDGroundObjects1Objects, false, runtimeScene, false);
}if (gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Willy_32Stage_326Code.GDDropObjects1 */
{for(var i = 0, len = gdjs.Willy_32Stage_326Code.GDDropObjects1.length ;i < len;++i) {
    gdjs.Willy_32Stage_326Code.GDDropObjects1[i].setAnimationName("Gotchau");
}
}{for(var i = 0, len = gdjs.Willy_32Stage_326Code.GDDropObjects1.length ;i < len;++i) {
    gdjs.Willy_32Stage_326Code.GDDropObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


}; //End of gdjs.Willy_32Stage_326Code.eventsList0x9255c4
gdjs.Willy_32Stage_326Code.mapOfGDgdjs_46Willy_9532Stage_95326Code_46GDPlayer_9595MegaManObjects1Objects = Hashtable.newFrom({"Player_MegaMan": gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects1});gdjs.Willy_32Stage_326Code.mapOfGDgdjs_46Willy_9532Stage_95326Code_46GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.Willy_32Stage_326Code.GDDoorObjects1});gdjs.Willy_32Stage_326Code.eventsList0x9323c4 = function(runtimeScene) {

{

gdjs.Willy_32Stage_326Code.GDDoorObjects1.createFrom(runtimeScene.getObjects("Door"));
gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects1.createFrom(runtimeScene.getObjects("Player_MegaMan"));

gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val = false;
{
gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Willy_32Stage_326Code.mapOfGDgdjs_46Willy_9532Stage_95326Code_46GDPlayer_9595MegaManObjects1Objects, gdjs.Willy_32Stage_326Code.mapOfGDgdjs_46Willy_9532Stage_95326Code_46GDDoorObjects1Objects, false, runtimeScene, false);
}if (gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameWin", false);
}}

}


}; //End of gdjs.Willy_32Stage_326Code.eventsList0x9323c4
gdjs.Willy_32Stage_326Code.mapOfGDgdjs_46Willy_9532Stage_95326Code_46GDDropObjects2Objects = Hashtable.newFrom({"Drop": gdjs.Willy_32Stage_326Code.GDDropObjects2});gdjs.Willy_32Stage_326Code.mapOfGDgdjs_46Willy_9532Stage_95326Code_46GDPlayer_9595MegaManObjects2Objects = Hashtable.newFrom({"Player_MegaMan": gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2});gdjs.Willy_32Stage_326Code.mapOfGDgdjs_46Willy_9532Stage_95326Code_46GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.Willy_32Stage_326Code.GDEnemyObjects2});gdjs.Willy_32Stage_326Code.mapOfGDgdjs_46Willy_9532Stage_95326Code_46GDDropObjects2Objects = Hashtable.newFrom({"Drop": gdjs.Willy_32Stage_326Code.GDDropObjects2});gdjs.Willy_32Stage_326Code.eventsList0x9280e4 = function(runtimeScene) {

{


{
/* Reuse gdjs.Willy_32Stage_326Code.GDDropObjects2 */
/* Reuse gdjs.Willy_32Stage_326Code.GDEnemyObjects2 */
{for(var i = 0, len = gdjs.Willy_32Stage_326Code.GDDropObjects2.length ;i < len;++i) {
    gdjs.Willy_32Stage_326Code.GDDropObjects2[i].setZOrder(2);
}
}{for(var i = 0, len = gdjs.Willy_32Stage_326Code.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Willy_32Stage_326Code.GDEnemyObjects2[i].resetTimer("Gotagem");
}
}}

}


}; //End of gdjs.Willy_32Stage_326Code.eventsList0x9280e4
gdjs.Willy_32Stage_326Code.eventsList0x92cbf4 = function(runtimeScene) {

{

gdjs.Willy_32Stage_326Code.GDDropObjects2.createFrom(runtimeScene.getObjects("Drop"));
gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2.createFrom(runtimeScene.getObjects("Player_MegaMan"));

gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val = false;
{
gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Willy_32Stage_326Code.mapOfGDgdjs_46Willy_9532Stage_95326Code_46GDDropObjects2Objects, gdjs.Willy_32Stage_326Code.mapOfGDgdjs_46Willy_9532Stage_95326Code_46GDPlayer_9595MegaManObjects2Objects, false, runtimeScene, false);
}if (gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2 */
{for(var i = 0, len = gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2.length ;i < len;++i) {
    gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameLoose", false);
}}

}


{

gdjs.Willy_32Stage_326Code.GDEnemyObjects2.createFrom(runtimeScene.getObjects("Enemy"));

gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val = false;
gdjs.Willy_32Stage_326Code.condition1IsTrue_0.val = false;
{
gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val = gdjs.evtTools.object.pickRandomObject(runtimeScene, gdjs.Willy_32Stage_326Code.mapOfGDgdjs_46Willy_9532Stage_95326Code_46GDEnemyObjects2Objects);
}if ( gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Willy_32Stage_326Code.GDEnemyObjects2.length;i<l;++i) {
    if ( gdjs.Willy_32Stage_326Code.GDEnemyObjects2[i].timerElapsedTime("Gotagem", 1.6) ) {
        gdjs.Willy_32Stage_326Code.condition1IsTrue_0.val = true;
        gdjs.Willy_32Stage_326Code.GDEnemyObjects2[k] = gdjs.Willy_32Stage_326Code.GDEnemyObjects2[i];
        ++k;
    }
}
gdjs.Willy_32Stage_326Code.GDEnemyObjects2.length = k;}}
if (gdjs.Willy_32Stage_326Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Willy_32Stage_326Code.GDEnemyObjects2 */
gdjs.Willy_32Stage_326Code.GDDropObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Willy_32Stage_326Code.mapOfGDgdjs_46Willy_9532Stage_95326Code_46GDDropObjects2Objects, (( gdjs.Willy_32Stage_326Code.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.Willy_32Stage_326Code.GDEnemyObjects2[0].getPointX("")), (( gdjs.Willy_32Stage_326Code.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.Willy_32Stage_326Code.GDEnemyObjects2[0].getPointY("")) + (( gdjs.Willy_32Stage_326Code.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.Willy_32Stage_326Code.GDEnemyObjects2[0].getHeight()), "");
}
{ //Subevents
gdjs.Willy_32Stage_326Code.eventsList0x9280e4(runtimeScene);} //End of subevents
}

}


{


{
gdjs.Willy_32Stage_326Code.GDDropObjects1.createFrom(runtimeScene.getObjects("Drop"));
{for(var i = 0, len = gdjs.Willy_32Stage_326Code.GDDropObjects1.length ;i < len;++i) {
    gdjs.Willy_32Stage_326Code.GDDropObjects1[i].addPolarForce(90, 50, 0);
}
}}

}


}; //End of gdjs.Willy_32Stage_326Code.eventsList0x92cbf4
gdjs.Willy_32Stage_326Code.eventsList0x95b1dc = function(runtimeScene) {

{


gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val = false;
{
gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val) {
gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2.createFrom(runtimeScene.getObjects("Player_MegaMan"));
{for(var i = 0, len = gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2.length ;i < len;++i) {
    gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val = false;
{
gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val) {
gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2.createFrom(runtimeScene.getObjects("Player_MegaMan"));
{for(var i = 0, len = gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2.length ;i < len;++i) {
    gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val = false;
{
gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val) {
gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2.createFrom(runtimeScene.getObjects("Player_MegaMan"));
{for(var i = 0, len = gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2.length ;i < len;++i) {
    gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2.length ;i < len;++i) {
    gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2[i].flipX(true);
}
}}

}


{


gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val = false;
{
gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val) {
gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2.createFrom(runtimeScene.getObjects("Player_MegaMan"));
{for(var i = 0, len = gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2.length ;i < len;++i) {
    gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2.length ;i < len;++i) {
    gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2[i].flipX(false);
}
}}

}


{


{
}

}


}; //End of gdjs.Willy_32Stage_326Code.eventsList0x95b1dc
gdjs.Willy_32Stage_326Code.mapOfGDgdjs_46Willy_9532Stage_95326Code_46GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.Willy_32Stage_326Code.GDEnemyObjects2});gdjs.Willy_32Stage_326Code.mapOfGDgdjs_46Willy_9532Stage_95326Code_46GDPlayer_9595MegaManObjects1Objects = Hashtable.newFrom({"Player_MegaMan": gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects1});gdjs.Willy_32Stage_326Code.mapOfGDgdjs_46Willy_9532Stage_95326Code_46GDscoringObjects1Objects = Hashtable.newFrom({"scoring": gdjs.Willy_32Stage_326Code.GDscoringObjects1});gdjs.Willy_32Stage_326Code.eventsList0x95ec2c = function(runtimeScene) {

{


gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val = false;
{
gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val) {
gdjs.Willy_32Stage_326Code.GDscoringObjects2.createFrom(runtimeScene.getObjects("scoring"));
{for(var i = 0, len = gdjs.Willy_32Stage_326Code.GDscoringObjects2.length ;i < len;++i) {
    gdjs.Willy_32Stage_326Code.GDscoringObjects2[i].hide();
}
}}

}


{

gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2.createFrom(runtimeScene.getObjects("Player_MegaMan"));

gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2.length;i<l;++i) {
    if ( gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val = true;
        gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2[k] = gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2[i];
        ++k;
    }
}
gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2.length = k;}if (gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(2);
}}

}


{


{
gdjs.Willy_32Stage_326Code.GDScoreObjects2.createFrom(runtimeScene.getObjects("Score"));
{for(var i = 0, len = gdjs.Willy_32Stage_326Code.GDScoreObjects2.length ;i < len;++i) {
    gdjs.Willy_32Stage_326Code.GDScoreObjects2[i].setString("Score: \n" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2.createFrom(runtimeScene.getObjects("Player_MegaMan"));

gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2.length;i<l;++i) {
    if ( !(gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val = true;
        gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2[k] = gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2[i];
        ++k;
    }
}
gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2.length = k;}if (gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(1);
}}

}


{

gdjs.Willy_32Stage_326Code.GDEnemyObjects2.createFrom(runtimeScene.getObjects("Enemy"));

gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val = false;
{
gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val = gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.Willy_32Stage_326Code.mapOfGDgdjs_46Willy_9532Stage_95326Code_46GDEnemyObjects2Objects);
}if (gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Willy_32Stage_326Code.GDEnemyObjects2 */
{for(var i = 0, len = gdjs.Willy_32Stage_326Code.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Willy_32Stage_326Code.GDEnemyObjects2[i].returnVariable(gdjs.Willy_32Stage_326Code.GDEnemyObjects2[i].getVariables().getFromIndex(0)).setNumber((gdjs.Willy_32Stage_326Code.GDEnemyObjects2[i].getPointX("")));
}
}}

}


{

gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects1.createFrom(runtimeScene.getObjects("Player_MegaMan"));
gdjs.Willy_32Stage_326Code.GDscoringObjects1.createFrom(runtimeScene.getObjects("scoring"));

gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val = false;
{
gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Willy_32Stage_326Code.mapOfGDgdjs_46Willy_9532Stage_95326Code_46GDPlayer_9595MegaManObjects1Objects, gdjs.Willy_32Stage_326Code.mapOfGDgdjs_46Willy_9532Stage_95326Code_46GDscoringObjects1Objects, false, runtimeScene, false);
}if (gdjs.Willy_32Stage_326Code.condition0IsTrue_0.val) {
gdjs.Willy_32Stage_326Code.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
/* Reuse gdjs.Willy_32Stage_326Code.GDscoringObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).add((gdjs.RuntimeObject.getVariableNumber(((gdjs.Willy_32Stage_326Code.GDEnemyObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Willy_32Stage_326Code.GDEnemyObjects1[0].getVariables()).getFromIndex(0))));
}{for(var i = 0, len = gdjs.Willy_32Stage_326Code.GDscoringObjects1.length ;i < len;++i) {
    gdjs.Willy_32Stage_326Code.GDscoringObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


}; //End of gdjs.Willy_32Stage_326Code.eventsList0x95ec2c
gdjs.Willy_32Stage_326Code.eventsList0xb4320 = function(runtimeScene) {

{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("CAMERA"); }gdjs.Willy_32Stage_326Code.eventsList0x95d70c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("CAMERA"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("ANIMATION"); }gdjs.Willy_32Stage_326Code.eventsList0x9255c4(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("ANIMATION"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("GAME WIN"); }gdjs.Willy_32Stage_326Code.eventsList0x9323c4(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("GAME WIN"); }
}


{



}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("ENEMIES"); }gdjs.Willy_32Stage_326Code.eventsList0x92cbf4(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("ENEMIES"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("CONTROLS"); }gdjs.Willy_32Stage_326Code.eventsList0x95b1dc(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("CONTROLS"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("SCORE"); }gdjs.Willy_32Stage_326Code.eventsList0x95ec2c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("SCORE"); }
}


}; //End of gdjs.Willy_32Stage_326Code.eventsList0xb4320


gdjs.Willy_32Stage_326Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Willy_32Stage_326Code.GDScoreObjects1.length = 0;
gdjs.Willy_32Stage_326Code.GDScoreObjects2.length = 0;
gdjs.Willy_32Stage_326Code.GDScoreObjects3.length = 0;
gdjs.Willy_32Stage_326Code.GDScoreObjects4.length = 0;
gdjs.Willy_32Stage_326Code.GDbackgroundObjects1.length = 0;
gdjs.Willy_32Stage_326Code.GDbackgroundObjects2.length = 0;
gdjs.Willy_32Stage_326Code.GDbackgroundObjects3.length = 0;
gdjs.Willy_32Stage_326Code.GDbackgroundObjects4.length = 0;
gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects1.length = 0;
gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects2.length = 0;
gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects3.length = 0;
gdjs.Willy_32Stage_326Code.GDPlayer_95MegaManObjects4.length = 0;
gdjs.Willy_32Stage_326Code.GDGroundObjects1.length = 0;
gdjs.Willy_32Stage_326Code.GDGroundObjects2.length = 0;
gdjs.Willy_32Stage_326Code.GDGroundObjects3.length = 0;
gdjs.Willy_32Stage_326Code.GDGroundObjects4.length = 0;
gdjs.Willy_32Stage_326Code.GDDoorObjects1.length = 0;
gdjs.Willy_32Stage_326Code.GDDoorObjects2.length = 0;
gdjs.Willy_32Stage_326Code.GDDoorObjects3.length = 0;
gdjs.Willy_32Stage_326Code.GDDoorObjects4.length = 0;
gdjs.Willy_32Stage_326Code.GDEnemyObjects1.length = 0;
gdjs.Willy_32Stage_326Code.GDEnemyObjects2.length = 0;
gdjs.Willy_32Stage_326Code.GDEnemyObjects3.length = 0;
gdjs.Willy_32Stage_326Code.GDEnemyObjects4.length = 0;
gdjs.Willy_32Stage_326Code.GDDropObjects1.length = 0;
gdjs.Willy_32Stage_326Code.GDDropObjects2.length = 0;
gdjs.Willy_32Stage_326Code.GDDropObjects3.length = 0;
gdjs.Willy_32Stage_326Code.GDDropObjects4.length = 0;
gdjs.Willy_32Stage_326Code.GDOBSObjects1.length = 0;
gdjs.Willy_32Stage_326Code.GDOBSObjects2.length = 0;
gdjs.Willy_32Stage_326Code.GDOBSObjects3.length = 0;
gdjs.Willy_32Stage_326Code.GDOBSObjects4.length = 0;
gdjs.Willy_32Stage_326Code.GDscoringObjects1.length = 0;
gdjs.Willy_32Stage_326Code.GDscoringObjects2.length = 0;
gdjs.Willy_32Stage_326Code.GDscoringObjects3.length = 0;
gdjs.Willy_32Stage_326Code.GDscoringObjects4.length = 0;

gdjs.Willy_32Stage_326Code.eventsList0xb4320(runtimeScene);
return;

}
gdjs['Willy_32Stage_326Code'] = gdjs.Willy_32Stage_326Code;
