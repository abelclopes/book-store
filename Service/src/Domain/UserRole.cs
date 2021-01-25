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
        }
        public Guid UserId { get; set; }
        public Guid RoleId { get; set; }
    }
}
