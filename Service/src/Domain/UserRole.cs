using System;
using System.Collections.Generic;

namespace Domain
{
    public partial class UserRole : EntidadeBase
    {
        public UserRole()
        {
            
        }
        public UserRole(User User, Role role )
        {
            UserId = User.Id;
            RoleId = role.Id;
            User = User;
            role = role;
            
        }
        public Guid UserId { get; set; }
        public Guid RoleId { get; set; }

        public Role Roles { get; set; }
        public User User { get; set; }
    }
}
