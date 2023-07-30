using Core.Entities;
using Core.Models;

namespace Core.Interfaces;

public interface IOrderService
{
  IQueryable<Order> GetOrders();
  
  public Task<Order> AddOrUpdateOrderAsync(OrderModel orderModel);
}