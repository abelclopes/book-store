using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Identity.Core;
using Microsoft.AspNetCore.Authorization;

using Api.Repository;
using Api.Services;

using Domain;
using Domain.Helpers;
using Domain.Interface;

using Api.Model;

namespace Api.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class UserInfoController : BaseController
    {

        private readonly ILogger<UserInfoController> _logger;
        
        public UserInfoController(IContext context, ILogger<UserInfoController> logger)
        : base(context)
        {
            _logger = logger;
        }

        [HttpGet]
        [Authorize]
        public UserInfo GetInfo()
        {
            return new UserInfo()
            {
                Id = this.User.GetId(),
                Claims = this.User.Claims.ToDictionary(claim => claim.Type, claim => claim.Value)
            };
        }

     }
}
