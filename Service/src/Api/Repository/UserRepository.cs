using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using Domain;
using Domain.Interface;

namespace Api.Repository
{
     public static class UserRepository
    {
        
        public static User Get(string username, string password, IQueryable<User> _users)
        {
            var users = _users;
            return users.FirstOrDefault(x => x.Username.ToLower() == username.ToLower() && x.Password == x.Password);
        }

        public static User Add(string username, string password)
        {
            return new User { Id = Guid.NewGuid(), Username = username.ToLower(), Password = password, Role = new Role("manager",1) };
        }
    }
}