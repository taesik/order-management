using Core.Entities;
using Core.Interfaces;
using Core.Models;

namespace API.GraphQL;

public class Mutation
{
  public async Task<Customer> AddOrUpdateCustomer(
    [Service] ICustomerService customerService,
    CustomerModel customer)
  {
    return await customerService.AddOrUpdateCustomerAsync(customer);
  }
  
  public async Task<Order> AddOrUpdateOrder(
    [Service] IOrderService orderService,
    OrderModel order)
  {
    return await orderService.AddOrUpdateOrderAsync(order);
  }
  
  public async Task<bool> DeleteCustomer(
    [Service] ICustomerService customerService,
    int customerid)
  {
    return await customerService.DeleteCustomerAsync(customerid);
  }

  public async Task<bool> DeleteOrder(
    [Service] IOrderService orderService,
    int orderid)
  {
    return await orderService.DeleteOrderAsync(orderid);
  }
}