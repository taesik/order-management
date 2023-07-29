using Core.Entities;
using Core.Enums;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data;

public class OMAContext :DbContext
{
  public DbSet<Customer> Customers { get; set; }
  public DbSet<Order> Orders { get; set; }
  public DbSet<Address> Addresses { get; set; }
  
  public OMAContext(DbContextOptions options) : base(options)
  {
  }


  protected override void OnModelCreating(ModelBuilder modelBuilder)
  {
    modelBuilder.Entity<Customer>().HasData(
      new Customer
      {
        Id = 1,
        FirstName = "John",
        LastName = "Doe",
        ContactNumber = "123456789",
        IsDeleted = false,
        Email = "john@doe.com",
      },
      new Customer
      {
        Id = 2,
        FirstName = "Jane",
        LastName = "Doe",
        ContactNumber = "123456789",
        IsDeleted = false,
        Email = "jane@doe.com",
      }
      );

    modelBuilder.Entity<Address>().HasData(
      new Address
      {
        Id = 1,
        AddressLine1 = "123 Main Street",
        City = "New York",
        Country = "USA",
        State = "NY",
        AddressLine2 = "",
        CustomerId = 1
      },
      new Address
      {
        Id = 2,
        AddressLine1 = "123 Main Street",
        City = "New York",
        Country = "USA",
        State = "NY",
        AddressLine2 = "asd",
        CustomerId = 2
      }
    );
    modelBuilder.Entity<Order>().HasData(
      new Order
      {
        CustomerId = 1,
        Id = 1,
        Description = "Order 2",
        isDeleted = false,
        isDelivery = false,
        TotalAmount = 500,
        DepositAmount = 100,
        Status = Status.Draft,
        OrderDate = new DateTime(2022,11,10),
        OtherNotes = ""
      },
    new Order{
      CustomerId = 2,
      Id = 2,
      Description = "Order 2",
      isDeleted = false,
      isDelivery = false,
      TotalAmount = 500,
      DepositAmount = 100,
      Status = Status.Pending,
      OtherNotes = "",
      OrderDate = new DateTime(2022,12,1)
      
    }
      );
  }
}