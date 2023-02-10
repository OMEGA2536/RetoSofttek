using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Business.Logic.LogicInterfaces;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Models;
using Models.Entities;

namespace ReadSalesAdvisorAPI.Controllers
{
    [Route("api/advisor")]
    [ApiController]
    //[Authorize]

    public class AdvisorController : ControllerBase
    {
        private IAdvisorLogic _advisorLogic;
        private ResponseDTO _ResponseDTO;

        public AdvisorController(IAdvisorLogic advisorLogic)
        {
            _advisorLogic = advisorLogic;
        }

        [HttpGet]
        public IActionResult GetList()
        {
            _ResponseDTO = new ResponseDTO();
            try
            {
                return Ok(_ResponseDTO.Success(_ResponseDTO, _advisorLogic.GetList()));
            }
            catch (Exception e)
            {
                return BadRequest(_ResponseDTO.Failed(_ResponseDTO, e.Message));
            }
        }

        [HttpGet]
        [Route("GenerateRandomData")]
        public IActionResult GenerateRandomData()
        {
            _ResponseDTO = new ResponseDTO();
            try
            {
                return Ok(_ResponseDTO.Success(_ResponseDTO, _advisorLogic.GenerateRandomData()));
            }
            catch (Exception e)
            {
                return BadRequest(_ResponseDTO.Failed(_ResponseDTO, e.Message));
            }
        }

        [HttpGet]
        [Route("{id:int}")]
        public IActionResult GetById(int id)
        {
            _ResponseDTO = new ResponseDTO();
            try
            {
                return Ok(_ResponseDTO.Success(_ResponseDTO, _advisorLogic.GetById(id)));
            }
            catch (Exception e)
            {
                return BadRequest(_ResponseDTO.Failed(_ResponseDTO, e.Message));
            }
        }

        [HttpPost]
        public IActionResult Insert([FromBody] Advisor obj)
        {
            _ResponseDTO = new ResponseDTO();
            try
            {
                return Ok(_ResponseDTO.Success(_ResponseDTO, _advisorLogic.Insert(obj)));
            }
            catch (Exception e)
            {
                return BadRequest(_ResponseDTO.Failed(_ResponseDTO, e.Message));
            }
        }

        [HttpPut]
        public IActionResult Update([FromBody] Advisor obj)
        {
            _ResponseDTO = new ResponseDTO();
            try
            {
                return Ok(_ResponseDTO.Success(_ResponseDTO, _advisorLogic.Update(obj)));
            }
            catch (Exception e)
            {
                return BadRequest(_ResponseDTO.Failed(_ResponseDTO, e.Message));
            }
        }

        [HttpDelete]
        public IActionResult Delete([FromBody] Advisor obj)
        {
            _ResponseDTO = new ResponseDTO();
            try
            {
                return Ok(_ResponseDTO.Success(_ResponseDTO, _advisorLogic.Delete(obj)));
            }
            catch (Exception e)
            {
                return BadRequest(_ResponseDTO.Failed(_ResponseDTO, e.Message));
            }
        }
    }
}
