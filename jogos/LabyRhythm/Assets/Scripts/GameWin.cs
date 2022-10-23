using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameWin : MonoBehaviour
{
    public GameObject linhaDeChegada;
    public GameObject bolinha;
    public GameObject win;

    public bool ganhei;

    public AudioClip gameMusic;
    public AudioSource am;
    // Start is called before the first frame update
    void Start()
    {
        ganhei = false;

        am.clip = gameMusic;
        am.loop = true;

        if(PlayerPrefs.HasKey("musica"))
        {
            if (PlayerPrefs.GetInt("musica") == 1) // Se a música era pra estar ligada.
            {
                am.Play();
            }
        }
        
        
    }

    // Update is called once per frame
    void Update()
    {
        if (linhaDeChegada.GetComponent<BoxCollider2D>().IsTouching(bolinha.GetComponent<CircleCollider2D>()))
        {
            ganhei = true;
            //Debug.Log("Ganhei");
        }

        if (ganhei)
        {
            win.SetActive(ganhei);
        }
        
    }
}
