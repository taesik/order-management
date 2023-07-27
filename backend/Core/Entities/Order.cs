using Core.Enums;

namespace Core.Entities;

public class Order {
  public int Id { get; set; }
  public int CustomerId { get; set; }
  public DateTime OrderDate { get; set; }
  public string Description { get; set; }
  public decimal TotalAmount { get; set; }
  public decimal DepositAmount { get; set; }
  public int isDelivery { get; set; }
  public Status Status { get; set; }
  public string OtherNotes { get; set; }
  public int isDeleted { get; set; }
  public Customer Customer { get; set; }
}