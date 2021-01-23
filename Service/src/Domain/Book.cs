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
        public Book(string title, string description, string author, DateTime year, Guid categoryId, string publishingCompany)
        {
            Title = title;
            Description = description;
            Author = author;
            Year = year;
            CategoryId = categoryId;
            PublishingCompany = publishingCompany;
        }

        public string Title { get; set; }
        public string Description { get; set; }
        public string Author { get; set; }
        public DateTime Year { get; set; }
        public Guid CategoryId { get; set; }
        public string PublishingCompany { get; set; }
        public void update(Book model)
        {
            Title = model.Title;
            Description = model.Description;
            Author = model.Author;
            Year = model.Year;
            CategoryId = model.CategoryId;
            PublishingCompany = model.PublishingCompany;
        }
        public void update(string title)
        {
            Title = title;
        }
    }
}