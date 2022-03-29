using SemTrFinance.Helper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.Mvc;

namespace SemTrFinance.Controllers
{
    public class TimerController : Controller
    {
        //GET: Timer
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
    }
}