using System;
using Domain;
namespace Api.Model
{
    public class UserPayLoad
    {
        private string _password;
        public string Username { get; set; }
        public string Password { 
            get{ return Util.GetSHA1HashData(_password); } 
            set{ _password = value; }
        }
        public Guid RoleId { get; set; }
    }
}