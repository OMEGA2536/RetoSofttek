using System;
using System.Collections.Generic;
using System.Text;
using Models.Entities;

namespace Business.Logic.LogicInterfaces
{
    public interface IAdvisorLogic
    {
        bool Update(Advisor obj);
        int Insert(Advisor obj);
        IEnumerable<Advisor> GetList();
        Advisor GetById(int id);
        bool Delete(Advisor obj);
        bool GenerateRandomData();
    }
}
