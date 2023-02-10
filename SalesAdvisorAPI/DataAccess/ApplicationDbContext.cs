using Microsoft.EntityFrameworkCore;
using Models.Entities;

namespace DataAccess
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<T> Set<T>() where T : class
        {
            return base.Set<T>();
        }

        public DbSet<Sale> Sales{ get; set; }
        public DbSet<Advisor> Advisor { get; set; }
        public DbSet<Product> Product { get; set; }
    }
}