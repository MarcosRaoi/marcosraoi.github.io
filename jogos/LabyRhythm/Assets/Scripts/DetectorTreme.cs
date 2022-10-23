using System.Collections;
using System.Collections.Generic;
using UnityEngine;

//[RequireComponent(typeof(ControladorDeFisica))]

public class DetectorTreme : MonoBehaviour
{
    public float limiteDeteccaoTreme;
    public float minimoIntervaloTreme;

    private float quadrado_limiteDeteccaoTreme; // ah, ao quadrado, não do quadrado xd.
    private float tempoDesdeUltimaTremida;

    private ControladorDeFisica controladorFisica;


    void Start()
    {
        quadrado_limiteDeteccaoTreme = Mathf.Pow(limiteDeteccaoTreme,2);
        controladorFisica = GetComponent<ControladorDeFisica>();
        
    }

    void Update()
    {
        //if (Input.acceleration.sqrMagnitude >= quadrado_limiteDeteccaoTreme && Time.unscaledTime >= tempoDesdeUltimaTremida + minimoIntervaloTreme)
        //{ O If tava dando problema xd.
            controladorFisica.TremerRBs(Input.acceleration);
            //tempoDesdeUltimaTremida = Time.unscaledTime;
            //Debug.Log("Entrei aqui");
        //}

        //Debug.Log(Input.acceleration);
        //Debug.Log(Input.deviceOrientation);


    }
}
