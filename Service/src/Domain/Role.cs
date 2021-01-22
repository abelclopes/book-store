using System;
using System.Collections.Generic;

namespace Domain
{
    public class Role: EntidadeBase
    {
        public Role()
        {
        }
        public Role(string name, int nivel)
        {
            Name = name;
            Nivel = Nivel;
        }

        public int Nivel { get; set; }
        public string Name { get; set; }

        public ICollection<UserRole> UserRoles { get; set; }
    }
}
