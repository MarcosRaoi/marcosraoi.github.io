using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class Main : MonoBehaviour
{
    public AudioSource menuMusic;

    private PersistindoDados pd;
    private InfoContador ic;

    // bora colocar bonitin pro exercício. O "ON" / "OFF" etcetera.
    public GameObject textONOFF;
    public GameObject textLVLs;

    private Scene scene;    // só pra não ficar fazendo o bang do texto dos Levels na cena do Jogar, já que tou usando Main.cs lá tbm, 
                            // pq to com preguiça de criar um MainMenu.cs e um MainJogar.cs diferente...

    void Start()
    {
        scene = SceneManager.GetActiveScene();

        pd = new PersistindoDados();
        ic = pd.LoadInfoContador();

        if (PlayerPrefs.HasKey("musica") && scene.name == "Menu")
        {
            if(PlayerPrefs.GetInt("musica") == 1) // Se a música era pra estar ligada.
            {
                menuMusic.Play();
                // por Default o botão já começa com ON, e no verde, então não precisa setar, já que é Start aqui.
            }

            else if (PlayerPrefs.GetInt("musica") == 0)
            {
                menuMusic.Stop();
                textONOFF.GetComponent<Text>().text = "OFF";
                textONOFF.GetComponent<Text>().color = Color.red;
            }
        }        

    }

    // Update is called once per frame
    void Update()
    {
        if (scene.name == "Menu")
        {
            textLVLs.GetComponent<Text>().text = ""+ pd.LoadInfoContador().valor;

        }
        
    }

    public void ToPlay()
    {
        SceneManager.LoadScene("Jogar");
    }

    public void MenuMusic()
    {
        if (menuMusic.isPlaying)
        {
            menuMusic.Stop();
            PlayerPrefs.SetInt("musica", 0);
            textONOFF.GetComponent<Text>().text = "OFF";
            textONOFF.GetComponent<Text>().color = Color.red;
        }

        else
        {
            menuMusic.Play();
            PlayerPrefs.SetInt("musica", 1);
            textONOFF.GetComponent<Text>().text = "ON";
            textONOFF.GetComponent<Text>().color = Color.green;
        }
    }

    public void Contador()
    {
        ic.valor++;
        pd.SaveInfoContador(ic);
        Debug.Log("Valor:");
        Debug.Log(pd.LoadInfoContador().valor);
    }

    public void BackToMenu()
    {
        SceneManager.LoadScene("Menu");
    }
}
