using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Models;
using Models.Entities;

namespace SalesAdvisorAPI.Controllers
{
    [Route("api/access")]
    [ApiController]
    public class AccessController : ControllerBase
    {
        private ResponseDTO _ResponseDTO;
        private readonly string secretKey;
        private IConfiguration Configuration;
        public AccessController(IConfiguration configuration)
        {
            Configuration = configuration;
            secretKey = Configuration["Jwt:Key"];
        }
       
        [HttpPost]
        public IActionResult AuthenticateToken([FromBody] AuthenticationDTO obj)
        {
            _ResponseDTO = new ResponseDTO();
            try
            {
                return Ok(_ResponseDTO.Success(_ResponseDTO, Authenticate(obj)));
            }
            catch (Exception e)
            {
                return BadRequest(_ResponseDTO.Failed(_ResponseDTO, e.Message));
            }
        }

        private string Authenticate(AuthenticationDTO obj)
        {
            if (obj.username == "walter" && obj.password == "micodigo")
            {
                var tokenHandler = new JwtSecurityTokenHandler();
                var key = Encoding.ASCII.GetBytes(secretKey);
                var claims = new ClaimsIdentity();
                claims.AddClaim(new Claim(ClaimTypes.NameIdentifier, obj.username));

                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = claims,
                    Expires = DateTime.UtcNow.AddDays(1),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key),
                        SecurityAlgorithms.HmacSha256Signature)
                };
                var createdToken = tokenHandler.CreateToken(tokenDescriptor);
                string beare_token = tokenHandler.WriteToken(createdToken);

                return beare_token;
            }
            return null;
        }
    }
}
