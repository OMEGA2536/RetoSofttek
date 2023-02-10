using System.Collections.Generic;
using Models.Entities;
using Models.Response;
using Repository.Interfaces;

namespace DataAccess.RepositoryImplementation
{
    public class saleRepository: Repository<Sale> ,ISaleRepository
    {
        public saleRepository(ApplicationDbContext dbContext) : base(dbContext)
        {
        }

       
    }
}