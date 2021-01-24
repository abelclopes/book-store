using System;
namespace Domain
{
    public class RentBook: EntidadeBase
    {
        public Book Book { get; set; }
        public User User { get; set; }        
        public int Term { get; set; }
        public DateTime WithdrawalDate { get; set; }
        public DateTime? ReturnDate { get; set; }
        public bool Delivered { get; set; }        
        public void Delivery(){
            Delivered = true;
        }
    }
}