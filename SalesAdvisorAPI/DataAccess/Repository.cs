using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Models.Response;
using Repository;
using Repository.Interfaces;

namespace DataAccess
{
    public class Repository<T> : IRepository<T> where T : class, IEntity
    {
        private readonly ApplicationDbContext _dbContext;

        public Repository(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public virtual bool Delete(T entity)
        {
            var existingEntity = _dbContext.Set<T>().Find(entity.Id);
            if (existingEntity != null)
            {
                _dbContext.Set<T>().Remove(existingEntity);
                return _dbContext.SaveChanges() > 0;
            }
            return false;
        }

        public virtual bool Update(T entity)
        {
            var existingEntity = _dbContext.Set<T>().Find(entity.Id);
            if (existingEntity != null)
            {
                _dbContext.Entry(existingEntity).CurrentValues.SetValues(entity);
                return _dbContext.SaveChanges() > 0;
            }
            return false;
        }

        public virtual T GetById(Int64 id)
        {
            return _dbContext.Set<T>().Find(id);
        }
        public int Insert(T entity)
        {
            _dbContext.Set<T>().Add(entity);
            return _dbContext.SaveChanges();
        }

        public IEnumerable<T> GetList()
        {
            return _dbContext.Set<T>().ToList();
        }

        
    }
}