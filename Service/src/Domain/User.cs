using System;
using System.Collections.Generic;
using System.Linq;

using Domain.EnumHelper ;

namespace Domain
{
    public class User: EntidadeBase
    {
        public User(){}
        public User(string name, string cpf, string email, string username, string password, Role role )
        {
            Name = name;
            Cpf = cpf;
            Email = email;
            Username = username;
            Role= role;
            Password = Util.GetSHA1HashData(password);
        }
        
        
        public string Name { get; set; }
        public string Cpf { get; set; }
        public string Email { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public Role Role { get; set; }
    }
}