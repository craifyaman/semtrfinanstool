using SemTrFinance.Custom;
using SemTrFinance.Helper;
using System;
using System.Web.Mvc;

namespace SemTrFinance.Controllers
{
    public class HomeController : BaseController
    {
        [Menu("Anasayfa", "flaticon-squares", "Anasayfa", 1,1)]
        public ActionResult Index()
        {

            return View();
        }

    }
}