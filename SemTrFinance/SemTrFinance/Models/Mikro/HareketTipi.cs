using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SemTrFinance.Models.Mikro
{
    public class HareketTipi
    {
        public int HareketTipiId { get; set; }
        public string No { get; set; }
        public string Adi { get; set; }
        public virtual ICollection<Fatura> Fatura { get; set; }

    }
}