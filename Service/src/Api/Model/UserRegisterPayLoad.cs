using System;
using Domain;
namespace Api.Model
{
    public class UserRegisterPayLoad
    {
        private string _password;
        public string Username { get; set; }
        public string Password { 
            get{ return  Util.GetSHA1HashData(_password); } 
            set{ _password = (value == null || value == "") ? "00000000-0000-0000-0000-000000000000" : value; }
        }        
        public Nullable<System.Guid> RoleId { get; set; }
    }
}