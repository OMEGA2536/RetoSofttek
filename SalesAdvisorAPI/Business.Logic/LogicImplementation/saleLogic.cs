using System.Collections.Generic;
using System.Linq;
using Business.Logic.LogicInterfaces;
using Models.Entities;
using Models.Response;
using UnitsOfWork;

namespace Business.Logic.LogicImplementation
{
    public class saleLogic : ISaleLogic
    {
        private IUnitOfWork _unitOfWork;

        public saleLogic(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public bool Update(Sale obj)
        {
            return _unitOfWork.ISale.Update(obj);
        }

        public int Insert(Sale obj)
        {
            return _unitOfWork.ISale.Insert(obj);
        }

        public IEnumerable<Sale> GetList()
        {
            return _unitOfWork.ISale.GetList();
        }

        public Sale GetById(int id)
        {
            return _unitOfWork.ISale.GetById(id);
        }

        public bool Delete(Sale obj)
        {
            return _unitOfWork.ISale.Delete(obj);
        }

        public IEnumerable<SaleDTO> GetListToGrid()
        {
            var sales = _unitOfWork.ISale.GetList();
            var advisors = _unitOfWork.IAdvisor.GetList();
            var products = _unitOfWork.IProduct.GetList();
            var query = from sale in sales
                join advisor in advisors on sale.AdvisorId equals advisor.Id
                join product in products on sale.ProductId equals product.Id
                select new SaleDTO
                {
                    id = sale.Id,
                    date = sale.Date,
                    advisorName = advisor.Name,
                    productName = product.Name,
                    quantity = sale.Quantity,
                    cost = sale.Quantity * product.Price
                };

            return query.ToList();
        }
    }
}