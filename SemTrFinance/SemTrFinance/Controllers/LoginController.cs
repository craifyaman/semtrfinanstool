using SemTrFinance.Helper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace SemTrFinance.Controllers
{
    public class LoginController : Controller
    {
        //GET:Login
        public Db Db;

        public LoginController()
        {
            Db = new Db();
        }

        [AllowAnonymous]
        public ActionResult Index()
        {
            if (CookieHelper.Exists("UserName") && CookieHelper.Exists("Password"))
            {
                ViewBag.UserName = CookieHelper.Get("UserName");
                ViewBag.Password = CookieHelper.Get("Password");
                ViewBag.Remember = "checked";
            }
            return View();
        }

        [HttpGet]
        public ActionResult Login(string username, string password, string returnUrl,string remember="off")
        {
            var user = Db.Personel
                .Include("PersonelTip")
                .Include("PersonelArayuzKisitlama")
                .Include("PersonelKisitlamaRelation")
                .Include("PersonelKisitlamaRelation.Kisitlama")
                .FirstOrDefault(i => i.Eposta == username && i.Parola == password);

            if (user != null)
            {
                
                CookieHelper.Set("PersonelId", user.PersonelId.ToString(),1);
                if (remember=="on")
                {
                    CookieHelper.Set("UserName", username, DateTime.Now.AddYears(1));
                    CookieHelper.Set("Password", password, DateTime.Now.AddYears(1));
                }
                else
                {
                    CookieHelper.Delete("UserName");
                    CookieHelper.Delete("Password");
                }
               

                if (string.IsNullOrEmpty(returnUrl))
                {
                    return RedirectToAction("index", "home");
                }
                else
                {
                    return Redirect(returnUrl);
                }

            }
            else
            {
                return RedirectToAction("index", "login");

            }
        }

        public ActionResult Logout()
        {
            CookieHelper.Delete("PersonelId");
            return RedirectToAction("index", "login");
        }

        public void CreateCookie()
        {
            Response.Cookies["cookie"].Value = "cookie value";
            Response.Cookies["cookie"].Expires = DateTime.Now.AddMinutes(15);
        }
    }
}
