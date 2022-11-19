gdjs.GameWinCode = {};
gdjs.GameWinCode.GDScoreObjects1= [];
gdjs.GameWinCode.GDScoreObjects2= [];
gdjs.GameWinCode.GDYouWinObjects1= [];
gdjs.GameWinCode.GDYouWinObjects2= [];

gdjs.GameWinCode.conditionTrue_0 = {val:false};
gdjs.GameWinCode.condition0IsTrue_0 = {val:false};
gdjs.GameWinCode.condition1IsTrue_0 = {val:false};


gdjs.GameWinCode.eventsList0xb4320 = function(runtimeScene) {

{


gdjs.GameWinCode.condition0IsTrue_0.val = false;
{
gdjs.GameWinCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameWinCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "audios\\youwin.mp3", false, 100, 1);
}}

}


{


gdjs.GameWinCode.condition0IsTrue_0.val = false;
{
gdjs.GameWinCode.condition0IsTrue_0.val = gdjs.evtTools.sound.isSoundOnChannelStopped(runtimeScene, 0);
}if (gdjs.GameWinCode.condition0IsTrue_0.val) {
}

}


{


{
gdjs.GameWinCode.GDScoreObjects1.createFrom(runtimeScene.getObjects("Score"));
{for(var i = 0, len = gdjs.GameWinCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.GameWinCode.GDScoreObjects1[i].setString("SCORE: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


}; //End of gdjs.GameWinCode.eventsList0xb4320


gdjs.GameWinCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameWinCode.GDScoreObjects1.length = 0;
gdjs.GameWinCode.GDScoreObjects2.length = 0;
gdjs.GameWinCode.GDYouWinObjects1.length = 0;
gdjs.GameWinCode.GDYouWinObjects2.length = 0;

gdjs.GameWinCode.eventsList0xb4320(runtimeScene);
return;

}
gdjs['GameWinCode'] = gdjs.GameWinCode;
