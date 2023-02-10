using System;
using System.Collections.Generic;
using System.Text;
using Dapper.Contrib.Extensions;
using Repository.Interfaces;

namespace Models.Entities
{
    public class Advisor : IEntity
    {
        [ExplicitKey]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
    }
}
