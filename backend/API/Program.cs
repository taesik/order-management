using API.GraphQL;
using Core.Interfaces;
using GraphQL.Server.Ui.Voyager;
using Infrastructure.Data;
using Infrastructure.Services;
using Microsoft.EntityFrameworkCore;

var allowSpecificOrigins = "_allowSpecificOrigins";

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContextFactory<OMAContext>(options =>
  {
    options.UseSqlite(builder.Configuration["ConnectionStrings:DefaultConnection"]);
  }
);
builder.Services.AddScoped<ICustomerService,CustomerService>();
builder.Services.AddScoped<IOrderService, OrderService>();


//graphql
builder.Services
    .AddGraphQLServer()
    .AddQueryType<Query>()
    .AddMutationType<Mutation>()
    .AddFiltering();

//cors
builder.Services.AddCors(options =>
{
  options.AddPolicy(name:allowSpecificOrigins,
    policy =>
    {
      policy
        .AllowAnyHeader()
        .AllowAnyMethod()
        .AllowAnyOrigin();
    }
    );
});

var app = builder.Build();

app.UseCors(allowSpecificOrigins);
app.MapGraphQL();
app.UseGraphQLVoyager("/graphql-voyager", new VoyagerOptions{ GraphQLEndPoint = "/graphql" });

//migrate database
try
{
  var scope = app.Services.CreateScope();
  var context = scope.ServiceProvider.GetRequiredService<OMAContext>();
  context.Database.Migrate();
}
catch (Exception e)
{
  var logger = app.Services.GetRequiredService<ILogger<Program>>();
  logger.LogError(e, "An error occurred while migrating the database");
}

app.Run();
