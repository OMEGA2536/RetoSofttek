using System;
using System.Collections.Generic;
using Business.Logic.LogicInterfaces;
using Models.Entities;
using UnitsOfWork;

namespace Business.Logic.LogicImplementation
{
    public class advisorLogic : IAdvisorLogic
    {
        private IUnitOfWork _unitOfWork;

        public advisorLogic(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }


        public bool Update(Advisor obj)
        {
            return _unitOfWork.IAdvisor.Update(obj);
        }

        public int Insert(Advisor obj)
        {
            return _unitOfWork.IAdvisor.Insert(obj);
        }

        public IEnumerable<Advisor> GetList()
        {
            return _unitOfWork.IAdvisor.GetList();
        }

        public Advisor GetById(int id)
        {
            return _unitOfWork.IAdvisor.GetById(id);
        }

        public bool Delete(Advisor obj)
        {
            return _unitOfWork.IAdvisor.Delete(obj);
        }

        public bool GenerateRandomData()
        {
            Random random = new Random();

            // Generate random advisors
            List<Advisor> advisors = new List<Advisor>();
            for (int i = 0; i < 3; i++)
            {
                Advisor advisor = new Advisor
                {
                    Id = 0,
                    Name = $"Advisor {i}",
                    Email = $"advisor{i}@example.com"
                };

                advisors.Add(advisor);
            }

            // Generate random products
            List<Product> products = new List<Product>();
            for (int i = 0; i < 3; i++)
            {
                Product product = new Product
                {
                    Id = 0,
                    Name = $"Product {i}",
                    Price = (decimal)random.Next(10, 100)
                };

                products.Add(product);
            }

            // Generate random sales
            List<Sale> sales = new List<Sale>();
            for (int i = 0; i < 5; i++)
            {
                Sale sale = new Sale
                {
                    Id = 0,
                    Date = DateTime.Now.AddDays(i),
                    AdvisorId = random.Next(1, 3),
                    ProductId = random.Next(1, 3),
                    Quantity = random.Next(1, 10)
                };

                sales.Add(sale);
            }

            foreach (var advisor in advisors)
            {
                _unitOfWork.IAdvisor.Insert(advisor);
            }

            foreach (var product in products)
            {
                _unitOfWork.IProduct.Insert(product);
            }

            foreach (var sale in sales)
            {
                _unitOfWork.ISale.Insert(sale);
            }
            return true;
        }
    }
}