using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Business.Logic.LogicInterfaces;
using Models;
using Models.Entities;

namespace ReadSalesAdvisorAPI.Controllers
{
    [Route("api/product")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private IProductLogic _productLogic;
        private ResponseDTO _ResponseDTO;

        public ProductController(IProductLogic productLogic)
        {
            _productLogic = productLogic;
        }

        [HttpGet]
        public IActionResult GetList()
        {
            _ResponseDTO = new ResponseDTO();
            try
            {
                return Ok(_ResponseDTO.Success(_ResponseDTO, _productLogic.GetList()));
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
                return Ok(_ResponseDTO.Success(_ResponseDTO, _productLogic.GetById(id)));
            }
            catch (Exception e)
            {
                return BadRequest(_ResponseDTO.Failed(_ResponseDTO, e.Message));
            }
        }

        [HttpPost]
        public IActionResult Insert([FromBody] Product obj)
        {
            _ResponseDTO = new ResponseDTO();
            try
            {
                return Ok(_ResponseDTO.Success(_ResponseDTO, _productLogic.Insert(obj)));
            }
            catch (Exception e)
            {
                return BadRequest(_ResponseDTO.Failed(_ResponseDTO, e.Message));
            }
        }
        [HttpPut]
        public IActionResult Update([FromBody] Product obj)
        {
            _ResponseDTO = new ResponseDTO();
            try
            {
                return Ok(_ResponseDTO.Success(_ResponseDTO, _productLogic.Update(obj)));
            }
            catch (Exception e)
            {
                return BadRequest(_ResponseDTO.Failed(_ResponseDTO, e.Message));
            }
        }

        [HttpDelete]
        public IActionResult Delete([FromBody] Product obj)
        {
            _ResponseDTO = new ResponseDTO();
            try
            {
                return Ok(_ResponseDTO.Success(_ResponseDTO, _productLogic.Delete(obj)));
            }
            catch (Exception e)
            {
                return BadRequest(_ResponseDTO.Failed(_ResponseDTO, e.Message));
            }
        }
    }
}
