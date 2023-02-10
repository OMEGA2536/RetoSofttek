using System.Collections.Generic;
using Business.Logic.LogicInterfaces;
using Models.Entities;
using UnitsOfWork;

namespace Business.Logic.LogicImplementation
{
    public class productLogic : IProductLogic
    {
        private IUnitOfWork _unitOfWork;

        public productLogic(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public bool Update(Product obj)
        {
            return _unitOfWork.IProduct.Update(obj);
        }

        public int Insert(Product obj)
        {
            return _unitOfWork.IProduct.Insert(obj);
        }

        public IEnumerable<Product> GetList()
        {
            return _unitOfWork.IProduct.GetList();
        }

        public Product GetById(int id)
        {
            return _unitOfWork.IProduct.GetById(id);
        }

        public bool Delete(Product obj)
        {
            return _unitOfWork.IProduct.Delete(obj);
        }
    }
}