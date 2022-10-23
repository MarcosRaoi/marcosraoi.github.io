using System.Collections;
using System.Collections.Generic;
using UnityEngine;

using Facebook.Unity;

public class FacebookScript : MonoBehaviour
{
    // Aula 8 - 29/09/2020
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    public void FacebookLogin()
    {
        var perms = new List<string>() { "public_profile", "email", "user_friends" };
        FB.LogInWithReadPermissions(perms);
    }
}
