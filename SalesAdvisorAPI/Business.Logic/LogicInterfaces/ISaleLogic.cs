using System.Collections.Generic;
using Models.Entities;
using Models.Response;

namespace Business.Logic.LogicInterfaces
{
    public interface ISaleLogic
    {
        bool Update(Sale obj);
        int Insert(Sale obj);
        IEnumerable<Sale> GetList();
        Sale GetById(int id);
        bool Delete(Sale obj);
        IEnumerable<SaleDTO> GetListToGrid();
    }
}