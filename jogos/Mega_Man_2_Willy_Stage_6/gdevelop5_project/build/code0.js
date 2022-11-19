gdjs.PressEnterCode = {};
gdjs.PressEnterCode.GDScoreObjects1= [];
gdjs.PressEnterCode.GDScoreObjects2= [];
gdjs.PressEnterCode.GDPressEnterObjects1= [];
gdjs.PressEnterCode.GDPressEnterObjects2= [];
gdjs.PressEnterCode.GDCutSceneInicialObjects1= [];
gdjs.PressEnterCode.GDCutSceneInicialObjects2= [];

gdjs.PressEnterCode.conditionTrue_0 = {val:false};
gdjs.PressEnterCode.condition0IsTrue_0 = {val:false};
gdjs.PressEnterCode.condition1IsTrue_0 = {val:false};


gdjs.PressEnterCode.eventsList0xb4320 = function(runtimeScene) {

{


gdjs.PressEnterCode.condition0IsTrue_0.val = false;
{
gdjs.PressEnterCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
}if (gdjs.PressEnterCode.condition0IsTrue_0.val) {
gdjs.PressEnterCode.GDCutSceneInicialObjects1.createFrom(runtimeScene.getObjects("CutSceneInicial"));
gdjs.PressEnterCode.GDPressEnterObjects1.createFrom(runtimeScene.getObjects("PressEnter"));
{for(var i = 0, len = gdjs.PressEnterCode.GDCutSceneInicialObjects1.length ;i < len;++i) {
    gdjs.PressEnterCode.GDCutSceneInicialObjects1[i].play();
}
}{for(var i = 0, len = gdjs.PressEnterCode.GDPressEnterObjects1.length ;i < len;++i) {
    gdjs.PressEnterCode.GDPressEnterObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.PressEnterCode.GDCutSceneInicialObjects1.createFrom(runtimeScene.getObjects("CutSceneInicial"));

gdjs.PressEnterCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PressEnterCode.GDCutSceneInicialObjects1.length;i<l;++i) {
    if ( gdjs.PressEnterCode.GDCutSceneInicialObjects1[i].getCurrentTime() >= 21 ) {
        gdjs.PressEnterCode.condition0IsTrue_0.val = true;
        gdjs.PressEnterCode.GDCutSceneInicialObjects1[k] = gdjs.PressEnterCode.GDCutSceneInicialObjects1[i];
        ++k;
    }
}
gdjs.PressEnterCode.GDCutSceneInicialObjects1.length = k;}if (gdjs.PressEnterCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Willy Stage 6", false);
}}

}


{


gdjs.PressEnterCode.condition0IsTrue_0.val = false;
{
gdjs.PressEnterCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.PressEnterCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Willy Stage 6", false);
}}

}


}; //End of gdjs.PressEnterCode.eventsList0xb4320


gdjs.PressEnterCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PressEnterCode.GDScoreObjects1.length = 0;
gdjs.PressEnterCode.GDScoreObjects2.length = 0;
gdjs.PressEnterCode.GDPressEnterObjects1.length = 0;
gdjs.PressEnterCode.GDPressEnterObjects2.length = 0;
gdjs.PressEnterCode.GDCutSceneInicialObjects1.length = 0;
gdjs.PressEnterCode.GDCutSceneInicialObjects2.length = 0;

gdjs.PressEnterCode.eventsList0xb4320(runtimeScene);
return;

}
gdjs['PressEnterCode'] = gdjs.PressEnterCode;
