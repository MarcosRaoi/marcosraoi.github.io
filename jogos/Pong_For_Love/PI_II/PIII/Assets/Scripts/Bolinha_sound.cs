﻿using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Bolinha_sound : MonoBehaviour
{
    void PlayBolinhaSound(string caminho) // caminho pro evento ^^'
    {
        FMODUnity.RuntimeManager.PlayOneShot(caminho, Camera.current.GetComponent<Transform>().position);
        // tive que colocar pro som tocar na Câmera, porque tava muito baxinho e não dava pra escutar se não fosse andando com a câmera até perto.
    }
}
