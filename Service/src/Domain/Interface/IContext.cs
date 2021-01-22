using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage;

namespace Domain.Interface
{
    public interface IContext
    {
        DbSet<User> Users { get; set; }
        DbSet<Role> Roles { get; set; }
        DbSet<UserRole> UserRoles { get; set; }
        DbSet<Category> Categories { get; set; }
        DbSet<Book> Books { get; set; }

       
        DatabaseFacade Database { get; }
        Task<int> SaveChangesAsync();
        int SaveChanges(); 
    }
}