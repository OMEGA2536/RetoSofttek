using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Response
{
    public class SaleDTO
    {
        public int id { get; set; }
        public DateTime date { get; set; }
        public string advisorName { get; set; }
        public string productName { get; set; }
        public int quantity { get; set; }
        public decimal cost { get; set; }
    }
}
