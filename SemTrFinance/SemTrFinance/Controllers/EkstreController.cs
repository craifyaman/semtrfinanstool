﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Linq.Dynamic;
using System.Reflection;
using System.Web;
using System.Web.Mvc;
using SemTrFinance.Custom;
using SemTrFinance.Models;
using SemTrFinance.Models.Mikro;

namespace SemTrFinance.Controllers
{

    public class EkstreController : BaseController
    {
        // GET: Cari
        [Menu("Ekstre Listesi", "flaticon-users", "Ekstre", 0, 2)]
        public ActionResult Index()
        {
            return View();
        }

        [Yetki("Ekstre Listesi Görüntüle", "Fatura")]
        public JsonResult Liste()
        {
            //kabasını aldır
            var dtModel = new DataTableModel<dynamic>();
            var dtMeta = new DataTableMeta();

            dtMeta.field = Request.Form["sort[field]"];
            dtMeta.sort = Request.Form["sort[sort]"];

            dtMeta.page = Convert.ToInt32(Request.Form["pagination[page]"]);
            dtMeta.perpage = Convert.ToInt32(Request.Form["pagination[perpage]"]);

            IQueryable<Ekstre> model = null;
            model = Db.Ekstre
                .Include("EvrakTipi")
                .Include("HareketTipi")
                .Include("HareketCinsi")
                .Include("Cari")
                .Include("FaturaBelgeTuru")
                .AsQueryable();

            var count = model.Count();
            dtMeta.total = count;
            dtMeta.pages = dtMeta.total / dtMeta.perpage + 1;

            //Filtre
            if (!string.IsNullOrEmpty(Request.Form["query[searchQuery]"]))
            {
                var searchQuery = Request.Form["query[searchQuery]"].ToString();
                model = model.Where(i => i.Cari.Unvan.ToLower().Contains(searchQuery.ToLower()));
            }
            //Filtre
            //if (!string.IsNullOrEmpty(Request.Form["query[departman]"]))
            //{
            //    var departman = Convert.ToInt32(Request.Form["query[departman]"]);
            //    model = model.Where(i => i.DepartmanId == departman);
            //}
            //Filtre


            //sırala
            try
            {
                model = model.OrderBy(dtMeta.field + " " + dtMeta.sort);
            }
            catch (Exception)
            {

                model = model.OrderBy("FaturaId Desc");
            }
            //sayfala
            model = model.Skip((dtMeta.page - 1) * dtMeta.perpage).Take(dtMeta.perpage);

            //dto yap burda
            //serialize da sıkıntı çıkmasın
            var dto = model.Select(i => new
            {
                Id = i.EkstreId,
                Cari = i.Cari.Unvan,
                EvrakTipi = i.EvrakTipi.Adi,
                HareketTipi = i.HareketTipi.Adi,
                HareketCinsi = i.HareketCinsi.Adi,
                EvrakSeriNo = i.EvrakSeriNo,
                EvrakSiraNo = i.EvrakSiraNo,
                BelgeNo = i.BelgeNo,
                Tutar = i.Tutar,
                //Tarih=i.IslemTarihi.Value.ToShortDateString(),
                OrijinalDovizSembolu = i.OrijinalDovizSembolu,
                OrijinalDovizKuru = i.OrjinalDovizKuru,
                Vade = i.Vade.ToString(),
                DolarKur = i.DolarKur.ToString(),
                EuroKur = i.EuroKur.ToString(),
                PoundKur = i.PoundKur.ToString(),





            }).ToList<dynamic>();

            dtModel.meta = dtMeta;
            dtModel.data = dto;
            return Json(dtModel);

        }

        public PartialViewResult FilterForm()
        {
            return PartialView();
        }

        [Yetki("Personel Detay Sayfası Görüntüle", "Personel")]
        public ActionResult Detay(int id)
        {
            var model = Db.Personel
                .Include("PersonelTip")
                .Include("Departman")
                .FirstOrDefault(i => i.PersonelId == id);
            return View(model);
        }

        public PartialViewResult Menu(int id)
        {
            return PartialView(Db.Personel.Find(id));
        }

        public PartialViewResult PersonelDetayForm(int id)
        {
            var model = Db.Personel
               .Include("PersonelTip")
               .Include("Departman")
               .FirstOrDefault(i => i.PersonelId == id);

            return PartialView(model);
        }
        public PartialViewResult ParoloGuncelleForm(int id)
        {
            var model = Db.Personel
              .FirstOrDefault(i => i.PersonelId == id);
            return PartialView(model);
        }

        [Yetki("Yeni Personel Kaydet", "Personel")]
        public JsonResult Kaydet(Personel personel)
        {
            if (personel.PersonelId != 0)
            {
                Db.Update(personel, "Parola", "Durum");
            }
            else
            {
                personel.Durum = true;
                Db.Personel.Add(personel);
            }

            Db.SaveChanges();
            var response = new Response();
            response.Success = true;
            response.Description = "İşlem başarıyla gerçekleşti";
            return Json(response);
        }
        public ActionResult Parola(int id)
        {
            return View(Db.Personel.Include("PersonelTip").FirstOrDefault(i => i.PersonelId == id));
        }

        [Yetki("Personel Parola Güncelle", "Personel")]
        public JsonResult ParolaGuncelle(Personel personel)
        {
            var p = Db.Personel.Find(personel.PersonelId);
            var response = new Response();
            if (p.Parola != personel.Parola)
            {
                response.Success = false;
                response.Description = "Mevcut Parola Hatalı";
                return Json(response);
            }

            p.Parola = personel.YeniParola;
            Db.SaveChanges();

            response.Success = true;
            response.Description = "Personel Parola Bilgileri Başarıyla Güncellendi";
            return Json(response);
        }

        [Yetki("Personel Durum Güncelle", "Personel")]
        public JsonResult DurumGuncelle(int id)
        {
            var response = new Response();
            var personel = Db.Personel.Find(id);

            personel.Durum = !personel.Durum;
            Db.SaveChanges();

            response.Success = true;
            response.Description = "Personel Durum Güncellendi";
            return Json(response);
        }
        public PartialViewResult YetkiForm(int id)
        {
            Assembly asm = Assembly.GetExecutingAssembly();

            var controlleractionlist = YetkiControlActionList();

            var kisitlamalar = Db.Kisitlama.ToList();

            foreach (var ca in controlleractionlist)
            {
                var kisitlama = kisitlamalar.FirstOrDefault(i => ca.NameSpace == i.NameSpace && ca.Controller == i.Controller && ca.Action == i.Action);
                if (kisitlama == null)
                {
                    var ks = new Kisitlama();
                    ks.Aciklama = ca.Attribute.GetType().GetProperty("Description").GetValue(ca.Attribute, null).ToString();
                    ks.Action = ca.Action;
                    ks.Adi = "";
                    ks.Controller = ca.Controller;
                    ks.Grup = ca.Attribute.GetType().GetProperty("Group").GetValue(ca.Attribute, null).ToString();
                    ks.NameSpace = ca.NameSpace;
                    Db.Kisitlama.Add(ks);
                }
                else
                {
                    kisitlama.Aciklama = ca.Attribute.GetType().GetProperty("Description").GetValue(ca.Attribute, null).ToString();
                    kisitlama.Grup = ca.Attribute.GetType().GetProperty("Group").GetValue(ca.Attribute, null).ToString();
                }
            }

            Db.SaveChanges();

            kisitlamalar = Db.Kisitlama.ToList();
            var personel = Db.Personel.Include("PersonelTip").FirstOrDefault(i => i.PersonelId == id);

            ViewBag.kisitlamalar = Db.Kisitlama.ToList();
            ViewBag.seciliKisitlamalar = Db.PersonelKisitlamaRelation.Where(i => i.PersonelId == id).Select(i => i.Kisitlama).ToList();

            return PartialView(personel);
        }

        [Yetki("Personel Yetkilendirmesi Kaydet", "Personel")]
        public JsonResult YetkiKaydet(int id, List<int> ids)
        {
            var response = new Response();
            try
            {
                Db.PersonelKisitlamaRelation.RemoveRange(Db.PersonelKisitlamaRelation.Where(i => i.PersonelId == id));
                if (ids != null)
                {
                    Db.PersonelKisitlamaRelation.AddRange(ids.Select(i => new PersonelKisitlamaRelation
                    {
                        KisitlamaId = i,
                        PersonelId = id,
                    }).ToList());
                }
                Db.SaveChanges();
                response.Success = true;
                response.Description = "İşlem başarıyla Gerçekleşti";
            }
            catch (Exception ex)
            {
                response.ex = ex;
                response.Success = true;
                response.Description = "İşlem başarıyla Gerçekleşti";

            }


            return Json(response);

        }
        public ActionResult ArayuzKisitlama(int id)
        {

            var personel = Db.Personel.Include("PersonelTip").FirstOrDefault(i => i.PersonelId == id);

            ViewBag.kisitlamalar = Db.ArayuzKisitlama.ToList();
            ViewBag.seciliKisitlamalar = Db.PersonelArayuzKisitlama.Where(i => i.PersonelId == id).Select(i => i.ArayuzKisitlama).ToList();

            return PartialView(personel);
        }
        public JsonResult ArayuzKisitlamaEkle(int id, List<int> ids)
        {
            var response = new Response();
            try
            {
                Db.PersonelArayuzKisitlama.RemoveRange(Db.PersonelArayuzKisitlama.Where(i => i.PersonelId == id));
                if (ids != null)
                {
                    Db.PersonelArayuzKisitlama.AddRange(ids.Select(i => new PersonelArayuzKisitlama
                    {
                        ArayuzKisitlamaId = i,
                        PersonelId = id
                    }).ToList());
                }
                Db.SaveChanges();
                response.Success = true;
                response.Description = "İşlem başarıyla Gerçekleşti";
            }
            catch (Exception ex)
            {
                response.ex = ex;
                response.Success = true;
                response.Description = "İşlem başarıyla Gerçekleşti";

            }


            return Json(response);

        }

        public PartialViewResult Form(int? id)
        {
            return PartialView(Db.Personel.Find(1));
        }

    }
}