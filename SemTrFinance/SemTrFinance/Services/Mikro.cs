using RestSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SemTrFinance.Services
{
    public class Mikro
    {
        private string baseUrl;
        public Mikro()
        {
            baseUrl = "http://89.207.13.56:400/api/Cari/HareketTipi";
        }

        public void Get()
        {
            var client = new RestClient("http://89.207.13.56:400/api/Cari/HareketTipi");
             
            var request = new RestRequest();
            request.Method = Method.Get;
            var response = client.ExecuteAsync(request);
            var a=response.Result.Content;
        }
    }
}