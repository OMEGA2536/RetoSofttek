using System;
using Dapper.Contrib.Extensions;
using Repository.Interfaces;

namespace Models.Entities
{
    public class Product : IEntity
    {
        [ExplicitKey]
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
    }
}