using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SemTrFinance.Models.Mikro
{
    public class Stok
    {
        public int StokId { get; set; }
        public int? StokCinsiId { get; set; }
        public StokCinsi StokCinsi { get; set; }
        public string StokKodu { get; set; }
        public string StokAdi { get; set; }
        public string StokKisaAdi { get; set; }
        public string DovizNo { get; set; }
        public string BirimAdi { get; set; }
        public string BirimKatsayi { get; set; }
        public string BirimAgirlik { get; set; }
        public string StokHesapKodu { get; set; }
        public string StokIadeKodu { get; set; }
        public string StokSatisKodu { get; set; }
        public string StokSatisIadeKodu { get; set; }
        public string StokSatisIskontoKodu { get; set; }
        public string StokMuhasebeGrupKodu { get; set; }
    }
}