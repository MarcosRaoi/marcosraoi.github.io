using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Movimento : MonoBehaviour
{
    public float velocidade;
    public Dropdown dd;

    public GameObject[] botoes;
    public GameObject guideTouch;
    public GameObject controlarFis;

    public bool ativouBotoes, ativouGuia,ativouTreme;

    public bool noPC;

    private Vector2 movement;
    public GameObject bolinha;
    private Rigidbody2D rb;
    public float moveSpeed;

    // ah meu, vou deixar tudo nesse Movimento.cs, eu até queria colocar em outro script main, mas tou com preguiça 

    private void Awake()
    {
#if UNITY_ANDROID
        noPC = false;
#else
        noPC = true;
#endif
        if(noPC)
        {
            Debug.Log("tou no PC");
        }

        else
        {
            Debug.Log("não to no PC");
        }
    }

    void Start()
    {
        rb = bolinha.GetComponent<Rigidbody2D>();

        ativouBotoes = true;
        ativouGuia = false;
        ativouTreme = false;

        if (noPC)
        {
            dd.gameObject.SetActive(false);

            for (int i = 0; i < botoes.Length; i++)
            {
                botoes[i].SetActive(false);
            }

        }

    }

    // Update is called once per frame
    void Update()
    {
        //Debug.Log(dd.value);

        if (noPC) // eu ia fazer ele ativar um objeto que controlasse a movimentação no PC, mas sla... preguiça.
        {
            movement.x = Input.GetAxis("Horizontal"); 
            movement.y = Input.GetAxis("Vertical");

            rb.MovePosition(rb.position + movement * moveSpeed * Time.fixedDeltaTime);
            
        }

        else
        { 

        if (dd.value == 0)
        {
            if (!ativouBotoes)
            {
                for (int i = 0; i < botoes.Length; i++)
                {
                    botoes[i].SetActive(true);
                }
                ativouBotoes = true;
            }

        }

        else
        {
            if (ativouBotoes)
            {
                for (int i = 0; i < botoes.Length; i++)
                {
                    botoes[i].SetActive(false);
                }
                ativouBotoes = false;
            }

        }

        if (dd.value == 1)
        {
            if (!ativouGuia)
            {
                ativouGuia = true;
                guideTouch.SetActive(true);
            }

            //Parado();

            if (Input.touchCount > 0)
            {
                Touch toque = Input.GetTouch(0);            //Debug.Log(Input.touchCount);            //Debug.Log(toque.phase);

                if (toque.phase == TouchPhase.Began)
                {
                    if ((toque.position.x < Screen.width / 2.0f) && (toque.position.y > Screen.height * 0.31f && toque.position.y < Screen.height * 0.69f))
                    {
                        MoverEsquerda();
                    }
                    else if ((toque.position.x > Screen.width / 2.0f) && (toque.position.y > Screen.height * 0.31f && toque.position.y < Screen.height * 0.69f))
                    { 
                        MoverDireita();
                    }
                    if (toque.position.y <= Screen.height * 0.31f)
                    {
                        MoverBaixo(); // buguei, mas aqui parece que o position tá "ao contrário" ... ué?? '-'-'-, buguei real, mas deu certo... Eu tinha colocado o MoverCima();
                    }
                    else if (toque.position.y >= Screen.height * 0.69f)
                    {
                        MoverCima(); // ah tá, vish, é porque o ponto 0,0 é no canto inferior esquerdo, quando Portrait, não em cima, mas de boa.
                    }
                    //Debug.Log(Screen.currentResolution);
                    //Debug.Log(toque.position);
                }

                else if (toque.phase == TouchPhase.Ended)
                {
                    Parado();
                }
            }
            else Parado();
        //Touch touch = Input.GetTouch(0);
        }

        else
        {
            if (ativouGuia)
            {
                ativouGuia = false;
                guideTouch.SetActive(ativouGuia);
            }
        }

        if (dd.value == 2)
        {
            if(!ativouTreme)
            {
                ativouTreme = true;
                controlarFis.SetActive(ativouTreme);

            }
        }

        else
        {
            if(ativouTreme)
            {
                ativouTreme = false;
                controlarFis.SetActive(ativouTreme);

            }
        }

        }

    }
        
    
    public void MoverEsquerda()
    {
        //Handheld.Vibrate(); n foi kk
        Vector3 movimento = new Vector3(-velocidade * Time.deltaTime ,0,0);

        Rigidbody2D rb = GameObject.Find("Bolinha").GetComponent<Rigidbody2D>();

        rb.velocity = movimento;
    }


    public void MoverDireita()
    {
        Vector3 movimento = new Vector3(velocidade * Time.deltaTime, 0, 0);

        Rigidbody2D rb = GameObject.Find("Bolinha").GetComponent<Rigidbody2D>();

        rb.velocity = movimento;
    }

    public void MoverCima()
    {
        Vector3 movimento = new Vector3(0, velocidade * Time.deltaTime, 0);

        Rigidbody2D rb = GameObject.Find("Bolinha").GetComponent<Rigidbody2D>();

        rb.velocity = movimento;
    }

    public void MoverBaixo()
    {
        Vector3 movimento = new Vector3(0, -velocidade * Time.deltaTime, 0);

        Rigidbody2D rb = GameObject.Find("Bolinha").GetComponent<Rigidbody2D>();

        rb.velocity = movimento;
    }

    public void Parado()
    {
        Vector3 movimento = new Vector3(0, 0, 0);

        Rigidbody2D rb = GameObject.Find("Bolinha").GetComponent<Rigidbody2D>();

        rb.velocity = movimento;
    }



}
