using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Domain;
using Domain.Interface;
using System.Collections.Generic;

namespace Infraestructure.Data
{
    public static class DbInitialize
    {
        public static void Seed(this IContext context)
        {
            context.Database.EnsureCreated();

            // // Look for any students.
           
            if (!context.Categories.Any())
            {
                var Categories = new Category[]
                {
                    new Category{Id = Guid.NewGuid(), Name="administracao", Description="Administração"},
                    new Category{Id = Guid.NewGuid(), Name="agricultura", Description="Agricultura"},
                    new Category{Id = Guid.NewGuid(), Name="antropologia", Description="Antropologia"},
                    new Category{Id = Guid.NewGuid(), Name="arqueologia", Description="Arqueologia"},
                    new Category{Id = Guid.NewGuid(), Name="arquitetura", Description="Arquitetura"},
                    new Category{Id = Guid.NewGuid(), Name="artes", Description="Artes"},
                    new Category{Id = Guid.NewGuid(), Name="astronomia", Description="Astronomia"},
                    new Category{Id = Guid.NewGuid(), Name="biologia", Description="Biologia"},
                    new Category{Id = Guid.NewGuid(), Name="botanica", Description="Botânica"},
                    new Category{Id = Guid.NewGuid(), Name="brasil", Description="Brasil"},
                    new Category{Id = Guid.NewGuid(), Name="ciencia-politica", Description="Ciência Política"},
                    new Category{Id = Guid.NewGuid(), Name="ciencias-exatas", Description="Ciências Exatas"},
                    new Category{Id = Guid.NewGuid(), Name="cinema", Description="Cinema"},
                    new Category{Id = Guid.NewGuid(), Name="comunicacao", Description="Comunicação"},
                    new Category{Id = Guid.NewGuid(), Name="contabilidade", Description="Contabilidade"},
                    new Category{Id = Guid.NewGuid(), Name="decoracao", Description="Decoração"},
                    new Category{Id = Guid.NewGuid(), Name="dicionarios", Description="Dicionários"},
                    new Category{Id = Guid.NewGuid(), Name="didaticos", Description="Didáticos"},
                    new Category{Id = Guid.NewGuid(), Name="direito", Description="Direito"},
                    new Category{Id = Guid.NewGuid(), Name="documentos", Description="Documentos"},
                    new Category{Id = Guid.NewGuid(), Name="ecologia", Description="Ecologia"},
                    new Category{Id = Guid.NewGuid(), Name="economia", Description="Economia"},
                    new Category{Id = Guid.NewGuid(), Name="engenharia", Description="Engenharia"},
                    new Category{Id = Guid.NewGuid(), Name="enciclopedias", Description="Enciclopédias"},
                    new Category{Id = Guid.NewGuid(), Name="ensino-de-idiomas", Description="Ensino de Idiomas"},
                    new Category{Id = Guid.NewGuid(), Name="filosofia", Description="Filosofia"},
                    new Category{Id = Guid.NewGuid(), Name="fotografia", Description="Fotografia"},
                    new Category{Id = Guid.NewGuid(), Name="geografia", Description="Geografia"},
                    new Category{Id = Guid.NewGuid(), Name="guerra", Description="Guerra"},
                    new Category{Id = Guid.NewGuid(), Name="historia-do-brasil", Description="História do Brasil"},
                    new Category{Id = Guid.NewGuid(), Name="historia-geral", Description="História Geral"},
                    new Category{Id = Guid.NewGuid(), Name="informatica", Description="Informática"},
                    new Category{Id = Guid.NewGuid(), Name="linguistica", Description="Linguística"},
                    new Category{Id = Guid.NewGuid(), Name="medicina", Description="Medicina"},
                    new Category{Id = Guid.NewGuid(), Name="moda", Description="Moda"},
                    new Category{Id = Guid.NewGuid(), Name="musica", Description="Música"},
                    new Category{Id = Guid.NewGuid(), Name="pecuaria", Description="Pecuária"},
                    new Category{Id = Guid.NewGuid(), Name="pedagogia", Description="Pedagogia"},
                    new Category{Id = Guid.NewGuid(), Name="pintura", Description="Pintura"},
                    new Category{Id = Guid.NewGuid(), Name="psicologia", Description="Psicologia"},
                    new Category{Id = Guid.NewGuid(), Name="saude", Description="Saúde"},
                    new Category{Id = Guid.NewGuid(), Name="sociologia", Description="Sociologia"},
                    new Category{Id = Guid.NewGuid(), Name="teatro", Description="Teatro"},
                    new Category{Id = Guid.NewGuid(), Name="turismo", Description="Turismo"},
                    new Category{Id = Guid.NewGuid(), Name="biografias", Description="Biografias" },
                    new Category{Id = Guid.NewGuid(), Name="colecoes", Description="Coleções" },
                    new Category{Id = Guid.NewGuid(), Name="comportamento", Description="Comportamento" },
                    new Category{Id = Guid.NewGuid(), Name="contos", Description="Contos" },
                    new Category{Id = Guid.NewGuid(), Name="critica-literaria", Description="Crítica Literária" },
                    new Category{Id = Guid.NewGuid(), Name="ficcao-cientifica", Description="Ficção Científica" },
                    new Category{Id = Guid.NewGuid(), Name="folclore", Description="Folclore" },
                    new Category{Id = Guid.NewGuid(), Name="genealogia", Description="Genealogia" },
                    new Category{Id = Guid.NewGuid(), Name="humor", Description="Humor" },
                    new Category{Id = Guid.NewGuid(), Name="infanto-juvenis", Description="Infantojuvenis" },
                    new Category{Id = Guid.NewGuid(), Name="jogos", Description="Jogos" },
                    new Category{Id = Guid.NewGuid(), Name="jornais", Description="Jornais" },
                    new Category{Id = Guid.NewGuid(), Name="literatura-brasileira", Description="Literatura Brasileira" },
                    new Category{Id = Guid.NewGuid(), Name="literatura-estrangeira", Description="Literatura Estrangeira" },
                    new Category{Id = Guid.NewGuid(), Name="livros-raros", Description="Livros Raros" },
                    new Category{Id = Guid.NewGuid(), Name="manuscritos", Description="Manuscritos" },
                    new Category{Id = Guid.NewGuid(), Name="Poesia", Description="Poesia" },
                    new Category{Id = Guid.NewGuid(), Name="outros-assuntos", Description="Outros Assuntos" }
                };
                context.Categories.AddRange(Categories);
            }

            List<Role> lists = new List<Role>();
            var myRoles = lists;
            if (!context.Roles.Any())
            {
                var Roles = new Role[]
                {
                   new Role { Id = Guid.Parse("2A367317-7BF8-45A2-89D5-74B8E8D54D3B"), Name = "Administrador", Nivel = 1},
                   new Role { Id = Guid.Parse("D1FEA121-AF1A-4C4F-A823-D22114E8766A"), Name = "Analista De Compras", Nivel = 2},
                   new Role { Id = Guid.Parse("5B04367F-828A-476C-96DB-AFC64F84809E"), Name = "Analista Financeiro", Nivel = 3},
                   new Role { Id = Guid.Parse("2BBA1D8C-276B-4631-97D6-5C3E08C01720"), Name = "Diretor Financeiro", Nivel = 4},
                   new Role { Id = Guid.Parse("348C3E6E-4CBE-4BFD-9872-2FB6C8E79F47"), Name = "Vendedor", Nivel = 5},
                };
                context.Roles.AddRange(Roles);
                myRoles = Roles.ToList();
            }
            if (!context.Users.Any())
            {

                var users = new User[]
                {
                    // senha é teste123
                    new User { Id = Guid.NewGuid(),
                            Name = "Abel Lopes",
                            Cpf = "99999999999",
                            Username = "abellopes",
                            Email = "abellopes@gmail.com" ,
                            Password = "2242461295221015719538209212227614317113501631961762",
                            Role= context.Roles.Any()? context.Roles.FirstOrDefault(x=> x.Id.ToString() == "2A367317-7BF8-45A2-89D5-74B8E8D54D3B").Name : myRoles.FirstOrDefault().Name
                    },
                };
                
                context.Users.AddRange(users);

                var UserRole = myRoles.Any() ? myRoles.FirstOrDefault() : context.Roles.FirstOrDefault(x => x.Id.ToString() == "2A367317-7BF8-45A2-89D5-74B8E8D54D3B");

                var userRole = new UserRole(users.AsQueryable().FirstOrDefault(), UserRole);
                context.UserRoles.Add(userRole);
            }
         
            if (!context.Books.Any())
            {

                // var books = new Book[]
                // {
                //     // senha é teste123
                //     new Book { Id = Guid.NewGuid(),
                //             Name = "Abel Lopes",

                //     },
                // };
                // context.Users.AddRange(users);
            }
            //     foreach (Permissao p in permissoes)
            //     {
            //         context.Permissoes.Add(p);
            //         i++;
            //     }   

            //     i = 0;                
            //     foreach (Permissao p in permissoes)
            //     {
            //         var up = new UsuarioPermissao(users[i], p);
            //         context.UsuarioPermissoes.Add(up);
            //         i++;
            //     }   


            // }

            // if (!context.Fornecedores.Any())
            // {

            //     for(int i = 0; i < 5; i++)
            //     {
            //         context.Fornecedores.Add(new Fornecedor { Id = Guid.NewGuid(), Nome = $"Fornecedor {i}", CnpjCpf = gerador(), Email= $"fornecedor,{i}@email.com",Telefone=$"{gerador(9)}"});
            //     }


            context.SaveChanges();
        }

        private static string gerador(int leng = 10)
        {
            Random R = new Random();
            return ((long)R.Next(0, 100000) * (long)R.Next(0, 100000)).ToString().PadLeft(leng, '0');
        }
    }
}