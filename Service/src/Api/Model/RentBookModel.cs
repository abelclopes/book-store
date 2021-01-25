using System;
using Domain;

namespace Api.Model
{
    public class RentBookModel
    {
        public Guid BookId { get; set; }
        public Guid UserId { get; set; }        
        public int Term { get; set; }
        public DateTime WithdrawalDate { get; set; }
        public DateTime? ReturnDate { get; set; } 
        public bool Delivered { get; set; }        
        public void Delivery(){
            Delivered = true;
        }
        
        public RentBook MapperBook()
        {
            return new RentBook{
                UserId = UserId,
                BookId = BookId,
                Term = Term,
                WithdrawalDate= WithdrawalDate,
                ReturnDate= ReturnDate
            };
        }
    }
}