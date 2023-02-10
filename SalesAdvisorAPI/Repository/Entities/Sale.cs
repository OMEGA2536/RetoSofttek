using System;
using Dapper.Contrib.Extensions;
using Repository.Interfaces;

namespace Models.Entities
{
    public class Sale : IEntity
    {
        [ExplicitKey]
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public int AdvisorId { get; set; }
        public int ProductId { get; set; }
        public int Quantity { get; set; }
    }
}