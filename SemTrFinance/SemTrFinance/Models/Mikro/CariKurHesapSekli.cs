using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SemTrFinance.Models.Mikro
{
    public class CariKurHesapSekli
    {
        public int CariKurHesapSekliId { get; set; }
        public string No { get; set; }
        public string Adi { get; set; }

        public virtual ICollection<Cari> Cari { get; set; }
    }
}