using PaymentServices.Types;

namespace PaymentServices.Data
{
    public class BackupAccountDataStore
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
