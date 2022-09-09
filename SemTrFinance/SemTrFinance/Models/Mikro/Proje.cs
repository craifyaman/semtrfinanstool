using SemTrFinance.Models.Mikro;
using System.Collections.Generic;

namespace SemTrFinance.Models.Mikro
{
    public class Proje
    {
        public int ProjeId { get; set; }
        public string Adi { get; set; }
        public string Kod { get; set; }

        public virtual ICollection<Fatura> Fatura { get; set; }
    }
}