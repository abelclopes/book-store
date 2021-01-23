using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Domain.Interface;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Domain
{
    public class BookModel
    {

        public BookModel(Guid id, string title, string description, string author, string year, Guid categoryId, string publishingCompany)
        {
            this.Id = id;
            this.Title = title;
            this.Description = description;
            this.Author = author;
            this.Year = year;
            this.CategoryId = categoryId;
            this.PublishingCompany = publishingCompany;

        }
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Author { get; set; }
        public string Year { get; set; }
        public Guid CategoryId { get; set; }
        public string PublishingCompany { get; set; }
        public bool Excluded { get; set; }

        internal Book book()
        {
            return new Book(
                Title = Title,
                Description = Description,
                Author = Author,
                Year = Year,
                CategoryId = CategoryId,
                PublishingCompany = PublishingCompany
            );
        }

        internal Book Update()
        {
            return new Book(
                Id = Id,
                Title = Title,
                Description = Description,
                Author = Author,
                Year = Year,
                CategoryId = CategoryId,
                PublishingCompany = PublishingCompany
            );
        }
        internal Book UpdateByBook(Book model)
        {
            model.Id = Id;
            model.Title = Title;
            model.Description = Description;
            model.Author = Author;
            model.Year = Year;
            model.CategoryId = CategoryId;
            model.PublishingCompany = PublishingCompany;
            model.Excluded = Excluded;
            return model;
        }
        internal Book DeleteBook(Book model)
        {
            model.Excluded = true;
            return model;
        }

    }
}