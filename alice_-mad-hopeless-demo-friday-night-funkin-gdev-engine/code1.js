gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.idToCallbackMap = new Map();
gdjs.MenuCode.forEachIndex2 = 0;

gdjs.MenuCode.forEachIndex3 = 0;

gdjs.MenuCode.forEachIndex4 = 0;

gdjs.MenuCode.forEachIndex5 = 0;

gdjs.MenuCode.forEachIndex6 = 0;

gdjs.MenuCode.forEachObjects2 = [];

gdjs.MenuCode.forEachObjects3 = [];

gdjs.MenuCode.forEachObjects4 = [];

gdjs.MenuCode.forEachObjects5 = [];

gdjs.MenuCode.forEachObjects6 = [];

gdjs.MenuCode.forEachTemporary2 = null;

gdjs.MenuCode.forEachTemporary3 = null;

gdjs.MenuCode.forEachTemporary4 = null;

gdjs.MenuCode.forEachTemporary5 = null;

gdjs.MenuCode.forEachTemporary6 = null;

gdjs.MenuCode.forEachTotalCount2 = 0;

gdjs.MenuCode.forEachTotalCount3 = 0;

gdjs.MenuCode.forEachTotalCount4 = 0;

gdjs.MenuCode.forEachTotalCount5 = 0;

gdjs.MenuCode.forEachTotalCount6 = 0;

gdjs.MenuCode.GDlogobumpinObjects1= [];
gdjs.MenuCode.GDlogobumpinObjects2= [];
gdjs.MenuCode.GDlogobumpinObjects3= [];
gdjs.MenuCode.GDlogobumpinObjects4= [];
gdjs.MenuCode.GDlogobumpinObjects5= [];
gdjs.MenuCode.GDlogobumpinObjects6= [];
gdjs.MenuCode.GDBlackObjects1= [];
gdjs.MenuCode.GDBlackObjects2= [];
gdjs.MenuCode.GDBlackObjects3= [];
gdjs.MenuCode.GDBlackObjects4= [];
gdjs.MenuCode.GDBlackObjects5= [];
gdjs.MenuCode.GDBlackObjects6= [];
gdjs.MenuCode.GDbegfontObjects1= [];
gdjs.MenuCode.GDbegfontObjects2= [];
gdjs.MenuCode.GDbegfontObjects3= [];
gdjs.MenuCode.GDbegfontObjects4= [];
gdjs.MenuCode.GDbegfontObjects5= [];
gdjs.MenuCode.GDbegfontObjects6= [];
gdjs.MenuCode.GDgfDancinTitleObjects1= [];
gdjs.MenuCode.GDgfDancinTitleObjects2= [];
gdjs.MenuCode.GDgfDancinTitleObjects3= [];
gdjs.MenuCode.GDgfDancinTitleObjects4= [];
gdjs.MenuCode.GDgfDancinTitleObjects5= [];
gdjs.MenuCode.GDgfDancinTitleObjects6= [];
gdjs.MenuCode.GDBGObjects1= [];
gdjs.MenuCode.GDBGObjects2= [];
gdjs.MenuCode.GDBGObjects3= [];
gdjs.MenuCode.GDBGObjects4= [];
gdjs.MenuCode.GDBGObjects5= [];
gdjs.MenuCode.GDBGObjects6= [];
gdjs.MenuCode.GDTitleEnterObjects1= [];
gdjs.MenuCode.GDTitleEnterObjects2= [];
gdjs.MenuCode.GDTitleEnterObjects3= [];
gdjs.MenuCode.GDTitleEnterObjects4= [];
gdjs.MenuCode.GDTitleEnterObjects5= [];
gdjs.MenuCode.GDTitleEnterObjects6= [];
gdjs.MenuCode.GDFreeplayObjects1= [];
gdjs.MenuCode.GDFreeplayObjects2= [];
gdjs.MenuCode.GDFreeplayObjects3= [];
gdjs.MenuCode.GDFreeplayObjects4= [];
gdjs.MenuCode.GDFreeplayObjects5= [];
gdjs.MenuCode.GDFreeplayObjects6= [];
gdjs.MenuCode.GDNewBBTextObjects1= [];
gdjs.MenuCode.GDNewBBTextObjects2= [];
gdjs.MenuCode.GDNewBBTextObjects3= [];
gdjs.MenuCode.GDNewBBTextObjects4= [];
gdjs.MenuCode.GDNewBBTextObjects5= [];
gdjs.MenuCode.GDNewBBTextObjects6= [];
gdjs.MenuCode.GDNoObjects1= [];
gdjs.MenuCode.GDNoObjects2= [];
gdjs.MenuCode.GDNoObjects3= [];
gdjs.MenuCode.GDNoObjects4= [];
gdjs.MenuCode.GDNoObjects5= [];
gdjs.MenuCode.GDNoObjects6= [];
gdjs.MenuCode.GDYesObjects1= [];
gdjs.MenuCode.GDYesObjects2= [];
gdjs.MenuCode.GDYesObjects3= [];
gdjs.MenuCode.GDYesObjects4= [];
gdjs.MenuCode.GDYesObjects5= [];
gdjs.MenuCode.GDYesObjects6= [];
gdjs.MenuCode.GDOptionsObjects1= [];
gdjs.MenuCode.GDOptionsObjects2= [];
gdjs.MenuCode.GDOptionsObjects3= [];
gdjs.MenuCode.GDOptionsObjects4= [];
gdjs.MenuCode.GDOptionsObjects5= [];
gdjs.MenuCode.GDOptionsObjects6= [];
gdjs.MenuCode.GDOptionsTextObjects1= [];
gdjs.MenuCode.GDOptionsTextObjects2= [];
gdjs.MenuCode.GDOptionsTextObjects3= [];
gdjs.MenuCode.GDOptionsTextObjects4= [];
gdjs.MenuCode.GDOptionsTextObjects5= [];
gdjs.MenuCode.GDOptionsTextObjects6= [];
gdjs.MenuCode.GDOptionsbuttonsObjects1= [];
gdjs.MenuCode.GDOptionsbuttonsObjects2= [];
gdjs.MenuCode.GDOptionsbuttonsObjects3= [];
gdjs.MenuCode.GDOptionsbuttonsObjects4= [];
gdjs.MenuCode.GDOptionsbuttonsObjects5= [];
gdjs.MenuCode.GDOptionsbuttonsObjects6= [];
gdjs.MenuCode.GDOptPotionsTextObjects1= [];
gdjs.MenuCode.GDOptPotionsTextObjects2= [];
gdjs.MenuCode.GDOptPotionsTextObjects3= [];
gdjs.MenuCode.GDOptPotionsTextObjects4= [];
gdjs.MenuCode.GDOptPotionsTextObjects5= [];
gdjs.MenuCode.GDOptPotionsTextObjects6= [];
gdjs.MenuCode.GDCheckBoxesObjects1= [];
gdjs.MenuCode.GDCheckBoxesObjects2= [];
gdjs.MenuCode.GDCheckBoxesObjects3= [];
gdjs.MenuCode.GDCheckBoxesObjects4= [];
gdjs.MenuCode.GDCheckBoxesObjects5= [];
gdjs.MenuCode.GDCheckBoxesObjects6= [];
gdjs.MenuCode.GDBackButtonObjects1= [];
gdjs.MenuCode.GDBackButtonObjects2= [];
gdjs.MenuCode.GDBackButtonObjects3= [];
gdjs.MenuCode.GDBackButtonObjects4= [];
gdjs.MenuCode.GDBackButtonObjects5= [];
gdjs.MenuCode.GDBackButtonObjects6= [];
gdjs.MenuCode.GDSquareWhiteSliderObjects1= [];
gdjs.MenuCode.GDSquareWhiteSliderObjects2= [];
gdjs.MenuCode.GDSquareWhiteSliderObjects3= [];
gdjs.MenuCode.GDSquareWhiteSliderObjects4= [];
gdjs.MenuCode.GDSquareWhiteSliderObjects5= [];
gdjs.MenuCode.GDSquareWhiteSliderObjects6= [];
gdjs.MenuCode.GDFullscreenTextObjects1= [];
gdjs.MenuCode.GDFullscreenTextObjects2= [];
gdjs.MenuCode.GDFullscreenTextObjects3= [];
gdjs.MenuCode.GDFullscreenTextObjects4= [];
gdjs.MenuCode.GDFullscreenTextObjects5= [];
gdjs.MenuCode.GDFullscreenTextObjects6= [];
gdjs.MenuCode.GDcreditstextObjects1= [];
gdjs.MenuCode.GDcreditstextObjects2= [];
gdjs.MenuCode.GDcreditstextObjects3= [];
gdjs.MenuCode.GDcreditstextObjects4= [];
gdjs.MenuCode.GDcreditstextObjects5= [];
gdjs.MenuCode.GDcreditstextObjects6= [];
gdjs.MenuCode.GDHItsoundVolumeSliderObjects1= [];
gdjs.MenuCode.GDHItsoundVolumeSliderObjects2= [];
gdjs.MenuCode.GDHItsoundVolumeSliderObjects3= [];
gdjs.MenuCode.GDHItsoundVolumeSliderObjects4= [];
gdjs.MenuCode.GDHItsoundVolumeSliderObjects5= [];
gdjs.MenuCode.GDHItsoundVolumeSliderObjects6= [];
gdjs.MenuCode.GDHitsoundTextObjects1= [];
gdjs.MenuCode.GDHitsoundTextObjects2= [];
gdjs.MenuCode.GDHitsoundTextObjects3= [];
gdjs.MenuCode.GDHitsoundTextObjects4= [];
gdjs.MenuCode.GDHitsoundTextObjects5= [];
gdjs.MenuCode.GDHitsoundTextObjects6= [];
gdjs.MenuCode.GDStatisticsObjects1= [];
gdjs.MenuCode.GDStatisticsObjects2= [];
gdjs.MenuCode.GDStatisticsObjects3= [];
gdjs.MenuCode.GDStatisticsObjects4= [];
gdjs.MenuCode.GDStatisticsObjects5= [];
gdjs.MenuCode.GDStatisticsObjects6= [];
gdjs.MenuCode.GDComboNumbersObjects1= [];
gdjs.MenuCode.GDComboNumbersObjects2= [];
gdjs.MenuCode.GDComboNumbersObjects3= [];
gdjs.MenuCode.GDComboNumbersObjects4= [];
gdjs.MenuCode.GDComboNumbersObjects5= [];
gdjs.MenuCode.GDComboNumbersObjects6= [];
gdjs.MenuCode.GDNotesSplashObjects1= [];
gdjs.MenuCode.GDNotesSplashObjects2= [];
gdjs.MenuCode.GDNotesSplashObjects3= [];
gdjs.MenuCode.GDNotesSplashObjects4= [];
gdjs.MenuCode.GDNotesSplashObjects5= [];
gdjs.MenuCode.GDNotesSplashObjects6= [];
gdjs.MenuCode.GDfpsObjects1= [];
gdjs.MenuCode.GDfpsObjects2= [];
gdjs.MenuCode.GDfpsObjects3= [];
gdjs.MenuCode.GDfpsObjects4= [];
gdjs.MenuCode.GDfpsObjects5= [];
gdjs.MenuCode.GDfpsObjects6= [];
gdjs.MenuCode.GDEngineTextObjects1= [];
gdjs.MenuCode.GDEngineTextObjects2= [];
gdjs.MenuCode.GDEngineTextObjects3= [];
gdjs.MenuCode.GDEngineTextObjects4= [];
gdjs.MenuCode.GDEngineTextObjects5= [];
gdjs.MenuCode.GDEngineTextObjects6= [];
gdjs.MenuCode.GDLongUpscrollBFObjects1= [];
gdjs.MenuCode.GDLongUpscrollBFObjects2= [];
gdjs.MenuCode.GDLongUpscrollBFObjects3= [];
gdjs.MenuCode.GDLongUpscrollBFObjects4= [];
gdjs.MenuCode.GDLongUpscrollBFObjects5= [];
gdjs.MenuCode.GDLongUpscrollBFObjects6= [];
gdjs.MenuCode.GDLongUpscrollOPPObjects1= [];
gdjs.MenuCode.GDLongUpscrollOPPObjects2= [];
gdjs.MenuCode.GDLongUpscrollOPPObjects3= [];
gdjs.MenuCode.GDLongUpscrollOPPObjects4= [];
gdjs.MenuCode.GDLongUpscrollOPPObjects5= [];
gdjs.MenuCode.GDLongUpscrollOPPObjects6= [];
gdjs.MenuCode.GDHitboxLeftObjects1= [];
gdjs.MenuCode.GDHitboxLeftObjects2= [];
gdjs.MenuCode.GDHitboxLeftObjects3= [];
gdjs.MenuCode.GDHitboxLeftObjects4= [];
gdjs.MenuCode.GDHitboxLeftObjects5= [];
gdjs.MenuCode.GDHitboxLeftObjects6= [];
gdjs.MenuCode.GDHitboxDownObjects1= [];
gdjs.MenuCode.GDHitboxDownObjects2= [];
gdjs.MenuCode.GDHitboxDownObjects3= [];
gdjs.MenuCode.GDHitboxDownObjects4= [];
gdjs.MenuCode.GDHitboxDownObjects5= [];
gdjs.MenuCode.GDHitboxDownObjects6= [];
gdjs.MenuCode.GDHitboxUpObjects1= [];
gdjs.MenuCode.GDHitboxUpObjects2= [];
gdjs.MenuCode.GDHitboxUpObjects3= [];
gdjs.MenuCode.GDHitboxUpObjects4= [];
gdjs.MenuCode.GDHitboxUpObjects5= [];
gdjs.MenuCode.GDHitboxUpObjects6= [];
gdjs.MenuCode.GDhitrightObjects1= [];
gdjs.MenuCode.GDhitrightObjects2= [];
gdjs.MenuCode.GDhitrightObjects3= [];
gdjs.MenuCode.GDhitrightObjects4= [];
gdjs.MenuCode.GDhitrightObjects5= [];
gdjs.MenuCode.GDhitrightObjects6= [];
gdjs.MenuCode.GDBFIconObjects1= [];
gdjs.MenuCode.GDBFIconObjects2= [];
gdjs.MenuCode.GDBFIconObjects3= [];
gdjs.MenuCode.GDBFIconObjects4= [];
gdjs.MenuCode.GDBFIconObjects5= [];
gdjs.MenuCode.GDBFIconObjects6= [];
gdjs.MenuCode.GDPauseButtonObjects1= [];
gdjs.MenuCode.GDPauseButtonObjects2= [];
gdjs.MenuCode.GDPauseButtonObjects3= [];
gdjs.MenuCode.GDPauseButtonObjects4= [];
gdjs.MenuCode.GDPauseButtonObjects5= [];
gdjs.MenuCode.GDPauseButtonObjects6= [];
gdjs.MenuCode.GDPauseButton2Objects1= [];
gdjs.MenuCode.GDPauseButton2Objects2= [];
gdjs.MenuCode.GDPauseButton2Objects3= [];
gdjs.MenuCode.GDPauseButton2Objects4= [];
gdjs.MenuCode.GDPauseButton2Objects5= [];
gdjs.MenuCode.GDPauseButton2Objects6= [];
gdjs.MenuCode.GDBlackScreenObjects1= [];
gdjs.MenuCode.GDBlackScreenObjects2= [];
gdjs.MenuCode.GDBlackScreenObjects3= [];
gdjs.MenuCode.GDBlackScreenObjects4= [];
gdjs.MenuCode.GDBlackScreenObjects5= [];
gdjs.MenuCode.GDBlackScreenObjects6= [];
gdjs.MenuCode.GDPauseTextObjects1= [];
gdjs.MenuCode.GDPauseTextObjects2= [];
gdjs.MenuCode.GDPauseTextObjects3= [];
gdjs.MenuCode.GDPauseTextObjects4= [];
gdjs.MenuCode.GDPauseTextObjects5= [];
gdjs.MenuCode.GDPauseTextObjects6= [];
gdjs.MenuCode.GDExitTextObjects1= [];
gdjs.MenuCode.GDExitTextObjects2= [];
gdjs.MenuCode.GDExitTextObjects3= [];
gdjs.MenuCode.GDExitTextObjects4= [];
gdjs.MenuCode.GDExitTextObjects5= [];
gdjs.MenuCode.GDExitTextObjects6= [];
gdjs.MenuCode.GDRestartTextObjects1= [];
gdjs.MenuCode.GDRestartTextObjects2= [];
gdjs.MenuCode.GDRestartTextObjects3= [];
gdjs.MenuCode.GDRestartTextObjects4= [];
gdjs.MenuCode.GDRestartTextObjects5= [];
gdjs.MenuCode.GDRestartTextObjects6= [];
gdjs.MenuCode.GDmisses_9595challenge_9595textObjects1= [];
gdjs.MenuCode.GDmisses_9595challenge_9595textObjects2= [];
gdjs.MenuCode.GDmisses_9595challenge_9595textObjects3= [];
gdjs.MenuCode.GDmisses_9595challenge_9595textObjects4= [];
gdjs.MenuCode.GDmisses_9595challenge_9595textObjects5= [];
gdjs.MenuCode.GDmisses_9595challenge_9595textObjects6= [];
gdjs.MenuCode.GDBfYellowNoteObjects1= [];
gdjs.MenuCode.GDBfYellowNoteObjects2= [];
gdjs.MenuCode.GDBfYellowNoteObjects3= [];
gdjs.MenuCode.GDBfYellowNoteObjects4= [];
gdjs.MenuCode.GDBfYellowNoteObjects5= [];
gdjs.MenuCode.GDBfYellowNoteObjects6= [];
gdjs.MenuCode.GDBfUpNoteObjects1= [];
gdjs.MenuCode.GDBfUpNoteObjects2= [];
gdjs.MenuCode.GDBfUpNoteObjects3= [];
gdjs.MenuCode.GDBfUpNoteObjects4= [];
gdjs.MenuCode.GDBfUpNoteObjects5= [];
gdjs.MenuCode.GDBfUpNoteObjects6= [];
gdjs.MenuCode.GDBfDownNoteObjects1= [];
gdjs.MenuCode.GDBfDownNoteObjects2= [];
gdjs.MenuCode.GDBfDownNoteObjects3= [];
gdjs.MenuCode.GDBfDownNoteObjects4= [];
gdjs.MenuCode.GDBfDownNoteObjects5= [];
gdjs.MenuCode.GDBfDownNoteObjects6= [];
gdjs.MenuCode.GDBfLeftNoteObjects1= [];
gdjs.MenuCode.GDBfLeftNoteObjects2= [];
gdjs.MenuCode.GDBfLeftNoteObjects3= [];
gdjs.MenuCode.GDBfLeftNoteObjects4= [];
gdjs.MenuCode.GDBfLeftNoteObjects5= [];
gdjs.MenuCode.GDBfLeftNoteObjects6= [];
gdjs.MenuCode.GDBfLeftNote4Objects1= [];
gdjs.MenuCode.GDBfLeftNote4Objects2= [];
gdjs.MenuCode.GDBfLeftNote4Objects3= [];
gdjs.MenuCode.GDBfLeftNote4Objects4= [];
gdjs.MenuCode.GDBfLeftNote4Objects5= [];
gdjs.MenuCode.GDBfLeftNote4Objects6= [];
gdjs.MenuCode.GDBfDownNote5Objects1= [];
gdjs.MenuCode.GDBfDownNote5Objects2= [];
gdjs.MenuCode.GDBfDownNote5Objects3= [];
gdjs.MenuCode.GDBfDownNote5Objects4= [];
gdjs.MenuCode.GDBfDownNote5Objects5= [];
gdjs.MenuCode.GDBfDownNote5Objects6= [];
gdjs.MenuCode.GDBfUpNote6Objects1= [];
gdjs.MenuCode.GDBfUpNote6Objects2= [];
gdjs.MenuCode.GDBfUpNote6Objects3= [];
gdjs.MenuCode.GDBfUpNote6Objects4= [];
gdjs.MenuCode.GDBfUpNote6Objects5= [];
gdjs.MenuCode.GDBfUpNote6Objects6= [];
gdjs.MenuCode.GDBfRightNoteObjects1= [];
gdjs.MenuCode.GDBfRightNoteObjects2= [];
gdjs.MenuCode.GDBfRightNoteObjects3= [];
gdjs.MenuCode.GDBfRightNoteObjects4= [];
gdjs.MenuCode.GDBfRightNoteObjects5= [];
gdjs.MenuCode.GDBfRightNoteObjects6= [];
gdjs.MenuCode.GDBfRightNote7Objects1= [];
gdjs.MenuCode.GDBfRightNote7Objects2= [];
gdjs.MenuCode.GDBfRightNote7Objects3= [];
gdjs.MenuCode.GDBfRightNote7Objects4= [];
gdjs.MenuCode.GDBfRightNote7Objects5= [];
gdjs.MenuCode.GDBfRightNote7Objects6= [];
gdjs.MenuCode.GDBfYellowNote11Objects1= [];
gdjs.MenuCode.GDBfYellowNote11Objects2= [];
gdjs.MenuCode.GDBfYellowNote11Objects3= [];
gdjs.MenuCode.GDBfYellowNote11Objects4= [];
gdjs.MenuCode.GDBfYellowNote11Objects5= [];
gdjs.MenuCode.GDBfYellowNote11Objects6= [];
gdjs.MenuCode.GDBfDBlueNoteObjects1= [];
gdjs.MenuCode.GDBfDBlueNoteObjects2= [];
gdjs.MenuCode.GDBfDBlueNoteObjects3= [];
gdjs.MenuCode.GDBfDBlueNoteObjects4= [];
gdjs.MenuCode.GDBfDBlueNoteObjects5= [];
gdjs.MenuCode.GDBfDBlueNoteObjects6= [];
gdjs.MenuCode.GDBfDBlueNote12Objects1= [];
gdjs.MenuCode.GDBfDBlueNote12Objects2= [];
gdjs.MenuCode.GDBfDBlueNote12Objects3= [];
gdjs.MenuCode.GDBfDBlueNote12Objects4= [];
gdjs.MenuCode.GDBfDBlueNote12Objects5= [];
gdjs.MenuCode.GDBfDBlueNote12Objects6= [];
gdjs.MenuCode.GDOppIconObjects1= [];
gdjs.MenuCode.GDOppIconObjects2= [];
gdjs.MenuCode.GDOppIconObjects3= [];
gdjs.MenuCode.GDOppIconObjects4= [];
gdjs.MenuCode.GDOppIconObjects5= [];
gdjs.MenuCode.GDOppIconObjects6= [];
gdjs.MenuCode.GDtimerBarObjects1= [];
gdjs.MenuCode.GDtimerBarObjects2= [];
gdjs.MenuCode.GDtimerBarObjects3= [];
gdjs.MenuCode.GDtimerBarObjects4= [];
gdjs.MenuCode.GDtimerBarObjects5= [];
gdjs.MenuCode.GDtimerBarObjects6= [];
gdjs.MenuCode.GDtimeObjects1= [];
gdjs.MenuCode.GDtimeObjects2= [];
gdjs.MenuCode.GDtimeObjects3= [];
gdjs.MenuCode.GDtimeObjects4= [];
gdjs.MenuCode.GDtimeObjects5= [];
gdjs.MenuCode.GDtimeObjects6= [];
gdjs.MenuCode.GDtimerBar2Objects1= [];
gdjs.MenuCode.GDtimerBar2Objects2= [];
gdjs.MenuCode.GDtimerBar2Objects3= [];
gdjs.MenuCode.GDtimerBar2Objects4= [];
gdjs.MenuCode.GDtimerBar2Objects5= [];
gdjs.MenuCode.GDtimerBar2Objects6= [];
gdjs.MenuCode.GDLongOppObjects1= [];
gdjs.MenuCode.GDLongOppObjects2= [];
gdjs.MenuCode.GDLongOppObjects3= [];
gdjs.MenuCode.GDLongOppObjects4= [];
gdjs.MenuCode.GDLongOppObjects5= [];
gdjs.MenuCode.GDLongOppObjects6= [];
gdjs.MenuCode.GDLongObjects1= [];
gdjs.MenuCode.GDLongObjects2= [];
gdjs.MenuCode.GDLongObjects3= [];
gdjs.MenuCode.GDLongObjects4= [];
gdjs.MenuCode.GDLongObjects5= [];
gdjs.MenuCode.GDLongObjects6= [];


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

};gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


const repeatCount2 = 20;
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {
gdjs.copyArray(runtimeScene.getObjects("HItsoundVolumeSlider"), gdjs.MenuCode.GDHItsoundVolumeSliderObjects2);
gdjs.copyArray(runtimeScene.getObjects("SquareWhiteSlider"), gdjs.MenuCode.GDSquareWhiteSliderObjects2);

let isConditionTrue_0 = false;
if (true)
{
{for(var i = 0, len = gdjs.MenuCode.GDSquareWhiteSliderObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDSquareWhiteSliderObjects2[i].SetValue(runtimeScene.getGame().getVariables().getFromIndex(37).getChild(7).getAsNumber(), null);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDHItsoundVolumeSliderObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDHItsoundVolumeSliderObjects2[i].SetValue(runtimeScene.getGame().getVariables().getFromIndex(37).getChild(15).getAsNumber(), null);
}
}
}
}

}


};gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 1));
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "freakyMenu.aac", 1, true, 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 0);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}
{gdjs.evtTools.storage.writeNumberInJSONFile("First", "First", 1);
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "Splash", "Splash");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "Cover", "Cover");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "Strums", "Strums");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "LowQuality", "NoLowQuality");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "UltraLowQuality", "NoUltraLowQuality");
}
{gdjs.evtTools.storage.writeStringInJSONFile("Basic", "Settings", runtimeScene.getGame().getVariables().getFromIndex(7).getAsString());
}
{gdjs.evtTools.storage.writeStringInJSONFile("Basic", "Middle", runtimeScene.getGame().getVariables().getFromIndex(36).getAsString());
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "OppNotes", "OppNotes");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "InstantRespawn", "NoInstantRespawn");
}
{gdjs.evtTools.storage.writeNumberInJSONFile("OPT", "LifeOpacity", 255);
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "Hud", "Hud");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "Combo", "Combo");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "StatBounce", "StatBounce");
}
{gdjs.evtTools.storage.writeStringInJSONFile("Modifiers", "Instakill", "NoInstakill");
}
{gdjs.evtTools.storage.writeStringInJSONFile("Modifiers", "Practice", "NoPractice");
}
{gdjs.evtTools.storage.writeStringInJSONFile("Modifiers", "Botplay", "NoBotplay");
}
{gdjs.evtTools.storage.writeStringInJSONFile("Modifiers", "MissChallenge", "NoMissChallenge");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "MissSound", "NoMissSound");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "HitSound", "NoHitSound");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "HitSoundSelect", "camellia");
}
{gdjs.evtTools.storage.writeNumberInJSONFile("OPT", "HitsoundVolume", 100);
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.storage.readStringFromJSONFile("Modifiers", "Instakill", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(38).getChild(0));
}
{gdjs.evtTools.storage.readStringFromJSONFile("Modifiers", "Botplay", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(38).getChild(2));
}
{gdjs.evtTools.storage.readStringFromJSONFile("Modifiers", "Practice", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(38).getChild(1));
}
{gdjs.evtTools.storage.readStringFromJSONFile("OPT", "Splash", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(37).getChild(0));
}
{gdjs.evtTools.storage.readStringFromJSONFile("OPT", "Cover", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(37).getChild(1));
}
{gdjs.evtTools.storage.readStringFromJSONFile("OPT", "Strums", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(37).getChild(2));
}
{gdjs.evtTools.storage.readStringFromJSONFile("OPT", "LowQuality", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(37).getChild(3));
}
{gdjs.evtTools.storage.readStringFromJSONFile("OPT", "UltraLowQuality", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(37).getChild(4));
}
{gdjs.evtTools.storage.readStringFromJSONFile("Basic", "Settings", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(7));
}
{gdjs.evtTools.storage.readStringFromJSONFile("Basic", "Middle", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(36));
}
{gdjs.evtTools.storage.readStringFromJSONFile("OPT", "OppNotes", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(37).getChild(5));
}
{gdjs.evtTools.storage.readStringFromJSONFile("OPT", "InstantRespawn", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(37).getChild(6));
}
{gdjs.evtTools.storage.readNumberFromJSONFile("OPT", "LifeOpacity", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(37).getChild(7));
}
{gdjs.evtTools.storage.readStringFromJSONFile("OPT", "Icons", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(37).getChild(8));
}
{gdjs.evtTools.storage.readStringFromJSONFile("OPT", "Hud", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(37).getChild(9));
}
{gdjs.evtTools.storage.readStringFromJSONFile("OPT", "Combo", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(37).getChild(10));
}
{gdjs.evtTools.storage.readStringFromJSONFile("OPT", "StatBounce", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(37).getChild(11));
}
{gdjs.evtTools.storage.readStringFromJSONFile("Modifiers", "MissChallenge", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(38).getChild(3));
}
{gdjs.evtTools.storage.readStringFromJSONFile("OPT", "MissSound", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(37).getChild(12));
}
{gdjs.evtTools.storage.readStringFromJSONFile("OPT", "HitSound", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(37).getChild(13));
}
{gdjs.evtTools.storage.readStringFromJSONFile("OPT", "HitSoundSelect", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(37).getChild(14));
}
{gdjs.evtTools.storage.readNumberFromJSONFile("OPT", "HitsoundVolume", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(37).getChild(15));
}

{ //Subevents
gdjs.MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.MenuCode.asyncCallback14867604 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("BG"), gdjs.MenuCode.GDBGObjects2);
gdjs.copyArray(runtimeScene.getObjects("gfDancinTitle"), gdjs.MenuCode.GDgfDancinTitleObjects2);
gdjs.copyArray(runtimeScene.getObjects("logobumpin"), gdjs.MenuCode.GDlogobumpinObjects2);
{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 1286, 730);
}
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.MenuCode.GDBGObjects2.length !== 0 ? gdjs.MenuCode.GDBGObjects2[0] : null), true, "", 0);
}
{for(var i = 0, len = gdjs.MenuCode.GDgfDancinTitleObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDgfDancinTitleObjects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDlogobumpinObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDlogobumpinObjects2[i].deleteFromScene(runtimeScene);
}
}
gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.idToCallbackMap.set(14867604, gdjs.MenuCode.asyncCallback14867604);
gdjs.MenuCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.MenuCode.asyncCallback14867604(runtimeScene, asyncObjectsList)), 14867604, asyncObjectsList);
}
}

}


};gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDFreeplayObjects2Objects = Hashtable.newFrom({"Freeplay": gdjs.MenuCode.GDFreeplayObjects2});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDFreeplayObjects2Objects = Hashtable.newFrom({"Freeplay": gdjs.MenuCode.GDFreeplayObjects2});
gdjs.MenuCode.asyncCallback14875564 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("NewBBText"), gdjs.MenuCode.GDNewBBTextObjects3);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.MenuCode.GDNewBBTextObjects3.length !== 0 ? gdjs.MenuCode.GDNewBBTextObjects3[0] : null), true, "", 0);
}
gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.idToCallbackMap.set(14875564, gdjs.MenuCode.asyncCallback14875564);
gdjs.MenuCode.eventsList4 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.MenuCode.asyncCallback14875564(runtimeScene, asyncObjectsList)), 14875564, asyncObjectsList);
}
}

}


};gdjs.MenuCode.asyncCallback14874980 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Black"), gdjs.MenuCode.GDBlackObjects2);

{for(var i = 0, len = gdjs.MenuCode.GDBlackObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDBlackObjects2[i].getBehavior("Tween").addObjectPositionYTween2("black", 1200, "linear", 2, false);
}
}

{ //Subevents
gdjs.MenuCode.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.idToCallbackMap.set(14874980, gdjs.MenuCode.asyncCallback14874980);
gdjs.MenuCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
for (const obj of gdjs.MenuCode.GDBlackObjects1) asyncObjectsList.addObject("Black", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.MenuCode.asyncCallback14874980(runtimeScene, asyncObjectsList)), 14874980, asyncObjectsList);
}
}

}


};gdjs.MenuCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Freeplay"), gdjs.MenuCode.GDFreeplayObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDFreeplayObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDFreeplayObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDFreeplayObjects2[i].getBehavior("Animation").getAnimationName() == "idle" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDFreeplayObjects2[k] = gdjs.MenuCode.GDFreeplayObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDFreeplayObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDFreeplayObjects2 */
{for(var i = 0, len = gdjs.MenuCode.GDFreeplayObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDFreeplayObjects2[i].getBehavior("Animation").setAnimationName("pressed");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Freeplay"), gdjs.MenuCode.GDFreeplayObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDFreeplayObjects2Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDFreeplayObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDFreeplayObjects2[i].getBehavior("Animation").getAnimationName() == "pressed" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDFreeplayObjects2[k] = gdjs.MenuCode.GDFreeplayObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDFreeplayObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDFreeplayObjects2 */
{for(var i = 0, len = gdjs.MenuCode.GDFreeplayObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDFreeplayObjects2[i].getBehavior("Animation").setAnimationName("idle");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BG"), gdjs.MenuCode.GDBGObjects1);
gdjs.copyArray(runtimeScene.getObjects("Freeplay"), gdjs.MenuCode.GDFreeplayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDFreeplayObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDFreeplayObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDFreeplayObjects1[k] = gdjs.MenuCode.GDFreeplayObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDFreeplayObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDFreeplayObjects1.length;i<l;++i) {
    if ( !(gdjs.MenuCode.GDFreeplayObjects1[i].getBehavior("Animation").getAnimationName() == "Clicked") ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDFreeplayObjects1[k] = gdjs.MenuCode.GDFreeplayObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDFreeplayObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDBGObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBGObjects1[i].getY() == 1089 ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDBGObjects1[k] = gdjs.MenuCode.GDBGObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBGObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Black"), gdjs.MenuCode.GDBlackObjects1);
/* Reuse gdjs.MenuCode.GDFreeplayObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "confirmMenu.ogg", false, 100, 1);
}
{for(var i = 0, len = gdjs.MenuCode.GDFreeplayObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDFreeplayObjects1[i].getBehavior("Animation").setAnimationName("Clicked");
}
}
{for(var i = 0, len = gdjs.MenuCode.GDBlackObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBlackObjects1[i].setY(-(1200));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(false);
}

{ //Subevents
gdjs.MenuCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDOptionsObjects2Objects = Hashtable.newFrom({"Options": gdjs.MenuCode.GDOptionsObjects2});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDOptionsObjects2Objects = Hashtable.newFrom({"Options": gdjs.MenuCode.GDOptionsObjects2});
gdjs.MenuCode.asyncCallback14882364 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("BG"), gdjs.MenuCode.GDBGObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("Options"), gdjs.MenuCode.GDOptionsObjects3);

{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.MenuCode.GDBGObjects3.length !== 0 ? gdjs.MenuCode.GDBGObjects3[0] : null), true, "", 0);
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "ui");
}
{for(var i = 0, len = gdjs.MenuCode.GDOptionsObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDOptionsObjects3[i].getBehavior("Animation").setAnimationName("idle");
}
}
gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.idToCallbackMap.set(14882364, gdjs.MenuCode.asyncCallback14882364);
gdjs.MenuCode.eventsList7 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
/* Don't save BG as it will be provided by the parent asyncObjectsList. */
/* Don't save Options as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.MenuCode.asyncCallback14882364(runtimeScene, asyncObjectsList)), 14882364, asyncObjectsList);
}
}

}


};gdjs.MenuCode.asyncCallback14881436 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Black"), gdjs.MenuCode.GDBlackObjects2);

{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(1);
}
{for(var i = 0, len = gdjs.MenuCode.GDBlackObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDBlackObjects2[i].getBehavior("Tween").addObjectPositionYTween2("black", 1200, "linear", 2, false);
}
}

{ //Subevents
gdjs.MenuCode.eventsList7(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.idToCallbackMap.set(14881436, gdjs.MenuCode.asyncCallback14881436);
gdjs.MenuCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
for (const obj of gdjs.MenuCode.GDBGObjects1) asyncObjectsList.addObject("BG", obj);
for (const obj of gdjs.MenuCode.GDBlackObjects1) asyncObjectsList.addObject("Black", obj);
for (const obj of gdjs.MenuCode.GDOptionsObjects1) asyncObjectsList.addObject("Options", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.MenuCode.asyncCallback14881436(runtimeScene, asyncObjectsList)), 14881436, asyncObjectsList);
}
}

}


};gdjs.MenuCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.MenuCode.GDOptionsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDOptionsObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDOptionsObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDOptionsObjects2[i].getBehavior("Animation").getAnimationName() == "idle" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDOptionsObjects2[k] = gdjs.MenuCode.GDOptionsObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDOptionsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDOptionsObjects2 */
{for(var i = 0, len = gdjs.MenuCode.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDOptionsObjects2[i].getBehavior("Animation").setAnimationName("pressed");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.MenuCode.GDOptionsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDOptionsObjects2Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDOptionsObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDOptionsObjects2[i].getBehavior("Animation").getAnimationName() == "pressed" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDOptionsObjects2[k] = gdjs.MenuCode.GDOptionsObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDOptionsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDOptionsObjects2 */
{for(var i = 0, len = gdjs.MenuCode.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDOptionsObjects2[i].getBehavior("Animation").setAnimationName("idle");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BG"), gdjs.MenuCode.GDBGObjects1);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.MenuCode.GDOptionsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDOptionsObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDOptionsObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDOptionsObjects1[k] = gdjs.MenuCode.GDOptionsObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDOptionsObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDOptionsObjects1.length;i<l;++i) {
    if ( !(gdjs.MenuCode.GDOptionsObjects1[i].getBehavior("Animation").getAnimationName() == "Clicked") ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDOptionsObjects1[k] = gdjs.MenuCode.GDOptionsObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDOptionsObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDBGObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBGObjects1[i].getY() == 1944 ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDBGObjects1[k] = gdjs.MenuCode.GDBGObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBGObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Black"), gdjs.MenuCode.GDBlackObjects1);
/* Reuse gdjs.MenuCode.GDOptionsObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "confirmMenu.ogg", false, 100, 1);
}
{for(var i = 0, len = gdjs.MenuCode.GDOptionsObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDOptionsObjects1[i].getBehavior("Animation").setAnimationName("Clicked");
}
}
{for(var i = 0, len = gdjs.MenuCode.GDBlackObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBlackObjects1[i].setY(-(1200));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(false);
}

{ //Subevents
gdjs.MenuCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.MenuCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BG"), gdjs.MenuCode.GDBGObjects2);
gdjs.copyArray(runtimeScene.getObjects("Optionsbuttons"), gdjs.MenuCode.GDOptionsbuttonsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDOptionsbuttonsObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDOptionsbuttonsObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDOptionsbuttonsObjects2[k] = gdjs.MenuCode.GDOptionsbuttonsObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDOptionsbuttonsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDOptionsbuttonsObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDOptionsbuttonsObjects2[i].getY() == 1988 ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDOptionsbuttonsObjects2[k] = gdjs.MenuCode.GDOptionsbuttonsObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDOptionsbuttonsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDBGObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBGObjects2[i].getY() == 2793 ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDBGObjects2[k] = gdjs.MenuCode.GDBGObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDBGObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14884660);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDBGObjects2 */
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.MenuCode.GDBGObjects2.length !== 0 ? gdjs.MenuCode.GDBGObjects2[0] : null), true, "", 0);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(2);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BG"), gdjs.MenuCode.GDBGObjects2);
gdjs.copyArray(runtimeScene.getObjects("Optionsbuttons"), gdjs.MenuCode.GDOptionsbuttonsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDOptionsbuttonsObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDOptionsbuttonsObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDOptionsbuttonsObjects2[k] = gdjs.MenuCode.GDOptionsbuttonsObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDOptionsbuttonsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDOptionsbuttonsObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDOptionsbuttonsObjects2[i].getY() == 2192 ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDOptionsbuttonsObjects2[k] = gdjs.MenuCode.GDOptionsbuttonsObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDOptionsbuttonsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDBGObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBGObjects2[i].getY() == 3680 ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDBGObjects2[k] = gdjs.MenuCode.GDBGObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDBGObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14886612);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDBGObjects2 */
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.MenuCode.GDBGObjects2.length !== 0 ? gdjs.MenuCode.GDBGObjects2[0] : null), true, "", 0);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(2);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BG"), gdjs.MenuCode.GDBGObjects1);
gdjs.copyArray(runtimeScene.getObjects("Optionsbuttons"), gdjs.MenuCode.GDOptionsbuttonsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDOptionsbuttonsObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDOptionsbuttonsObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDOptionsbuttonsObjects1[k] = gdjs.MenuCode.GDOptionsbuttonsObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDOptionsbuttonsObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDOptionsbuttonsObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDOptionsbuttonsObjects1[i].getY() == 2385 ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDOptionsbuttonsObjects1[k] = gdjs.MenuCode.GDOptionsbuttonsObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDOptionsbuttonsObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDBGObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBGObjects1[i].getY() == 4510 ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDBGObjects1[k] = gdjs.MenuCode.GDBGObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBGObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14888740);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDBGObjects1 */
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.MenuCode.GDBGObjects1.length !== 0 ? gdjs.MenuCode.GDBGObjects1[0] : null), true, "", 0);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(2);
}
}

}


};gdjs.MenuCode.eventsList11 = function(runtimeScene) {

};gdjs.MenuCode.eventsList12 = function(runtimeScene) {

};gdjs.MenuCode.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects5);

for (gdjs.MenuCode.forEachIndex6 = 0;gdjs.MenuCode.forEachIndex6 < gdjs.MenuCode.GDCheckBoxesObjects5.length;++gdjs.MenuCode.forEachIndex6) {
gdjs.MenuCode.GDCheckBoxesObjects6.length = 0;


gdjs.MenuCode.forEachTemporary6 = gdjs.MenuCode.GDCheckBoxesObjects5[gdjs.MenuCode.forEachIndex6];
gdjs.MenuCode.GDCheckBoxesObjects6.push(gdjs.MenuCode.forEachTemporary6);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects6[i].getBehavior("Animation").getAnimationName() != "check" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects6[k] = gdjs.MenuCode.GDCheckBoxesObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects6[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects6[i].getVariables().getFromIndex(0)) == "Splash" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects6[k] = gdjs.MenuCode.GDCheckBoxesObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(37).getChild(0).getAsString() == "Splash");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14891820);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects6.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects6[i].getBehavior("Animation").setAnimationName("finished");
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects4);

for (gdjs.MenuCode.forEachIndex5 = 0;gdjs.MenuCode.forEachIndex5 < gdjs.MenuCode.GDCheckBoxesObjects4.length;++gdjs.MenuCode.forEachIndex5) {
gdjs.MenuCode.GDCheckBoxesObjects5.length = 0;


gdjs.MenuCode.forEachTemporary5 = gdjs.MenuCode.GDCheckBoxesObjects4[gdjs.MenuCode.forEachIndex5];
gdjs.MenuCode.GDCheckBoxesObjects5.push(gdjs.MenuCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").getAnimationName() != "empty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariables().getFromIndex(0)) == "Splash" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(37).getChild(0).getAsString() == "NoSplash");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14893476);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects5.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").setAnimationName("finishedEmpty");
}
}
}
}

}


};gdjs.MenuCode.eventsList14 = function(runtimeScene) {

};gdjs.MenuCode.eventsList15 = function(runtimeScene) {

};gdjs.MenuCode.eventsList16 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects5);

for (gdjs.MenuCode.forEachIndex6 = 0;gdjs.MenuCode.forEachIndex6 < gdjs.MenuCode.GDCheckBoxesObjects5.length;++gdjs.MenuCode.forEachIndex6) {
gdjs.MenuCode.GDCheckBoxesObjects6.length = 0;


gdjs.MenuCode.forEachTemporary6 = gdjs.MenuCode.GDCheckBoxesObjects5[gdjs.MenuCode.forEachIndex6];
gdjs.MenuCode.GDCheckBoxesObjects6.push(gdjs.MenuCode.forEachTemporary6);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects6[i].getBehavior("Animation").getAnimationName() != "check" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects6[k] = gdjs.MenuCode.GDCheckBoxesObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects6[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects6[i].getVariables().getFromIndex(0)) == "Cover" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects6[k] = gdjs.MenuCode.GDCheckBoxesObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(37).getChild(1).getAsString() == "Cover");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14895388);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects6.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects6[i].getBehavior("Animation").setAnimationName("finished");
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects4);

for (gdjs.MenuCode.forEachIndex5 = 0;gdjs.MenuCode.forEachIndex5 < gdjs.MenuCode.GDCheckBoxesObjects4.length;++gdjs.MenuCode.forEachIndex5) {
gdjs.MenuCode.GDCheckBoxesObjects5.length = 0;


gdjs.MenuCode.forEachTemporary5 = gdjs.MenuCode.GDCheckBoxesObjects4[gdjs.MenuCode.forEachIndex5];
gdjs.MenuCode.GDCheckBoxesObjects5.push(gdjs.MenuCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").getAnimationName() != "empty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariables().getFromIndex(0)) == "Cover" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(37).getChild(1).getAsString() == "NoCover");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14897060);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects5.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").setAnimationName("finishedEmpty");
}
}
}
}

}


};gdjs.MenuCode.eventsList17 = function(runtimeScene) {

};gdjs.MenuCode.eventsList18 = function(runtimeScene) {

};gdjs.MenuCode.eventsList19 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects5);

for (gdjs.MenuCode.forEachIndex6 = 0;gdjs.MenuCode.forEachIndex6 < gdjs.MenuCode.GDCheckBoxesObjects5.length;++gdjs.MenuCode.forEachIndex6) {
gdjs.MenuCode.GDCheckBoxesObjects6.length = 0;


gdjs.MenuCode.forEachTemporary6 = gdjs.MenuCode.GDCheckBoxesObjects5[gdjs.MenuCode.forEachIndex6];
gdjs.MenuCode.GDCheckBoxesObjects6.push(gdjs.MenuCode.forEachTemporary6);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects6[i].getBehavior("Animation").getAnimationName() != "check" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects6[k] = gdjs.MenuCode.GDCheckBoxesObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects6[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects6[i].getVariables().getFromIndex(0)) == "Strums" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects6[k] = gdjs.MenuCode.GDCheckBoxesObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(37).getChild(2).getAsString() == "Strums");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14898972);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects6.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects6[i].getBehavior("Animation").setAnimationName("finished");
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects4);

for (gdjs.MenuCode.forEachIndex5 = 0;gdjs.MenuCode.forEachIndex5 < gdjs.MenuCode.GDCheckBoxesObjects4.length;++gdjs.MenuCode.forEachIndex5) {
gdjs.MenuCode.GDCheckBoxesObjects5.length = 0;


gdjs.MenuCode.forEachTemporary5 = gdjs.MenuCode.GDCheckBoxesObjects4[gdjs.MenuCode.forEachIndex5];
gdjs.MenuCode.GDCheckBoxesObjects5.push(gdjs.MenuCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").getAnimationName() != "empty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariables().getFromIndex(0)) == "Strums" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(37).getChild(2).getAsString() == "NoStrums");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14900628);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects5.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").setAnimationName("finishedEmpty");
}
}
}
}

}


};gdjs.MenuCode.eventsList20 = function(runtimeScene) {

};gdjs.MenuCode.eventsList21 = function(runtimeScene) {

};gdjs.MenuCode.eventsList22 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects5);

for (gdjs.MenuCode.forEachIndex6 = 0;gdjs.MenuCode.forEachIndex6 < gdjs.MenuCode.GDCheckBoxesObjects5.length;++gdjs.MenuCode.forEachIndex6) {
gdjs.MenuCode.GDCheckBoxesObjects6.length = 0;


gdjs.MenuCode.forEachTemporary6 = gdjs.MenuCode.GDCheckBoxesObjects5[gdjs.MenuCode.forEachIndex6];
gdjs.MenuCode.GDCheckBoxesObjects6.push(gdjs.MenuCode.forEachTemporary6);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects6[i].getBehavior("Animation").getAnimationName() != "check" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects6[k] = gdjs.MenuCode.GDCheckBoxesObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects6[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects6[i].getVariables().getFromIndex(0)) == "LowQuality" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects6[k] = gdjs.MenuCode.GDCheckBoxesObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(37).getChild(3).getAsString() == "LowQuality");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14902212);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects6.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects6[i].getBehavior("Animation").setAnimationName("finished");
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects4);

for (gdjs.MenuCode.forEachIndex5 = 0;gdjs.MenuCode.forEachIndex5 < gdjs.MenuCode.GDCheckBoxesObjects4.length;++gdjs.MenuCode.forEachIndex5) {
gdjs.MenuCode.GDCheckBoxesObjects5.length = 0;


gdjs.MenuCode.forEachTemporary5 = gdjs.MenuCode.GDCheckBoxesObjects4[gdjs.MenuCode.forEachIndex5];
gdjs.MenuCode.GDCheckBoxesObjects5.push(gdjs.MenuCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").getAnimationName() != "empty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariables().getFromIndex(0)) == "LowQuality" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(37).getChild(3).getAsString() == "NoLowQuality");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14904004);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects5.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").setAnimationName("finishedEmpty");
}
}
}
}

}


};gdjs.MenuCode.eventsList23 = function(runtimeScene) {

};gdjs.MenuCode.eventsList24 = function(runtimeScene) {

};gdjs.MenuCode.eventsList25 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects4);

for (gdjs.MenuCode.forEachIndex5 = 0;gdjs.MenuCode.forEachIndex5 < gdjs.MenuCode.GDCheckBoxesObjects4.length;++gdjs.MenuCode.forEachIndex5) {
gdjs.MenuCode.GDCheckBoxesObjects5.length = 0;


gdjs.MenuCode.forEachTemporary5 = gdjs.MenuCode.GDCheckBoxesObjects4[gdjs.MenuCode.forEachIndex5];
gdjs.MenuCode.GDCheckBoxesObjects5.push(gdjs.MenuCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").getAnimationName() != "check" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariables().getFromIndex(0)) == "UltraLowQuality" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(37).getChild(4).getAsString() == "UltraLowQuality");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14906596);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects5.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").setAnimationName("finished");
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects3);

for (gdjs.MenuCode.forEachIndex4 = 0;gdjs.MenuCode.forEachIndex4 < gdjs.MenuCode.GDCheckBoxesObjects3.length;++gdjs.MenuCode.forEachIndex4) {
gdjs.MenuCode.GDCheckBoxesObjects4.length = 0;


gdjs.MenuCode.forEachTemporary4 = gdjs.MenuCode.GDCheckBoxesObjects3[gdjs.MenuCode.forEachIndex4];
gdjs.MenuCode.GDCheckBoxesObjects4.push(gdjs.MenuCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects4.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects4[i].getBehavior("Animation").getAnimationName() != "empty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects4[k] = gdjs.MenuCode.GDCheckBoxesObjects4[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects4.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects4[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects4[i].getVariables().getFromIndex(0)) == "UltraLowQuality" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects4[k] = gdjs.MenuCode.GDCheckBoxesObjects4[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(37).getChild(4).getAsString() == "NoUltraLowQuality");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14908828);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects4.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects4[i].getBehavior("Animation").setAnimationName("finishedEmpty");
}
}
}
}

}


};gdjs.MenuCode.eventsList26 = function(runtimeScene) {

{


gdjs.MenuCode.eventsList13(runtimeScene);
}


{


gdjs.MenuCode.eventsList16(runtimeScene);
}


{


gdjs.MenuCode.eventsList19(runtimeScene);
}


{


gdjs.MenuCode.eventsList22(runtimeScene);
}


{


gdjs.MenuCode.eventsList25(runtimeScene);
}


};gdjs.MenuCode.eventsList27 = function(runtimeScene) {

};gdjs.MenuCode.eventsList28 = function(runtimeScene) {

};gdjs.MenuCode.eventsList29 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects5);

for (gdjs.MenuCode.forEachIndex6 = 0;gdjs.MenuCode.forEachIndex6 < gdjs.MenuCode.GDCheckBoxesObjects5.length;++gdjs.MenuCode.forEachIndex6) {
gdjs.MenuCode.GDCheckBoxesObjects6.length = 0;


gdjs.MenuCode.forEachTemporary6 = gdjs.MenuCode.GDCheckBoxesObjects5[gdjs.MenuCode.forEachIndex6];
gdjs.MenuCode.GDCheckBoxesObjects6.push(gdjs.MenuCode.forEachTemporary6);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects6[i].getBehavior("Animation").getAnimationName() != "check" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects6[k] = gdjs.MenuCode.GDCheckBoxesObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects6[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects6[i].getVariables().getFromIndex(0)) == "DownScroll" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects6[k] = gdjs.MenuCode.GDCheckBoxesObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(7).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14911236);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects6.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects6[i].getBehavior("Animation").setAnimationName("finished");
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects4);

for (gdjs.MenuCode.forEachIndex5 = 0;gdjs.MenuCode.forEachIndex5 < gdjs.MenuCode.GDCheckBoxesObjects4.length;++gdjs.MenuCode.forEachIndex5) {
gdjs.MenuCode.GDCheckBoxesObjects5.length = 0;


gdjs.MenuCode.forEachTemporary5 = gdjs.MenuCode.GDCheckBoxesObjects4[gdjs.MenuCode.forEachIndex5];
gdjs.MenuCode.GDCheckBoxesObjects5.push(gdjs.MenuCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").getAnimationName() != "empty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariables().getFromIndex(0)) == "DownScroll" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(7).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14913012);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects5.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").setAnimationName("finishedEmpty");
}
}
}
}

}


};gdjs.MenuCode.eventsList30 = function(runtimeScene) {

};gdjs.MenuCode.eventsList31 = function(runtimeScene) {

};gdjs.MenuCode.eventsList32 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects5);

for (gdjs.MenuCode.forEachIndex6 = 0;gdjs.MenuCode.forEachIndex6 < gdjs.MenuCode.GDCheckBoxesObjects5.length;++gdjs.MenuCode.forEachIndex6) {
gdjs.MenuCode.GDCheckBoxesObjects6.length = 0;


gdjs.MenuCode.forEachTemporary6 = gdjs.MenuCode.GDCheckBoxesObjects5[gdjs.MenuCode.forEachIndex6];
gdjs.MenuCode.GDCheckBoxesObjects6.push(gdjs.MenuCode.forEachTemporary6);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects6[i].getBehavior("Animation").getAnimationName() != "empty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects6[k] = gdjs.MenuCode.GDCheckBoxesObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects6[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects6[i].getVariables().getFromIndex(0)) == "MiddleScroll" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects6[k] = gdjs.MenuCode.GDCheckBoxesObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(36).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14915276);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects6.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects6[i].getBehavior("Animation").setAnimationName("finished");
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects4);

for (gdjs.MenuCode.forEachIndex5 = 0;gdjs.MenuCode.forEachIndex5 < gdjs.MenuCode.GDCheckBoxesObjects4.length;++gdjs.MenuCode.forEachIndex5) {
gdjs.MenuCode.GDCheckBoxesObjects5.length = 0;


gdjs.MenuCode.forEachTemporary5 = gdjs.MenuCode.GDCheckBoxesObjects4[gdjs.MenuCode.forEachIndex5];
gdjs.MenuCode.GDCheckBoxesObjects5.push(gdjs.MenuCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").getAnimationName() != "check" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariables().getFromIndex(0)) == "MiddleScroll" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(36).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14917292);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects5.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").setAnimationName("finishedEmpty");
}
}
}
}

}


};gdjs.MenuCode.eventsList33 = function(runtimeScene) {

};gdjs.MenuCode.eventsList34 = function(runtimeScene) {

};gdjs.MenuCode.eventsList35 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects5);

for (gdjs.MenuCode.forEachIndex6 = 0;gdjs.MenuCode.forEachIndex6 < gdjs.MenuCode.GDCheckBoxesObjects5.length;++gdjs.MenuCode.forEachIndex6) {
gdjs.MenuCode.GDCheckBoxesObjects6.length = 0;


gdjs.MenuCode.forEachTemporary6 = gdjs.MenuCode.GDCheckBoxesObjects5[gdjs.MenuCode.forEachIndex6];
gdjs.MenuCode.GDCheckBoxesObjects6.push(gdjs.MenuCode.forEachTemporary6);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects6[i].getBehavior("Animation").getAnimationName() != "empty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects6[k] = gdjs.MenuCode.GDCheckBoxesObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects6[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects6[i].getVariables().getFromIndex(0)) == "OppNotes" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects6[k] = gdjs.MenuCode.GDCheckBoxesObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(37).getChild(5).getAsString() == "OppNotes");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14919516);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects6.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects6[i].getBehavior("Animation").setAnimationName("finished");
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects4);

for (gdjs.MenuCode.forEachIndex5 = 0;gdjs.MenuCode.forEachIndex5 < gdjs.MenuCode.GDCheckBoxesObjects4.length;++gdjs.MenuCode.forEachIndex5) {
gdjs.MenuCode.GDCheckBoxesObjects5.length = 0;


gdjs.MenuCode.forEachTemporary5 = gdjs.MenuCode.GDCheckBoxesObjects4[gdjs.MenuCode.forEachIndex5];
gdjs.MenuCode.GDCheckBoxesObjects5.push(gdjs.MenuCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").getAnimationName() != "check" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariables().getFromIndex(0)) == "OppNotes" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(37).getChild(5).getAsString() == "NoOppNotes");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14921316);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects5.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").setAnimationName("finishedEmpty");
}
}
}
}

}


};gdjs.MenuCode.eventsList36 = function(runtimeScene) {

};gdjs.MenuCode.eventsList37 = function(runtimeScene) {

};gdjs.MenuCode.eventsList38 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects5);

for (gdjs.MenuCode.forEachIndex6 = 0;gdjs.MenuCode.forEachIndex6 < gdjs.MenuCode.GDCheckBoxesObjects5.length;++gdjs.MenuCode.forEachIndex6) {
gdjs.MenuCode.GDCheckBoxesObjects6.length = 0;


gdjs.MenuCode.forEachTemporary6 = gdjs.MenuCode.GDCheckBoxesObjects5[gdjs.MenuCode.forEachIndex6];
gdjs.MenuCode.GDCheckBoxesObjects6.push(gdjs.MenuCode.forEachTemporary6);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects6[i].getBehavior("Animation").getAnimationName() != "empty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects6[k] = gdjs.MenuCode.GDCheckBoxesObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects6[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects6[i].getVariables().getFromIndex(0)) == "InstantRespawn" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects6[k] = gdjs.MenuCode.GDCheckBoxesObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(37).getChild(6).getAsString() == "InstantRespawn");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14923468);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects6.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects6[i].getBehavior("Animation").setAnimationName("finished");
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects4);

for (gdjs.MenuCode.forEachIndex5 = 0;gdjs.MenuCode.forEachIndex5 < gdjs.MenuCode.GDCheckBoxesObjects4.length;++gdjs.MenuCode.forEachIndex5) {
gdjs.MenuCode.GDCheckBoxesObjects5.length = 0;


gdjs.MenuCode.forEachTemporary5 = gdjs.MenuCode.GDCheckBoxesObjects4[gdjs.MenuCode.forEachIndex5];
gdjs.MenuCode.GDCheckBoxesObjects5.push(gdjs.MenuCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").getAnimationName() != "check" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariables().getFromIndex(0)) == "InstantRespawn" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(37).getChild(6).getAsString() == "NoInstantRespawn");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14925700);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects5.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").setAnimationName("finishedEmpty");
}
}
}
}

}


};gdjs.MenuCode.eventsList39 = function(runtimeScene) {

};gdjs.MenuCode.eventsList40 = function(runtimeScene) {

};gdjs.MenuCode.eventsList41 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects5);

for (gdjs.MenuCode.forEachIndex6 = 0;gdjs.MenuCode.forEachIndex6 < gdjs.MenuCode.GDCheckBoxesObjects5.length;++gdjs.MenuCode.forEachIndex6) {
gdjs.MenuCode.GDCheckBoxesObjects6.length = 0;


gdjs.MenuCode.forEachTemporary6 = gdjs.MenuCode.GDCheckBoxesObjects5[gdjs.MenuCode.forEachIndex6];
gdjs.MenuCode.GDCheckBoxesObjects6.push(gdjs.MenuCode.forEachTemporary6);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects6[i].getBehavior("Animation").getAnimationName() != "empty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects6[k] = gdjs.MenuCode.GDCheckBoxesObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects6[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects6[i].getVariables().getFromIndex(0)) == "MissSound" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects6[k] = gdjs.MenuCode.GDCheckBoxesObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(37).getChild(12).getAsString() == "MissSound");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14928044);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects6.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects6[i].getBehavior("Animation").setAnimationName("finished");
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects4);

for (gdjs.MenuCode.forEachIndex5 = 0;gdjs.MenuCode.forEachIndex5 < gdjs.MenuCode.GDCheckBoxesObjects4.length;++gdjs.MenuCode.forEachIndex5) {
gdjs.MenuCode.GDCheckBoxesObjects5.length = 0;


gdjs.MenuCode.forEachTemporary5 = gdjs.MenuCode.GDCheckBoxesObjects4[gdjs.MenuCode.forEachIndex5];
gdjs.MenuCode.GDCheckBoxesObjects5.push(gdjs.MenuCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").getAnimationName() != "check" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariables().getFromIndex(0)) == "MissSound" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(37).getChild(12).getAsString() == "NoMissSound");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14929356);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects5.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").setAnimationName("finishedEmpty");
}
}
}
}

}


};gdjs.MenuCode.eventsList42 = function(runtimeScene) {

};gdjs.MenuCode.eventsList43 = function(runtimeScene) {

};gdjs.MenuCode.eventsList44 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects4);

for (gdjs.MenuCode.forEachIndex5 = 0;gdjs.MenuCode.forEachIndex5 < gdjs.MenuCode.GDCheckBoxesObjects4.length;++gdjs.MenuCode.forEachIndex5) {
gdjs.MenuCode.GDCheckBoxesObjects5.length = 0;


gdjs.MenuCode.forEachTemporary5 = gdjs.MenuCode.GDCheckBoxesObjects4[gdjs.MenuCode.forEachIndex5];
gdjs.MenuCode.GDCheckBoxesObjects5.push(gdjs.MenuCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").getAnimationName() != "empty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariables().getFromIndex(0)) == "HitSound" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(37).getChild(13).getAsString() == "HitSound");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14931748);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects5.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").setAnimationName("finished");
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects3);

for (gdjs.MenuCode.forEachIndex4 = 0;gdjs.MenuCode.forEachIndex4 < gdjs.MenuCode.GDCheckBoxesObjects3.length;++gdjs.MenuCode.forEachIndex4) {
gdjs.MenuCode.GDCheckBoxesObjects4.length = 0;


gdjs.MenuCode.forEachTemporary4 = gdjs.MenuCode.GDCheckBoxesObjects3[gdjs.MenuCode.forEachIndex4];
gdjs.MenuCode.GDCheckBoxesObjects4.push(gdjs.MenuCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects4.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects4[i].getBehavior("Animation").getAnimationName() != "check" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects4[k] = gdjs.MenuCode.GDCheckBoxesObjects4[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects4.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects4[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects4[i].getVariables().getFromIndex(0)) == "HitSound" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects4[k] = gdjs.MenuCode.GDCheckBoxesObjects4[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(37).getChild(13).getAsString() == "NoHitSound");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14933548);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects4.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects4[i].getBehavior("Animation").setAnimationName("finishedEmpty");
}
}
}
}

}


};gdjs.MenuCode.eventsList45 = function(runtimeScene) {

{


gdjs.MenuCode.eventsList29(runtimeScene);
}


{


gdjs.MenuCode.eventsList32(runtimeScene);
}


{


gdjs.MenuCode.eventsList35(runtimeScene);
}


{


gdjs.MenuCode.eventsList38(runtimeScene);
}


{


gdjs.MenuCode.eventsList41(runtimeScene);
}


{


gdjs.MenuCode.eventsList44(runtimeScene);
}


};gdjs.MenuCode.eventsList46 = function(runtimeScene) {

};gdjs.MenuCode.eventsList47 = function(runtimeScene) {

};gdjs.MenuCode.eventsList48 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects5);

for (gdjs.MenuCode.forEachIndex6 = 0;gdjs.MenuCode.forEachIndex6 < gdjs.MenuCode.GDCheckBoxesObjects5.length;++gdjs.MenuCode.forEachIndex6) {
gdjs.MenuCode.GDCheckBoxesObjects6.length = 0;


gdjs.MenuCode.forEachTemporary6 = gdjs.MenuCode.GDCheckBoxesObjects5[gdjs.MenuCode.forEachIndex6];
gdjs.MenuCode.GDCheckBoxesObjects6.push(gdjs.MenuCode.forEachTemporary6);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects6[i].getBehavior("Animation").getAnimationName() != "check" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects6[k] = gdjs.MenuCode.GDCheckBoxesObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects6[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects6[i].getVariables().getFromIndex(0)) == "Icons" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects6[k] = gdjs.MenuCode.GDCheckBoxesObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(37).getChild(8).getAsString() == "NoIcons");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14935700);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects6.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects6[i].getBehavior("Animation").setAnimationName("finished");
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects4);

for (gdjs.MenuCode.forEachIndex5 = 0;gdjs.MenuCode.forEachIndex5 < gdjs.MenuCode.GDCheckBoxesObjects4.length;++gdjs.MenuCode.forEachIndex5) {
gdjs.MenuCode.GDCheckBoxesObjects5.length = 0;


gdjs.MenuCode.forEachTemporary5 = gdjs.MenuCode.GDCheckBoxesObjects4[gdjs.MenuCode.forEachIndex5];
gdjs.MenuCode.GDCheckBoxesObjects5.push(gdjs.MenuCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").getAnimationName() != "empty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariables().getFromIndex(0)) == "Icons" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(37).getChild(8).getAsString() == "Icons");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14937356);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects5.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").setAnimationName("finishedEmpty");
}
}
}
}

}


};gdjs.MenuCode.eventsList49 = function(runtimeScene) {

};gdjs.MenuCode.eventsList50 = function(runtimeScene) {

};gdjs.MenuCode.eventsList51 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects5);

for (gdjs.MenuCode.forEachIndex6 = 0;gdjs.MenuCode.forEachIndex6 < gdjs.MenuCode.GDCheckBoxesObjects5.length;++gdjs.MenuCode.forEachIndex6) {
gdjs.MenuCode.GDCheckBoxesObjects6.length = 0;


gdjs.MenuCode.forEachTemporary6 = gdjs.MenuCode.GDCheckBoxesObjects5[gdjs.MenuCode.forEachIndex6];
gdjs.MenuCode.GDCheckBoxesObjects6.push(gdjs.MenuCode.forEachTemporary6);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects6[i].getBehavior("Animation").getAnimationName() != "empty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects6[k] = gdjs.MenuCode.GDCheckBoxesObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects6[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects6[i].getVariables().getFromIndex(0)) == "Hud" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects6[k] = gdjs.MenuCode.GDCheckBoxesObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(37).getChild(9).getAsString() == "NoHud");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14939268);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects6.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects6[i].getBehavior("Animation").setAnimationName("finished");
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects4);

for (gdjs.MenuCode.forEachIndex5 = 0;gdjs.MenuCode.forEachIndex5 < gdjs.MenuCode.GDCheckBoxesObjects4.length;++gdjs.MenuCode.forEachIndex5) {
gdjs.MenuCode.GDCheckBoxesObjects5.length = 0;


gdjs.MenuCode.forEachTemporary5 = gdjs.MenuCode.GDCheckBoxesObjects4[gdjs.MenuCode.forEachIndex5];
gdjs.MenuCode.GDCheckBoxesObjects5.push(gdjs.MenuCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").getAnimationName() != "check" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariables().getFromIndex(0)) == "Hud" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(37).getChild(9).getAsString() == "Hud");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14940940);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects5.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").setAnimationName("finishedEmpty");
}
}
}
}

}


};gdjs.MenuCode.eventsList52 = function(runtimeScene) {

};gdjs.MenuCode.eventsList53 = function(runtimeScene) {

};gdjs.MenuCode.eventsList54 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects5);

for (gdjs.MenuCode.forEachIndex6 = 0;gdjs.MenuCode.forEachIndex6 < gdjs.MenuCode.GDCheckBoxesObjects5.length;++gdjs.MenuCode.forEachIndex6) {
gdjs.MenuCode.GDCheckBoxesObjects6.length = 0;


gdjs.MenuCode.forEachTemporary6 = gdjs.MenuCode.GDCheckBoxesObjects5[gdjs.MenuCode.forEachIndex6];
gdjs.MenuCode.GDCheckBoxesObjects6.push(gdjs.MenuCode.forEachTemporary6);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects6[i].getBehavior("Animation").getAnimationName() != "check" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects6[k] = gdjs.MenuCode.GDCheckBoxesObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects6[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects6[i].getVariables().getFromIndex(0)) == "Combo" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects6[k] = gdjs.MenuCode.GDCheckBoxesObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(37).getChild(10).getAsString() == "Combo");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14942852);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects6.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects6[i].getBehavior("Animation").setAnimationName("finished");
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects4);

for (gdjs.MenuCode.forEachIndex5 = 0;gdjs.MenuCode.forEachIndex5 < gdjs.MenuCode.GDCheckBoxesObjects4.length;++gdjs.MenuCode.forEachIndex5) {
gdjs.MenuCode.GDCheckBoxesObjects5.length = 0;


gdjs.MenuCode.forEachTemporary5 = gdjs.MenuCode.GDCheckBoxesObjects4[gdjs.MenuCode.forEachIndex5];
gdjs.MenuCode.GDCheckBoxesObjects5.push(gdjs.MenuCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").getAnimationName() != "empty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariables().getFromIndex(0)) == "Combo" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(37).getChild(10).getAsString() == "NoCombo");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14944508);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects5.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").setAnimationName("finishedEmpty");
}
}
}
}

}


};gdjs.MenuCode.eventsList55 = function(runtimeScene) {

};gdjs.MenuCode.eventsList56 = function(runtimeScene) {

};gdjs.MenuCode.eventsList57 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects4);

for (gdjs.MenuCode.forEachIndex5 = 0;gdjs.MenuCode.forEachIndex5 < gdjs.MenuCode.GDCheckBoxesObjects4.length;++gdjs.MenuCode.forEachIndex5) {
gdjs.MenuCode.GDCheckBoxesObjects5.length = 0;


gdjs.MenuCode.forEachTemporary5 = gdjs.MenuCode.GDCheckBoxesObjects4[gdjs.MenuCode.forEachIndex5];
gdjs.MenuCode.GDCheckBoxesObjects5.push(gdjs.MenuCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").getAnimationName() != "check" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariables().getFromIndex(0)) == "StatBounce" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(37).getChild(11).getAsString() == "StatBounce");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14946092);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects5.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").setAnimationName("finished");
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects3);

for (gdjs.MenuCode.forEachIndex4 = 0;gdjs.MenuCode.forEachIndex4 < gdjs.MenuCode.GDCheckBoxesObjects3.length;++gdjs.MenuCode.forEachIndex4) {
gdjs.MenuCode.GDCheckBoxesObjects4.length = 0;


gdjs.MenuCode.forEachTemporary4 = gdjs.MenuCode.GDCheckBoxesObjects3[gdjs.MenuCode.forEachIndex4];
gdjs.MenuCode.GDCheckBoxesObjects4.push(gdjs.MenuCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects4.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects4[i].getBehavior("Animation").getAnimationName() != "empty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects4[k] = gdjs.MenuCode.GDCheckBoxesObjects4[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects4.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects4[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects4[i].getVariables().getFromIndex(0)) == "StatBounce" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects4[k] = gdjs.MenuCode.GDCheckBoxesObjects4[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(37).getChild(11).getAsString() == "NoStatBounce");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14947884);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects4.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects4[i].getBehavior("Animation").setAnimationName("finishedEmpty");
}
}
}
}

}


};gdjs.MenuCode.eventsList58 = function(runtimeScene) {

{


gdjs.MenuCode.eventsList48(runtimeScene);
}


{


gdjs.MenuCode.eventsList51(runtimeScene);
}


{


gdjs.MenuCode.eventsList54(runtimeScene);
}


{


gdjs.MenuCode.eventsList57(runtimeScene);
}


};gdjs.MenuCode.asyncCallback14949324 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects6);

{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects6.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects6[i].getBehavior("Animation").setAnimationName("finishedEmpty");
}
}
gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.idToCallbackMap.set(14949324, gdjs.MenuCode.asyncCallback14949324);
gdjs.MenuCode.eventsList59 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
for (const obj of gdjs.MenuCode.GDCheckBoxesObjects4) asyncObjectsList.addObject("CheckBoxes", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.MenuCode.asyncCallback14949324(runtimeScene, asyncObjectsList)), 14949324, asyncObjectsList);
}
}

}


};gdjs.MenuCode.asyncCallback14950756 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects5);

{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects5.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").setAnimationName("finished");
}
}
gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.idToCallbackMap.set(14950756, gdjs.MenuCode.asyncCallback14950756);
gdjs.MenuCode.eventsList60 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
for (const obj of gdjs.MenuCode.GDCheckBoxesObjects3) asyncObjectsList.addObject("CheckBoxes", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.MenuCode.asyncCallback14950756(runtimeScene, asyncObjectsList)), 14950756, asyncObjectsList);
}
}

}


};gdjs.MenuCode.eventsList61 = function(runtimeScene) {

{


gdjs.MenuCode.eventsList26(runtimeScene);
}


{


gdjs.MenuCode.eventsList45(runtimeScene);
}


{


gdjs.MenuCode.eventsList58(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects3);

for (gdjs.MenuCode.forEachIndex4 = 0;gdjs.MenuCode.forEachIndex4 < gdjs.MenuCode.GDCheckBoxesObjects3.length;++gdjs.MenuCode.forEachIndex4) {
gdjs.MenuCode.GDCheckBoxesObjects4.length = 0;


gdjs.MenuCode.forEachTemporary4 = gdjs.MenuCode.GDCheckBoxesObjects3[gdjs.MenuCode.forEachIndex4];
gdjs.MenuCode.GDCheckBoxesObjects4.push(gdjs.MenuCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects4.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects4[i].getBehavior("Animation").getAnimationName() == "empty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects4[k] = gdjs.MenuCode.GDCheckBoxesObjects4[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14949140);
}
}
if (isConditionTrue_0) {

{ //Subevents: 
gdjs.MenuCode.eventsList59(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects2);

for (gdjs.MenuCode.forEachIndex3 = 0;gdjs.MenuCode.forEachIndex3 < gdjs.MenuCode.GDCheckBoxesObjects2.length;++gdjs.MenuCode.forEachIndex3) {
gdjs.MenuCode.GDCheckBoxesObjects3.length = 0;


gdjs.MenuCode.forEachTemporary3 = gdjs.MenuCode.GDCheckBoxesObjects2[gdjs.MenuCode.forEachIndex3];
gdjs.MenuCode.GDCheckBoxesObjects3.push(gdjs.MenuCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "check" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14950572);
}
}
if (isConditionTrue_0) {

{ //Subevents: 
gdjs.MenuCode.eventsList60(runtimeScene);} //Subevents end.
}
}

}


};gdjs.MenuCode.eventsList62 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "Splash" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(37).getChild(0).getAsString() == "Splash");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finished" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("empty");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(37).getChild(0).setString("NoSplash");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "Splash", "NoSplash");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "Splash" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(37).getChild(0).getAsString() == "NoSplash");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finishedEmpty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("check");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(37).getChild(0).setString("Splash");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "Splash", "Splash");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "Cover" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(37).getChild(1).getAsString() == "Cover");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finished" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("empty");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(37).getChild(1).setString("NoCover");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "Cover", "NoCover");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "Cover" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(37).getChild(1).getAsString() == "NoCover");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finishedEmpty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("check");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(37).getChild(1).setString("Cover");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "Cover", "Cover");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "Strums" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(37).getChild(2).getAsString() == "Strums");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finished" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("empty");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(37).getChild(2).setString("NoStrums");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "Strums", "NoStrums");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "Strums" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(37).getChild(2).getAsString() == "NoStrums");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finishedEmpty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("check");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(37).getChild(2).setString("Strums");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "Strums", "Strums");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "LowQuality" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(37).getChild(3).getAsString() == "LowQuality");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finished" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("empty");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(37).getChild(3).setString("NoLowQuality");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "LowQuality", "NoLowQuality");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "LowQuality" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(37).getChild(3).getAsString() == "NoLowQuality");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finishedEmpty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("check");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(37).getChild(3).setString("LowQuality");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "LowQuality", "LowQuality");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "UltraLowQuality" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(37).getChild(4).getAsString() == "UltraLowQuality");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finished" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("empty");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(37).getChild(4).setString("NoUltraLowQuality");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "UltraLowQuality", "NoUltraLowQuality");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "UltraLowQuality" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(37).getChild(4).getAsString() == "NoUltraLowQuality");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finishedEmpty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("check");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(37).getChild(4).setString("UltraLowQuality");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "UltraLowQuality", "UltraLowQuality");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "DownScroll" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(7).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finished" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("empty");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(7).setBoolean(true);
}
{gdjs.evtTools.storage.writeStringInJSONFile("Basic", "Settings", runtimeScene.getGame().getVariables().getFromIndex(7).getAsString());
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "DownScroll" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(7).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finishedEmpty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("check");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(7).setBoolean(false);
}
{gdjs.evtTools.storage.writeStringInJSONFile("Basic", "Settings", runtimeScene.getGame().getVariables().getFromIndex(7).getAsString());
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "MiddleScroll" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(36).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finished" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("empty");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(36).setBoolean(false);
}
{gdjs.evtTools.storage.writeStringInJSONFile("Basic", "Middle", runtimeScene.getGame().getVariables().getFromIndex(36).getAsString());
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "MiddleScroll" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(36).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finishedEmpty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("check");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(36).setBoolean(true);
}
{gdjs.evtTools.storage.writeStringInJSONFile("Basic", "Middle", runtimeScene.getGame().getVariables().getFromIndex(36).getAsString());
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "OppNotes" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(37).getChild(5).getAsString() == "OppNotes");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finished" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("empty");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(37).getChild(5).setString("NoOppNotes");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "OppNotes", "NoOppNotes");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "OppNotes" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(37).getChild(5).getAsString() == "NoOppNotes");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finishedEmpty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("check");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(37).getChild(5).setString("OppNotes");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "OppNotes", "OppNotes");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "InstantRespawn" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(37).getChild(6).getAsString() == "InstantRespawn");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finished" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("empty");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(37).getChild(6).setString("NoInstantRespawn");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "InstantRespawn", "NoInstantRespawn");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "InstantRespawn" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(37).getChild(6).getAsString() == "NoInstantRespawn");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finishedEmpty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("check");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(37).getChild(6).setString("InstantRespawn");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "InstantRespawn", "InstantRespawn");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "Icons" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(37).getChild(8).getAsString() == "NoIcons");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finished" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("empty");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(37).getChild(8).setString("Icons");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "Icons", "Icons");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "Icons" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(37).getChild(8).getAsString() == "Icons");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finishedEmpty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("check");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(37).getChild(8).setString("NoIcons");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "Icons", "NoIcons");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "Hud" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(37).getChild(9).getAsString() == "NoHud");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finished" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("empty");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(37).getChild(9).setString("Hud");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "Hud", "Hud");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "Hud" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(37).getChild(9).getAsString() == "Hud");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finishedEmpty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("check");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(37).getChild(9).setString("NoHud");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "Hud", "NoHud");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "Combo" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(37).getChild(10).getAsString() == "Combo");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finished" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("empty");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(37).getChild(10).setString("NoCombo");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "Combo", "NoCombo");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "Combo" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(37).getChild(10).getAsString() == "NoCombo");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finishedEmpty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("check");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(37).getChild(10).setString("Combo");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "Combo", "Combo");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "StatBounce" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(37).getChild(11).getAsString() == "StatBounce");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finished" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("empty");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(37).getChild(11).setString("NoStatBounce");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "StatBounce", "NoStatBounce");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "StatBounce" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(37).getChild(11).getAsString() == "NoStatBounce");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finishedEmpty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("check");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(37).getChild(11).setString("StatBounce");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "StatBounce", "StatBounce");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "MissSound" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(37).getChild(12).getAsString() == "MissSound");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finished" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("empty");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(37).getChild(12).setString("NoMissSound");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "MissSound", "NoMissSound");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "MissSound" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(37).getChild(12).getAsString() == "NoMissSound");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finishedEmpty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("check");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(37).getChild(12).setString("MissSound");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "MissSound", "MissSound");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "HitSound" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(37).getChild(13).getAsString() == "NoHitSound");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finishedEmpty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("check");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(37).getChild(13).setString("HitSound");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "HitSound", "HitSound");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "HitSound" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(37).getChild(13).getAsString() == "HitSound");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finished" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("empty");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(37).getChild(13).setString("NoHitSound");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "HitSound", "NoHitSound");
}
}

}


};gdjs.MenuCode.eventsList63 = function(runtimeScene) {

{


gdjs.MenuCode.eventsList61(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects1);

for (gdjs.MenuCode.forEachIndex2 = 0;gdjs.MenuCode.forEachIndex2 < gdjs.MenuCode.GDCheckBoxesObjects1.length;++gdjs.MenuCode.forEachIndex2) {
gdjs.MenuCode.GDCheckBoxesObjects2.length = 0;


gdjs.MenuCode.forEachTemporary2 = gdjs.MenuCode.GDCheckBoxesObjects1[gdjs.MenuCode.forEachIndex2];
gdjs.MenuCode.GDCheckBoxesObjects2.push(gdjs.MenuCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects2[k] = gdjs.MenuCode.GDCheckBoxesObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14951940);
}
}
if (isConditionTrue_0) {

{ //Subevents: 
gdjs.MenuCode.eventsList62(runtimeScene);} //Subevents end.
}
}

}


};gdjs.MenuCode.eventsList64 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MenuCode.GDHitsoundTextObjects1, gdjs.MenuCode.GDHitsoundTextObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDHitsoundTextObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDHitsoundTextObjects2[i].getBehavior("Text").getText() == "camellia" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDHitsoundTextObjects2[k] = gdjs.MenuCode.GDHitsoundTextObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDHitsoundTextObjects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(37).getChild(14).setString("clap");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDHitsoundTextObjects1, gdjs.MenuCode.GDHitsoundTextObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDHitsoundTextObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDHitsoundTextObjects2[i].getBehavior("Text").getText() == "clap" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDHitsoundTextObjects2[k] = gdjs.MenuCode.GDHitsoundTextObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDHitsoundTextObjects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(37).getChild(14).setString("osu");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDHitsoundTextObjects1, gdjs.MenuCode.GDHitsoundTextObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDHitsoundTextObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDHitsoundTextObjects2[i].getBehavior("Text").getText() == "osu" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDHitsoundTextObjects2[k] = gdjs.MenuCode.GDHitsoundTextObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDHitsoundTextObjects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(37).getChild(14).setString("quaver");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDHitsoundTextObjects1, gdjs.MenuCode.GDHitsoundTextObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDHitsoundTextObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDHitsoundTextObjects2[i].getBehavior("Text").getText() == "quaver" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDHitsoundTextObjects2[k] = gdjs.MenuCode.GDHitsoundTextObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDHitsoundTextObjects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(37).getChild(14).setString("stepmania");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDHitsoundTextObjects1, gdjs.MenuCode.GDHitsoundTextObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDHitsoundTextObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDHitsoundTextObjects2[i].getBehavior("Text").getText() == "stepmania" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDHitsoundTextObjects2[k] = gdjs.MenuCode.GDHitsoundTextObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDHitsoundTextObjects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(37).getChild(14).setString("camellia");
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "HitSoundSelect", runtimeScene.getGame().getVariables().getFromIndex(37).getChild(14).getAsString());
}
}

}


};gdjs.MenuCode.eventsList65 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BG"), gdjs.MenuCode.GDBGObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDBGObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBGObjects2[i].getY() == 1089 ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDBGObjects2[k] = gdjs.MenuCode.GDBGObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDBGObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "ui");
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDBGObjects2 */
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.MenuCode.GDBGObjects2.length !== 0 ? gdjs.MenuCode.GDBGObjects2[0] : null), true, "", 0);
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "ui");
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BG"), gdjs.MenuCode.GDBGObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() > 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDBGObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBGObjects1[i].getY() == 1944 ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDBGObjects1[k] = gdjs.MenuCode.GDBGObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBGObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "ui");
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDBGObjects1 */
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.MenuCode.GDBGObjects1.length !== 0 ? gdjs.MenuCode.GDBGObjects1[0] : null), true, "", 0);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(1);
}
}

}


};gdjs.MenuCode.asyncCallback28133924 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("FullscreenText"), gdjs.MenuCode.GDFullscreenTextObjects2);

{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}
{for(var i = 0, len = gdjs.MenuCode.GDFullscreenTextObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDFullscreenTextObjects2[i].getBehavior("Text").setText("FULLSCREEN");
}
}
gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.idToCallbackMap.set(28133924, gdjs.MenuCode.asyncCallback28133924);
gdjs.MenuCode.eventsList66 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
for (const obj of gdjs.MenuCode.GDFullscreenTextObjects1) asyncObjectsList.addObject("FullscreenText", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.MenuCode.asyncCallback28133924(runtimeScene, asyncObjectsList)), 28133924, asyncObjectsList);
}
}

}


};gdjs.MenuCode.asyncCallback28137196 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("FullscreenText"), gdjs.MenuCode.GDFullscreenTextObjects2);

{gdjs.evtTools.window.setFullScreen(runtimeScene, true, false);
}
{for(var i = 0, len = gdjs.MenuCode.GDFullscreenTextObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDFullscreenTextObjects2[i].getBehavior("Text").setText("WIDE FULLSCREEN");
}
}
gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.idToCallbackMap.set(28137196, gdjs.MenuCode.asyncCallback28137196);
gdjs.MenuCode.eventsList67 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
for (const obj of gdjs.MenuCode.GDFullscreenTextObjects1) asyncObjectsList.addObject("FullscreenText", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.MenuCode.asyncCallback28137196(runtimeScene, asyncObjectsList)), 28137196, asyncObjectsList);
}
}

}


};gdjs.MenuCode.asyncCallback28140236 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("FullscreenText"), gdjs.MenuCode.GDFullscreenTextObjects2);

{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}
{for(var i = 0, len = gdjs.MenuCode.GDFullscreenTextObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDFullscreenTextObjects2[i].getBehavior("Text").setText("NO FULLSCREEN");
}
}
gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.idToCallbackMap.set(28140236, gdjs.MenuCode.asyncCallback28140236);
gdjs.MenuCode.eventsList68 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
for (const obj of gdjs.MenuCode.GDFullscreenTextObjects1) asyncObjectsList.addObject("FullscreenText", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.MenuCode.asyncCallback28140236(runtimeScene, asyncObjectsList)), 28140236, asyncObjectsList);
}
}

}


};gdjs.MenuCode.eventsList69 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.MenuCode.GDBackButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Optionsbuttons"), gdjs.MenuCode.GDOptionsbuttonsObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{gdjs.evtTools.sound.preloadSound(runtimeScene, "freakyMenu.aac");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "logo");
}
{for(var i = 0, len = gdjs.MenuCode.GDOptionsbuttonsObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDOptionsbuttonsObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{gdjs.evtTools.storage.readNumberFromJSONFile("First", "First", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1));
}
{for(var i = 0, len = gdjs.MenuCode.GDBackButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBackButtonObjects1[i].getBehavior("Opacity").setOpacity(155);
}
}

{ //Subevents
gdjs.MenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 0;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Black"), gdjs.MenuCode.GDBlackObjects1);
gdjs.copyArray(runtimeScene.getObjects("TitleEnter"), gdjs.MenuCode.GDTitleEnterObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}
{for(var i = 0, len = gdjs.MenuCode.GDTitleEnterObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDTitleEnterObjects1[i].getBehavior("Animation").setAnimationName("pressed");
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "confirmMenu.ogg", false, 100, 1);
}
{for(var i = 0, len = gdjs.MenuCode.GDBlackObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBlackObjects1[i].getBehavior("Tween").addObjectPositionYTween2("black", 1200, "linear", 2, false);
}
}

{ //Subevents
gdjs.MenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("creditstext"), gdjs.MenuCode.GDcreditstextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDcreditstextObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDcreditstextObjects1[i].getBehavior("MultitouchButton").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDcreditstextObjects1[k] = gdjs.MenuCode.GDcreditstextObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDcreditstextObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Credits", false);
}
}

}


{


gdjs.MenuCode.eventsList6(runtimeScene);
}


{


gdjs.MenuCode.eventsList9(runtimeScene);
}


{


gdjs.MenuCode.eventsList10(runtimeScene);
}


{


gdjs.MenuCode.eventsList63(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("HitsoundText"), gdjs.MenuCode.GDHitsoundTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDHitsoundTextObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDHitsoundTextObjects1[i].getBehavior("MultitouchButton").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDHitsoundTextObjects1[k] = gdjs.MenuCode.GDHitsoundTextObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDHitsoundTextObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(37559780);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList64(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("HitsoundText"), gdjs.MenuCode.GDHitsoundTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDHitsoundTextObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDHitsoundTextObjects1[i].getBehavior("Text").getText() != runtimeScene.getGame().getVariables().getFromIndex(37).getChild(14).getAsString() ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDHitsoundTextObjects1[k] = gdjs.MenuCode.GDHitsoundTextObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDHitsoundTextObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDHitsoundTextObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDHitsoundTextObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDHitsoundTextObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(37).getChild(14).getAsString());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("No"), gdjs.MenuCode.GDNoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDNoObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDNoObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDNoObjects1[k] = gdjs.MenuCode.GDNoObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDNoObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), false);
}
{gdjs.evtTools.storage.writeStringInJSONFile("Keyboard", "Keyboard", "false");
}
{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 1920, 1080);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Inicio", true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Yes"), gdjs.MenuCode.GDYesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDYesObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDYesObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDYesObjects1[k] = gdjs.MenuCode.GDYesObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDYesObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), true);
}
{gdjs.evtTools.storage.writeStringInJSONFile("Keyboard", "Keyboard", "true");
}
{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 1920, 1080);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Inicio", true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SquareWhiteSlider"), gdjs.MenuCode.GDSquareWhiteSliderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDSquareWhiteSliderObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDSquareWhiteSliderObjects1[i].Value(null) != runtimeScene.getGame().getVariables().getFromIndex(37).getChild(7).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDSquareWhiteSliderObjects1[k] = gdjs.MenuCode.GDSquareWhiteSliderObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDSquareWhiteSliderObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDSquareWhiteSliderObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(37).getChild(7).setNumber((( gdjs.MenuCode.GDSquareWhiteSliderObjects1.length === 0 ) ? 0 :gdjs.MenuCode.GDSquareWhiteSliderObjects1[0].Value(null)));
}
{gdjs.evtTools.storage.writeNumberInJSONFile("OPT", "LifeOpacity", (( gdjs.MenuCode.GDSquareWhiteSliderObjects1.length === 0 ) ? 0 :gdjs.MenuCode.GDSquareWhiteSliderObjects1[0].Value(null)));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("HItsoundVolumeSlider"), gdjs.MenuCode.GDHItsoundVolumeSliderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDHItsoundVolumeSliderObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDHItsoundVolumeSliderObjects1[i].Value(null) != runtimeScene.getGame().getVariables().getFromIndex(37).getChild(15).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDHItsoundVolumeSliderObjects1[k] = gdjs.MenuCode.GDHItsoundVolumeSliderObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDHItsoundVolumeSliderObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDHItsoundVolumeSliderObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(37).getChild(15).setNumber((( gdjs.MenuCode.GDHItsoundVolumeSliderObjects1.length === 0 ) ? 0 :gdjs.MenuCode.GDHItsoundVolumeSliderObjects1[0].Value(null)));
}
{gdjs.evtTools.storage.writeNumberInJSONFile("OPT", "HitsoundVolume", (( gdjs.MenuCode.GDHItsoundVolumeSliderObjects1.length === 0 ) ? 0 :gdjs.MenuCode.GDHItsoundVolumeSliderObjects1[0].Value(null)));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.MenuCode.GDBackButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDBackButtonObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBackButtonObjects1[i].getBehavior("MultitouchButton").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDBackButtonObjects1[k] = gdjs.MenuCode.GDBackButtonObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBackButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14836268);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "mods\\Alice\\sounds\\cancelMenu.wav", false, 90, 80);
}

{ //Subevents
gdjs.MenuCode.eventsList65(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FullscreenText"), gdjs.MenuCode.GDFullscreenTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDFullscreenTextObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDFullscreenTextObjects1[i].getBehavior("MultitouchButton").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDFullscreenTextObjects1[k] = gdjs.MenuCode.GDFullscreenTextObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDFullscreenTextObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDFullscreenTextObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDFullscreenTextObjects1[i].getBehavior("Text").getText() == "NO FULLSCREEN" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDFullscreenTextObjects1[k] = gdjs.MenuCode.GDFullscreenTextObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDFullscreenTextObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(28133724);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList66(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FullscreenText"), gdjs.MenuCode.GDFullscreenTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDFullscreenTextObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDFullscreenTextObjects1[i].getBehavior("MultitouchButton").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDFullscreenTextObjects1[k] = gdjs.MenuCode.GDFullscreenTextObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDFullscreenTextObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDFullscreenTextObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDFullscreenTextObjects1[i].getBehavior("Text").getText() == "FULLSCREEN" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDFullscreenTextObjects1[k] = gdjs.MenuCode.GDFullscreenTextObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDFullscreenTextObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(28136996);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList67(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FullscreenText"), gdjs.MenuCode.GDFullscreenTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDFullscreenTextObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDFullscreenTextObjects1[i].getBehavior("MultitouchButton").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDFullscreenTextObjects1[k] = gdjs.MenuCode.GDFullscreenTextObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDFullscreenTextObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDFullscreenTextObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDFullscreenTextObjects1[i].getBehavior("Text").getText() == "WIDE FULLSCREEN" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDFullscreenTextObjects1[k] = gdjs.MenuCode.GDFullscreenTextObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDFullscreenTextObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(28140564);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList68(runtimeScene);} //End of subevents
}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDlogobumpinObjects1.length = 0;
gdjs.MenuCode.GDlogobumpinObjects2.length = 0;
gdjs.MenuCode.GDlogobumpinObjects3.length = 0;
gdjs.MenuCode.GDlogobumpinObjects4.length = 0;
gdjs.MenuCode.GDlogobumpinObjects5.length = 0;
gdjs.MenuCode.GDlogobumpinObjects6.length = 0;
gdjs.MenuCode.GDBlackObjects1.length = 0;
gdjs.MenuCode.GDBlackObjects2.length = 0;
gdjs.MenuCode.GDBlackObjects3.length = 0;
gdjs.MenuCode.GDBlackObjects4.length = 0;
gdjs.MenuCode.GDBlackObjects5.length = 0;
gdjs.MenuCode.GDBlackObjects6.length = 0;
gdjs.MenuCode.GDbegfontObjects1.length = 0;
gdjs.MenuCode.GDbegfontObjects2.length = 0;
gdjs.MenuCode.GDbegfontObjects3.length = 0;
gdjs.MenuCode.GDbegfontObjects4.length = 0;
gdjs.MenuCode.GDbegfontObjects5.length = 0;
gdjs.MenuCode.GDbegfontObjects6.length = 0;
gdjs.MenuCode.GDgfDancinTitleObjects1.length = 0;
gdjs.MenuCode.GDgfDancinTitleObjects2.length = 0;
gdjs.MenuCode.GDgfDancinTitleObjects3.length = 0;
gdjs.MenuCode.GDgfDancinTitleObjects4.length = 0;
gdjs.MenuCode.GDgfDancinTitleObjects5.length = 0;
gdjs.MenuCode.GDgfDancinTitleObjects6.length = 0;
gdjs.MenuCode.GDBGObjects1.length = 0;
gdjs.MenuCode.GDBGObjects2.length = 0;
gdjs.MenuCode.GDBGObjects3.length = 0;
gdjs.MenuCode.GDBGObjects4.length = 0;
gdjs.MenuCode.GDBGObjects5.length = 0;
gdjs.MenuCode.GDBGObjects6.length = 0;
gdjs.MenuCode.GDTitleEnterObjects1.length = 0;
gdjs.MenuCode.GDTitleEnterObjects2.length = 0;
gdjs.MenuCode.GDTitleEnterObjects3.length = 0;
gdjs.MenuCode.GDTitleEnterObjects4.length = 0;
gdjs.MenuCode.GDTitleEnterObjects5.length = 0;
gdjs.MenuCode.GDTitleEnterObjects6.length = 0;
gdjs.MenuCode.GDFreeplayObjects1.length = 0;
gdjs.MenuCode.GDFreeplayObjects2.length = 0;
gdjs.MenuCode.GDFreeplayObjects3.length = 0;
gdjs.MenuCode.GDFreeplayObjects4.length = 0;
gdjs.MenuCode.GDFreeplayObjects5.length = 0;
gdjs.MenuCode.GDFreeplayObjects6.length = 0;
gdjs.MenuCode.GDNewBBTextObjects1.length = 0;
gdjs.MenuCode.GDNewBBTextObjects2.length = 0;
gdjs.MenuCode.GDNewBBTextObjects3.length = 0;
gdjs.MenuCode.GDNewBBTextObjects4.length = 0;
gdjs.MenuCode.GDNewBBTextObjects5.length = 0;
gdjs.MenuCode.GDNewBBTextObjects6.length = 0;
gdjs.MenuCode.GDNoObjects1.length = 0;
gdjs.MenuCode.GDNoObjects2.length = 0;
gdjs.MenuCode.GDNoObjects3.length = 0;
gdjs.MenuCode.GDNoObjects4.length = 0;
gdjs.MenuCode.GDNoObjects5.length = 0;
gdjs.MenuCode.GDNoObjects6.length = 0;
gdjs.MenuCode.GDYesObjects1.length = 0;
gdjs.MenuCode.GDYesObjects2.length = 0;
gdjs.MenuCode.GDYesObjects3.length = 0;
gdjs.MenuCode.GDYesObjects4.length = 0;
gdjs.MenuCode.GDYesObjects5.length = 0;
gdjs.MenuCode.GDYesObjects6.length = 0;
gdjs.MenuCode.GDOptionsObjects1.length = 0;
gdjs.MenuCode.GDOptionsObjects2.length = 0;
gdjs.MenuCode.GDOptionsObjects3.length = 0;
gdjs.MenuCode.GDOptionsObjects4.length = 0;
gdjs.MenuCode.GDOptionsObjects5.length = 0;
gdjs.MenuCode.GDOptionsObjects6.length = 0;
gdjs.MenuCode.GDOptionsTextObjects1.length = 0;
gdjs.MenuCode.GDOptionsTextObjects2.length = 0;
gdjs.MenuCode.GDOptionsTextObjects3.length = 0;
gdjs.MenuCode.GDOptionsTextObjects4.length = 0;
gdjs.MenuCode.GDOptionsTextObjects5.length = 0;
gdjs.MenuCode.GDOptionsTextObjects6.length = 0;
gdjs.MenuCode.GDOptionsbuttonsObjects1.length = 0;
gdjs.MenuCode.GDOptionsbuttonsObjects2.length = 0;
gdjs.MenuCode.GDOptionsbuttonsObjects3.length = 0;
gdjs.MenuCode.GDOptionsbuttonsObjects4.length = 0;
gdjs.MenuCode.GDOptionsbuttonsObjects5.length = 0;
gdjs.MenuCode.GDOptionsbuttonsObjects6.length = 0;
gdjs.MenuCode.GDOptPotionsTextObjects1.length = 0;
gdjs.MenuCode.GDOptPotionsTextObjects2.length = 0;
gdjs.MenuCode.GDOptPotionsTextObjects3.length = 0;
gdjs.MenuCode.GDOptPotionsTextObjects4.length = 0;
gdjs.MenuCode.GDOptPotionsTextObjects5.length = 0;
gdjs.MenuCode.GDOptPotionsTextObjects6.length = 0;
gdjs.MenuCode.GDCheckBoxesObjects1.length = 0;
gdjs.MenuCode.GDCheckBoxesObjects2.length = 0;
gdjs.MenuCode.GDCheckBoxesObjects3.length = 0;
gdjs.MenuCode.GDCheckBoxesObjects4.length = 0;
gdjs.MenuCode.GDCheckBoxesObjects5.length = 0;
gdjs.MenuCode.GDCheckBoxesObjects6.length = 0;
gdjs.MenuCode.GDBackButtonObjects1.length = 0;
gdjs.MenuCode.GDBackButtonObjects2.length = 0;
gdjs.MenuCode.GDBackButtonObjects3.length = 0;
gdjs.MenuCode.GDBackButtonObjects4.length = 0;
gdjs.MenuCode.GDBackButtonObjects5.length = 0;
gdjs.MenuCode.GDBackButtonObjects6.length = 0;
gdjs.MenuCode.GDSquareWhiteSliderObjects1.length = 0;
gdjs.MenuCode.GDSquareWhiteSliderObjects2.length = 0;
gdjs.MenuCode.GDSquareWhiteSliderObjects3.length = 0;
gdjs.MenuCode.GDSquareWhiteSliderObjects4.length = 0;
gdjs.MenuCode.GDSquareWhiteSliderObjects5.length = 0;
gdjs.MenuCode.GDSquareWhiteSliderObjects6.length = 0;
gdjs.MenuCode.GDFullscreenTextObjects1.length = 0;
gdjs.MenuCode.GDFullscreenTextObjects2.length = 0;
gdjs.MenuCode.GDFullscreenTextObjects3.length = 0;
gdjs.MenuCode.GDFullscreenTextObjects4.length = 0;
gdjs.MenuCode.GDFullscreenTextObjects5.length = 0;
gdjs.MenuCode.GDFullscreenTextObjects6.length = 0;
gdjs.MenuCode.GDcreditstextObjects1.length = 0;
gdjs.MenuCode.GDcreditstextObjects2.length = 0;
gdjs.MenuCode.GDcreditstextObjects3.length = 0;
gdjs.MenuCode.GDcreditstextObjects4.length = 0;
gdjs.MenuCode.GDcreditstextObjects5.length = 0;
gdjs.MenuCode.GDcreditstextObjects6.length = 0;
gdjs.MenuCode.GDHItsoundVolumeSliderObjects1.length = 0;
gdjs.MenuCode.GDHItsoundVolumeSliderObjects2.length = 0;
gdjs.MenuCode.GDHItsoundVolumeSliderObjects3.length = 0;
gdjs.MenuCode.GDHItsoundVolumeSliderObjects4.length = 0;
gdjs.MenuCode.GDHItsoundVolumeSliderObjects5.length = 0;
gdjs.MenuCode.GDHItsoundVolumeSliderObjects6.length = 0;
gdjs.MenuCode.GDHitsoundTextObjects1.length = 0;
gdjs.MenuCode.GDHitsoundTextObjects2.length = 0;
gdjs.MenuCode.GDHitsoundTextObjects3.length = 0;
gdjs.MenuCode.GDHitsoundTextObjects4.length = 0;
gdjs.MenuCode.GDHitsoundTextObjects5.length = 0;
gdjs.MenuCode.GDHitsoundTextObjects6.length = 0;
gdjs.MenuCode.GDStatisticsObjects1.length = 0;
gdjs.MenuCode.GDStatisticsObjects2.length = 0;
gdjs.MenuCode.GDStatisticsObjects3.length = 0;
gdjs.MenuCode.GDStatisticsObjects4.length = 0;
gdjs.MenuCode.GDStatisticsObjects5.length = 0;
gdjs.MenuCode.GDStatisticsObjects6.length = 0;
gdjs.MenuCode.GDComboNumbersObjects1.length = 0;
gdjs.MenuCode.GDComboNumbersObjects2.length = 0;
gdjs.MenuCode.GDComboNumbersObjects3.length = 0;
gdjs.MenuCode.GDComboNumbersObjects4.length = 0;
gdjs.MenuCode.GDComboNumbersObjects5.length = 0;
gdjs.MenuCode.GDComboNumbersObjects6.length = 0;
gdjs.MenuCode.GDNotesSplashObjects1.length = 0;
gdjs.MenuCode.GDNotesSplashObjects2.length = 0;
gdjs.MenuCode.GDNotesSplashObjects3.length = 0;
gdjs.MenuCode.GDNotesSplashObjects4.length = 0;
gdjs.MenuCode.GDNotesSplashObjects5.length = 0;
gdjs.MenuCode.GDNotesSplashObjects6.length = 0;
gdjs.MenuCode.GDfpsObjects1.length = 0;
gdjs.MenuCode.GDfpsObjects2.length = 0;
gdjs.MenuCode.GDfpsObjects3.length = 0;
gdjs.MenuCode.GDfpsObjects4.length = 0;
gdjs.MenuCode.GDfpsObjects5.length = 0;
gdjs.MenuCode.GDfpsObjects6.length = 0;
gdjs.MenuCode.GDEngineTextObjects1.length = 0;
gdjs.MenuCode.GDEngineTextObjects2.length = 0;
gdjs.MenuCode.GDEngineTextObjects3.length = 0;
gdjs.MenuCode.GDEngineTextObjects4.length = 0;
gdjs.MenuCode.GDEngineTextObjects5.length = 0;
gdjs.MenuCode.GDEngineTextObjects6.length = 0;
gdjs.MenuCode.GDLongUpscrollBFObjects1.length = 0;
gdjs.MenuCode.GDLongUpscrollBFObjects2.length = 0;
gdjs.MenuCode.GDLongUpscrollBFObjects3.length = 0;
gdjs.MenuCode.GDLongUpscrollBFObjects4.length = 0;
gdjs.MenuCode.GDLongUpscrollBFObjects5.length = 0;
gdjs.MenuCode.GDLongUpscrollBFObjects6.length = 0;
gdjs.MenuCode.GDLongUpscrollOPPObjects1.length = 0;
gdjs.MenuCode.GDLongUpscrollOPPObjects2.length = 0;
gdjs.MenuCode.GDLongUpscrollOPPObjects3.length = 0;
gdjs.MenuCode.GDLongUpscrollOPPObjects4.length = 0;
gdjs.MenuCode.GDLongUpscrollOPPObjects5.length = 0;
gdjs.MenuCode.GDLongUpscrollOPPObjects6.length = 0;
gdjs.MenuCode.GDHitboxLeftObjects1.length = 0;
gdjs.MenuCode.GDHitboxLeftObjects2.length = 0;
gdjs.MenuCode.GDHitboxLeftObjects3.length = 0;
gdjs.MenuCode.GDHitboxLeftObjects4.length = 0;
gdjs.MenuCode.GDHitboxLeftObjects5.length = 0;
gdjs.MenuCode.GDHitboxLeftObjects6.length = 0;
gdjs.MenuCode.GDHitboxDownObjects1.length = 0;
gdjs.MenuCode.GDHitboxDownObjects2.length = 0;
gdjs.MenuCode.GDHitboxDownObjects3.length = 0;
gdjs.MenuCode.GDHitboxDownObjects4.length = 0;
gdjs.MenuCode.GDHitboxDownObjects5.length = 0;
gdjs.MenuCode.GDHitboxDownObjects6.length = 0;
gdjs.MenuCode.GDHitboxUpObjects1.length = 0;
gdjs.MenuCode.GDHitboxUpObjects2.length = 0;
gdjs.MenuCode.GDHitboxUpObjects3.length = 0;
gdjs.MenuCode.GDHitboxUpObjects4.length = 0;
gdjs.MenuCode.GDHitboxUpObjects5.length = 0;
gdjs.MenuCode.GDHitboxUpObjects6.length = 0;
gdjs.MenuCode.GDhitrightObjects1.length = 0;
gdjs.MenuCode.GDhitrightObjects2.length = 0;
gdjs.MenuCode.GDhitrightObjects3.length = 0;
gdjs.MenuCode.GDhitrightObjects4.length = 0;
gdjs.MenuCode.GDhitrightObjects5.length = 0;
gdjs.MenuCode.GDhitrightObjects6.length = 0;
gdjs.MenuCode.GDBFIconObjects1.length = 0;
gdjs.MenuCode.GDBFIconObjects2.length = 0;
gdjs.MenuCode.GDBFIconObjects3.length = 0;
gdjs.MenuCode.GDBFIconObjects4.length = 0;
gdjs.MenuCode.GDBFIconObjects5.length = 0;
gdjs.MenuCode.GDBFIconObjects6.length = 0;
gdjs.MenuCode.GDPauseButtonObjects1.length = 0;
gdjs.MenuCode.GDPauseButtonObjects2.length = 0;
gdjs.MenuCode.GDPauseButtonObjects3.length = 0;
gdjs.MenuCode.GDPauseButtonObjects4.length = 0;
gdjs.MenuCode.GDPauseButtonObjects5.length = 0;
gdjs.MenuCode.GDPauseButtonObjects6.length = 0;
gdjs.MenuCode.GDPauseButton2Objects1.length = 0;
gdjs.MenuCode.GDPauseButton2Objects2.length = 0;
gdjs.MenuCode.GDPauseButton2Objects3.length = 0;
gdjs.MenuCode.GDPauseButton2Objects4.length = 0;
gdjs.MenuCode.GDPauseButton2Objects5.length = 0;
gdjs.MenuCode.GDPauseButton2Objects6.length = 0;
gdjs.MenuCode.GDBlackScreenObjects1.length = 0;
gdjs.MenuCode.GDBlackScreenObjects2.length = 0;
gdjs.MenuCode.GDBlackScreenObjects3.length = 0;
gdjs.MenuCode.GDBlackScreenObjects4.length = 0;
gdjs.MenuCode.GDBlackScreenObjects5.length = 0;
gdjs.MenuCode.GDBlackScreenObjects6.length = 0;
gdjs.MenuCode.GDPauseTextObjects1.length = 0;
gdjs.MenuCode.GDPauseTextObjects2.length = 0;
gdjs.MenuCode.GDPauseTextObjects3.length = 0;
gdjs.MenuCode.GDPauseTextObjects4.length = 0;
gdjs.MenuCode.GDPauseTextObjects5.length = 0;
gdjs.MenuCode.GDPauseTextObjects6.length = 0;
gdjs.MenuCode.GDExitTextObjects1.length = 0;
gdjs.MenuCode.GDExitTextObjects2.length = 0;
gdjs.MenuCode.GDExitTextObjects3.length = 0;
gdjs.MenuCode.GDExitTextObjects4.length = 0;
gdjs.MenuCode.GDExitTextObjects5.length = 0;
gdjs.MenuCode.GDExitTextObjects6.length = 0;
gdjs.MenuCode.GDRestartTextObjects1.length = 0;
gdjs.MenuCode.GDRestartTextObjects2.length = 0;
gdjs.MenuCode.GDRestartTextObjects3.length = 0;
gdjs.MenuCode.GDRestartTextObjects4.length = 0;
gdjs.MenuCode.GDRestartTextObjects5.length = 0;
gdjs.MenuCode.GDRestartTextObjects6.length = 0;
gdjs.MenuCode.GDmisses_9595challenge_9595textObjects1.length = 0;
gdjs.MenuCode.GDmisses_9595challenge_9595textObjects2.length = 0;
gdjs.MenuCode.GDmisses_9595challenge_9595textObjects3.length = 0;
gdjs.MenuCode.GDmisses_9595challenge_9595textObjects4.length = 0;
gdjs.MenuCode.GDmisses_9595challenge_9595textObjects5.length = 0;
gdjs.MenuCode.GDmisses_9595challenge_9595textObjects6.length = 0;
gdjs.MenuCode.GDBfYellowNoteObjects1.length = 0;
gdjs.MenuCode.GDBfYellowNoteObjects2.length = 0;
gdjs.MenuCode.GDBfYellowNoteObjects3.length = 0;
gdjs.MenuCode.GDBfYellowNoteObjects4.length = 0;
gdjs.MenuCode.GDBfYellowNoteObjects5.length = 0;
gdjs.MenuCode.GDBfYellowNoteObjects6.length = 0;
gdjs.MenuCode.GDBfUpNoteObjects1.length = 0;
gdjs.MenuCode.GDBfUpNoteObjects2.length = 0;
gdjs.MenuCode.GDBfUpNoteObjects3.length = 0;
gdjs.MenuCode.GDBfUpNoteObjects4.length = 0;
gdjs.MenuCode.GDBfUpNoteObjects5.length = 0;
gdjs.MenuCode.GDBfUpNoteObjects6.length = 0;
gdjs.MenuCode.GDBfDownNoteObjects1.length = 0;
gdjs.MenuCode.GDBfDownNoteObjects2.length = 0;
gdjs.MenuCode.GDBfDownNoteObjects3.length = 0;
gdjs.MenuCode.GDBfDownNoteObjects4.length = 0;
gdjs.MenuCode.GDBfDownNoteObjects5.length = 0;
gdjs.MenuCode.GDBfDownNoteObjects6.length = 0;
gdjs.MenuCode.GDBfLeftNoteObjects1.length = 0;
gdjs.MenuCode.GDBfLeftNoteObjects2.length = 0;
gdjs.MenuCode.GDBfLeftNoteObjects3.length = 0;
gdjs.MenuCode.GDBfLeftNoteObjects4.length = 0;
gdjs.MenuCode.GDBfLeftNoteObjects5.length = 0;
gdjs.MenuCode.GDBfLeftNoteObjects6.length = 0;
gdjs.MenuCode.GDBfLeftNote4Objects1.length = 0;
gdjs.MenuCode.GDBfLeftNote4Objects2.length = 0;
gdjs.MenuCode.GDBfLeftNote4Objects3.length = 0;
gdjs.MenuCode.GDBfLeftNote4Objects4.length = 0;
gdjs.MenuCode.GDBfLeftNote4Objects5.length = 0;
gdjs.MenuCode.GDBfLeftNote4Objects6.length = 0;
gdjs.MenuCode.GDBfDownNote5Objects1.length = 0;
gdjs.MenuCode.GDBfDownNote5Objects2.length = 0;
gdjs.MenuCode.GDBfDownNote5Objects3.length = 0;
gdjs.MenuCode.GDBfDownNote5Objects4.length = 0;
gdjs.MenuCode.GDBfDownNote5Objects5.length = 0;
gdjs.MenuCode.GDBfDownNote5Objects6.length = 0;
gdjs.MenuCode.GDBfUpNote6Objects1.length = 0;
gdjs.MenuCode.GDBfUpNote6Objects2.length = 0;
gdjs.MenuCode.GDBfUpNote6Objects3.length = 0;
gdjs.MenuCode.GDBfUpNote6Objects4.length = 0;
gdjs.MenuCode.GDBfUpNote6Objects5.length = 0;
gdjs.MenuCode.GDBfUpNote6Objects6.length = 0;
gdjs.MenuCode.GDBfRightNoteObjects1.length = 0;
gdjs.MenuCode.GDBfRightNoteObjects2.length = 0;
gdjs.MenuCode.GDBfRightNoteObjects3.length = 0;
gdjs.MenuCode.GDBfRightNoteObjects4.length = 0;
gdjs.MenuCode.GDBfRightNoteObjects5.length = 0;
gdjs.MenuCode.GDBfRightNoteObjects6.length = 0;
gdjs.MenuCode.GDBfRightNote7Objects1.length = 0;
gdjs.MenuCode.GDBfRightNote7Objects2.length = 0;
gdjs.MenuCode.GDBfRightNote7Objects3.length = 0;
gdjs.MenuCode.GDBfRightNote7Objects4.length = 0;
gdjs.MenuCode.GDBfRightNote7Objects5.length = 0;
gdjs.MenuCode.GDBfRightNote7Objects6.length = 0;
gdjs.MenuCode.GDBfYellowNote11Objects1.length = 0;
gdjs.MenuCode.GDBfYellowNote11Objects2.length = 0;
gdjs.MenuCode.GDBfYellowNote11Objects3.length = 0;
gdjs.MenuCode.GDBfYellowNote11Objects4.length = 0;
gdjs.MenuCode.GDBfYellowNote11Objects5.length = 0;
gdjs.MenuCode.GDBfYellowNote11Objects6.length = 0;
gdjs.MenuCode.GDBfDBlueNoteObjects1.length = 0;
gdjs.MenuCode.GDBfDBlueNoteObjects2.length = 0;
gdjs.MenuCode.GDBfDBlueNoteObjects3.length = 0;
gdjs.MenuCode.GDBfDBlueNoteObjects4.length = 0;
gdjs.MenuCode.GDBfDBlueNoteObjects5.length = 0;
gdjs.MenuCode.GDBfDBlueNoteObjects6.length = 0;
gdjs.MenuCode.GDBfDBlueNote12Objects1.length = 0;
gdjs.MenuCode.GDBfDBlueNote12Objects2.length = 0;
gdjs.MenuCode.GDBfDBlueNote12Objects3.length = 0;
gdjs.MenuCode.GDBfDBlueNote12Objects4.length = 0;
gdjs.MenuCode.GDBfDBlueNote12Objects5.length = 0;
gdjs.MenuCode.GDBfDBlueNote12Objects6.length = 0;
gdjs.MenuCode.GDOppIconObjects1.length = 0;
gdjs.MenuCode.GDOppIconObjects2.length = 0;
gdjs.MenuCode.GDOppIconObjects3.length = 0;
gdjs.MenuCode.GDOppIconObjects4.length = 0;
gdjs.MenuCode.GDOppIconObjects5.length = 0;
gdjs.MenuCode.GDOppIconObjects6.length = 0;
gdjs.MenuCode.GDtimerBarObjects1.length = 0;
gdjs.MenuCode.GDtimerBarObjects2.length = 0;
gdjs.MenuCode.GDtimerBarObjects3.length = 0;
gdjs.MenuCode.GDtimerBarObjects4.length = 0;
gdjs.MenuCode.GDtimerBarObjects5.length = 0;
gdjs.MenuCode.GDtimerBarObjects6.length = 0;
gdjs.MenuCode.GDtimeObjects1.length = 0;
gdjs.MenuCode.GDtimeObjects2.length = 0;
gdjs.MenuCode.GDtimeObjects3.length = 0;
gdjs.MenuCode.GDtimeObjects4.length = 0;
gdjs.MenuCode.GDtimeObjects5.length = 0;
gdjs.MenuCode.GDtimeObjects6.length = 0;
gdjs.MenuCode.GDtimerBar2Objects1.length = 0;
gdjs.MenuCode.GDtimerBar2Objects2.length = 0;
gdjs.MenuCode.GDtimerBar2Objects3.length = 0;
gdjs.MenuCode.GDtimerBar2Objects4.length = 0;
gdjs.MenuCode.GDtimerBar2Objects5.length = 0;
gdjs.MenuCode.GDtimerBar2Objects6.length = 0;
gdjs.MenuCode.GDLongOppObjects1.length = 0;
gdjs.MenuCode.GDLongOppObjects2.length = 0;
gdjs.MenuCode.GDLongOppObjects3.length = 0;
gdjs.MenuCode.GDLongOppObjects4.length = 0;
gdjs.MenuCode.GDLongOppObjects5.length = 0;
gdjs.MenuCode.GDLongOppObjects6.length = 0;
gdjs.MenuCode.GDLongObjects1.length = 0;
gdjs.MenuCode.GDLongObjects2.length = 0;
gdjs.MenuCode.GDLongObjects3.length = 0;
gdjs.MenuCode.GDLongObjects4.length = 0;
gdjs.MenuCode.GDLongObjects5.length = 0;
gdjs.MenuCode.GDLongObjects6.length = 0;

gdjs.MenuCode.eventsList69(runtimeScene);
gdjs.MenuCode.GDlogobumpinObjects1.length = 0;
gdjs.MenuCode.GDlogobumpinObjects2.length = 0;
gdjs.MenuCode.GDlogobumpinObjects3.length = 0;
gdjs.MenuCode.GDlogobumpinObjects4.length = 0;
gdjs.MenuCode.GDlogobumpinObjects5.length = 0;
gdjs.MenuCode.GDlogobumpinObjects6.length = 0;
gdjs.MenuCode.GDBlackObjects1.length = 0;
gdjs.MenuCode.GDBlackObjects2.length = 0;
gdjs.MenuCode.GDBlackObjects3.length = 0;
gdjs.MenuCode.GDBlackObjects4.length = 0;
gdjs.MenuCode.GDBlackObjects5.length = 0;
gdjs.MenuCode.GDBlackObjects6.length = 0;
gdjs.MenuCode.GDbegfontObjects1.length = 0;
gdjs.MenuCode.GDbegfontObjects2.length = 0;
gdjs.MenuCode.GDbegfontObjects3.length = 0;
gdjs.MenuCode.GDbegfontObjects4.length = 0;
gdjs.MenuCode.GDbegfontObjects5.length = 0;
gdjs.MenuCode.GDbegfontObjects6.length = 0;
gdjs.MenuCode.GDgfDancinTitleObjects1.length = 0;
gdjs.MenuCode.GDgfDancinTitleObjects2.length = 0;
gdjs.MenuCode.GDgfDancinTitleObjects3.length = 0;
gdjs.MenuCode.GDgfDancinTitleObjects4.length = 0;
gdjs.MenuCode.GDgfDancinTitleObjects5.length = 0;
gdjs.MenuCode.GDgfDancinTitleObjects6.length = 0;
gdjs.MenuCode.GDBGObjects1.length = 0;
gdjs.MenuCode.GDBGObjects2.length = 0;
gdjs.MenuCode.GDBGObjects3.length = 0;
gdjs.MenuCode.GDBGObjects4.length = 0;
gdjs.MenuCode.GDBGObjects5.length = 0;
gdjs.MenuCode.GDBGObjects6.length = 0;
gdjs.MenuCode.GDTitleEnterObjects1.length = 0;
gdjs.MenuCode.GDTitleEnterObjects2.length = 0;
gdjs.MenuCode.GDTitleEnterObjects3.length = 0;
gdjs.MenuCode.GDTitleEnterObjects4.length = 0;
gdjs.MenuCode.GDTitleEnterObjects5.length = 0;
gdjs.MenuCode.GDTitleEnterObjects6.length = 0;
gdjs.MenuCode.GDFreeplayObjects1.length = 0;
gdjs.MenuCode.GDFreeplayObjects2.length = 0;
gdjs.MenuCode.GDFreeplayObjects3.length = 0;
gdjs.MenuCode.GDFreeplayObjects4.length = 0;
gdjs.MenuCode.GDFreeplayObjects5.length = 0;
gdjs.MenuCode.GDFreeplayObjects6.length = 0;
gdjs.MenuCode.GDNewBBTextObjects1.length = 0;
gdjs.MenuCode.GDNewBBTextObjects2.length = 0;
gdjs.MenuCode.GDNewBBTextObjects3.length = 0;
gdjs.MenuCode.GDNewBBTextObjects4.length = 0;
gdjs.MenuCode.GDNewBBTextObjects5.length = 0;
gdjs.MenuCode.GDNewBBTextObjects6.length = 0;
gdjs.MenuCode.GDNoObjects1.length = 0;
gdjs.MenuCode.GDNoObjects2.length = 0;
gdjs.MenuCode.GDNoObjects3.length = 0;
gdjs.MenuCode.GDNoObjects4.length = 0;
gdjs.MenuCode.GDNoObjects5.length = 0;
gdjs.MenuCode.GDNoObjects6.length = 0;
gdjs.MenuCode.GDYesObjects1.length = 0;
gdjs.MenuCode.GDYesObjects2.length = 0;
gdjs.MenuCode.GDYesObjects3.length = 0;
gdjs.MenuCode.GDYesObjects4.length = 0;
gdjs.MenuCode.GDYesObjects5.length = 0;
gdjs.MenuCode.GDYesObjects6.length = 0;
gdjs.MenuCode.GDOptionsObjects1.length = 0;
gdjs.MenuCode.GDOptionsObjects2.length = 0;
gdjs.MenuCode.GDOptionsObjects3.length = 0;
gdjs.MenuCode.GDOptionsObjects4.length = 0;
gdjs.MenuCode.GDOptionsObjects5.length = 0;
gdjs.MenuCode.GDOptionsObjects6.length = 0;
gdjs.MenuCode.GDOptionsTextObjects1.length = 0;
gdjs.MenuCode.GDOptionsTextObjects2.length = 0;
gdjs.MenuCode.GDOptionsTextObjects3.length = 0;
gdjs.MenuCode.GDOptionsTextObjects4.length = 0;
gdjs.MenuCode.GDOptionsTextObjects5.length = 0;
gdjs.MenuCode.GDOptionsTextObjects6.length = 0;
gdjs.MenuCode.GDOptionsbuttonsObjects1.length = 0;
gdjs.MenuCode.GDOptionsbuttonsObjects2.length = 0;
gdjs.MenuCode.GDOptionsbuttonsObjects3.length = 0;
gdjs.MenuCode.GDOptionsbuttonsObjects4.length = 0;
gdjs.MenuCode.GDOptionsbuttonsObjects5.length = 0;
gdjs.MenuCode.GDOptionsbuttonsObjects6.length = 0;
gdjs.MenuCode.GDOptPotionsTextObjects1.length = 0;
gdjs.MenuCode.GDOptPotionsTextObjects2.length = 0;
gdjs.MenuCode.GDOptPotionsTextObjects3.length = 0;
gdjs.MenuCode.GDOptPotionsTextObjects4.length = 0;
gdjs.MenuCode.GDOptPotionsTextObjects5.length = 0;
gdjs.MenuCode.GDOptPotionsTextObjects6.length = 0;
gdjs.MenuCode.GDCheckBoxesObjects1.length = 0;
gdjs.MenuCode.GDCheckBoxesObjects2.length = 0;
gdjs.MenuCode.GDCheckBoxesObjects3.length = 0;
gdjs.MenuCode.GDCheckBoxesObjects4.length = 0;
gdjs.MenuCode.GDCheckBoxesObjects5.length = 0;
gdjs.MenuCode.GDCheckBoxesObjects6.length = 0;
gdjs.MenuCode.GDBackButtonObjects1.length = 0;
gdjs.MenuCode.GDBackButtonObjects2.length = 0;
gdjs.MenuCode.GDBackButtonObjects3.length = 0;
gdjs.MenuCode.GDBackButtonObjects4.length = 0;
gdjs.MenuCode.GDBackButtonObjects5.length = 0;
gdjs.MenuCode.GDBackButtonObjects6.length = 0;
gdjs.MenuCode.GDSquareWhiteSliderObjects1.length = 0;
gdjs.MenuCode.GDSquareWhiteSliderObjects2.length = 0;
gdjs.MenuCode.GDSquareWhiteSliderObjects3.length = 0;
gdjs.MenuCode.GDSquareWhiteSliderObjects4.length = 0;
gdjs.MenuCode.GDSquareWhiteSliderObjects5.length = 0;
gdjs.MenuCode.GDSquareWhiteSliderObjects6.length = 0;
gdjs.MenuCode.GDFullscreenTextObjects1.length = 0;
gdjs.MenuCode.GDFullscreenTextObjects2.length = 0;
gdjs.MenuCode.GDFullscreenTextObjects3.length = 0;
gdjs.MenuCode.GDFullscreenTextObjects4.length = 0;
gdjs.MenuCode.GDFullscreenTextObjects5.length = 0;
gdjs.MenuCode.GDFullscreenTextObjects6.length = 0;
gdjs.MenuCode.GDcreditstextObjects1.length = 0;
gdjs.MenuCode.GDcreditstextObjects2.length = 0;
gdjs.MenuCode.GDcreditstextObjects3.length = 0;
gdjs.MenuCode.GDcreditstextObjects4.length = 0;
gdjs.MenuCode.GDcreditstextObjects5.length = 0;
gdjs.MenuCode.GDcreditstextObjects6.length = 0;
gdjs.MenuCode.GDHItsoundVolumeSliderObjects1.length = 0;
gdjs.MenuCode.GDHItsoundVolumeSliderObjects2.length = 0;
gdjs.MenuCode.GDHItsoundVolumeSliderObjects3.length = 0;
gdjs.MenuCode.GDHItsoundVolumeSliderObjects4.length = 0;
gdjs.MenuCode.GDHItsoundVolumeSliderObjects5.length = 0;
gdjs.MenuCode.GDHItsoundVolumeSliderObjects6.length = 0;
gdjs.MenuCode.GDHitsoundTextObjects1.length = 0;
gdjs.MenuCode.GDHitsoundTextObjects2.length = 0;
gdjs.MenuCode.GDHitsoundTextObjects3.length = 0;
gdjs.MenuCode.GDHitsoundTextObjects4.length = 0;
gdjs.MenuCode.GDHitsoundTextObjects5.length = 0;
gdjs.MenuCode.GDHitsoundTextObjects6.length = 0;
gdjs.MenuCode.GDStatisticsObjects1.length = 0;
gdjs.MenuCode.GDStatisticsObjects2.length = 0;
gdjs.MenuCode.GDStatisticsObjects3.length = 0;
gdjs.MenuCode.GDStatisticsObjects4.length = 0;
gdjs.MenuCode.GDStatisticsObjects5.length = 0;
gdjs.MenuCode.GDStatisticsObjects6.length = 0;
gdjs.MenuCode.GDComboNumbersObjects1.length = 0;
gdjs.MenuCode.GDComboNumbersObjects2.length = 0;
gdjs.MenuCode.GDComboNumbersObjects3.length = 0;
gdjs.MenuCode.GDComboNumbersObjects4.length = 0;
gdjs.MenuCode.GDComboNumbersObjects5.length = 0;
gdjs.MenuCode.GDComboNumbersObjects6.length = 0;
gdjs.MenuCode.GDNotesSplashObjects1.length = 0;
gdjs.MenuCode.GDNotesSplashObjects2.length = 0;
gdjs.MenuCode.GDNotesSplashObjects3.length = 0;
gdjs.MenuCode.GDNotesSplashObjects4.length = 0;
gdjs.MenuCode.GDNotesSplashObjects5.length = 0;
gdjs.MenuCode.GDNotesSplashObjects6.length = 0;
gdjs.MenuCode.GDfpsObjects1.length = 0;
gdjs.MenuCode.GDfpsObjects2.length = 0;
gdjs.MenuCode.GDfpsObjects3.length = 0;
gdjs.MenuCode.GDfpsObjects4.length = 0;
gdjs.MenuCode.GDfpsObjects5.length = 0;
gdjs.MenuCode.GDfpsObjects6.length = 0;
gdjs.MenuCode.GDEngineTextObjects1.length = 0;
gdjs.MenuCode.GDEngineTextObjects2.length = 0;
gdjs.MenuCode.GDEngineTextObjects3.length = 0;
gdjs.MenuCode.GDEngineTextObjects4.length = 0;
gdjs.MenuCode.GDEngineTextObjects5.length = 0;
gdjs.MenuCode.GDEngineTextObjects6.length = 0;
gdjs.MenuCode.GDLongUpscrollBFObjects1.length = 0;
gdjs.MenuCode.GDLongUpscrollBFObjects2.length = 0;
gdjs.MenuCode.GDLongUpscrollBFObjects3.length = 0;
gdjs.MenuCode.GDLongUpscrollBFObjects4.length = 0;
gdjs.MenuCode.GDLongUpscrollBFObjects5.length = 0;
gdjs.MenuCode.GDLongUpscrollBFObjects6.length = 0;
gdjs.MenuCode.GDLongUpscrollOPPObjects1.length = 0;
gdjs.MenuCode.GDLongUpscrollOPPObjects2.length = 0;
gdjs.MenuCode.GDLongUpscrollOPPObjects3.length = 0;
gdjs.MenuCode.GDLongUpscrollOPPObjects4.length = 0;
gdjs.MenuCode.GDLongUpscrollOPPObjects5.length = 0;
gdjs.MenuCode.GDLongUpscrollOPPObjects6.length = 0;
gdjs.MenuCode.GDHitboxLeftObjects1.length = 0;
gdjs.MenuCode.GDHitboxLeftObjects2.length = 0;
gdjs.MenuCode.GDHitboxLeftObjects3.length = 0;
gdjs.MenuCode.GDHitboxLeftObjects4.length = 0;
gdjs.MenuCode.GDHitboxLeftObjects5.length = 0;
gdjs.MenuCode.GDHitboxLeftObjects6.length = 0;
gdjs.MenuCode.GDHitboxDownObjects1.length = 0;
gdjs.MenuCode.GDHitboxDownObjects2.length = 0;
gdjs.MenuCode.GDHitboxDownObjects3.length = 0;
gdjs.MenuCode.GDHitboxDownObjects4.length = 0;
gdjs.MenuCode.GDHitboxDownObjects5.length = 0;
gdjs.MenuCode.GDHitboxDownObjects6.length = 0;
gdjs.MenuCode.GDHitboxUpObjects1.length = 0;
gdjs.MenuCode.GDHitboxUpObjects2.length = 0;
gdjs.MenuCode.GDHitboxUpObjects3.length = 0;
gdjs.MenuCode.GDHitboxUpObjects4.length = 0;
gdjs.MenuCode.GDHitboxUpObjects5.length = 0;
gdjs.MenuCode.GDHitboxUpObjects6.length = 0;
gdjs.MenuCode.GDhitrightObjects1.length = 0;
gdjs.MenuCode.GDhitrightObjects2.length = 0;
gdjs.MenuCode.GDhitrightObjects3.length = 0;
gdjs.MenuCode.GDhitrightObjects4.length = 0;
gdjs.MenuCode.GDhitrightObjects5.length = 0;
gdjs.MenuCode.GDhitrightObjects6.length = 0;
gdjs.MenuCode.GDBFIconObjects1.length = 0;
gdjs.MenuCode.GDBFIconObjects2.length = 0;
gdjs.MenuCode.GDBFIconObjects3.length = 0;
gdjs.MenuCode.GDBFIconObjects4.length = 0;
gdjs.MenuCode.GDBFIconObjects5.length = 0;
gdjs.MenuCode.GDBFIconObjects6.length = 0;
gdjs.MenuCode.GDPauseButtonObjects1.length = 0;
gdjs.MenuCode.GDPauseButtonObjects2.length = 0;
gdjs.MenuCode.GDPauseButtonObjects3.length = 0;
gdjs.MenuCode.GDPauseButtonObjects4.length = 0;
gdjs.MenuCode.GDPauseButtonObjects5.length = 0;
gdjs.MenuCode.GDPauseButtonObjects6.length = 0;
gdjs.MenuCode.GDPauseButton2Objects1.length = 0;
gdjs.MenuCode.GDPauseButton2Objects2.length = 0;
gdjs.MenuCode.GDPauseButton2Objects3.length = 0;
gdjs.MenuCode.GDPauseButton2Objects4.length = 0;
gdjs.MenuCode.GDPauseButton2Objects5.length = 0;
gdjs.MenuCode.GDPauseButton2Objects6.length = 0;
gdjs.MenuCode.GDBlackScreenObjects1.length = 0;
gdjs.MenuCode.GDBlackScreenObjects2.length = 0;
gdjs.MenuCode.GDBlackScreenObjects3.length = 0;
gdjs.MenuCode.GDBlackScreenObjects4.length = 0;
gdjs.MenuCode.GDBlackScreenObjects5.length = 0;
gdjs.MenuCode.GDBlackScreenObjects6.length = 0;
gdjs.MenuCode.GDPauseTextObjects1.length = 0;
gdjs.MenuCode.GDPauseTextObjects2.length = 0;
gdjs.MenuCode.GDPauseTextObjects3.length = 0;
gdjs.MenuCode.GDPauseTextObjects4.length = 0;
gdjs.MenuCode.GDPauseTextObjects5.length = 0;
gdjs.MenuCode.GDPauseTextObjects6.length = 0;
gdjs.MenuCode.GDExitTextObjects1.length = 0;
gdjs.MenuCode.GDExitTextObjects2.length = 0;
gdjs.MenuCode.GDExitTextObjects3.length = 0;
gdjs.MenuCode.GDExitTextObjects4.length = 0;
gdjs.MenuCode.GDExitTextObjects5.length = 0;
gdjs.MenuCode.GDExitTextObjects6.length = 0;
gdjs.MenuCode.GDRestartTextObjects1.length = 0;
gdjs.MenuCode.GDRestartTextObjects2.length = 0;
gdjs.MenuCode.GDRestartTextObjects3.length = 0;
gdjs.MenuCode.GDRestartTextObjects4.length = 0;
gdjs.MenuCode.GDRestartTextObjects5.length = 0;
gdjs.MenuCode.GDRestartTextObjects6.length = 0;
gdjs.MenuCode.GDmisses_9595challenge_9595textObjects1.length = 0;
gdjs.MenuCode.GDmisses_9595challenge_9595textObjects2.length = 0;
gdjs.MenuCode.GDmisses_9595challenge_9595textObjects3.length = 0;
gdjs.MenuCode.GDmisses_9595challenge_9595textObjects4.length = 0;
gdjs.MenuCode.GDmisses_9595challenge_9595textObjects5.length = 0;
gdjs.MenuCode.GDmisses_9595challenge_9595textObjects6.length = 0;
gdjs.MenuCode.GDBfYellowNoteObjects1.length = 0;
gdjs.MenuCode.GDBfYellowNoteObjects2.length = 0;
gdjs.MenuCode.GDBfYellowNoteObjects3.length = 0;
gdjs.MenuCode.GDBfYellowNoteObjects4.length = 0;
gdjs.MenuCode.GDBfYellowNoteObjects5.length = 0;
gdjs.MenuCode.GDBfYellowNoteObjects6.length = 0;
gdjs.MenuCode.GDBfUpNoteObjects1.length = 0;
gdjs.MenuCode.GDBfUpNoteObjects2.length = 0;
gdjs.MenuCode.GDBfUpNoteObjects3.length = 0;
gdjs.MenuCode.GDBfUpNoteObjects4.length = 0;
gdjs.MenuCode.GDBfUpNoteObjects5.length = 0;
gdjs.MenuCode.GDBfUpNoteObjects6.length = 0;
gdjs.MenuCode.GDBfDownNoteObjects1.length = 0;
gdjs.MenuCode.GDBfDownNoteObjects2.length = 0;
gdjs.MenuCode.GDBfDownNoteObjects3.length = 0;
gdjs.MenuCode.GDBfDownNoteObjects4.length = 0;
gdjs.MenuCode.GDBfDownNoteObjects5.length = 0;
gdjs.MenuCode.GDBfDownNoteObjects6.length = 0;
gdjs.MenuCode.GDBfLeftNoteObjects1.length = 0;
gdjs.MenuCode.GDBfLeftNoteObjects2.length = 0;
gdjs.MenuCode.GDBfLeftNoteObjects3.length = 0;
gdjs.MenuCode.GDBfLeftNoteObjects4.length = 0;
gdjs.MenuCode.GDBfLeftNoteObjects5.length = 0;
gdjs.MenuCode.GDBfLeftNoteObjects6.length = 0;
gdjs.MenuCode.GDBfLeftNote4Objects1.length = 0;
gdjs.MenuCode.GDBfLeftNote4Objects2.length = 0;
gdjs.MenuCode.GDBfLeftNote4Objects3.length = 0;
gdjs.MenuCode.GDBfLeftNote4Objects4.length = 0;
gdjs.MenuCode.GDBfLeftNote4Objects5.length = 0;
gdjs.MenuCode.GDBfLeftNote4Objects6.length = 0;
gdjs.MenuCode.GDBfDownNote5Objects1.length = 0;
gdjs.MenuCode.GDBfDownNote5Objects2.length = 0;
gdjs.MenuCode.GDBfDownNote5Objects3.length = 0;
gdjs.MenuCode.GDBfDownNote5Objects4.length = 0;
gdjs.MenuCode.GDBfDownNote5Objects5.length = 0;
gdjs.MenuCode.GDBfDownNote5Objects6.length = 0;
gdjs.MenuCode.GDBfUpNote6Objects1.length = 0;
gdjs.MenuCode.GDBfUpNote6Objects2.length = 0;
gdjs.MenuCode.GDBfUpNote6Objects3.length = 0;
gdjs.MenuCode.GDBfUpNote6Objects4.length = 0;
gdjs.MenuCode.GDBfUpNote6Objects5.length = 0;
gdjs.MenuCode.GDBfUpNote6Objects6.length = 0;
gdjs.MenuCode.GDBfRightNoteObjects1.length = 0;
gdjs.MenuCode.GDBfRightNoteObjects2.length = 0;
gdjs.MenuCode.GDBfRightNoteObjects3.length = 0;
gdjs.MenuCode.GDBfRightNoteObjects4.length = 0;
gdjs.MenuCode.GDBfRightNoteObjects5.length = 0;
gdjs.MenuCode.GDBfRightNoteObjects6.length = 0;
gdjs.MenuCode.GDBfRightNote7Objects1.length = 0;
gdjs.MenuCode.GDBfRightNote7Objects2.length = 0;
gdjs.MenuCode.GDBfRightNote7Objects3.length = 0;
gdjs.MenuCode.GDBfRightNote7Objects4.length = 0;
gdjs.MenuCode.GDBfRightNote7Objects5.length = 0;
gdjs.MenuCode.GDBfRightNote7Objects6.length = 0;
gdjs.MenuCode.GDBfYellowNote11Objects1.length = 0;
gdjs.MenuCode.GDBfYellowNote11Objects2.length = 0;
gdjs.MenuCode.GDBfYellowNote11Objects3.length = 0;
gdjs.MenuCode.GDBfYellowNote11Objects4.length = 0;
gdjs.MenuCode.GDBfYellowNote11Objects5.length = 0;
gdjs.MenuCode.GDBfYellowNote11Objects6.length = 0;
gdjs.MenuCode.GDBfDBlueNoteObjects1.length = 0;
gdjs.MenuCode.GDBfDBlueNoteObjects2.length = 0;
gdjs.MenuCode.GDBfDBlueNoteObjects3.length = 0;
gdjs.MenuCode.GDBfDBlueNoteObjects4.length = 0;
gdjs.MenuCode.GDBfDBlueNoteObjects5.length = 0;
gdjs.MenuCode.GDBfDBlueNoteObjects6.length = 0;
gdjs.MenuCode.GDBfDBlueNote12Objects1.length = 0;
gdjs.MenuCode.GDBfDBlueNote12Objects2.length = 0;
gdjs.MenuCode.GDBfDBlueNote12Objects3.length = 0;
gdjs.MenuCode.GDBfDBlueNote12Objects4.length = 0;
gdjs.MenuCode.GDBfDBlueNote12Objects5.length = 0;
gdjs.MenuCode.GDBfDBlueNote12Objects6.length = 0;
gdjs.MenuCode.GDOppIconObjects1.length = 0;
gdjs.MenuCode.GDOppIconObjects2.length = 0;
gdjs.MenuCode.GDOppIconObjects3.length = 0;
gdjs.MenuCode.GDOppIconObjects4.length = 0;
gdjs.MenuCode.GDOppIconObjects5.length = 0;
gdjs.MenuCode.GDOppIconObjects6.length = 0;
gdjs.MenuCode.GDtimerBarObjects1.length = 0;
gdjs.MenuCode.GDtimerBarObjects2.length = 0;
gdjs.MenuCode.GDtimerBarObjects3.length = 0;
gdjs.MenuCode.GDtimerBarObjects4.length = 0;
gdjs.MenuCode.GDtimerBarObjects5.length = 0;
gdjs.MenuCode.GDtimerBarObjects6.length = 0;
gdjs.MenuCode.GDtimeObjects1.length = 0;
gdjs.MenuCode.GDtimeObjects2.length = 0;
gdjs.MenuCode.GDtimeObjects3.length = 0;
gdjs.MenuCode.GDtimeObjects4.length = 0;
gdjs.MenuCode.GDtimeObjects5.length = 0;
gdjs.MenuCode.GDtimeObjects6.length = 0;
gdjs.MenuCode.GDtimerBar2Objects1.length = 0;
gdjs.MenuCode.GDtimerBar2Objects2.length = 0;
gdjs.MenuCode.GDtimerBar2Objects3.length = 0;
gdjs.MenuCode.GDtimerBar2Objects4.length = 0;
gdjs.MenuCode.GDtimerBar2Objects5.length = 0;
gdjs.MenuCode.GDtimerBar2Objects6.length = 0;
gdjs.MenuCode.GDLongOppObjects1.length = 0;
gdjs.MenuCode.GDLongOppObjects2.length = 0;
gdjs.MenuCode.GDLongOppObjects3.length = 0;
gdjs.MenuCode.GDLongOppObjects4.length = 0;
gdjs.MenuCode.GDLongOppObjects5.length = 0;
gdjs.MenuCode.GDLongOppObjects6.length = 0;
gdjs.MenuCode.GDLongObjects1.length = 0;
gdjs.MenuCode.GDLongObjects2.length = 0;
gdjs.MenuCode.GDLongObjects3.length = 0;
gdjs.MenuCode.GDLongObjects4.length = 0;
gdjs.MenuCode.GDLongObjects5.length = 0;
gdjs.MenuCode.GDLongObjects6.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
