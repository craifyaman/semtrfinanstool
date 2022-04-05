using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SemTrFinance.Models.Mikro
{
    public class Cari
    {
        public int CariId { get; set; }
        public Guid CariGuid { get; set; }
        public string GrupKod { get; set; }
        public string CariKod { get; set; }
        public string AnaCariKod { get; set; }
        public string Unvan { get; set; }
        public int? CariHareketTipiId { get; set; }
        public CariHareketTipi CariHareketTipi{ get; set; }
        public string MuhasebeKod { get; set; }
        public string MuhasebeKod1 { get; set; }
        public string MuhasebeKod2 { get; set; }
        public int DovizCinsi { get; set; }
        public int DovizCinsi1 { get; set; }
        public int DovizCinsi2 { get; set; }
        public int KurHesapSekli { get; set; }
        public string VergiDairesi { get; set; }
        public string VergiNo { get; set; }
        public int OdemePlanNo { get; set; }
        public string TemsilciKod { get; set; }
        public string Eposta { get; set; }
        public string CepTel { get; set; }
        public string OlusturulmaTarihiString { get; set; }
        public DateTime? OlusturulmaTarihi { get; set; }
        public string GüncellemeTarihiString { get; set; }
        public DateTime? GüncellemeTarihi { get; set; }
        public virtual ICollection<Fatura> Fatura { get; set; }

    }
}