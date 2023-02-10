using DataAccess.RepositoryImplementation;
using Repository.Interfaces;
using UnitsOfWork;

namespace DataAccess
{
    public class UnitOfWork : IUnitOfWork
    {
        public IAdvisorRepository IAdvisor { get; }
        public IProductRepository IProduct { get; }
        public ISaleRepository ISale { get; }


        public UnitOfWork(ApplicationDbContext dbContext )
        {
            IAdvisor = new advisorRepository(dbContext);
            IProduct = new productRepository(dbContext);
            ISale = new saleRepository(dbContext);
        }
    }
}