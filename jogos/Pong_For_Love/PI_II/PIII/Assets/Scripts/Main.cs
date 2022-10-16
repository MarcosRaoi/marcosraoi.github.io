using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class Main : MonoBehaviour
{

    public Animator animatorDoBob;
    public Animator animatorDaRaquete2;
    public Animator animatorDaRaquete1;
    public Animator animatorDaBolinha;
    public Animator animatorDoJettCorpinho;
    public Animator animatorDoJettBracinho;

    public bool raquete2_jogando;
    public bool raquete1_jogando;

    public GameObject camera_principal;
    public float velRotateY;
    public float velocidadeCam;
    public float velRotateX;

    public GameObject dublagem; // pra ativar e desativar a dublagem apertar Z

    void Start()
    {
        /*animatorDoBob.enabled = false;
        animatorDaRaquete2.enabled = false;
        animatorDaRaquete1.enabled = false;
        animatorDaBolinha.enabled = false;
        animatorDoJettBracinho.enabled = false;
        animatorDoJettCorpinho.enabled = false;*/ // Não consigo fazer os coisas se sincronizarem.
        
    }

    // Update is called once per frame
    void Update()
    {
        raquete1_jogando = animatorDaRaquete1.enabled;
        raquete2_jogando = animatorDaRaquete2.enabled;

        if (Input.GetKeyDown("r"))
        {
            SceneManager.LoadScene("Pong for Love");
        }

        if (Input.GetKeyDown("z"))
        {
            dublagem.SetActive(!dublagem.activeSelf); /// rererere, quente, pra desligar e ligar a dublagem.

        }

        if (Input.GetKeyDown("space"))
        {
            animatorDoBob.enabled = !animatorDoBob.enabled;
            animatorDaRaquete2.enabled = !animatorDaRaquete2.enabled;
            animatorDaRaquete1.enabled = !animatorDaRaquete1.enabled;
            animatorDaBolinha.enabled = !animatorDaBolinha.enabled;
            animatorDoJettBracinho.enabled = !animatorDoJettBracinho.enabled;
            animatorDoJettCorpinho.enabled = !animatorDoJettCorpinho.enabled;

        }

        if (Input.GetKeyDown("2"))
        {
            Debug.Log("Apertei 2");
            //animator_bob.gameObject.SetActive(!animator_bob.gameObject.activeSelf); - ops, trollei rs.
            animatorDoBob.enabled = !animatorDoBob.enabled;
            animatorDaRaquete2.enabled = !animatorDaRaquete2.enabled;
            //animatorDaBolinha.enabled = !animatorDaBolinha.enabled;
        }

        if (Input.GetKeyDown("1"))
        {
            Debug.Log("Apertei 1");
            animatorDaRaquete1.enabled = !animatorDaRaquete1.enabled;
            //animatorDaBolinha.enabled = !animatorDaBolinha.enabled;
        }

       /* if (raquete1_jogando && raquete2_jogando)
        {
            animatorDaBolinha.enabled = true;            
        }
        else animatorDaBolinha.enabled = false;*/

        ////// tá, vamos movimentar a câmera.

        GirarCamera(); // rerere, começamos rsrs.     
        MovimentarCamera();

        
    }

    void GirarCamera() // tcho ver se funciona o Space.Self, pra ela girar localmente, e não global
    {
        if (Input.GetAxis("Horizontal") < 0)
        {
            camera_principal.transform.Rotate(new Vector3(0,-(velRotateY * Time.deltaTime),0),Space.Self);
        }

        if (Input.GetAxis("Horizontal") > 0)
        {
            camera_principal.transform.Rotate(new Vector3(0,velRotateY * Time.deltaTime,0),Space.Self);
        }

        if (Input.GetKey("q"))
        {
            camera_principal.transform.Rotate(new Vector3(Time.deltaTime*velRotateX,0,0),Space.Self);
        }

        if (Input.GetKey("e"))
        {
            camera_principal.transform.Rotate(new Vector3(Time.deltaTime*-velRotateX,0,0),Space.Self);
        }
    }

    void MovimentarCamera()
    {
        if (Input.GetAxis("Vertical") < 0)
        {
            camera_principal.transform.Translate(Vector3.forward*Time.deltaTime*-velocidadeCam,Space.Self);
        }

        if (Input.GetAxis("Vertical") > 0)
        {
            camera_principal.transform.Translate(Vector3.forward*Time.deltaTime*velocidadeCam,Space.Self);
            //camera_principal.transform.Translate(new Vector3(velocidadeCam *Time.deltaTime, 0,0));
        }


    }
}
