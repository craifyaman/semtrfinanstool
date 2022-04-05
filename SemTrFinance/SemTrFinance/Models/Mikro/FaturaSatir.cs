using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace SemTrFinance.Models.Mikro
{
    public class FaturaSatir
    {
        public int FaturaSatirId { get; set; }

        public int FaturaId { get; set; }
        public Fatura Fatura { get; set; }
        public int? StokId{ get; set; }
        public Stok Stok { get; set; }
        public string Guid{ get; set; }
        public decimal Miktar { get; set; }
        public decimal Tutar { get; set; }
        public decimal Vergi { get; set; }


    }
}