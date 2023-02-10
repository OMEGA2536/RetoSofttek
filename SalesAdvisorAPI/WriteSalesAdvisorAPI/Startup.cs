using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Business.Logic.LogicImplementation;
using Business.Logic.LogicInterfaces;
using DataAccess;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using UnitsOfWork;

namespace WriteSalesAdvisorAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var dbContext = new DbContextOptionsBuilder<ApplicationDbContext>()
                .UseInMemoryDatabase("InMemoryDb")
                .Options;

            services.AddSingleton<IUnitOfWork>(serviceProvider => new UnitOfWork(new ApplicationDbContext(dbContext)));
            services.AddTransient<IAdvisorLogic, advisorLogic>();
            services.AddTransient<IProductLogic, productLogic>();
            services.AddCors(options =>
            {
                options.AddPolicy("CorsApi",
                    builder => builder.WithOrigins(Configuration["ServerCors"])
                        .AllowAnyHeader()
                        .AllowAnyMethod()
                        .AllowAnyOrigin());
            });
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_3_0);
            services.AddMvc(option => option.EnableEndpointRouting = false);
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = " Write Sales Advisor API SERVICES", Version = "v1" });
                c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
                {
                    Description = @"JWT Authorization header using the Bearer scheme. \r\n\r\n 
                        Enter 'Bearer' [space] and then your token in the text input below.
                        \r\n\r\nExample: 'Bearer 12345abcdef'",
                    Name = "Authorization",
                    In = ParameterLocation.Header,
                    Type = SecuritySchemeType.ApiKey,
                    Scheme = "Bearer"
                });
                services.AddCors(options =>
                {
                    options.AddPolicy("CorsApi",
                        builder => builder.WithOrigins(Configuration["ServerCors"])
                            .AllowAnyHeader()
                            .AllowAnyMethod());
                });

                c.AddSecurityRequirement(new OpenApiSecurityRequirement()
                   {
                        {
                            new OpenApiSecurityScheme
                            {
                            Reference = new OpenApiReference
                                {
                                Type = ReferenceType.SecurityScheme,
                                Id = "Bearer"
                                },
                                Scheme = "oauth2",
                                Name = "Bearer",
                                In = ParameterLocation.Header,

                            },
                            new List<string>()
                            }
                   });


                #region Agrega la documentación XML de todos los proyectos referenciados que lo generen
                var currentAssembly = Assembly.GetExecutingAssembly();
                var xmlDocs = currentAssembly.GetReferencedAssemblies()
                    .Union(new AssemblyName[] { currentAssembly.GetName() })
                    .Select(a => Path.Combine(Path.GetDirectoryName(currentAssembly.Location), $"{a.Name}.xml"))
                    .Where(File.Exists).ToArray();
                Array.ForEach(xmlDocs, (d) =>
                {
                    c.IncludeXmlComments(d);
                });
                #endregion

            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseDeveloperExceptionPage();
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseRouting();
            app.UseCors("CorsApi");
            app.UseAuthentication();
            app.UseStaticFiles();
            app.UseCookiePolicy();
            app.UseMvc();
            app.UseSwagger();
            app.UseSwaggerUI(c => { c.SwaggerEndpoint("/swagger/v1/swagger.json", "v1.0"); });
        }
    }
}
