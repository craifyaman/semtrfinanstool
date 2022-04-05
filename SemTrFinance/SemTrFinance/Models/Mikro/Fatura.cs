using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace SemTrFinance.Models.Mikro
{
    public class Fatura
    {
        public int FaturaId { get; set; }
        public int CariId { get; set; }
        public Cari Cari { get; set; }

        [NotMapped]
        public string CariKod { get; set; }
        public int? EvrakTipiId { get; set; }
        public EvrakTipi EvrakTipi { get; set; }
        public int? HareketTipiId { get; set; }
        public HareketTipi HareketTipi { get; set; }
        public int? HareketCinsiId { get; set; }
        public HareketCinsi HareketCinsi { get; set; }
        public int? NormalIadeId { get; set; }
        public NormalIade NormalIade { get; set; }
        public int? CariPozisyonuId { get; set; }
        public CariPozisyonu CariPozisyonu { get; set; }
        public int? DisTicaretTuruId { get; set; }
        public DisTicaretTuru DisTicaretTuru { get; set; }
        public int? CariCinsId { get; set; }
        public CariCins CariCins { get; set; }
        public int? EBelgeCinsId { get; set; }
        public EBelgeCins EBelgeCins { get; set; }
        public int? FaturaBelgeTuruId { get; set; }
        public FaturaBelgeTuru FaturaBelgeTuru { get; set; }
        public Guid ChaGuid { get; set; }
        public string OzelAlan1 { get; set; }
        public string OzelAlan2 { get; set; }
        public string OzelAlan3 { get; set; }
        public string FirmaNo { get; set; }
        public string Subeno { get; set; }
        public string EvrakSeriNo { get; set; }
        public string EvrakSiraNo { get; set; }
        public string BelgeNo { get; set; }
        public DateTime? HareketTarihi{ get; set; }
        public DateTime? BelgeTarih{ get; set; }
        public string Aciklama { get; set; }
        public string ProjeKodu { get; set; }
        public string OrijinalDovizCisi { get; set; }
        public decimal OrjinalDovizKuru { get; set; }
        public decimal AlternatifDovizKuru { get; set; }
        public string SorumlulukMerkeziKodu { get; set; }
        public decimal Miktar { get; set; }
        public decimal HareketMeblagOrijinalDoviz { get; set; }
        public decimal AraToplam { get; set; }
        public decimal TevkifatToplam { get; set; }
        public int Vade { get; set; }
        public DateTime? FisTarih { get; set; }
        public string FisSiraNo { get; set; }
        public int EIslemTuru { get; set; }
        public string FaturaUid { get; set; }
        public DateTime? GüncellemeTarihi { get; set; }
        public DateTime? OlusturulmaTarihi { get; set; }
        public decimal DolarKur { get; set; }
        public decimal EuroKur { get; set; }
        public decimal PoundKur { get; set; }
        public decimal CanDolarKur { get; set; }
        public virtual ICollection<FaturaSatir> FaturaSatir { get; set; }

    }
}