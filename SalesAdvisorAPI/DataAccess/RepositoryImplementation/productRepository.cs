using Models.Entities;
using Repository.Interfaces;

namespace DataAccess.RepositoryImplementation
{
    public class productRepository : Repository<Product>, IProductRepository
    {
        public productRepository(ApplicationDbContext dbContext) : base(dbContext)
        {
        }
    }
}