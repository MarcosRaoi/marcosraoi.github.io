using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary;
using UnityEngine;

public class PersistindoDados
{
    private readonly string path = Application.persistentDataPath + "infocontador.dat"; // isso tava dentro do Create, mas ele colocou pra ser readonly.
    public void SaveInfoContador(InfoContador dado)
    {
        BinaryFormatter bf = new BinaryFormatter();
        FileStream file = File.Create(path);

        bf.Serialize(file, dado); // salvando o dado no File;
        file.Close(); // Fechando para impedir as pessoas mexerem.

    }

    public InfoContador LoadInfoContador()
    {
        if (File.Exists(path))
        {
            BinaryFormatter bf = new BinaryFormatter();
            FileStream file = File.Open(path, FileMode.Open);
            InfoContador dado = (InfoContador) bf.Deserialize(file);
            file.Close();

            return dado;

        }
        else
        {
            Debug.Log("Deu ruim no arquivo");
            return null;
        }
    }
}
