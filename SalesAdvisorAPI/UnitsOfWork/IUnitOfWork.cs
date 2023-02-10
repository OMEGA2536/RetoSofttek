using Repository.Interfaces;

namespace UnitsOfWork
{
    public interface IUnitOfWork
    {
        IAdvisorRepository IAdvisor { get; }
        IProductRepository IProduct { get; }
        ISaleRepository ISale { get; }
    }
}