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
        CustomerId = 1,
        City = "New York",
        Country = "USA",
        State = "NY",
        AddressLine1 = "123 Main Street",
        AddressLine2 = "asdasd"
      },
      new Address
      {
        Id = 2,
        CustomerId = 2,
        City = "New York",
        Country = "USA",
        State = "NY",
        AddressLine1 = "123 Main Street",
        AddressLine2 = "asd"
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
        OtherNotes = "asdasda"
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
      OtherNotes = "asdsa",
      OrderDate = new DateTime(2022,12,01)
      
    }
      );
  }
}