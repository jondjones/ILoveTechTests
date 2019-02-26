using PaymentServices.Types;

namespace PaymentServices.Data
{
    public class AccountDataStore
    {
        public Account GetAccount(string accountNumber)
        {
            return new Account();
        }

        public void UpdateAccount(Account account)
        {
        }
    }
}
