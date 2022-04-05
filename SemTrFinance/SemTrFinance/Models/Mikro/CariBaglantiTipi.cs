using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SemTrFinance.Models.Mikro
{
    public class CariBaglantiTipi
    {
        public int CariBaglantiTipiId { get; set; }
        public string No { get; set; }
        public string Adi { get; set; }

        public virtual ICollection<Cari> Cari{ get; set; }
    }
}