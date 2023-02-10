using System.Collections.Generic;
using Models.Entities;

namespace Business.Logic.LogicInterfaces
{
    public interface IProductLogic
    {
        bool Update(Product obj);
        int Insert(Product obj);
        IEnumerable<Product> GetList();
        Product GetById(int id);
        bool Delete(Product obj);
    }
}