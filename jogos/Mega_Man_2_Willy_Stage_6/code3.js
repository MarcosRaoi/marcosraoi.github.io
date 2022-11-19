gdjs.GameLooseCode = {};
gdjs.GameLooseCode.GDScoreObjects1= [];
gdjs.GameLooseCode.GDScoreObjects2= [];
gdjs.GameLooseCode.GDYouLooseObjects1= [];
gdjs.GameLooseCode.GDYouLooseObjects2= [];
gdjs.GameLooseCode.GDRestartObjects1= [];
gdjs.GameLooseCode.GDRestartObjects2= [];

gdjs.GameLooseCode.conditionTrue_0 = {val:false};
gdjs.GameLooseCode.condition0IsTrue_0 = {val:false};
gdjs.GameLooseCode.condition1IsTrue_0 = {val:false};


gdjs.GameLooseCode.eventsList0xb4320 = function(runtimeScene) {

{


gdjs.GameLooseCode.condition0IsTrue_0.val = false;
{
gdjs.GameLooseCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameLooseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "audios\\youloose.mp3", false, 100, 1);
}}

}


{


gdjs.GameLooseCode.condition0IsTrue_0.val = false;
{
gdjs.GameLooseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if (gdjs.GameLooseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Willy Stage 6", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


{


{
gdjs.GameLooseCode.GDScoreObjects1.createFrom(runtimeScene.getObjects("Score"));
{for(var i = 0, len = gdjs.GameLooseCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.GameLooseCode.GDScoreObjects1[i].setString("SCORE: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


}; //End of gdjs.GameLooseCode.eventsList0xb4320


gdjs.GameLooseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameLooseCode.GDScoreObjects1.length = 0;
gdjs.GameLooseCode.GDScoreObjects2.length = 0;
gdjs.GameLooseCode.GDYouLooseObjects1.length = 0;
gdjs.GameLooseCode.GDYouLooseObjects2.length = 0;
gdjs.GameLooseCode.GDRestartObjects1.length = 0;
gdjs.GameLooseCode.GDRestartObjects2.length = 0;

gdjs.GameLooseCode.eventsList0xb4320(runtimeScene);
return;

}
gdjs['GameLooseCode'] = gdjs.GameLooseCode;
