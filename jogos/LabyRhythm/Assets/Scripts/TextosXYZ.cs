using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;


public class TextosXYZ : MonoBehaviour
{
    public Text[] textos;

    // Update is called once per frame
    void Update()
    {
        textos[0].text = "X: " + Input.acceleration.x;
        textos[1].text = "Y: " + Input.acceleration.y;
        textos[2].text = "Z: " + Input.acceleration.z;      

    }

}
