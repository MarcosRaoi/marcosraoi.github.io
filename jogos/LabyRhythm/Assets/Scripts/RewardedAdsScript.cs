using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Advertisements;

public class RewardedAdsScript : MonoBehaviour, IUnityAdsListener
{
    string gameID = "3834413";
    string myPlacementId = "rewardedVideo";
    bool testMode = true;

    void Start()
    {
        Advertisement.AddListener(this);
        Advertisement.Initialize(gameID, testMode);
    }

    public void mostrarVideoReward()
    {
        if (Advertisement.IsReady(myPlacementId))
        {
            Advertisement.Show(myPlacementId);
        }
        else
        {
            Debug.Log("Deu ruim!");
        }
    }

    public void OnUnityAdsDidError(string message)
    {

    }
    public void OnUnityAdsDidFinish(string placementId, ShowResult showResult)
    {
        Debug.Log("Parabéns, você ganhou um prêmio");
    }
    public void OnUnityAdsDidStart(string placementId)
    {

    }
    public void OnUnityAdsReady(string placementId)
    {

    }

    public void OnDestroy()
    {
        Advertisement.RemoveListener(this);
    }
}
