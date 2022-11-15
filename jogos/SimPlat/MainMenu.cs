using UnityEngine.SceneManagement;
using UnityEngine;

public class MainMenu : MonoBehaviour
{
    // Update is called once per frame
    void Update()
    {
        // Pronto, configurei, mas vou deixar o antigo tbm '--'-'
        // Preguiça de configurar o Input da Unity '-'-'-
        bool zeroPressed = Input.GetKeyDown(KeyCode.Keypad0) || Input.GetKeyDown(KeyCode.Alpha0);
        //bool onePressed = Input.GetButtonDown("Button2019"); // || Input.GetKeyDown(KeyCode.Keypad1) || Input.GetKeyDown(KeyCode.Alpha1);
        bool twoPressed = Input.GetKeyDown(KeyCode.Keypad2) || Input.GetKeyDown(KeyCode.Alpha2);
        //bool ninePressed = Input.GetButtonDown("Button2019");// || Input.GetKeyDown(KeyCode.Keypad9) || Input.GetKeyDown(KeyCode.Alpha9);

        if (Input.GetButtonDown("Button2019"))
        {
            this.LoadPlatformScene("2019");
        }

        if (Input.GetButtonDown("Button2020"))
        {
            this.LoadPlatformScene("2020");
        }

        Mapeamento();
    }

    public void LoadPlatformScene(string sceneYearLevel)
    {
        string sceneName = $"Plataforma{sceneYearLevel}/Scenes/{sceneYearLevel}";
        SceneManager.LoadScene(sceneName);
    }

    void Mapeamento()
    {
        // links que me ajudaram, mas é bom ter o próprio método xd 
        //https://docs.unity3d.com/ScriptReference/KeyCode.html
        //https://wiki.unity3d.com/index.php/Xbox360Controller 
        if (Input.GetKeyDown(KeyCode.Joystick1Button0))
        {
            Debug.Log("Apertei a KeyCode.Joystick1Button0 || Referente ao botão A do XBOX");
        }
        if (Input.GetKeyDown(KeyCode.Joystick1Button1))
        {
            Debug.Log("Apertei a KeyCode.Joystick1Button1 || Referente ao botão B do XBOX");
        }
        if (Input.GetKeyDown(KeyCode.Joystick1Button2))
        {
            Debug.Log("Apertei a KeyCode.Joystick1Button2 || Referente ao botão X do XBOX");
        }
        if (Input.GetKeyDown(KeyCode.Joystick1Button3))
        {
            Debug.Log("Apertei a KeyCode.Joystick1Button3 || Referente ao botão Y do XBOX");
        }
        if (Input.GetKeyDown(KeyCode.Joystick1Button4))
        {
            Debug.Log("Apertei a KeyCode.Joystick1Button4 || Referente ao botão LB do XBOX");
        }
        if (Input.GetKeyDown(KeyCode.Joystick1Button5))
        {
            Debug.Log("Apertei a KeyCode.Joystick1Button5 || Referente ao botão RB do XBOX");
        }
        if (Input.GetKeyDown(KeyCode.Joystick1Button6))
        {
            Debug.Log("Apertei a KeyCode.Joystick1Button6 || Referente ao botão Back do XBOX");
        }
        if (Input.GetKeyDown(KeyCode.Joystick1Button7))
        {
            Debug.Log("Apertei a KeyCode.Joystick1Button7 || Referente ao botão Start do XBOX");
        }
        if (Input.GetKeyDown(KeyCode.Joystick1Button8))
        {
            Debug.Log("Apertei a KeyCode.Joystick1Button8 || Referente ao botão Left Stick (botão do analógico esquerdo) do XBOX");
        }
        if (Input.GetKeyDown(KeyCode.Joystick1Button9))
        {
            Debug.Log("Apertei a KeyCode.Joystick1Button9 || Referente ao botão Right Stick (botão do analógico direito) do XBOX");
        }

        // de 0 a 9 /\ , de 10 a 19 \/
        if (Input.GetKeyDown(KeyCode.Joystick1Button10))
        {
            Debug.Log("Apertei a KeyCode.Joystick1Button10");
        }
        if (Input.GetKeyDown(KeyCode.Joystick1Button11))
        {
            Debug.Log("Apertei a KeyCode.Joystick1Button11");
        }
        if (Input.GetKeyDown(KeyCode.Joystick1Button12))
        {
            Debug.Log("Apertei a KeyCode.Joystick1Button12");
        }
        if (Input.GetKeyDown(KeyCode.Joystick1Button13))
        {
            Debug.Log("Apertei a KeyCode.Joystick1Button13");
        }
        if (Input.GetKeyDown(KeyCode.Joystick1Button14))
        {
            Debug.Log("Apertei a KeyCode.Joystick1Button14");
        }
        if (Input.GetKeyDown(KeyCode.Joystick1Button15))
        {
            Debug.Log("Apertei a KeyCode.Joystick1Button15");
        }
        if (Input.GetKeyDown(KeyCode.Joystick1Button16))
        {
            Debug.Log("Apertei a KeyCode.Joystick1Button16");
        }
        if (Input.GetKeyDown(KeyCode.Joystick1Button17))
        {
            Debug.Log("Apertei a KeyCode.Joystick1Button17");
        }
        if (Input.GetKeyDown(KeyCode.Joystick1Button18))
        {
            Debug.Log("Apertei a KeyCode.Joystick1Button18");
        }
        if (Input.GetKeyDown(KeyCode.Joystick1Button19))
        {
            Debug.Log("Apertei a KeyCode.Joystick1Button19");
        }

        ///////////// NÃO CONSIGO PEGAR A MERDA DO LEFT TRIGGER E DO RIGHT TRIGGER DO XBOX, CALMA AE.
        /*if (Input.GetAxis("ConnectionBar") > 0)
        {
            Debug.Log("Apertei a porra do RT botão, Right Trigger");
        }
        if (Input.GetAxis("ConnectionBar") < 0)
        {
            Debug.Log("Apertei a porra do LT botão, Left Trigger");
        }*/
    }
}
