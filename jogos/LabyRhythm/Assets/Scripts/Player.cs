using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Player : MonoBehaviour
{
    public Color[] cores;
    public int indiceCor;

    public Movimento move;

    void Start()
    {
        indiceCor = 0;
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    private void OnMouseDown()
    {
        //Debug.Log("Clicou na bolinha");
        if (indiceCor >= cores.Length) indiceCor = 0;
        GetComponent<SpriteRenderer>().color = cores[indiceCor++];        
    }

    private void OnCollisionEnter2D(Collision2D collision)
    {
        #if UNITY_ANDROID
            Handheld.Vibrate();
#endif
        move.Parado();        
    }
}
