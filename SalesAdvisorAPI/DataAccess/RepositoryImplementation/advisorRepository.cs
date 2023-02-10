using Models.Entities;
using Repository.Interfaces;

namespace DataAccess.RepositoryImplementation
{
    public class advisorRepository : Repository<Advisor>, IAdvisorRepository
    {
        public advisorRepository(ApplicationDbContext dbContext) : base(dbContext)
        {
        }
    }
}