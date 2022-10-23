using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Advertisements;

public class InterstitialAdsScript : MonoBehaviour
{
    string gameID = "3834413";
    bool testMode = true;
    void Start()
    {
        Advertisement.Initialize(gameID, testMode);
    }

    public void mostrarAd()
    {
        if(Advertisement.IsReady())
        {
            Advertisement.Show();
        }
        else
        {
            Debug.Log("Deu ruim!");
        }
    }
}
