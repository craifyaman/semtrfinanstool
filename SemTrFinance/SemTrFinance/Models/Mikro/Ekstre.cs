using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace SemTrFinance.Models.Mikro
{
    public class Ekstre
    {
        public int EkstreId { get; set; }

        public string FaturaUid { get; set; }
        public int? FaturaId { get; set; }
        public Fatura Fatura { get; set; }
        public int CariId { get; set; }
        public Cari Cari { get; set; }
        public Guid ChaGuid { get; set; }
        public int? EvrakTipiId { get; set; }
        public EvrakTipi EvrakTipi { get; set; }
        public int? HareketTipiId { get; set; }
        public HareketTipi HareketTipi { get; set; }
        public int? HareketCinsiId { get; set; }
        public HareketCinsi HareketCinsi { get; set; }
        public string EvrakSeriNo { get; set; }
        public string EvrakSiraNo { get; set; }
        public string BelgeNo { get; set; }
        public decimal Tutar { get; set; }
        public decimal DolarKur { get; set; }
        public decimal EuroKur { get; set; }
        public decimal PoundKur { get; set; }
        public decimal CanDolarKur { get; set; }
        public string OrijinalDovizCisi { get; set; }
        public decimal OrjinalDovizKuru { get; set; }

        public string Vade { get; set; }
        public DateTime? GüncellemeTarihi { get; set; }
        public DateTime? OlusturulmaTarihi { get; set; }
        public DateTime? IslemTarihi { get; set; }
        public string OrijinalDovizSembolu { get; internal set; }
    }
}