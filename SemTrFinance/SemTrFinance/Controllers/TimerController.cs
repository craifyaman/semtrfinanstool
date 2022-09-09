using Newtonsoft.Json;
using RestSharp;
using SemTrFinance.Helper;
using SemTrFinance.Models.Mikro;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Globalization;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.Mvc;
using SemTrFinance;

namespace SemTrFinance.Controllers
{
    public class TimerController : Controller
    {
        //GET: Timer
        private Db db;
        public TimerController()
        {
            db = new Db();
        }
        public ActionResult Index()
        {

            return View();
        }

        public List<dynamic> YetkiControlActionList(string pre = "Menu", string nameSpace = "SemTrFinance.Controllers")
        {
            Assembly asm = Assembly.GetExecutingAssembly();
            var controlleractionlist = asm.GetTypes()
                    .Where(type => typeof(Controller).IsAssignableFrom(type) && type.Namespace == nameSpace)
                    .SelectMany(type => type.GetMethods(BindingFlags.Instance | BindingFlags.DeclaredOnly | BindingFlags.Public))
                    .Where(m => !m.GetCustomAttributes(typeof(System.Runtime.CompilerServices.CompilerGeneratedAttribute), true).Any())
                    .Select(x => new
                    {
                        Controller = x.DeclaringType.Name,
                        Action = x.Name,
                        ReturnType = x.ReturnType.Name,
                        Attributes = String.Join(",", x.GetCustomAttributes().Select(a => a.GetType().Name.Replace("Attribute", ""))),
                        Attribute = x.GetCustomAttributes().FirstOrDefault(f => f.GetType().Name == pre + "Attribute"),
                        NameSpace = nameSpace
                    })
                    .Where(x => x.Attributes.Contains(pre))
                    .Select(x => new
                    {
                        Parent = x.Attribute.GetType().GetProperty("Parent").GetValue(x.Attribute, null).ToString(),
                        Title = x.Attribute.GetType().GetProperty("Title").GetValue(x.Attribute, null).ToString(),
                        Icon = x.Attribute.GetType().GetProperty("Icon").GetValue(x.Attribute, null).ToString(),
                        Order = Convert.ToInt32(x.Attribute.GetType().GetProperty("Order").GetValue(x.Attribute, null).ToString()),
                        Url = x.Controller.Replace("Controller", "") + "/" + x.Action,

                    })
                    .OrderBy(x => x.Order).ToList<dynamic>();
            return controlleractionlist;


        }

        public void CariHareketTipi()
        {
            var client = new RestClient("http://89.207.13.56:400/api/Cari/HareketTipi");

            var request = new RestRequest();
            request.Method = Method.Get;
            var response = client.ExecuteAsync(request);
            dynamic r = JsonConvert.DeserializeObject(response.Result.Content);

            var list = new List<CariHareketTipi>();
            foreach (var item in r)
            {
                var no = item.No.ToString();
                var adi = item.Adi.ToString();

                list.Add(new CariHareketTipi
                {
                    Adi = adi,
                    No = no
                });
            }

            db.CariHareketTipi.AddRange(list);
            db.SaveChanges();


        }

        public void CariBaglantiTipi()
        {
            var client = new RestClient("http://89.207.13.56:400/api/Cari/BaglantiTipi");

            var request = new RestRequest();
            request.Method = Method.Get;
            var response = client.ExecuteAsync(request);
            dynamic r = JsonConvert.DeserializeObject(response.Result.Content);

            var list = new List<CariBaglantiTipi>();
            foreach (var item in r)
            {
                var no = item.No.ToString();
                var adi = item.Adi.ToString();

                list.Add(new CariBaglantiTipi
                {
                    Adi = adi,
                    No = no
                });
            }

            db.CariBaglantiTipi.AddRange(list);
            db.SaveChanges();


        }

        public void CariKurHesapSekli()
        {
            var client = new RestClient("http://89.207.13.56:400/api/Cari/KurHesapSekli");

            var request = new RestRequest();
            request.Method = Method.Get;
            var response = client.ExecuteAsync(request);
            dynamic r = JsonConvert.DeserializeObject(response.Result.Content);

            var list = new List<CariKurHesapSekli>();
            foreach (var item in r)
            {
                var no = item.No.ToString();
                var adi = item.Adi.ToString();

                list.Add(new CariKurHesapSekli
                {
                    Adi = adi,
                    No = no
                });
            }

            db.CariKurHesapSekli.AddRange(list);
            db.SaveChanges();


        }

        public void Cari()
        {
            var cariHareketTipi = db.CariHareketTipi.ToList();
            var client = new RestClient("http://89.207.13.56:400/api/Cari/KodListe");

            var request = new RestRequest();
            request.Method = Method.Get;
            var response = client.ExecuteAsync(request);
            dynamic r = JsonConvert.DeserializeObject(response.Result.Content);

            var list = new List<Cari>();
            foreach (var item in r)
            {
                var cariKod = item.CariKod.ToString();

                client = new RestClient($"http://89.207.13.56:400/api/Cari/Liste?cariKod={cariKod}");

                request = new RestRequest();
                request.Method = Method.Get;
                response = client.ExecuteAsync(request);
                dynamic cariler = JsonConvert.DeserializeObject(response.Result.Content);
                foreach (var cari in cariler)
                {
                    try
                    {
                        var c = new Cari();
                        c.AnaCariKod = cari.AnaCariKod.ToString();
                        c.CariGuid = new Guid(cari.CariGuid.ToString());
                        var hId = cari.CariHareketTipi.ToString();
                        c.CariHareketTipiId = cariHareketTipi.FirstOrDefault(f => f.No == hId).CariHareketTipiId;
                        c.CariKod = cari.CariKod.ToString();
                        c.CepTel = cari.CepTel.ToString();
                        c.DovizCinsi = Convert.ToInt32(cari.DovizCinsi.ToString());
                        c.DovizCinsi1 = Convert.ToInt32(cari.DovizCinsi1.ToString());
                        c.DovizCinsi2 = Convert.ToInt32(cari.DovizCinsi2.ToString());
                        c.Eposta = cari.Eposta.ToString();
                        c.GrupKod = cari.GrupKod.ToString();

                        c.KurHesapSekli = Convert.ToInt32(cari.KurHesapSekli?.ToString());
                        c.MuhasebeKod = cari.MuhasebeKod.ToString();
                        c.MuhasebeKod1 = cari.MuhasebeKod1.ToString();
                        c.MuhasebeKod2 = cari.MuhasebeKod2?.ToString();
                        c.OdemePlanNo = Convert.ToInt32(cari.OdemePlanNo.ToString());

                        c.Unvan = cari.Unvan.ToString();
                        c.VergiDairesi = cari.VergiDairesi.ToString();
                        c.VergiNo = cari.VergiNo.ToString();

                        c.OlusturulmaTarihiString = cari.OlusturulmaTarihi.ToString();
                        c.GüncellemeTarihiString = cari.GüncellemeTarihi.ToString();
                        list.Add(c);
                    }
                    catch (Exception ex)
                    {
                        var a = ex;

                        continue;
                    }

                }


            }

            db.Cari.AddRange(list);
            db.SaveChanges();
        }

        public void StokCinsi()
        {
            var client = new RestClient("http://89.207.13.56:400/api/Stok/StokCinsi");

            var request = new RestRequest();
            request.Method = Method.Get;
            var response = client.ExecuteAsync(request);
            dynamic r = JsonConvert.DeserializeObject(response.Result.Content);

            var list = new List<StokCinsi>();
            foreach (var item in r)
            {
                var no = item.No.ToString();
                var adi = item.Adi.ToString();

                list.Add(new StokCinsi
                {
                    Adi = adi,
                    No = no
                });
            }

            db.StokCinsi.AddRange(list);
            db.SaveChanges();


        }

        public void Stok()
        {
            var stokCinsi = db.StokCinsi.ToList();
            var client = new RestClient("http://89.207.13.56:400/api/Stok/Liste");

            var request = new RestRequest();
            request.Method = Method.Get;
            var response = client.ExecuteAsync(request);
            dynamic stoklar = JsonConvert.DeserializeObject(response.Result.Content);

            var list = new List<Stok>();
            foreach (var item in stoklar)
            {
                try
                {
                    var stok = new Stok();
                    stok.BirimAdi = item.BirimAdi.ToString();
                    stok.BirimAgirlik = item.BirimAgirlik.ToString();
                    stok.BirimKatsayi = item.BirimKatsayi.ToString();
                    stok.DovizNo = item.DovizNo.ToString();
                    stok.StokAdi = item.StokAdi.ToString();
                    var sCins = Convert.ToInt32(item.StokCinsi.ToString());
                    stok.StokCinsiId = stokCinsi.FirstOrDefault(i => i.No == item.StokCinsi.ToString())?.StokCinsiId;
                    stok.StokHesapKodu = item.StokHesapKodu.ToString();
                    stok.StokIadeKodu = item.StokIadeKodu.ToString();
                    stok.StokKisaAdi = item.StokKisaAdi.ToString();
                    stok.StokKodu = item.StokKodu.ToString();
                    stok.StokMuhasebeGrupKodu = item.StokMuhasebeGrupKodu.ToString();
                    stok.StokSatisIadeKodu = item.StokSatisIadeKodu.ToString();
                    stok.StokSatisIskontoKodu = item.StokSatisIskontoKodu.ToString();
                    stok.StokSatisKodu = item.StokSatisKodu.ToString();
                    list.Add(stok);
                }
                catch (Exception ex)
                {
                    var a = ex;
                    continue;
                }

            }

            db.Stok.AddRange(list);
            db.SaveChanges();
        }

        public void SorumlulukMerkezi()
        {
            var client = new RestClient("http://89.207.13.56:400/api/SorumlulukMerkezi/Liste");

            var request = new RestRequest();
            request.Method = Method.Get;
            var response = client.ExecuteAsync(request);
            dynamic r = JsonConvert.DeserializeObject(response.Result.Content);

            var list = new List<SorumlulukMerkezi>();
            foreach (var item in r)
            {
                var kod = item.Kod.ToString();
                var adi = item.Adi.ToString();

                list.Add(new SorumlulukMerkezi
                {
                    Adi = adi,
                    Kod = kod
                });
            }

            db.SorumlulukMerkezi.AddRange(list);
            db.SaveChanges();


        }

        public void Proje()
        {
            var client = new RestClient("http://89.207.13.56:400/api/Proje/Liste");

            var request = new RestRequest();
            request.Method = Method.Get;
            var response = client.ExecuteAsync(request);
            dynamic r = JsonConvert.DeserializeObject(response.Result.Content);

            var list = new List<Proje>();
            foreach (var item in r)
            {
                var kod = item.No.ToString();
                var adi = item.Adi.ToString();

                list.Add(new Proje
                {
                    Adi = adi,
                    Kod = kod
                });
            }

            db.Proje.AddRange(list);
            db.SaveChanges();


        }

        public void Fatura()
        {
            var cariler = db.Cari.Include("Fatura").Take(10).ToList();
            var stoklar = db.Stok.ToList();

            var evrakTipi = db.EvrakTipi.ToList();
            var hareketTipi = db.HareketTipi.ToList();
            var hareketCinsi = db.HareketCinsi.ToList();
            var normalIade = db.NormalIade.ToList();
            var cariPozisyonu = db.CariPozisyonu.ToList();
            var disTicaretTuru = db.DisTicaretTuru.ToList();
            var cariCins = db.CariCins.ToList();
            var eBelgeCins = db.EBelgeCins.ToList();
            var faturaBelgeTuru = db.FaturaBelgeTuru.ToList();

            var eTipleri = new List<int> { 0, 63 };
            foreach (var cari in cariler)
            {
                foreach (var etip in eTipleri)
                {
                    var baslangic = new DateTime(DateTime.Now.Year, 1, 1);
                    if (cari.Fatura.Count()>0)
                    {
                        var gTarihi = cari.Fatura?.Max(i => i.GüncellemeTarihi);
                        var oTarihi = cari.Fatura?.Max(i => i.OlusturulmaTarihi);
                        baslangic = DateTime.Compare(oTarihi.Value, gTarihi) > 0 ? oTarihi : gTarihi;
                    } 
                    var list = new List<Fatura>();
                    var client = new RestClient($"http://89.207.13.56:400/api/CariHesapHarekleri/Fatura?cariKod={cari.CariKod}&evrakTip={etip}");

                    var request = new RestRequest();
                    request.Method = Method.Get;
                    var response = client.ExecuteAsync(request);
                    dynamic faturalar = JsonConvert.DeserializeObject(response.Result.Content);
                    foreach (var f in faturalar)
                    {
                        var fatura = new Fatura();
                        fatura.Aciklama = f.Aciklama.ToString();
                        fatura.AlternatifDovizKuru = Convert.ToDecimal(f.AlternatifDovizKuru.ToString().Replace(".", ","));
                        fatura.AraToplam = Convert.ToDecimal(f.AraToplam.ToString().Replace(".", ","));
                        fatura.BelgeNo = f.BelgeNo.ToString();
                        string belgeTarihStr = f.BelgeTarih.ToString();
                        fatura.BelgeTarih = belgeTarihStr.ConvertToDateTimeAmPm();
                        fatura.CanDolarKur = Convert.ToDecimal(f.CanDolarKur.ToString().Replace(".", ","));
                        string cCins = f.CariCins.ToString();
                        fatura.CariCinsId = cariCins.FirstOrDefault(i => i.No == cCins)?.CariCinsId;
                        fatura.CariId = cari.CariId;
                        int cPoz = Convert.ToInt32(f.CariCins.ToString());


                        fatura.ChaGuid = new Guid(f.ChaGuid.ToString());
                        string dTicTur = f.DisTicaretTuru.ToString();
                        fatura.DisTicaretTuruId = disTicaretTuru.FirstOrDefault(i => i.No == dTicTur)?.DisTicaretTuruId;

                        fatura.DolarKur = Convert.ToDecimal(f.DolarKur.ToString().Replace(".", ","));
                        string eIsTur = f.EIslemTuru.ToString();

                        fatura.EuroKur = Convert.ToDecimal(f.EuroKur.ToString().Replace(".", ","));
                        fatura.EvrakSeriNo = f.EvrakSeriNo.ToString();
                        fatura.EvrakSiraNo = f.EvrakSiraNo.ToString();
                        string evTipi = f.EvrakTipi.ToString();
                        fatura.EvrakTipiId = evrakTipi.FirstOrDefault(i => i.No == evTipi)?.EvrakTipiId;

                        var fatBelTuru = f.FaturaBelgeTuru.ToString();
                        fatura.FaturaBelgeTuruId = faturaBelgeTuru.FirstOrDefault(i => i.No == fatBelTuru)?.FaturaBelgeTuruId;

                        fatura.FaturaUid = f.FaturaUid.ToString();
                        fatura.FirmaNo = f.FirmaNo.ToString();
                        fatura.FisSiraNo = f.FisSiraNo.ToString();

                        string fisTarih = f.FisTarih.ToString();
                        fatura.FisTarih = fisTarih.ConvertToDateTimeAmPm();

                        string güncellemeTarihi = f.GüncellemeTarihi.ToString();
                        fatura.GüncellemeTarihi = güncellemeTarihi.ConvertToDateTimeAmPm();

                        var harCins = f.HareketCinsi.ToString();
                        fatura.HareketCinsiId = hareketCinsi.FirstOrDefault(i => i.No == harCins)?.HareketCinsiId;

                        fatura.HareketMeblagOrijinalDoviz = Convert.ToDecimal(f.HareketMeblagOrijinalDoviz.ToString().Replace(".", ","));

                        string hareketTarihi = f.HareketTarihi.ToString();
                        fatura.HareketTarihi = hareketTarihi.ConvertToDateTimeAmPm();

                        var harTip = f.HareketTipi.ToString();
                        fatura.HareketTipiId = hareketTipi.FirstOrDefault(i => i.No == harTip)?.HareketTipiId;

                        fatura.Miktar = Convert.ToDecimal(f.Miktar.ToString().Replace(".", ","));

                        var nlIade = f.NormalIade.ToString();
                        fatura.NormalIadeId = normalIade.FirstOrDefault(i => i.No == nlIade)?.NormalIadeId;


                        string olusturulmaTarihi = f.OlusturulmaTarihi.ToString();
                        fatura.OlusturulmaTarihi = olusturulmaTarihi.ConvertToDateTimeAmPm();

                        fatura.OrijinalDovizCisi = f.OrijinalDovizCisi.ToString();
                        fatura.OrjinalDovizKuru = Convert.ToDecimal(f.OrjinalDovizKuru.ToString().Replace(".", ","));

                        fatura.OzelAlan1 = f.OzelAlan1.ToString();
                        fatura.OzelAlan2 = f.OzelAlan2.ToString();
                        fatura.OzelAlan3 = f.OzelAlan3.ToString();

                        fatura.PoundKur = Convert.ToDecimal(f.PoundKur.ToString().Replace(".", ","));
                        fatura.ProjeKodu = f.ProjeKodu.ToString();
                        fatura.SorumlulukMerkeziKodu = f.SorumlulukMerkeziKodu.ToString();
                        fatura.Subeno = f.subeno.ToString();
                        fatura.TevkifatToplam = Convert.ToDecimal(f.TevkifatToplam.ToString().Replace(".", ","));

                        var satirlar = new List<FaturaSatir>();

                        //satış faturası
                        if (fatura.EvrakTipiId == 63)
                        {
                            foreach (var satir in f.satirList)
                            {
                                var s = new FaturaSatir();
                                var satirGuid = satir.sth_Guid.ToString();
                                var stokHareketTip = satir.sth_tip.ToString();
                                var stokHareketCins = satir.sth_tip.ToString();
                                var stokHareketEvrakTipi = satir.sth_tip.ToString();
                                var satirNo = satir.sth_satirno.ToString();
                                string stokKod = satir.sth_stok_kod.ToString();
                                var miktar = Convert.ToDecimal(satir.sth_miktar.ToString().Replace(".", ","));
                                var tutar = Convert.ToDecimal(satir.sth_tutar.ToString().Replace(".", ","));
                                var vergi = Convert.ToDecimal(satir.sth_vergi.ToString().Replace(".", ","));

                                var stokId = stoklar.FirstOrDefault(i => i.StokKodu == stokKod)?.StokId;

                                s.Guid = satirGuid;
                                s.Miktar = miktar;
                                s.StokId = stokId;
                                s.Tutar = tutar;
                                s.Vergi = vergi;

                                satirlar.Add(s);
                            }
                        }

                        fatura.FaturaSatir = satirlar;

                        list.Add(fatura);
                    }

                    db.Fatura.AddRange(list);
                    db.SaveChanges();
                }
            }



        }

        public void Ekstre()
        {
            var cariler = db.Cari.Take(10).ToList();


            var evrakTipi = db.EvrakTipi.ToList();
            var hareketTipi = db.HareketTipi.ToList();
            var hareketCinsi = db.HareketCinsi.ToList();

            var list = new List<Ekstre>();
            foreach (var cari in cariler)
            {
                var client = new RestClient($"http://89.207.13.56:400/api/CariHesapHarekleri/Ekstre?cariKod={cari.CariKod}");

                var request = new RestRequest();
                request.Method = Method.Get;
                var response = client.ExecuteAsync(request);
                dynamic ekstreler = JsonConvert.DeserializeObject(response.Result.Content);
                foreach (var f in ekstreler)
                {
                    var ekstre = new Ekstre();

                    ekstre.ChaGuid = new Guid(f.ChaGuid.ToString());
                    ekstre.FaturaUid = f.FaturaUid.ToString();
                    ekstre.CariId = cari.CariId;

                    ekstre.EvrakSeriNo = f.EvrakSeriNo.ToString();
                    ekstre.EvrakSiraNo = f.EvrakSiraNo.ToString();

                    var harTip = f.HareketTipi.ToString();
                    ekstre.HareketTipiId = hareketTipi.FirstOrDefault(i => i.No == harTip)?.HareketTipiId;

                    string evTipi = f.EvrakTipi.ToString();
                    ekstre.EvrakTipiId = evrakTipi.FirstOrDefault(i => i.No == evTipi)?.EvrakTipiId;

                    var harCins = f.HareketCinsi.ToString();
                    ekstre.HareketCinsiId = hareketCinsi.FirstOrDefault(i => i.No == harCins)?.HareketCinsiId;

                    ekstre.Tutar = Convert.ToDecimal(f.Tutar.ToString().Replace(".", ","));

                    ekstre.BelgeNo = f.BelgeNo.ToString();

                    ekstre.DolarKur = Convert.ToDecimal(f.DolarKur.ToString().Replace(".", ","));
                    ekstre.PoundKur = Convert.ToDecimal(f.PoundKur.ToString().Replace(".", ","));
                    ekstre.CanDolarKur = Convert.ToDecimal(f.CanDolarKur.ToString().Replace(".", ","));
                    ekstre.EuroKur = Convert.ToDecimal(f.EuroKur.ToString().Replace(".", ","));

                    ekstre.OrijinalDovizCisi = f.OrijinalDovizCisi.ToString();
                    ekstre.OrijinalDovizSembolu = f.OrijinalDovizSembolu.ToString();

                    string güncellemeTarihi = f.GuncellemeTarihi.ToString();
                    ekstre.GüncellemeTarihi = güncellemeTarihi.ConvertToDateTimeAmPm();


                    string islemTarihi = f.IslemTarihi.ToString();
                    ekstre.IslemTarihi = islemTarihi.ConvertToDateTimeAmPm();

                    string olusturulmaTarihi = f.OlusturulmaTarihi.ToString();
                    ekstre.OlusturulmaTarihi = olusturulmaTarihi.ConvertToDateTimeAmPm();

                    ekstre.Vade = f.Vade.ToString();

                    list.Add(ekstre);
                }
            }


            db.Ekstre.AddRange(list);
            db.SaveChanges();
        }
    }
}