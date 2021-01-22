using Domain;

namespace Api.Model
{
    public class UserToken
    {
        public User User { get; set; }
        public string Token { get; set; }       
        
    }
}