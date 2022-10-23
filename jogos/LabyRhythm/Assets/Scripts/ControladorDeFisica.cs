using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ControladorDeFisica : MonoBehaviour
{
    public float multiplicadorForcaTreme;
    public Rigidbody2D[] rbs;

    public void TremerRBs(Vector3 aceleracaoDispositvo)
    {
        foreach (var rigidbody in rbs)
        {
            rigidbody.AddForce(aceleracaoDispositvo * multiplicadorForcaTreme, ForceMode2D.Impulse); 
        }

    }
}
