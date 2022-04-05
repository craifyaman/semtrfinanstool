using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Web;

namespace SemTrFinance
{
    public static class CustomExtensions
    {
        public static DateTime ConvertToDateTimeAmPm(this string val)
        {
            var dString = "";
            var parcalar = val.Split(' ');

            dString+=parcalar[0].Split('/').Aggregate((a, b) => a.PadLeft(2, '0') + "/" + b.PadLeft(2, '0'));
            dString += " ";

            dString += parcalar[1].Split(':').Aggregate((a, b) => a.PadLeft(2, '0') + ":" + b.PadLeft(2, '0'));
            dString += " ";
            dString += parcalar[2];

            var dt= DateTime.ParseExact(dString, "MM/dd/yyyy hh:mm:ss tt", CultureInfo.InvariantCulture);

            return dt;

        }
    }
}