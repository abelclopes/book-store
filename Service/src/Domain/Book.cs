using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Domain.Interface;
using Microsoft.EntityFrameworkCore;

namespace Domain
{
    public class Book : EntidadeBase
    {
        public Book()
        {
        }
        public Book(string nome, string descricao)
        {
            Nome = nome;
            Descricao = descricao;
        }

        public string Nome { get; set; }
        public string Descricao { get; set; }
        public List<Category> categories { get; set; }
        public void update(Book model)
        {
            Nome = model.Nome;
            Descricao = model.Descricao;
        }
        public void update(string nome)
        {
            Nome = nome;
        }
    }
}