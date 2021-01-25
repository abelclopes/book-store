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
        
        // public static UserRole Get(string username, string password, User users, UserRole _users)
        // {
        //     var users = _users;
        //     return users.FirstOrDefault(x => x.User.Username.ToLower() == username.ToLower() || x.User.Email.ToLower() == username.ToLower() && x.User.Password == password);
        // }

        public static User Add(string username, string password, Nullable<System.Guid> RoleId, List<Role> roles)
        {
            var setRole = roles.FirstOrDefault(x=> x.Id == RoleId);
            return new User { Id = Guid.NewGuid(), Username = username.ToLower(), Password = password, Role = setRole.Name };
        }

        public static User Get(string username, string password, List<User> _users, List<UserRole> UserRoles, List<Role> roles)
        {
            var getUser = new User();
            try
            {
                if (_users.Any())
                {
                    getUser = _users.FirstOrDefault(x => x.Username.ToLower() == username.ToLower() || x.Email.ToLower() == username.ToLower() && x.Password == password);
                    if (getUser != null)
                    {
                        var RoleId = UserRoles.FirstOrDefault(x => x.UserId == getUser.Id).RoleId;
                        getUser.Role = roles.FirstOrDefault(x => x.Id == RoleId).Name;
                    }
                }
                return getUser;
            }
            catch (Exception e) { 
                throw new ArgumentException( $"ERROR -> {e.Message}");
            }                            
        }
    }
}